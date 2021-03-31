import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  data:any;
  totalAmount:number=0;
  totalLength:number;
  constructor(private watchService:WatchService, private router:Router) { }

  ngOnInit(): void {
    this.getAllCartItems();
  }

  getCartItems(){
    this.watchService.getAllCartItems().subscribe((resp)=>{
      this.data = resp;
    this.totalPrice();
    })
  };

  totalPrice(){
    console.log(this.data.length);
    length = this.data.length;
    this.totalLength = length;
    console.log(typeof this.data[0].price);
    
    for(let i=0;i<length;i++){
      this.totalAmount += this.data[i].price;
    }
    console.log(this.totalAmount)
  }

  

  deleteItem(cart){
    location.reload();
    this.watchService.deleteCartItem(cart).subscribe(()=>{
      
      this.getCartItems();
    })
  }

}
