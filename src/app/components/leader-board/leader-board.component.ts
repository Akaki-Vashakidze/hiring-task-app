import { Component } from '@angular/core';
import { LeaderBoardObj } from '../../interfaces/lieaderBoardObj';
import { Week } from '../../enums/week';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leader-board',
  imports: [CommonModule],
  templateUrl: './leader-board.component.html',
  styleUrl: './leader-board.component.scss'
})
export class LeaderBoardComponent {
selectedWeek: string = 'All';
activeFilter: string = 'All';
filterItems: { value: string; viewValue: string }[] = [
  { value: 'All', viewValue: 'All' },
  { value: Week.Week1, viewValue: 'I' },
  { value: Week.Week2, viewValue: 'II' },
  { value: Week.Week3, viewValue: 'III' },
  { value: Week.Week4, viewValue: 'IV' }
];
leaderboardData: LeaderBoardObj[] = [
  { customerId: 1, loginName: 'swimMaster', place: 1, week: Week.Week1 },
  { customerId: 2, loginName: 'fastDiver', place: 2, week: Week.Week1 },
  { customerId: 3, loginName: 'waveRider', place: 3, week: Week.Week3 },
  { customerId: 4, loginName: 'aquaChamp', place: 4, week: Week.Week1 },
  { customerId: 5, loginName: 'deepBlue', place: 5, week: Week.Week1 },
  { customerId: 6, loginName: 'swiftStroke', place: 1, week: Week.Week2 },
  { customerId: 7, loginName: 'seaLion', place: 2, week: Week.Week2 },
  { customerId: 8, loginName: 'oceanDreamer', place: 3, week: Week.Week2 },
  { customerId: 9, loginName: 'hydroHero', place: 4, week: Week.Week2 },
  { customerId: 10, loginName: 'bubbleKing', place: 5, week: Week.Week2 },
  { customerId: 11, loginName: 'streamQueen', place: 1, week: Week.Week3 },
  { customerId: 12, loginName: 'poolWizard', place: 2, week: Week.Week3 },
  { customerId: 13, loginName: 'splashMaster', place: 3, week: Week.Week3 },
  { customerId: 14, loginName: 'finFighter', place: 4, week: Week.Week3 },
  { customerId: 15, loginName: 'currentCrusher', place: 5, week: Week.Week3 },
  { customerId: 16, loginName: 'liquidBolt', place: 1, week: Week.Week4 },
  { customerId: 17, loginName: 'tideBreaker', place: 2, week: Week.Week4 },
  { customerId: 18, loginName: 'floatKing', place: 3, week: Week.Week4 },
  { customerId: 19, loginName: 'waveHunter', place: 4, week: Week.Week4 },
  { customerId: 20, loginName: 'laneLancer', place: 5, week: Week.Week4 },
  { customerId: 21, loginName: 'foamStriker', place: 1, week: Week.Week1 },
  { customerId: 22, loginName: 'backstrokeBeast', place: 2, week: Week.Week1 },
  { customerId: 23, loginName: 'freestyleFox', place: 3, week: Week.Week2 },
  { customerId: 24, loginName: 'flipTurner', place: 4, week: Week.Week2 },
  { customerId: 25, loginName: 'hydraHero', place: 5, week: Week.Week2 },
  { customerId: 26, loginName: 'butterFlyer', place: 1, week: Week.Week3 },
  { customerId: 27, loginName: 'streamlineStar', place: 2, week: Week.Week3 },
  { customerId: 28, loginName: 'waterPanther', place: 3, week: Week.Week4 },
  { customerId: 29, loginName: 'rapidRay', place: 4, week: Week.Week4 },
  { customerId: 30, loginName: 'coolCurrent', place: 5, week: Week.Week4 }
];
leaderboardDataFiltered: LeaderBoardObj[] = this.leaderboardData;

onFilterItems(value:{ value: string; viewValue: string }){
    this.activeFilter = value.viewValue;
    console.log(this.activeFilter)
    this.leaderboardDataFiltered = this.leaderboardData.filter(item => {
      if(value.value === 'All'){
        return true;
      }
      return item.week === value.value;
    });
}

}
