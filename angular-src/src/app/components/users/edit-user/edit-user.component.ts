import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../../services/users.service';
import { PatternValidator } from '@angular/forms';
import { ValidateService } from '../../../services/validate.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() user: Object;
  @Output() onEditUserCancel = new  EventEmitter<boolean>();
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
  }

  onEditUserSubmit(user) {
    console.log("edit submitted");
  }
  EditUserCancel() {
    this.user = null;
    this.onEditUserCancel.emit(true);
    return false;
  }
}
