import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NodeModel, NodeType } from './filesystem.models';

@Injectable({
  providedIn: 'root',
})
export class FilesystemService {
  private fs: NodeModel;
  model = new BehaviorSubject<NodeModel | null>(null);

  constructor() {
    this.fs = new NodeModel(0);
    this.fs.setName('root');
    this.fs.setType(NodeType.Root);
    this.model.next(this.fs);
  }

  addNode(parentId?: string) {
    if (!parentId) {
      // Add a top level node, or level 1
      this.fs.addChild(new NodeModel(1));
      this.model.next(this.fs);
      return;
    }

    if (!this.fs.children) {
      console.error('No child nodes to search through, error');
      return;
    }

    const newNode = this._addNode(parentId, this.fs.children);
    if (!newNode) {
      console.error('No nodes were a match, error');
    }

    this.model.next(this.fs);
  }

  private _addNode(id: string, nodes: NodeModel[]): NodeModel | null {
    for (const node of nodes) {
      if (node.type !== NodeType.Folder) {
        // Skip this node, we cannot add anything to it.
        continue;
      }

      if (node.id === id) {
        // Successfully found the node to add this too
        const n = node.addChild(new NodeModel(node.level + 1));
        console.log('Successfully added a cild node');
        return n;
      } else if (node.children) {
        // Repeat this
        return this._addNode(id, node.children);
      } else {
        // Is a folder, is not the parent to create in and has no children, skip
        continue;
      }
    }
    return null;
  }
}
