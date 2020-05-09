import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.page.html',
  styleUrls: ['./search-options.page.scss'],
})
export class SearchOptionsPage implements OnInit {

  public form = [
    { val: 'Include Synonyms', isChecked: false },
    { val: 'Include Rhymes', isChecked: true },
    { val: 'Include Slight Rhymes', isChecked: true },
    { val: 'Include Natural Following Words', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
