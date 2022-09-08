import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NodeModel } from '../../services/filesystem.models';
import { FilesystemService } from '../../services/filesystem.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent implements OnInit {
  @Input() folderNode!: NodeModel;

  folderIcon = `${environment.iconsPath}/folder.svg`;
  plusIcon = `${environment.iconsPath}/plus.svg`;
  binIcon = `${environment.iconsPath}/bin.svg`;

  constructor(private filesystem: FilesystemService) {}

  ngOnInit(): void {}

  setName(name: string): void {
    this.folderNode.setName(name);
  }

  createChildNode() {
    this.filesystem.addNode(this.folderNode.id);
  }

  deleteNode() {
    this.filesystem.deleteNode(this.folderNode.id);
  }
}
