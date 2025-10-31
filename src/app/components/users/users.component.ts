import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedService } from '../../services/shared.service';
import { User } from '../../interfaces/users.interface';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  standalone: true,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
})
export class UsersComponent {
  users$: Observable<User[]>;
  dataSource = new MatTableDataSource<User>();

  displayedColumns: string[] = ['name', 'username', 'phone', 'email', 'company', 'posts'];

  constructor(private sharedService: SharedService) {
    this.users$ = this.sharedService.getUsers();

    this.users$.subscribe(users => {
      this.dataSource.data = users;
    });
  }

  onActionClick(userId: number) {
    console.log('User ID clicked:', userId);
  }
}
