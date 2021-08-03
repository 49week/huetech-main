<?php 

//부모 스타일 불러오기
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

/*페이지에서 빈 p태그 방지*/
function remove_empty_p(){
	if(is_page()){
		remove_filter('the_content', 'wpautop');
	}
}
add_action('wp_head', 'remove_empty_p');

function define_customlogo() {
	add_theme_support( 'custom-logo', array(
			'width'       => 202,
			'height'      => 48,
	) );
}
add_action( 'after_setup_theme', 'define_customlogo', 11 );

function twentynineteen_dequeue_scripts() {
	wp_dequeue_script( 'twentynineteen-priority-menu' );
	wp_deregister_script( 'twentynineteen-priority-menu' );
	wp_dequeue_script( 'twentynineteen-touch-navigation' );
	wp_deregister_script( 'twentynineteen-touch-navigation' );
}
add_action( 'wp_print_scripts', 'twentynineteen_dequeue_scripts', 100 );

//include ('submenu-nav.php');

function single_des(){
	global $product;
	$sails = $product->get_sale_price();
	echo '<div class="saile-price">'.$sails.'</div>';
}

add_action("woocommerce_after_shop_loop_item_title", "single_des");


// require 'inc/storefront-functions.php';
// require 'inc/storefront-template-hooks.php';
// require 'inc/storefront-template-functions.php';
// require 'inc/wordpress-shims.php';
include("cmb2_trait.php");






function add_image_sizes() {
    add_image_size( 'homepage_first_block', 1903, 600, true );
}
add_action( 'init', 'add_image_sizes' );

function pebbo_sidebar() {
    register_sidebar(
        array (
            'name' => __( 'Left sidebar' ),
            'id' => 'left-side-bar',
            'description' => __( 'Left Sidebar' ),
            'before_widget' => '<div class="widget-content left-sidebar"><div class="inline-search"><input type="text" name="inline-s" placeholder="Search name or SKU" /></div>',
            'after_widget' => "</div>",
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );
}
add_action( 'widgets_init', 'pebbo_sidebar' );
add_action( 'woocommerce_before_shop_loop', 'add_pebbo_shop_wrapper',2);
add_action( 'woocommerce_after_shop_loop', 'add_pebbo_shop_wrapper_end',99);
function add_pebbo_shop_wrapper(){
    echo '<div class="shop-products">';
        add_pebbo_sidebar();
    echo '<div class="products">';
}
function add_pebbo_shop_wrapper_end(){
    echo '</div></div>';
}
function add_pebbo_sidebar(){
    if ( is_active_sidebar( 'left-side-bar' ) ) :
        dynamic_sidebar( 'left-side-bar' );
    endif;
}

add_action('wp_footer', 'add_shop_popup_in_footer');
function add_shop_popup_in_footer(){
    $general_settings = cmb2_get_option( 'cm-options', 'general_group', true );
    $brand_popup = 0;
    if ( !empty( $general_settings[0]['shop_popup'] ) ) {
        $brand_popup = $general_settings[0]['shop_popup'];
    }
    if ($brand_popup !== 0) {
        echo do_shortcode('[popup_anything id="'.$brand_popup.'"]');
    }
}

function pebbo_placeholder($type = '') {
    $path = get_template_directory_uri() . '/assets/images/placeholder/';

    if($type == 'wide') return $path . 'placeholder-wide.png';

    return $path . 'placeholder.png';
}


add_action( 'woocommerce_check_cart_items', 'mandatory_coupon_for_specific_items' );
function mandatory_coupon_for_specific_items() {
    $products = wc_get_products(['limit'    => 100]);
    $targeted_ids = [];
    foreach ($products as $product) {
        array_push($targeted_ids, $product->get_id());
    }
    $coupon_code    = 'Early_Access_Code'; 

    $coupon_applied = in_array( strtolower($coupon_code), WC()->cart->get_applied_coupons() );

    foreach(WC()->cart->get_cart() as $cart_item ) {
        if( in_array( $cart_item['product_id'], $targeted_ids ) && ! $coupon_applied ) {
            wc_clear_notices();

            wc_add_notice( 'Please enter your Early Access Code below to checkout', 'error' );
            break; 
        }
    }
}

// require 'inc/cmb/init.php';
// require 'inc/membership-functions.php';
include('product_function.php');
// require 'inc/registration_form.php';
// include('brand_function.php');
// require 'inc/min_max_functions.php';
// require 'inc/search.php';
include('login_form.php');
// require 'inc/pebbo_nav_walkners.php';
// require 'inc/faq_posts.php';
// require 'inc/woocommerce/class-filter.php';
// require 'inc/early_access/ea_main.php';