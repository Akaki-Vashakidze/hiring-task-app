import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Post } from '../../interfaces/posts.interface';

@Component({
  selector: 'app-post-details-popup',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './post-details-popup.component.html',
  styleUrl: './post-details-popup.component.scss'
})
export class PostDetailsPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Post,
    private dialogRef: MatDialogRef<PostDetailsPopupComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}
