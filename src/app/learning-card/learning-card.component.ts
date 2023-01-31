import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelfRating } from 'enum/SelfRating';
import { LearningCard } from './learning-card';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Database, set, ref, update } from '@angular/fire/database';

@Component({
  selector: 'app-learning-card',
  templateUrl: './learning-card.component.html',
  styleUrls: ['./learning-card.component.scss']
})
export class LearningCardComponent implements OnInit {

  @Input() learningCard!: LearningCard;
  @Output() selfRatingOut=new EventEmitter<SelfRating>;


  answerShown=false;
  selfRating=SelfRating;

  constructor() { 

  }

  ngOnInit(): void {
  }

  showAnswer(){
    this.answerShown=true;
  }

  sendSelfRating(selfRating:SelfRating){
    this.selfRatingOut.emit(selfRating);
    this.answerShown=false;
  }

  
 
}
