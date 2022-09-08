import { Component, Input } from '@angular/core';
import { NodeModel, NodeType } from '../../services/filesystem.models';

@Component({
  selector: 'app-unset-input',
  templateUrl: './unset-input.component.html',
  styleUrls: ['./unset-input.component.scss'],
})
export class UnsetInputComponent {
  @Input() unsetNode!: NodeModel;

  readonly nodeType = NodeType;

  setType(nodeType: NodeType) {
    this.unsetNode.setType(nodeType);
  }
}
