import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadFilesPage } from './upload-files';

@NgModule({
  declarations: [
    UploadFilesPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadFilesPage),
  ],
})
export class UploadFilesPageModule {}
