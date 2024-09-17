import { Routes } from '@angular/router';
import { HomeComponent } from './main-module/home/home.component';
import { ContactComponent } from './main-module/contact/contact.component';
import { ServicesComponent } from './main-module/services/services.component';
import { LoginComponent } from './main-module/login/login.component';
import { HomeClientComponent } from './client-module/home-client/home-client.component';
import { ServiceClientComponent } from './client-module/service-client/service-client.component';
import { ProfileClientComponent } from './client-module/profile-client/profile-client.component';
import { HeaderComponent } from './main-module/header/header.component';
import { HeaderClientComponent } from './client-module/header-client/header-client.component';
import { AuthGuard } from './auth';

export const routes: Routes = [
    {
        path: 'main', component: HeaderComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'login', component: LoginComponent },
        ]
    },
    
    {
      path: 'client', component: HeaderClientComponent,
      canActivate: [AuthGuard],
      children: [
        { path: 'home-client', component: HomeClientComponent },
        { path: 'service-client', component: ServiceClientComponent },
        { path: 'profile-client', component: ProfileClientComponent },
      ]
    },
    { path: '', redirectTo: 'main/home', pathMatch: 'full' },
    { path: '**', redirectTo: 'main/home', pathMatch: 'full' },

];
