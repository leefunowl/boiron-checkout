<?php
/**
 * Plugin Name:     Boiron - modify checkout process
 * Plugin URI:      https://leefun.us/
 * Description:     Updates related to checkout process
 * Author:          Leefun
 * Author URI:      https://leefun.us/
 * Text Domain:     boiron-checkout
 * Domain Path:     /languages
 * Version:         0.0.2
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