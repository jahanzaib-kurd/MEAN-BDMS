import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../../services/users.service';
import { PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() user: Object;
  emailPattern: RegExp;
  namePattern: RegExp;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
    this.emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,20})$/;
  }

  getUser() {
    const id = this.route.snapshot.params['id'];
    this.usersService.getUser(id)
      .subscribe(res => this.user = res.user);
  }

}
