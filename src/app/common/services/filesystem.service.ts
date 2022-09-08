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
      const newFileNode = new NodeModel(1);
      newFileNode.setType(NodeType.Folder);
      this.fs.addChild(newFileNode);
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

  deleteNode(nodeId: string) {
    if (!this.fs.children) {
      console.error('No child nodes to search through to delete, error');
      return;
    }
    return this._deleteNode(nodeId, this.fs.children, this.fs);
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

  private _deleteNode(
    id: string,
    nodes: NodeModel[],
    parent: NodeModel
  ): NodeModel | null {
    for (const node of nodes) {
      if (node.type === NodeType.Folder && node.children) {
        const possibleNode = this._deleteNode(id, node.children, node);
        if (possibleNode) {
          return possibleNode;
        }
      }

      if (node.id === id) {
        // Found the node, delete the node and all children from the parent. Use array slice. return the deleted node.
        const indexInParentList = parent.children?.findIndex(
          (node) => node.id === id
        );
        if (indexInParentList === -1 || indexInParentList === undefined) {
          console.error('Error - Cannot delete node, not in provided list');
          return null;
        }

        if (parent.children === undefined || parent.children.length === 0) {
          continue;
        }

        // Set the new children with the old one removed
        parent.children = [
          ...parent.children.slice(0, indexInParentList),
          ...parent.children.slice(indexInParentList + 1),
        ];

        return node;
      }

      continue;
    }
    return null;
  }
}
