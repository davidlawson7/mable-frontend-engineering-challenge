import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NodeModel } from '../../services/filesystem.models';
import { FilesystemService } from '../../services/filesystem.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  @Input() fileNode!: NodeModel;

  fileIcon = `${environment.iconsPath}/file.svg`;
  binIcon = `${environment.iconsPath}/bin.svg`;

  constructor(private filesystem: FilesystemService) {}

  /**
   * Sets the name of the provided file node.
   *
   * @param name The proposed name.
   */
  setName(name: string): void {
    this.fileNode.setName(name);
  }

  /**
   * Requests the filesystem service to deletee this node. Will do this regardless of children.
   */
  deleteNode() {
    this.filesystem.deleteNode(this.fileNode.id);
  }
}
