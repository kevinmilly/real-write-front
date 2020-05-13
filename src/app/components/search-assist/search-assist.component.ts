import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { SearchOptionsPage } from 'src/app/pages/modals/search-options.page';
import { Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-search-assist',
  templateUrl: './search-assist.component.html',
  styleUrls: ['./search-assist.component.scss'],
})
export class SearchAssistComponent implements OnInit {

  

  // relate = 'wolf';
  rhyme = 'howl'; //perfect rhyme
  sl; //sounds like
  topics = 'wolves'; //limit topicr

  results$: Observable<any>;

  rhymeStyle:string = 'perfectRhymes';

  wordChoices = [];

  public form;
  
  @Input() syn;

constructor(public modalController: ModalController, private backend: BackendService, public navCtrl: NavController, private router: Router) {}
  
ngOnInit() {

      this.results$ = this.backend.initializeResults(
        this.rhyme,
        this.sl,
        this.topics,
      )


      
      

  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: SearchOptionsPage,
  //     componentProps: {

  //     }
  //   });
  //  this.searchFilters = await modal.onDidDismiss()
  //  console.dir(this.searchFilters);

  //   return await modal.present();
  // }

  
  getResults() {
    this.results$ = this.backend.wordSearch(
      this.rhyme,
      this.sl,
      this.topics,
      )
     
  }

  addResult(event, result) {
    console.dir(event);
    this.wordChoices.push(result);
  }

  sendToRhymeBook(word) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
         word,
      }
  };
  // this.navCtrl.navigateForward(['/rhymeBook'], navigationExtras);
    this.router.navigate(['tabs/rhymeBook'], navigationExtras);
  }

}
