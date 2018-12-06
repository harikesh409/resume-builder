import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ResumeEditComponent } from './resume-edit/resume-edit.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'edit',
        pathMatch: 'full'
    },
    { path: 'edit', component: ResumeEditComponent },
    { path: '**', redirectTo: 'resume', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class ResumeRoutingModule { }