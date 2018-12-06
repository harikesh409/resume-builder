import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomepageComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [],
    exports: [
        HeaderComponent,
        HomepageComponent,
        FooterComponent,
        LoginComponent,
        RegisterComponent
    ]
})

export class GeneralModule { }
