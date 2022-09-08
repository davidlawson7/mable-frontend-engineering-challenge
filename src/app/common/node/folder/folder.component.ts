import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NodeModel } from '../../services/filesystem.models';
import { FilesystemService } from '../../services/filesystem.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent {
  @Input() folderNode!: NodeModel;

  folderIcon = `${environment.iconsPath}/folder.svg`;
  plusIcon = `${environment.iconsPath}/plus.svg`;
  binIcon = `${environment.iconsPath}/bin.svg`;

  constructor(private filesystem: FilesystemService) {}

  /**
   * Sets the name of the provided folder node.
   *
   * @param name The proposed name.
   */
  setName(name: string): void {
    this.folderNode.setName(name);
  }

  /**
   * Requests the filesystem service to create a unset child node on this component.
   */
  createChildNode() {
    this.filesystem.addNode(this.folderNode.id);
  }

  /**
   * Requests the filesystem service to deletee this node. Will do this regardless of children.
   */
  deleteNode() {
    this.filesystem.deleteNode(this.folderNode.id);
  }
}
