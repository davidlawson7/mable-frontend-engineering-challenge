import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  /**
   * Attempts to name the unamed node. If the current name is empty, it will fail. Once a name is provided
   * it will emit that value upwards.
   */
  tryAndNameNode(): void {
    if (!this.proposedName || this.proposedName === '') {
      console.warn('Warn - proposed node name cannot be empty');
      return;
    }
    this.setName.emit(this.proposedName);
  }

  /**
   * If the cancel button is pressed, it emits upwards so the parent component can handle it.
   */
  cancelNodeCreation() {
    this.cancel.emit();
  }
}
