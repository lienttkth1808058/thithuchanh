var btnSubmit = document.forms['register-form']['btn-submit'];
btnSubmit.onclick = function () {
    var _firstName = document.forms['register-form']['firstName'].value;
    var _lastName = document.forms['register-form']['lastName'].value;
    var _password = document.forms['register-form']['password'].value;
    // var _confirmpassword =document.forms['register-form']['confirmpassword'].value;
    var _address = document.forms['register-form']['address'].value;
    var _phone = document.forms['register-form']['phone'].value;
    var _avatar = document.forms['register-form']['avatar'].value;
    var _gender = document.forms['register-form']['gender'].value;
    var _email =document.forms['register-form']['email'].value;
    var _brithday = '2000-05-13';
    var registerInformation = {
        firstName: _firstName,
        lastName: _lastName,
        password:_password,
        // cofirmpassword:_confirmpassword,
        address:_address,
        phone:_phone,
        avatar:_avatar,
        gender:_gender,
        email:_email,
        brithday:_brithday
    };
    var sendData = JSON.stringify(registerInformation);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            alert('Register success!');
            document.forms['register-form'].reset();
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/members', true);
    xhr.setRequestHeader("Content-Type",'application/json');
    xhr.send(sendData);
};