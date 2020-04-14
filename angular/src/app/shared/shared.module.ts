import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatSnackBarModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule
  ]
})
export class SharedModule {}
