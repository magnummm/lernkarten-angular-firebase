import { Component, OnInit } from '@angular/core';
import { LearningCard } from 'app/learning-card/learning-card';
import { AuthService } from 'app/services/auth.service';
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
      question: '1+1?',
      answer: '2',
    },
    {
      id: 2,
      question: '13%2',
      answer: '1',
    },
    {
      id: 3,
      question: 'Eine Deklaration von "( )" steht für was in der .html? ',
      answer: 'Output - wird nach aussen zur Verfügung gestellt & kommt zurück',
    },
    {
      id: 4,
      question: 'Eine Deklaration von "[ ]" steht für was in der .html?',
      answer: 'Input - füllt die jeweilige Komponente',
    },
    {
      id: 5,
      question: '"...folder" bedeutet?',
      answer: 'Nimm den folder und sei durch Attribute erweiterbar',
    },
    {
      id: 6,
      question: 'Interpolations gekennzeichnet durch "{{ }}" werden in welcher Komponente verwendet?',
      answer: 'In der html Komponente',
    },
    {
      id: 7,
      question: 'Wofür stehen Interpolations in der html "{{ }}"?',
      answer: 'Datentransfer vom Typescript Code zur View (Html Component)',
    },
    {
      id: 8,
      question: 'Was sollte sich im Constructor befinden?',
      answer: 'Services',
    },
    {
      id: 9,
      question: 'Was steht in @NgModule einer .ts unter providers?',
      answer: 'Services und Values für die Dependency Injection',
    },
    {
      id: 10,
      question: 'Wofür steht das Ausrufezeichen hinter einer Variablen in der .ts?',
      answer: 'Warte noch, der Wert kommt später',
    },
    {
      id: 11,
      question: 'Frage 11',
      answer: 'Antwort 11',
    },
    {
      id: 12,
      question: 'Was steht in @NgModule einer .ts unter imports?',
      answer: 'Modules',
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
      question: 'Was steht in @NgModule einer .ts unter declarations?',
      answer: 'Components',
    },
  ];

  randomLearningCards: LearningCard[] = [];

  numberOfRandomCards = 10;

  activeLearningCard!: LearningCard;

  activeLearningCardIndex = 0;

  constructor(private authService: AuthService) { }

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


  signOutUser() {
    this.authService.signOutUser();
   }
}
