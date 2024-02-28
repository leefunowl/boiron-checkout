<?php
/**
 * Plugin Name:     Boiron - modify checkout process
 * Plugin URI:      https://leefun.us/
 * Description:     Updates related to checkout process
 * Author:          Leefun
 * Author URI:      https://leefun.us/
 * Text Domain:     boiron-checkout
 * Domain Path:     /languages
 * Version:         0.0.3
 *
 * @package         boiron-checkout
 */
 
function boiron_enqueue_css_js() {
	if (is_checkout()) {
		wp_register_style( 'checkout-stylesheet', plugins_url( 'css/checkout.css', __FILE__ ) );
		wp_enqueue_style( 'checkout-stylesheet' );
		wp_enqueue_script( 'checkout-js', plugins_url( 'js/checkout.js', __FILE__ ));
	}
}
add_action( 'wp_enqueue_scripts', 'boiron_enqueue_css_js' );

//  add phone extension field
add_filter( 'woocommerce_checkout_fields' , 'leefun_add_phone_extension_field' );
function leefun_add_phone_extension_field( $fields ) {
		$fields['billing']['billing_phone_extension'] = array(
				'label'     => ('en' == apply_filters( 'wpml_current_language', null )) ? __('Extension', 'woocommerce') : __('Extension', 'woocommerce'),
				'placeholder'     => ('en' == apply_filters( 'wpml_current_language', null )) ? _x('Extension', 'placeholder', 'woocommerce') : _x('Extension', 'placeholder', 'woocommerce'),
				'required'  => false,
				'class'     => array('form-row-wide'),
				'clear'     => true,
				'type'      => 'tel',
				'maxlength' => 4,
		);

		return $fields;
}

// Sample request
add_action('woocommerce_before_order_notes', 'boiron_sample_request_field');
function boiron_sample_request_field( $checkout ) {
	if (is_page('checkout')) {
		$checkout_page_id = get_the_ID();
		$acf_product_1_name = get_post_meta($checkout_page_id, 'product_1_name');
		$acf_product_1_sku = get_post_meta($checkout_page_id, 'product_1_sku');
		$acf_product_2_name = get_post_meta($checkout_page_id, 'product_2_name');
		$acf_product_2_sku = get_post_meta($checkout_page_id, 'product_2_sku');
		$acf_product_3_name = get_post_meta($checkout_page_id, 'product_3_name');
		$acf_product_3_sku = get_post_meta($checkout_page_id, 'product_3_sku');
		$acf_product_4_name = get_post_meta($checkout_page_id, 'product_4_name');
		$acf_product_4_sku = get_post_meta($checkout_page_id, 'product_4_sku');
						
		echo '<h3>'.__('Request sample').'</h3>';
		
		woocommerce_form_field( 'sample_request', array(
				'type'          => 'select',
				'label'         => __( '' ),
				'options'       => array(
					''		=> __( 'Select a sample product', 'boiron' ),
					$acf_product_1_sku[0] => __( $acf_product_1_name[0], 'boiron' ),
					$acf_product_2_sku[0] => __( $acf_product_2_name[0], 'boiron' ),
					$acf_product_3_sku[0] => __( $acf_product_3_name[0], 'boiron' ),
					$acf_product_4_sku[0] => __( $acf_product_4_name[0], 'boiron' ),
				)
	 	),
	
		$checkout->get_value( 'sample_request' ));
	}
}

add_action('woocommerce_checkout_update_order_meta', 'boiron_sample_request_field_update_order_meta');
function boiron_sample_request_field_update_order_meta( $order_id ) {
	if ($_POST['sample_request']) update_post_meta( $order_id, 'sample_request', esc_attr($_POST['sample_request']));
}

//* Display field value on the order edition page
add_action( 'woocommerce_admin_order_data_after_billing_address', 'boiron_sample_request_field_display_admin_order_meta', 10, 1 );
function boiron_sample_request_field_display_admin_order_meta($order){
	echo '<p><strong>'.__('Request sample').':</strong> ' . get_post_meta( $order->id, 'sample_request', true ) . '</p>';
}

//* Add selection field value to emails
add_filter('woocommerce_email_order_meta_keys', 'boiron_sample_request_order_meta_keys');
function boiron_sample_request_order_meta_keys( $keys ) {
	$keys['sample_request'] = 'sample_request';
	return $keys;
}

// Inject regular price into order meta for promo products
function add_order_item_meta($item_id, $values) { 
  $item_data = $values->get_data();

	if (array_key_exists("product_id", $item_data)) {
		$product_id = $item_data['product_id']; 
		$variation_id = $item_data['variation_id']; 
		$product_id = $variation_id > 0 ? $variation_id : $product_id; 
		$product = wc_get_product($product_id);

		if ($product->get_sale_price()) {
			wc_add_order_item_meta( $item_id, "_regular_price", $product->get_regular_price()); 
		}
		
	}
	
} 
add_action('woocommerce_new_order_item', 'add_order_item_meta', 10, 2);