import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExecBiosComponent } from './exec-bios/exec-bios.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';

const routes: Routes = [
    { path: '',  component: HomeComponent },
    { path: '#who-we-are', component: HomeComponent},
    { path: '#join-beta-sig', component: HomeComponent},
    { path: '#presidents-corner',  component: HomeComponent },
    { path: 'exec-bios', component: ExecBiosComponent },
    { path: 'gallery',  component: GalleryComponent },
    { path: 'scholarships', component: ScholarshipsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
