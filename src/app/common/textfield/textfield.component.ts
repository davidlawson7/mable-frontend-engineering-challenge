import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
})
export class TextfieldComponent {
  @Input() value: string = '';

  /**
   * Takes whatever is value is provided to the textfield and saves it to the clients clipboard.
   *
   * @param textfieldEl
   */
  copyValue(textfieldEl: HTMLTextAreaElement) {
    textfieldEl.select();
    document.execCommand('copy');
    console.log('Copied JSON...');
  }
}
