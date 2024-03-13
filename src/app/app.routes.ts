import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';


import { AddCommentComponent } from './components/add-comment/add-comment.component';

import { DonorLoginComponent } from './components/donor-login/donor-login.component';
import { DonorSignUpComponent } from './components/donor-sign-up/donor-sign-up.component';
import { DonorProfileComponent } from './components/donor-profile/donor-profile.component';
import { ProfileGuardGuard } from './guards/profile-guard.guard';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    // { path: 'profile', component: ProfileComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuardGuard] },



    { path: 'add-comment', component: AddCommentComponent },

    { path: 'donor-profile', component: DonorProfileComponent },
    { path: 'donor-login', component: DonorLoginComponent },
    { path: 'donor-sign-up', component: DonorSignUpComponent },

    { path: '**', component: PageNotFoundComponent }
];
