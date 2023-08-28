import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ColorsComponent } from './colors/colors.component';

const routes: Routes = [
    {
        path: 'heroes', 
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/colors',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'new',
        component: HeroFormComponent
    },
    {
        path: 'colors',
        component: ColorsComponent
    }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
