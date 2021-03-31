import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  _url = "http://localhost:3000/watchList";
  _url1 = "http://localhost:3000/cartItem";

  constructor(private _http:HttpClient) { }

  getAllitems(){
    return this._http.get(this._url)
  }

  getOneItem(id:any){
    return this._http.get('http://localhost:3000/watchList/'+id);
  }

  postDataToCart(data){
    this._http.post(this._url1,data).subscribe();
    console.log(data);
  }

  getAllCartItems(){
    return this._http.get(this._url1);
  }

  deleteCartItem(cart){
    return this._http.delete(this._url1+"/"+cart.id)
  }

}
