import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './appRouting';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetilasComponent } from './movie-detilas/movie-detilas.component';
import { ChartsComponent } from './charts/charts.component';
import { ParentComponent } from './sharedComponents/parent/parent.component';
import { ChildComponent } from './sharedComponents/child/child.component';
import { SharedComponent } from './sharedComponents/shared.component';
import { TokenInterceptor } from './services/token.interceptor';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignInComponent,
    HomeComponent,
    MoviesComponent,
    MovieDetilasComponent,
    ChartsComponent,
    SharedComponent,
    ParentComponent,
    ChildComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
