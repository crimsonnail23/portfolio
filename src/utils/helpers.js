export function validateEmail(email) {
    var regexEmailValidator = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    return regexEmailValidator.test(String(email).toLowerCase());
}