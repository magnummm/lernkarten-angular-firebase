import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameComponent } from './game/game.component';
import { LearningCardComponent } from './learning-card/learning-card.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
  path:'',
  component: LoginComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'game',
  component: GameComponent
},
{
  path:'learning',
  component: LearningCardComponent
},
{
  path:'**',
  pathMatch: 'full',
  redirectTo: ''
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
