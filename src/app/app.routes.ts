import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DonorLoginComponent } from './components/donor-login/donor-login.component';
import { DonorSignUpComponent } from './components/donor-sign-up/donor-sign-up.component';
import { ProfileGuardGuard } from './guards/profile-guard.guard';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { DonorProfileComponent } from './components/donor-profile/donor-profile.component';
import { FundraiserProfileComponent } from './components/fundraiser-profile/fundraiser-profile.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    // { path: 'profile', component: ProfileComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuardGuard] },
    { path: 'donor-profile', component: DonorProfileComponent },
    { path: 'fundraiser-profile', component: FundraiserProfileComponent },
    { path: 'add-comment', component: AddCommentComponent },

    { path: 'donor-login', component: DonorLoginComponent },
    { path: 'donor-sign-up', component: DonorSignUpComponent },
    { path: '**', component: PageNotFoundComponent }
];

