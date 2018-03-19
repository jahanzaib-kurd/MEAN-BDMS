import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {
  private defaultDuration: number;
  private defaulthorizontalPosition: any;
  private defaultverticalPosition: any;
  constructor(
    private snackbar: MatSnackBar
  ) {
    this.defaultDuration = 5000; //5 Seconds
    this.defaulthorizontalPosition = "right";
    this.defaultverticalPosition = "bottom";
  }

  showMessage(msg: string, duration?: number, horizontalPosition?: any, verticalPosition?: any) {
    this.snackbar.open(msg, '', {
      duration: (duration || this.defaultDuration),
      horizontalPosition: (horizontalPosition || this.defaulthorizontalPosition),
      verticalPosition: (verticalPosition || this.defaultverticalPosition)
    });
  }
}
