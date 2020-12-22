import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateExpensesComponent } from './update-expenses/update-expenses.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyCyFdE2jKkATt9Twb38TUMNqKX1B-akkkc',
  authDomain: 'mypersonalbudget-b480b.firebaseapp.com',
  databaseURL: 'https://mypersonalbudget-b480b-default-rtdb.firebaseio.com/',
  storageBucket: 'mypersonalbudget-b480b.appspot.com',
  messagingSenderId: '795045326976'
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    MembersComponent,
    HomeComponent,
    ExpensesComponent,
    VisualizationComponent,
    AddExpensesComponent,
    UpdateExpensesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService, HttpClientModule, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

