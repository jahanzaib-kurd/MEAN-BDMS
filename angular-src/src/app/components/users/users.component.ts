import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Object;
  selectedUser :Object;
  displayedColumns = ['username', 'name', 'email', 'active','actions'];
  dataSource: MatTableDataSource<Object>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngAfterViewInit() {

  }
  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        },
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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onDeleteUser(id)
  {
    return false;
  }
}
