import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NodeComponent } from './common/node/node.component';
import { ButtonComponent } from './common/button/button.component';
import { FolderComponent } from './common/node/folder/folder.component';
import { FileComponent } from './common/node/file/file.component';
import { TextfieldComponent } from './common/textfield/textfield.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    ButtonComponent,
    FolderComponent,
    FileComponent,
    TextfieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
