import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { Subscription } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-rhymeBook',
  templateUrl: 'rhymeBook.page.html',
  styleUrls: ['rhymeBook.page.scss'],
  
})
export class RhymeBookPage {

  item;
  content = '';
  routeSub: Subscription;
  contentSub: Subscription; 

  constructor(private route: ActivatedRoute, private router: Router, private backend: BackendService) {

  
//    // navigation start
   this.router.events.pipe(filter(event => event instanceof NavigationStart))
   .subscribe(() => {
    this.backend.saveRhymeBookContent(this.content);
});
//navigation ends here
// this.router.events
//    .pipe(
//     filter(event => event instanceof NavigationEnd)
//    )
//    .subscribe(() => {
//     this.content += 
// });
    this.routeSub = this.route.queryParams.subscribe(params => {
      console.dir(params);
      console.log(`content is ${this.content}`);
      if(params.word) {
        this.content += ` ${params.word}`;
      }
    });

  }

  ngOnInit() {
    this.contentSub = this.backend.rhymeBookContent.subscribe( data => this.content = data);
  }

  ngOnDestroy() {
    if(this.routeSub) this.routeSub.unsubscribe();
    if(this.contentSub) this.contentSub.unsubscribe();
  }

}
