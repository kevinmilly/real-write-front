import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rhymebook',
  templateUrl: 'rhymebook.page.html',
  styleUrls: ['rhymebook.page.scss']
})
export class RhymeBookPage {

  item;

  constructor(private fb: FormBuilder) {
    this.item = this.fb.control('');
  }

}
