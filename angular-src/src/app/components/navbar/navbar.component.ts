import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";
import { SnackbarService } from '../../services/snackbar.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: SnackbarService
  ) { }

  ngOnInit() {
  }
  onLogoutClick() {
    this.authService.logOut();
    this.snackBar.showMessage('user Logged out');
    this.router.navigate(['/login']);
    return false;
  }
}