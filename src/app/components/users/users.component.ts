import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { User } from '../../interfaces/users.interface';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [CommonModule]
})
export class UsersComponent {
  users$: Observable<User[]>;

  constructor(private sharedService: SharedService) {
    this.users$ = this.sharedService.getUsers();
  }
}
