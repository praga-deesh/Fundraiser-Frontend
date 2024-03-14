import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DonorLoginComponent } from './components/donor-login/donor-login.component';
import { DonorSignUpComponent } from './components/donor-sign-up/donor-sign-up.component';
import { FundraiserLoginComponent } from './components/fundraiser-login/fundraiser-login.component';
import { FundraiserSignUpComponent } from './components/fundraiser-sign-up/fundraiser-sign-up.component';
import { ProfileGuardGuard } from './gaurds/profile-guard.guard';
import { DonorProfileComponent } from './components/donor-profile/donor-profile.component';
import { FundraiserProfileComponent } from './components/fundraiser-profile/fundraiser-profile.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    // { path: 'profile', component: ProfileComponent },
    {path:'donor-login',component:DonorLoginComponent},
    {path:'donor-sign-up',component:DonorSignUpComponent},
    {path:'fundraiser-login',component:FundraiserLoginComponent},
    {path:'fundraiser-sign-up',component:FundraiserSignUpComponent},

    { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuardGuard] },
    { path: 'donor-profile', component: DonorProfileComponent },
    { path: 'fundraiser-profile', component: FundraiserProfileComponent },
    { path: '**', component: PageNotFoundComponent }
];
