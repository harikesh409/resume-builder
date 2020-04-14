import { Injectable, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UtilityService {
    constructor(public snackBar: MatSnackBar) { }
    /**
     * Notifys utility service to open a snackbar with given message and action
     * @param message Message to display in the snackbar
     * @param action Button on the snackbar
     */
    notify(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }
}
