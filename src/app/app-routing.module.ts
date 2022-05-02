import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListCompComponent } from './Components/list-comp/list-comp.component';
import { PersonCompComponent } from './Components/person-comp/person-comp.component';

const routes: Routes = [
  {path:'' ,  redirectTo:'home', pathMatch:'full'},
  {path: 'home', pathMatch: 'full', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
