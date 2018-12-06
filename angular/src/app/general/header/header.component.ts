import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    constructor(private router: Router) {

    }
    gotoHome() {
        this.router.navigate(['/home']);
    }
    gotoLogin() {
        this.router.navigate(['/login']);
    }
    gotoRegister() {
        this.router.navigate(['/register']);
    }
    gotoResume() {
        this.router.navigate(['/resume']);
    }
}
