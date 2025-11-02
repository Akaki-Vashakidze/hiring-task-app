import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lucky-wheel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lucky-wheel.component.html',
  styleUrls: ['./lucky-wheel.component.scss'],
  animations: [
    trigger('spin', [
      state('idle', style({ transform: 'rotate({{rotation}}deg)' }), { params: { rotation: 0 } }),
      state('spinning', style({ transform: 'rotate({{rotation}}deg)' }), { params: { rotation: 360 } }),
      transition('idle => spinning', animate('4s ease-out'))
    ])
  ]
})
export class LuckyWheelComponent {
  state: 'idle' | 'spinning' = 'idle';
  luckyNumber: string = '';
  numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  rotation: number = 0;
  action: 'spin' | 'refresh' = 'spin';
  numbersDegrees = [ 
    { number: 1, degree: 7 * 36 },
    { number: 2, degree: 6 * 36  },
    { number: 3, degree: 5 * 36  },    
    { number: 4, degree: 4 * 36  },
    { number: 5, degree: 3 * 36  },
    { number: 6, degree: 2 * 36  },
    { number: 7, degree: 1 * 36  },
    { number: 8, degree: 0 * 36  },
    { number: 9, degree: 9 * 36  },
    { number: 10, degree: 8 * 36  }
  ]

spin() {
  if (this.state === 'spinning') return;

  const luckyIndex = this.numbers.indexOf(+this.luckyNumber);
  if (luckyIndex === -1) {
    alert('Enter a valid number!');
    return;
  }
  this.action = 'refresh';
  const segmentAngle = 360 / this.numbers.length;
  const fullSpins = Math.floor(Math.random() * 7) + 3;
  const targetDegree = this.numbersDegrees[luckyIndex].degree + Math.random() * segmentAngle;

  this.rotation = fullSpins * 360 + targetDegree;

  this.state = 'spinning';

  setTimeout(() => {
    this.state = 'idle';
  }, 4000); 
}

refresh(){
  this.action = 'spin'
  this.luckyNumber = '';
  this.rotation = 0;
  this.state = 'idle';
}
}