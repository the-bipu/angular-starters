import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component: AboutComponent },
];
