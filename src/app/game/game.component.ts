import { Component, OnInit } from '@angular/core';
import { LearningCard } from 'app/learning-card/learning-card';
import { SelfRating } from 'enum/SelfRating';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {


  learningCards: LearningCard[] = [
    {
      id: 1,
      question: 'Frage 1',
      answer: 'Antwort 1',
    },
    {
      id: 2,
      question: 'Frage 2',
      answer: 'Antwort 2',
    },
    {
      id: 3,
      question: 'Frage 3',
      answer: 'Antwort 3',
    },
    {
      id: 4,
      question: 'Frage 4',
      answer: 'Antwort 4',
    },
    {
      id: 5,
      question: 'Frage 5',
      answer: 'Antwort 5',
    },
    {
      id: 6,
      question: 'Frage 6',
      answer: 'Antwort 6',
    },
    {
      id: 7,
      question: 'Frage 7',
      answer: 'Antwort 7',
    },
    {
      id: 8,
      question: 'Frage 8',
      answer: 'Antwort 8',
    },
    {
      id: 9,
      question: 'Frage 9',
      answer: 'Antwort 9',
    },
    {
      id: 10,
      question: 'Frage 10',
      answer: 'Antwort 10',
    },
    {
      id: 11,
      question: 'Frage 11',
      answer: 'Antwort 11',
    },
    {
      id: 12,
      question: 'Frage 12',
      answer: 'Antwort 12',
    },
    {
      id: 13,
      question: 'Frage 13',
      answer: 'Antwort 13',
    },
    {
      id: 14,
      question: 'Frage 14',
      answer: 'Antwort 14',
    },
    {
      id: 15,
      question: 'Frage 15',
      answer: 'Antwort 15',
    },
  ];

  randomLearningCards: LearningCard[] = [];

  numberOfRandomCards = 10;

  activeLearningCard!: LearningCard;

  activeLearningCardIndex = 0;

  constructor() { }

  ngOnInit() {
    // this.loadCard();
  }

  loadCards() {
    while (this.randomLearningCards.length < this.numberOfRandomCards) {
      const randomCard = this.learningCards[Math.floor(Math.random() * this.learningCards.length)];
      const index = this.randomLearningCards.findIndex(learningCard => learningCard.id === randomCard.id);
      if (index == -1) this.randomLearningCards.push(randomCard);
    }
    // initial die erste Karte aufrufen
    this.setActiveLearningCard();
  }

  setActiveLearningCard() {
    this.activeLearningCard =
      this.randomLearningCards[this.activeLearningCardIndex];
  }

  receiveSelfRating(event: any) {
    // TODO: Statistik-Zeug....
    this.activeLearningCardIndex++;
    this.setActiveLearningCard();
  }
}
