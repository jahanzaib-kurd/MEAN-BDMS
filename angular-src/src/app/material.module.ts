import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSnackBarModule, MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule } from '@angular/material';
@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSnackBarModule, MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSnackBarModule, MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule]
})

export class MaterialModule { }