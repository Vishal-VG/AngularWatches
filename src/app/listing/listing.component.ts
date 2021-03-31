import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private watchService : WatchService, private router: Router) { }
  watchList:any;

  ngOnInit(): void {
    this.getAllitems();
  }

  getAllitems(){
    this.watchService.getAllitems().subscribe((resp)=>{
      this.watchList = resp;
      console.log(this.watchList);
    })
  }

  gotoLanding(card: any){
    console.log(card.id);
    this.router.navigate(['/landing-page',card.id]);
  }

}
