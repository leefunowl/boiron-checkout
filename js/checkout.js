document.addEventListener('DOMContentLoaded', () => {  
  const lang = document.documentElement.lang;
  
  const BillPhone = document.getElementById('billing_phone');
  BillPhone.setAttribute('maxlength', '10');
  const SanitizePhoneNumber = (e) => {
      let _value = e.target.value;
      _value = _value.replace(/[^0-9]+/g, '');
      BillPhone.value = _value;
  }
  BillPhone.addEventListener('input', SanitizePhoneNumber);
  
  const BillPhoneExtension = document.getElementById('billing_phone_extension');
  const SanitizePhoneExtensionNumber = (e) => {
      let _value = e.target.value;
      _value = _value.replace(/[^0-9]+/g, '');
      BillPhoneExtension.value = _value;
  }
  BillPhoneExtension.addEventListener('input', SanitizePhoneExtensionNumber);

  const PhoneRootNode = document.getElementById('billing_phone_field');
  const ExtensionRootNode = document.getElementById('billing_phone_extension_field');
  PhoneRootNode.parentNode.insertBefore(ExtensionRootNode, PhoneRootNode.nextSibling);

  const billingFirstName = document.getElementById('billing_first_name');
  billingFirstName.setAttribute('maxlength', '30');
  billingFirstName.setAttribute('style', 'text-transform: uppercase');
  const billingLastName = document.getElementById('billing_last_name');
  billingLastName.setAttribute('maxlength', '30');
  billingLastName.setAttribute('style', 'text-transform: uppercase');
  const billingCompany = document.getElementById('billing_company');
  billingCompany.setAttribute('maxlength', '30');
  billingCompany.setAttribute('style', 'text-transform: uppercase');
  const billingAddress1 = document.getElementById('billing_address_1');
  billingAddress1.setAttribute('maxlength', '30');
  billingAddress1.setAttribute('style', 'text-transform: uppercase');
  const billingCity = document.getElementById('billing_city');
  billingCity.setAttribute('maxlength', '30');
  billingCity.setAttribute('style', 'text-transform: uppercase');
  const billingOrderComments = document.getElementById('order_comments');
  billingOrderComments.setAttribute('maxlength', '30');
  billingOrderComments.setAttribute('style', 'text-transform: uppercase');
  
  const shippingFirstName = document.getElementById('shipping_first_name');
  shippingFirstName.setAttribute('maxlength', '30');
  shippingFirstName.setAttribute('style', 'text-transform: uppercase');
  const shippingLastName = document.getElementById('shipping_last_name');
  shippingLastName.setAttribute('maxlength', '30');
  shippingLastName.setAttribute('style', 'text-transform: uppercase');
  const shippingCompany = document.getElementById('shipping_company');
  shippingCompany.setAttribute('maxlength', '30');
  shippingCompany.setAttribute('style', 'text-transform: uppercase');
  const shippingAddress1 = document.getElementById('shipping_address_1');
  shippingAddress1.setAttribute('maxlength', '30');
  shippingAddress1.setAttribute('style', 'text-transform: uppercase');
  const shippingCity = document.getElementById('shipping_city');
  shippingCity.setAttribute('maxlength', '30');
  shippingCity.setAttribute('style', 'text-transform: uppercase');
  const shippingOrderComments = document.getElementById('order_comments');
  shippingOrderComments.setAttribute('maxlength', '30');
  shippingOrderComments.setAttribute('style', 'text-transform: uppercase');

  setTimeout(() => {
    const buzzer = document.getElementById('billing_address_2');
    const email = document.getElementById('billing_email');
    if (lang == 'en-US') {
      buzzer.placeholder = "Buzzer (optional)";
    } else {
      buzzer.placeholder = "Code d'entrée (facultative)";
      email.placeholder = "Nom d’utilisateur ou adresse courriel *";
    }
  }, 10);

});