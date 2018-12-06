import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import { ResumeRoutingModule } from './resume-routing.module';


@NgModule({
    declarations: [
        ResumeEditComponent
    ],
    imports: [
        CommonModule,
        ResumeRoutingModule,
        SharedModule
    ],
    exports: [
        ResumeEditComponent,
        ResumeRoutingModule,
        SharedModule
    ],
    providers: []
})

export class ResumeModule { }