import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatDividerModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSnackBarModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressBarModule,
        MatDividerModule,
        MatTooltipModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSnackBarModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressBarModule,
        MatDividerModule,
        MatTooltipModule
    ]
})

export class MaterialModule { }