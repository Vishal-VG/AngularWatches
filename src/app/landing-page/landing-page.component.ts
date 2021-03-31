import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WatchService } from '../watch.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

    product_id:number;
    data:any;
    constructor(private actRoute: ActivatedRoute, private watchService:WatchService, private router:Router) { }


 
    ngOnInit(): void{
      let p_id = parseInt(this.actRoute.snapshot.params.id);
      this.product_id = p_id;
      console.log(this.product_id);
      this.getOneItem();
      // console.log(this.product_id);
    }
    getOneItem(){
      this.watchService.getOneItem(this.product_id).subscribe((resp)=>{
        this.data = resp;
   });
  }

  addToCart(product){
    let mydata={
      itemId:product.id,
      itemName:product.name,
      itemImage:product.image
    }

    this.watchService.postDataToCart(mydata);
    this.router.navigate(['/cart-page']);
  } 
  }
  
