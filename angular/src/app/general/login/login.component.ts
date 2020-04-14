import { Component } from '@angular/core';
import { UtilityService } from '../../core/services/utility.service';

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    validOrNot: Boolean;
    email: string;
    password: string;
    constructor( private utility: UtilityService ) {
        this.validOrNot = true;
        this.email = '';
        this.password = '';
    }
    enableError() {
        this.validOrNot = false;
    }
    validateEmail() {
        if (!re.test(this.email)) {
            this.validOrNot = false;
            console.log('invalid');
        } else {
            this.validOrNot = true;
            console.log('valid');
        }
    }
    login() {
        this.utility.notify("Invalid credentials", "Try again");
    }
}
