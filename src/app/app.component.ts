import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NodeModel } from './common/services/filesystem.models';
import { FilesystemService } from './common/services/filesystem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mable-frontend-engineering-challenge';
  nodes$: BehaviorSubject<NodeModel | null>;

  constructor(private filesystem: FilesystemService) {
    this.nodes$ = this.filesystem.model;
  }

  addRootNode() {
    this.filesystem.addNode();
  }

  stringify(nodes: NodeModel) {
    return JSON.stringify(nodes);
  }
}
