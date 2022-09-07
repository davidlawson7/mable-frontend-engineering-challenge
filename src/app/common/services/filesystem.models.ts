export enum NodeType {
  Root = 'root',
  Folder = 'folder',
  File = 'file',
  Unset = 'unset',
}

export class NodeModel {
  type: NodeType;
  name?: string;
  children?: NodeModel[];
  id: string;
  level: number;

  constructor(level: number) {
    this.type = NodeType.Unset;
    this.id = `${Date.now()}`;
    this.level = level;
  }

  setName(name: string) {
    this.name = name;
  }

  setType(type: NodeType) {
    this.type = type;
  }

  addChild(node: NodeModel) {
    this.children = this.children ? [...this.children, node] : [node];
    return node;
  }
}
