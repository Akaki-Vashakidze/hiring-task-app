import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Todo } from '../../interfaces/todos.interface';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit, OnDestroy {
  userId!: string;
  userTodos!: Todo[];
  private routeSub!: Subscription;

  constructor(private route: ActivatedRoute, public _sharedService: SharedService) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId')!;
      this._sharedService.getAllTodos().subscribe(todos => {
        if(this.userId) {
          this.userTodos = todos.filter(item => item.userId == JSON.parse(this.userId))
        } else {
          this.userTodos = todos
        }
      });
      console.log('User ID:', this.userId);
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}

