import { Component, Input, OnInit } from '@angular/core';
import { LearningCard } from './learning-card';

@Component({
  selector: 'app-learning-card',
  templateUrl: './learning-card.component.html',
  styleUrls: ['./learning-card.component.scss']
})
export class LearningCardComponent implements OnInit {

  @Input() learningCard!: LearningCard
  constructor() { 

  }

  ngOnInit(): void {
  }
 
}
