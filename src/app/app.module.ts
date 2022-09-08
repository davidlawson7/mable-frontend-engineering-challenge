import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NodeComponent } from './common/node/node.component';
import { ButtonComponent } from './common/button/button.component';
import { FolderComponent } from './common/node/folder/folder.component';
import { FileComponent } from './common/node/file/file.component';
import { TextfieldComponent } from './common/textfield/textfield.component';
import { UnsetInputComponent } from './common/node/unset-input/unset-input.component';
import { ProposedNameComponent } from './common/node/proposed-name/proposed-name.component';
import { IconComponent } from './common/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    ButtonComponent,
    FolderComponent,
    FileComponent,
    TextfieldComponent,
    UnsetInputComponent,
    ProposedNameComponent,
    IconComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
