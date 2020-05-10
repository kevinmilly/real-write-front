import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rhymeBook',
  templateUrl: 'rhymeBook.page.html',
  styleUrls: ['rhymeBook.page.scss']
})
export class RhymeBookPage {

  item;
  content;

  constructor(private fb: FormBuilder) {
    this.item = this.fb.control('');
  }

}
