<?php
class BrandFunc {
    protected static $instance;
    use CMB2Trait;
    public function __construct()
    {
        add_filter( 'pwb_html_before_brands_links', [$this,'html_before_brand_links'], 10 );
        add_filter( 'get_term_metadata', [$this,'get_metadata'],99,5);

        //add_action('woocommerce_after_shop_loop_item_title', array($this, 'show_brands_in_loop'));
        add_action('woocommerce_after_shop_loop_item_title',[$this,'add_wrapper_to_prod'],15);
        add_action('woocommerce_after_shop_loop_item',[$this,'show_brands_in_loop'],99);
        add_action('woocommerce_single_product_summary', [$this, 'action_woocommerce_single_product_summary'], 6);

        add_action('wp_ajax_get_brand_info',[$this,'get_brand_info']);
        add_action('wp_ajax_nopriv_get_brand_info',[$this,'get_brand_info']);
    }

    public function get_metadata($value, $object_id, $meta_key, $single, $meta_type) {
        global $wpdb;
        if ($meta_key == 'pwb_brand_image') {
            $res = $wpdb->get_var("SELECT `meta_value` FROM {$wpdb->termmeta} WHERE `term_id` = {$object_id} AND `meta_key` = '{$meta_key}'");
            if ($res) {
                return $value;
            } else {
                return 8;
            }
        }
        return $value;
    }

    public function add_wrapper_to_prod(){
        $class = '';
        if (is_product_category() || is_shop()) {
            $class = ' category-prod-wrapper';
        }
        echo '<div class="product-btn-wrapper'.$class.'">';
    }

    public function show_brands_in_loop()
    {
        global $product;
        $product_id = $product->get_id();
        $product_brands = wp_get_post_terms($product_id, 'pwb-brand');
        if (!empty($product_brands)) {
            echo '<div class="pwb-brands-in-loop">';
            foreach ($product_brands as $brand) {
                echo '<span>';
                $brand_link = get_term_link($brand->term_id, 'pwb-brand');
                echo '<a href="' . $brand_link . '">By ' . $brand->name . '</a>';
                echo '</span>';
            }
            echo '</div>';
        }
        do_action('after_brands_in_loop');
        echo '</div>';
    }

    public function action_woocommerce_single_product_summary(){
        $brands = wp_get_post_terms(get_the_ID(), 'pwb-brand');
        $brand_popup = $this->getThemeOptions('brand_popup');
        if (!$brand_popup) {
            $brand_popup = 0;
        }
        if (!is_wp_error($brands)) {

            if (sizeof($brands) > 0) {
                do_action('pwb_before_single_product_brands', $brands);

                echo '<div class="brand-row"><div class="pwb-single-product-brands pwb-clearfix">';

                foreach ($brands as $brand) {
                    $popup = do_shortcode('[popup_anything id="'.$brand_popup.'"]');
                    echo str_replace('data-target','data-brand="'.$brand->term_id.'" data-target',str_replace('Brand popup',$brand->name,$popup));
                }
                echo '</div>';

                do_action('pwb_after_single_product_brands', $brands);
                echo '</div>';
            }
        }
    }

    public function get_brand_info(){
        if (isset($_POST['brand'])) {
            $brand = get_term($_POST['brand']);
            if ($brand) {
                $html = '<h3 class="brand-title"><a href="'.get_term_link((int)$brand->term_id,'pwb-brand').'">'.$brand->name.'</a></h3>';

                $image = get_term_meta($brand->term_id, 'pwb_brand_image', true);
                $image = wp_get_attachment_image_src($image, 'full');

                $banner = get_term_meta($brand->term_id, 'pwb_brand_banner', true);
                $banner = wp_get_attachment_image_src($banner, 'full');
                if ($banner) {
                    $html .= '<div class="brand-banner"><img src="'.$banner[0].'" />';
                    if ($image) {
                        $html .= '<div class="brand-image"><img src="'.$image[0].'" /></div>';
                    }
                    $html .= '</div>';
                }
                $html .= '<div class="brand-description">'.$brand->description.'</div><div class="read-more"><a href="'.get_term_link((int)$brand->term_id,'pwb-brand').'">Read more</a></div>';

                echo json_encode(['html' => $html]);
            }
        }
        exit();
    }

    public function html_before_brand_links($text){
        return '';
    }

    public static function get_instance()
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}
BrandFunc::get_instance();