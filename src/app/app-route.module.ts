import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { KoreaComponent } from './components/korea/korea.component';
import { InterComponent} from './components/inter/inter.component';

const routes: Routes = [
    { path: '', pathMatch: 'full' ,component: HomeComponent},
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'login', component: LoginComponent},
    { path: 'korea', component: KoreaComponent},
    { path: 'inter' , component: InterComponent}

    // { path: '**', component: PageNotFoundComponent, data: { title: 'Page not found' } },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }