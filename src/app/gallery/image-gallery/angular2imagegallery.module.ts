import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ImageService} from "./services/image.service";
import {GalleryComponent} from "./gallery/gallery.component";
import {ViewerComponent} from "./viewer/viewer.component";
import {SafePipe} from "./safe.pipe";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    GalleryComponent,
    ViewerComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [
  ],
  exports: [
    GalleryComponent,
    ViewerComponent
  ]
})
export class Angular2ImageGalleryModule {
}
