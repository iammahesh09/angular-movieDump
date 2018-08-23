import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MenuComponent } from './menu/menu.component';
import { MoviesComponent } from './movies/movies.component';

const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movies', component: MoviesComponent }
]

const appRouters: Routes = [
    { path: '', component: MenuComponent, canActivate: [AuthGuard], children: childRoutes },
    { path: 'sign-in', component: SignInComponent },
    { path: '**', redirectTo: '/' }
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRouters)
    ],
    exports: [RouterModule]

})

export class AppRoutingModule {

}
