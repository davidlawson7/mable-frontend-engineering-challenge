import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeModel } from '../../services/filesystem.models';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-proposed-name',
  templateUrl: './proposed-name.component.html',
  styleUrls: ['./proposed-name.component.scss'],
})
export class ProposedNameComponent {
  @Input() isFolder: boolean = true;
  @Output() setName = new EventEmitter<string>();
  @Output() cancel = new EventEmitter();

  proposedName: string = '';
  checkIcon = `${environment.iconsPath}/check-mark.svg`;
  crossIcon = `${environment.iconsPath}/cross.svg`;
  folderIcon = `${environment.iconsPath}/folder.svg`;
  fileIcon = `${environment.iconsPath}/file.svg`;

  constructor() {}

  tryAndNameNode() {
    if (!this.proposedName || this.proposedName === '') {
      console.error('Error - proposed node name cannot be empty');
      return;
    }
    this.setName.emit(this.proposedName);
  }

  cancelNodeCreation() {
    this.cancel.emit();
  }
}
