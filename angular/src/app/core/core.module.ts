import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityService } from './services/utility.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [
        UtilityService
    ]
})
export class CoreModule {}