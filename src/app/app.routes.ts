import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
=======
import { DonorLoginComponent } from './components/donor-login/donor-login.component';
import { DonorSignUpComponent } from './components/donor-sign-up/donor-sign-up.component';
>>>>>>> main

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'profile', component: ProfileComponent },
<<<<<<< HEAD
    { path: 'login', component: LoginComponent },
    { path: 'add-comment', component: AddCommentComponent},
    
=======
    {path:'donor-login',component:DonorLoginComponent},
    {path:'donor-sign-up',component:DonorSignUpComponent},
>>>>>>> main
    { path: '**', component: PageNotFoundComponent }
];
