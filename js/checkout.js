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
  
  const UppercaseTextEntry = (e) => {
    e.target.value = e.target.value.toUpperCase();
  }

  const billingFirstName = document.getElementById('billing_first_name');
  billingFirstName.setAttribute('maxlength', '30');
  billingFirstName.value = billingFirstName.value.toUpperCase();
  billingFirstName.oninput = UppercaseTextEntry;

  const billingLastName = document.getElementById('billing_last_name');
  billingLastName.setAttribute('maxlength', '30');
  billingLastName.value = billingLastName.value.toUpperCase();
  billingLastName.oninput = UppercaseTextEntry;
  
  const billingCompany = document.getElementById('billing_company');
  billingCompany.setAttribute('maxlength', '30');
  billingCompany.value = billingCompany.value.toUpperCase();
  billingCompany.oninput = UppercaseTextEntry;

  const billingAddress1 = document.getElementById('billing_address_1');
  billingAddress1.setAttribute('maxlength', '30');
  billingAddress1.value = billingAddress1.value.toUpperCase();
  billingAddress1.oninput = UppercaseTextEntry;

  const billingCity = document.getElementById('billing_city');
  billingCity.setAttribute('maxlength', '30');
  billingCity.value = billingCity.value.toUpperCase();
  billingCity.oninput = UppercaseTextEntry;

  const billingOrderComments = document.getElementById('order_comments');
  billingOrderComments.setAttribute('maxlength', '30');
  billingOrderComments.value = billingOrderComments.value.toUpperCase();
  billingOrderComments.oninput = UppercaseTextEntry;
  
  const shippingFirstName = document.getElementById('shipping_first_name');
  shippingFirstName.setAttribute('maxlength', '30');
  shippingFirstName.value = shippingFirstName.value.toUpperCase();
  shippingFirstName.oninput = UppercaseTextEntry;

  const shippingLastName = document.getElementById('shipping_last_name');
  shippingLastName.setAttribute('maxlength', '30');
  shippingLastName.value = shippingLastName.value.toUpperCase();
  shippingLastName.oninput = UppercaseTextEntry;

  const shippingCompany = document.getElementById('shipping_company');
  shippingCompany.setAttribute('maxlength', '30');
  shippingCompany.value = shippingCompany.value.toUpperCase();
  shippingCompany.oninput = UppercaseTextEntry;

  const shippingAddress1 = document.getElementById('shipping_address_1');
  shippingAddress1.setAttribute('maxlength', '30');
  shippingAddress1.value = shippingAddress1.value.toUpperCase();
  shippingAddress1.oninput = UppercaseTextEntry;

  const shippingCity = document.getElementById('shipping_city');
  shippingCity.setAttribute('maxlength', '30');
  shippingCity.value = shippingCity.value.toUpperCase();
  shippingCity.oninput = UppercaseTextEntry;

  const shippingOrderComments = document.getElementById('order_comments');
  shippingOrderComments.setAttribute('maxlength', '30');
  shippingOrderComments.value = shippingOrderComments.value.toUpperCase();
  shippingOrderComments.oninput = UppercaseTextEntry;

  setTimeout(() => {
    const buzzer = document.getElementById('billing_address_2');
    const email = document.getElementById('billing_email');
    const OrderComment = document.getElementById('order_comments');

    if (lang == 'en-US') {
      buzzer.placeholder = "Buzzer (optional)";
      OrderComment.placeholder = "Notes about your order (30 characters maximum)";
      billingAddress1.placeholder = "House number & street name (No PO Box)";
    } else {
      buzzer.placeholder = "Code d'entrée (facultative)";
      email.placeholder = "Nom d’utilisateur ou adresse courriel *";
      OrderComment.placeholder = "Notes concernant votre commande (30 caractères maximum)";
      billingAddress1.placeholder = "Numéro de voie&nom de la rue (No PO Box)";
    }
  }, 10);

});