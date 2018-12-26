import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ViewTaskComponent } from './ViewTask/ViewTask.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
    NavMenuComponent,
    AddtaskComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ViewTaskComponent, pathMatch: 'full' },
      { path: 'addtask', component: AddtaskComponent },
      { path: 'edittask', component: EdittaskComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
