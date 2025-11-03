import { Component } from '@angular/core';
import { LuckyWheelComponent } from "../lucky-wheel/lucky-wheel.component";
import { CommonModule } from '@angular/common';
import { LeaderBoardComponent } from "../leader-board/leader-board.component";

@Component({
  selector: 'app-promotions',
  imports: [CommonModule, LuckyWheelComponent, LeaderBoardComponent],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {

}
