import { Component, Input, OnInit } from '@angular/core';
import {Iproduct} from 'src/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product:Iproduct

  public cout = {
    dem : 0
  }

  constructor() { }

  ngOnInit(): void {
  }


countSP(coutting){
  coutting.dem = coutting.dem +1;
}

 AddProduct(Info){
if(Info.quantity >0){
  console.log(Info.id);
  Info.quantity = Info.quantity -1;
}
    else
    {
      alert("sản phẩm đã hết hàng");
    }
 }
}
