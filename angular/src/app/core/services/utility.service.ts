import { Injectable, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UtilityService {
    constructor(public snackBar: MatSnackBar) { }
    notify(status: boolean, message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }
}
