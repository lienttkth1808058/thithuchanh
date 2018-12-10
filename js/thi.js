var btnSubmit = document.forms['register-form']['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        doRegister();
    }
}
function doRegister() {
    var _fullname = document.forms['register-form']['fullname'].value;
    var _email = document.forms['register-form']['email'].value
    var _phone = document.forms['register-form']['phone'].value;
    var _gender = document.forms['register-form']['gender'].value;

    var registerInformation = {
        fullname: _fullname,
        email: _email,
        phone: _phone,
        gender: _gender
    };

    var jsonRegisterInformation = JSON.stringify(registerInformation);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            var response
            alert('Register success!');
        } else if (xhr.readyState == 4) {
            alert('Register fails, please try again! ' + xhr.responseText);
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-001.appspot.com/_api/v2/members', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(jsonRegisterInformation);
}

function validateForm() {
    var isValid = true;
    var isValidFirstName = true;
    var isValidAddress = true;
    var isValidPhone = true;
    var isValidAvatar = true;
    var isValidEmail = true;

    var txtFirstName = document.forms['register-form']['fullName'];
    var msgFirstName = txtFirstName.nextElementSibling;
    if (txtFirstName.value == null || txtFirstName.value.length == 0) {
        msgFirstName.classList.remove('msg-success');
        msgFirstName.classList.add('msg-error');
        msgFirstName.innerHTML = 'First name is required!';
        isValidFirstName = false;
    } else {
        msgFirstName.classList.remove('msg-error');
        msgFirstName.classList.add('msg-success')msgFirstName.innerHTML = '';
    }



    var msgaddress = txtaddress.nextElementSibling;
    if (txtaddress.value == null || txtaddress.value.length == 0) {
        msgaddress.classList.remove('msg-success');
        msgaddress.classList.add('msg-error');
        msgaddress.innerHTML = 'Address is required!';
        isValidAddress = false;
    } else {
        msgaddress.classList.remove('msg-error');
        msgaddress.classList.add('msg-success');
        msgaddress.innerHTML = '';
    }
    var txtphone = document.forms['register-form']['phone'];
    var msgphone = txtphone.nextElementSibling;
    if (txtphone.value == null || txtphone.value.length == 0) {
        msgphone.classList.remove('msg-success');
        msgphone.classList.add('msg-error');
        msgphone.innerHTML = 'Phone is required!';
        isValidPhone = false;
    } else {
        msgphone.classList.remove('msg-error');
        msgphone.classList.add('msg-success');
        msgphone.innerHTML = '';
    }
    var msgavatar = txtavatar.nextElementSibling;
    if (txtavatar.value == null || txtavatar.value.length == 0) {
        msgavatar.classList.remove('msg-success');
        msgavatar.classList.add('msg-error');
        msgavatar.innerHTML = 'Avatar is required!';
        isValidAvatar = false;
    } else {
        msgavatar.classList.remove('msg-error');
        msgavatar.classList.add('msg-success');
        msgavatar.innerHTML = '';
    }

    var txtemail = document.forms['register-form']['email'];
    var msgemail = txtemail.nextElementSibling;
    if (txtemail.value == null || txtemail.value.length == 0) {
        msgemail.classList.remove('msg-success');
        msgemail.classList.add('msg-error');
        msgemail.innerHTML = 'Email is required!';
        isValidEmail = false;
    } else {
        msgemail.classList.remove('msg-error');
        msgemail.classList.add('msg-success');
        msgemail.innerHTML = '';
    }
    isValid = isValidFirstName && isValidLastName && isValidPassword && isValidConfirmPassword && isValidEmail && isValidAvatar && isValidPhone && isValidAddress;
    return isValid;
}