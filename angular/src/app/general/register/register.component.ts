import { Component } from '@angular/core';
import { UtilityService } from '../../core/services/utility.service';

const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent {
    emailValidOrNot: boolean;
    passwordValidOrNot: boolean;
    confirmPasswordValidOrNot: boolean;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    constructor(private utility: UtilityService) {
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.emailValidOrNot = true;
        this.passwordValidOrNot = true;
        this.confirmPasswordValidOrNot = true;
    }
    enableEmailError() {
        this.emailValidOrNot = false;
    }
    enablePasswordError() {
        this.passwordValidOrNot = false;
    }
    enableConfirmPasswordError() {
        this.confirmPasswordValidOrNot = false;
    }
    validateEmail() {
        if (!email_regex.test(this.email)) {
            this.emailValidOrNot = false;
            console.log('invalid');
        } else {
            this.emailValidOrNot = true;
            console.log('valid');
        }
    }
    validatePassword() {
        if (!password_regex.test(this.password)) {
            this.passwordValidOrNot = false;
            console.log("not");
        } else {
            this.passwordValidOrNot = true;
            console.log("yes");
        }
        this.validateConfirmPassword();
    }
    validateConfirmPassword() {
        if (this.password === this.confirmPassword) {
            this.confirmPasswordValidOrNot = true;
        } else {
            this.confirmPasswordValidOrNot = false;
        }
    }
    register() {
        if(this.name.length === 0 || this.email.length === 0 || this.password.length === 0 || this.confirmPassword.length === 0) {
            this.utility.notify(false, "Don't leave any fields empty!", "OK");
        }
    }
}
