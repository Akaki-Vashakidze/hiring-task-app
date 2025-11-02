import { Component } from '@angular/core';
import { LuckyWheelComponent } from "../lucky-wheel/lucky-wheel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promotions',
  imports: [CommonModule,LuckyWheelComponent],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {

}
