import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
    { path: '',  component: HomeComponent },
    { path: '#who-we-are', component: HomeComponent},
    { path: '#join-beta-sig', component: HomeComponent},
    { path: '#presidents-corner',  component: HomeComponent },
    { path: 'gallery',  component: GalleryComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
