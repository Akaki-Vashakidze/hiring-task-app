import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { interval, startWith, map } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule,MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  currentDateTime!: Date; 
  ngOnInit() {
    interval(1000).pipe(
      startWith(0),
      map(() => new Date())
    ).subscribe(date => {
      this.currentDateTime = date;
    });
  }
}