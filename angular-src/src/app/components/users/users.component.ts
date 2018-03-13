import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Object;
  selectedUser :Object;
  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(res => { this.users = res.users; },
        err => {
          return false;
        });
  }

  onEditUser(id){
    console.log(id);
    this.usersService.getUser(id)
    .subscribe(res => this.selectedUser = res.user);
    return false;
  }
}
