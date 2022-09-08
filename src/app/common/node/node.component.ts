import { Component, Input } from '@angular/core';
import { NodeModel } from '../services/filesystem.models';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent {
  @Input() node!: NodeModel;

  constructor() {}
}
