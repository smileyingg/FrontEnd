import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule,Routes} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-route.module';
import { KoreaComponent } from './components/korea/korea.component';
import { InterComponent } from './components/inter/inter.component'
import { LoginService } from './services/login.service' 
import { MusicService } from './services/music.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    KoreaComponent,
    InterComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
