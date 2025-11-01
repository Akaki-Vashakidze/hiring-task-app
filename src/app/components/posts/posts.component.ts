import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Post } from '../../interfaces/posts.interface';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  userId!: string;
  userPosts!:Post[];
  private routeSub!: Subscription;

  constructor(private route: ActivatedRoute, public _sharedService: SharedService) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId')!;
      this._sharedService.getAllPosts().subscribe(posts => {
        this.userPosts = posts.filter(item => item.userId == JSON.parse(this.userId))
        console.log(this.userPosts)
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
