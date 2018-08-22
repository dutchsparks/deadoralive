import {Component, ViewChild, ElementRef, OnChanges, SimpleChanges, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnChanges, OnInit {

@Input() alive: boolean;
@ViewChild('health')
health: ElementRef;

  constructor() { }


  ngOnChanges(changes: SimpleChanges) {
console.log('changes!');
      if (this.alive) {
          this.health.nativeElement.textContent = 'Alive';
      } else if (!this.alive) {
          this.health.nativeElement.textContent = 'Fainted';
      }
  }

  ngOnInit () {
      console.log(this.alive);
    }

  knockout () {
    this.alive = !this.alive;
      console.log(this.alive);

  }
}
