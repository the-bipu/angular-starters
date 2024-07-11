import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'contact-component', component: ContactComponent },
    { path: 'about-component', component: AboutComponent },
];
