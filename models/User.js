const validator = require("validator");

let User = function(data) {
    this.data = data;
    this.errors = [];
}

User.prototype.cleanUp = function() {
    if (typeof(this.data.username != "string")) {this.data.username = "";};
    if (typeof(this.data.password != "string")) {this.data.password = "";};
    if (typeof(this.data.email != "string")) {this.data.email = "";};

    // get rid of bogus properties

    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    }
    
}

User.prototype.validate = function() {
    if (this.data.username == "") {
        this.errors.push("You must provide a username");
    }

    if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {
        this.errors.push("Username must be alpha numeric")
    }

    if (!validator.isEmail(this.data.email)) {
        this.errors.push("You must provide a valid email address");
    }
    if (this.data.password == "") {
        this.errors.push("You must provide a password");
    }
    if (this.data.password.length > 0 && this.data.password.length < 12) {
        this.errors.push("Password must be atleast 12 character long")}
    if (this.data.password.length > 100) {
        this.errors.push("Password cannot exceed 100 characters")}
    if (this.data.username.length > 0 && this.data.username.length < 3) {
        this.errors.push("Username must be atleast 3 character long")}
    if (this.data.username.length > 30) {
        this.errors.push("Username cannot exceed 30 characters")}
}

User.prototype.register = function() {

    this.cleanUp();
    this.validate();
    // step 1 validate user data.

    // step 2: only if there are no validation erros
    // Then save the user data into a database.
}

module.exports = User;