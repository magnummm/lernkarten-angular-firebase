import { Component, OnInit } from '@angular/core';
import { LearningCard } from 'app/learning-card/learning-card';
import { SelfRating } from 'enum/SelfRating';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  activeLearningCard!: LearningCard;

  learningCards: LearningCard[] = [
    {
      question: 'Frage 1',
      answer: 'Antwort 1',
    },
    {
      question: 'Frage 2',
      answer: 'Antwort 2',
    },
    {
      question: 'Frage 3',
      answer: 'Antwort 3',
    },
    {
      question: 'Frage 4',
      answer: 'Antwort 4',
    },
    {
      question: 'Frage 5',
      answer: 'Antwort 5',
    },
  ];

  

  constructor() {}

  ngOnInit() {
    // this.loadCard();
  }

  loadCard() {
    this.activeLearningCard =
      this.learningCards[Math.floor(Math.random() * this.learningCards.length)];
  }

  receiveSelfRating(event:any){
    this.loadCard()

  }
}
