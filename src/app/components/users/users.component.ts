import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedService } from '../../services/shared.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../interfaces/users.interface';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  standalone: true,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [CommonModule, MatTableModule, MatIconModule, MatMenuModule, MatButtonModule, MatPaginatorModule, MatInputModule, MatFormFieldModule],
})
export class UsersComponent {
  displayedColumns = ['name', 'username', 'phone', 'email' , 'company', 'actions'];
  dataSource!: MatTableDataSource<User>;
  name = 'Angular 5';
  options = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _sharedService: SharedService, public _router:Router) {
    this._sharedService.getUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  viewPosts(user: User) {
    this._router.navigate(['/posts/' + user.id])
  }

  viewTodos(user: User) {
    this._router.navigate(['/todos/' + user.id])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
