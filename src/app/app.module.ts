import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevDetailComponent } from './dev-detail/dev-detail.component';
import { DevsComponent } from './devs/devs.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DevsComponent,
    DevDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'first-app'}),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
