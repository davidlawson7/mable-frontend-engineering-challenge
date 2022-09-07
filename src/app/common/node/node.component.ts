import { Component, Input, OnInit } from '@angular/core';
import { NodeModel } from '../services/filesystem.models';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {
  @Input() node!: NodeModel;

  constructor() {}

  ngOnInit(): void {}
}
