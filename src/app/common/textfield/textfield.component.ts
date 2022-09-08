import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
})
export class TextfieldComponent {
  @Input() value: string = '';

  copyValue(textfieldEl: HTMLTextAreaElement) {
    console.log('copying');
    textfieldEl.select();
    document.execCommand('copy');
  }
}
