<?php

class ProductFunctions
{
    protected static $instance;

    public function __construct()
    {
        add_action( 'woocommerce_product_options_general_product_data', [$this,'add_additional_field'] );
        add_action( 'woocommerce_process_product_meta', [$this,'save_additional_field'] );
        //add_action('after_price_wrapper',[$this,'add_case_size_to_single'],30);
        add_action('woocommerce_single_product_summary',[$this,'show_case_size'],11);
        add_action('woocommerce_single_product_summary',[$this,'show_wishlist_button'],12);
        add_action('woocommerce_after_single_product_summary',[$this,'show_yotpo_comments'],13);
        add_action('wp_enqueue_scripts', [$this,'enqueue_cart_qty_ajax']);
        add_action('wp_ajax_qty_cart', [$this,'ajax_qty_cart']);
        add_action('wp_ajax_nopriv_qty_cart', [$this,'ajax_qty_cart']);
        add_action('wp_ajax_set_rating', [$this,'set_rating']);
        add_action('wp_ajax_nopriv_set_rating', [$this,'set_rating']);
        add_action( 'admin_enqueue_scripts', [$this, 'admin_scripts'] );

        add_filter('woocommerce_product_single_add_to_cart_text',[$this,'single_add_to_cart_text'],1,10);
        add_filter('woocommerce_product_description_heading'.[$this,'clear_tab_header'],1,10);
        add_filter('woocommerce_product_additional_information_heading'.[$this,'clear_tab_header'],1,10);
        add_filter( 'woocommerce_loop_add_to_cart_link',[$this,'add_to_cart_tag'],1,999 );
        add_filter( 'woocommerce_product_add_to_cart_text',[$this,'add_to_cart_text'],1,999 );

        add_filter( 'woocommerce_product_tabs', [$this,'video_tab'] );
        add_filter( 'woocommerce_product_additional_information_tab_title', [$this,'additional_information_tab_title'] );

        add_filter( 'woobt_product_qty', [$this,'change_woobt_product_qty'],3,99);

        add_filter('woocommerce_quantity_input_args', [$this,'wc_mmax_quantity_input_args'], 10, 3);
        add_filter('tinvwl_wishlist_header_title',[$this,'remove_text'],99);

        remove_filter( 'woocommerce_loop_add_to_cart_link','_wcmmax_add2cart' );

        remove_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open' );
        remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close' );
        remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title' );
    }

    public function set_rating(){
        if (isset($_POST['prod']) && isset($_POST['rating'])) {
            $prod = intval($_POST['prod']);
            $rating = intval($_POST['rating']);
            update_post_meta($prod,'_y_rating',$rating);
        }
    }

    public function change_woobt_product_qty($item_product_qty, $item_qty, $item_product) {
        $product_id = $item_product->get_id();
        $case_size = get_post_meta($product_id, '_case_size', true);
        $mmaxEnable = get_post_meta($product_id, '_wc_mmax_prd_opt_enable', true);
        $minQty     = get_post_meta($product_id, '_wc_mmax_min', true);
        if ($mmaxEnable && $minQty < $case_size) {
            $minQty = $case_size;
        }
        return str_replace($item_qty,$minQty,$item_product_qty);
    }

    public function admin_scripts($hook){
        if ( 'post.php' != $hook ) {
            return;
        }
        wp_enqueue_script( 'change_price_on_product', THEME_PATH_URL . '/assets/js/admin/product.js', array(), '1.0' );
    }

    public function remove_text($text){
        return '';
    }

    public function ajax_qty_cart() {

        // Set item key as the hash found in input.qty's name
        $cart_item_key = $_POST['hash'];

        // Get the array of values owned by the product we're updating
        $threeball_product_values = WC()->cart->get_cart_item( $cart_item_key );

        // Get the quantity of the item in the cart
        $threeball_product_quantity = apply_filters( 'woocommerce_stock_amount_cart_item', apply_filters( 'woocommerce_stock_amount', preg_replace( "/[^0-9\.]/", '', filter_var($_POST['quantity'], FILTER_SANITIZE_NUMBER_INT)) ), $cart_item_key );

        // Update cart validation
        $passed_validation  = apply_filters( 'woocommerce_update_cart_validation', true, $cart_item_key, $threeball_product_values, $threeball_product_quantity );

        // Update the quantity of the item in the cart
        if ( $passed_validation ) {
            WC()->cart->set_quantity( $cart_item_key, $threeball_product_quantity, true );
        }

        // Refresh the page
        echo do_shortcode( '[woocommerce_cart]' );

        die();
    }

    public function enqueue_cart_qty_ajax() {
        wp_register_script( 'cart-qty-ajax-js', get_template_directory_uri() . '/assets/js/cart-qty-ajax.js', array( 'jquery' ), '', true );
        wp_localize_script( 'cart-qty-ajax-js', 'cart_qty_ajax', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
        wp_enqueue_script( 'cart-qty-ajax-js' );
    }

    public function wc_mmax_quantity_input_args($args, $product)
    {
        if(function_exists('icl_object_id')) {
            $default_language = wpml_get_default_language();
            $prodid = icl_object_id($product->get_id(), 'product', true, $default_language);
        } else {
            $prodid = $product->get_id();
        }
        $case_size = get_post_meta($prodid, '_case_size', true);
        $mmaxEnable = get_post_meta($prodid, '_wc_mmax_prd_opt_enable', true);
        $minQty     = get_post_meta($prodid, '_wc_mmax_min', true);
        $maxQty     = get_post_meta($prodid, '_wc_mmax_max', true);
        if ($minQty > 0 && $maxQty > 0 && $mmaxEnable == 1) {
            $args['min_value'] = $minQty; // Starting value
            $args['max_value'] = $maxQty; // Ending value
            $args['step'] = ($case_size) ? $case_size : 1; // Increase by value
        }
        return $args;

    }

    public function add_to_cart_text($text){
        return __('Add to cart','pebbo');
    }

    public function additional_information_tab_title($title){
        return __('Ingredients','pebbo');
    }

    public function video_tab($tabs){
        global $product;
        if ($product) {
            $video = get_post_meta($product->get_id(),'_video_href',true);
            if ($video) {
                array_unshift($tabs, array(
                    'title'     => __( 'Overview', 'child-theme' ),
                    'priority'  => 0,
                    'callback'  => [$this,'video_tab_callback']
                ));
            }
        }
        return $tabs;
    }

    public function video_tab_callback(){
        global $product;
        if ($product) {
            $video = get_post_meta($product->get_id(), '_video_href', true);
            if ($video) {
                $video = explode('/',$video);
                $str = end($video);
                $str = explode('?v=',$str);
                if (count($str) > 1) {
                    $str = end($str);
                } else {
                    $str = $str[0];
                }
                echo '<iframe class="product-video-frame" width="100%" height="315" src="https://www.youtube.com/embed/'.$str.'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            }
        }
    }

    public function show_yotpo_comments(){
        wc_yotpo_show_widget();
    }

    public function add_to_cart_tag($text) {
        global $product;
        $product_id = $product->get_id();
        $product_sku = $product->get_sku();
        $product_type = $product->get_type();
        $qtylink = '';
        $mmaxEnable = get_post_meta( $product_id, '_wc_mmax_prd_opt_enable', true );
        $minQty     = get_post_meta( $product_id, '_wc_mmax_min', true );
        $case_size = get_post_meta($product->get_id(), '_case_size', true);
        $quantity = 1;
        if ($mmaxEnable) {
            $quantity = max($minQty,$case_size);
        } else {
            $quantity = $case_size;
        }

        if ( $product_type != 'simple' || $mmaxEnable != 1 ){
            return $link;
        }
        $qtylink = '&quantity='.$minQty;
        $ajax_cart_en = 'yes' === get_option( 'woocommerce_enable_ajax_add_to_cart' );
        if ( $ajax_cart_en && $product_type !='variable' ) { //solution by @tigerrockmartialarts https://wordpress.org/support/topic/add-to-cart-on-variable-products/
            $ajax_class = 'ajax_add_to_cart';
        }
        if ($product->is_purchasable()) {
            $link = sprintf('<a href="%s" rel="nofollow" data-product_id="%s" data-product_sku="%s" data-quantity="%s" class="button %s product_type_%s %s">%s</a>',
                esc_url($product->add_to_cart_url() . $qtylink),
                esc_attr($product_id),
                esc_attr($product->get_sku()),
                esc_attr($quantity),
                $product->is_purchasable() && $product->is_in_stock() ? 'add_to_cart_button' : '',
                esc_attr($product->product_type),
                esc_attr($ajax_class),
                esc_html($product->add_to_cart_text())
            );
        } else {
            $link = '';
        }
        return $link;
    }

    public function show_wishlist_button(){
        echo do_shortcode('[ti_wishlists_addtowishlist]');
    }

    public function clear_tab_header($h){
        return '';
    }

    public function single_add_to_cart_text($text){
        return __('Add to cart','pebbo');
    }

    public function show_case_size(){
        global $product;
        $case_size = get_post_meta($product->get_id(),'_case_size',true);
        if ($case_size) {
            echo '<div class="product-size">'.__('Case size','pebbo').' '.$case_size.'</div>';
        }
    }

    public function save_additional_field($post_id){
        $product = wc_get_product( $post_id );
        $size = isset( $_POST['_case_size'] ) ? $_POST['_case_size'] : 0;
        $product->update_meta_data( '_case_size', sanitize_text_field( $size ) );
        $size = isset( $_POST['_video_href'] ) ? $_POST['_video_href'] : '';
        $product->update_meta_data( '_video_href', sanitize_text_field( $size ) );
        $product->save();
    }

    public function add_additional_field(){
        $args = array(
            'id' => '_case_size',
            'label' => __('Case Size'),
            'class' => 'case-size',
        );
        woocommerce_wp_text_input($args);
        $args = array(
            'id' => '_video_href',
            'label' => __('Video link'),
            'class' => 'video-href',
        );
        woocommerce_wp_text_input($args);
    }

    public function add_case_size_to_single($text) {
        global $product;
        if ($product && is_single()) {
            $case_size = get_post_meta($product->get_id(),'_case_size',true);
            if ($case_size && !empty($case_size)) {
               return $text.'<div class="case-size">'.__('Case size: ').$case_size.'</div>';
            }
        }
        return $text;
    }

    public static function get_instance()
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}
ProductFunctions::get_instance();