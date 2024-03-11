import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DonorLoginComponent } from './components/donor-login/donor-login.component';
import { DonorSignUpComponent } from './components/donor-sign-up/donor-sign-up.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'profile', component: ProfileComponent },
    {path:'donor-login',component:DonorLoginComponent},
    {path:'donor-sign-up',component:DonorSignUpComponent},
    { path: '**', component: PageNotFoundComponent }
];
