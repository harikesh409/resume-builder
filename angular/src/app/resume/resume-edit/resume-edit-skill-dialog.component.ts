import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface skillData {
    skillCategory: string;
    graphType: string;
    skillName: string;
    skillLevel: string;
}
@Component({
    selector: 'addnewskill-dialog',
    templateUrl: 'resume-edit-skill-dialog.component.html',
})

export class addNewSkillDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<addNewSkillDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: skillData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}