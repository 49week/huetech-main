<?php
class LoginForm {
    protected static $instance;

    public function __construct()
    {
        add_action( 'template_redirect', [$this,'redirect_from_cart'] );

        add_action( 'wp_login_failed', [$this,'front_end_login_fail'] );

        add_shortcode('pebbo_login_form',[$this,'login_form']);
    }

    public function front_end_login_fail( $user ) {
        $referrer = $_SERVER['HTTP_REFERER'];
        if ( !empty( $referrer ) && !strstr( $referrer,'wp-login' ) && !strstr( $referrer,'wp-admin' ) ) {
            $referrer = esc_url( '/login-page/' );
            $error_types = array_keys($user->errors);
            $error_type = 'both_empty';
            if (is_array($error_types) && !empty($error_types)) {
                $error_type = $error_types[0];
            }
            wp_redirect( $referrer . '?login=failed&reason=' . $error_type );
            exit;
        }
    }

    public function redirect_from_cart() {
        if (is_cart() && !is_user_logged_in()) {
            wp_redirect('login-page');
            die();
        }
    }

    public function login_form(){
        $redirect_to = home_url();
        ?>
            <div class="pebbo-login-form">
                <form name="loginform" id="loginform" action="<?php echo site_url( '/wp-login.php' ); ?>" method="post">
                    <p class="input-wrap input-name"><input id="user_login" type="text" size="20" value="" name="log" placeholder="Email"></p>
                    <p class="input-wrap input-password"><input id="user_pass" type="password" size="20" value="" name="pwd" placeholder="Password"><span class="passwd-toggle"><i class="icon-eye"></i></span></p>
                    <p class="checkbox-wrap"><input id="rememberme" type="checkbox" value="forever" name="rememberme"> Remember me</p>

                    <p class="btn-wrap"><input id="wp-submit" type="submit" value="Login" name="wp-submit" class="btn button-black"></p>

                    <input type="hidden" value="<?php echo esc_attr( $redirect_to ); ?>" name="redirect_to">
                    <p class="lost_password">
                        <a href="<?php echo esc_url( wp_lostpassword_url() ); ?>"><?php esc_html_e( 'Lost your password?', 'woocommerce' ); ?></a>
                    </p>
                </form>
            </div>

    <?php
    }

    public static function get_instance()
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}
LoginForm::get_instance();