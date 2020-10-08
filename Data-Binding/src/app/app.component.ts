import { Component } from '@angular/core';
import { Iproduct } from 'src/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listProduct:Iproduct[]=[
    {
      id: 'SP001',
      name: 'Laptop Asus Gaming FX505DT-HN478T Ryzen7 3750H/8Gb/SSD 512/15.6 144hz/GTX 1650 4Gb/Win10/Xám',
      img: 'https://hanoicomputercdn.com/media/product/250_54069_lg_27gn750__8_.png',
      lastPrice: 19200000,
      discount: 5,
      price: 18290000,
      status: true,
      quantity: 10
    },
    {
      id: 'SP002',
      name: 'Laptop Asus Gaming FX505DT-HN478T Ryzen7 3750H/8Gb/SSD 512/15.6 144hz/GTX 1650 4Gb/Win10/Xám',
      img: 'https://hanoicomputercdn.com/media/product/250_54069_lg_27gn750__8_.png',
      lastPrice: 19200000,
      discount: 5,
      price: 18290000,
      status: true,
      quantity: 10
    }
    ,
    {
      id: 'SP003',
      name: 'Laptop Asus Gaming FX505DT-HN478T Ryzen7 3750H/8Gb/SSD 512/15.6 144hz/GTX 1650 4Gb/Win10/Xám',
      img: 'https://hanoicomputercdn.com/media/product/250_54069_lg_27gn750__8_.png',
      lastPrice: 19200000,
      discount: 5,
      price: 18290000,
      status: true,
      quantity: 10
    }
    ,
    {
      id: 'SP004',
      name: 'Laptop Asus Gaming FX505DT-HN478T Ryzen7 3750H/8Gb/SSD 512/15.6 144hz/GTX 1650 4Gb/Win10/Xám',
      img: 'https://hanoicomputercdn.com/media/product/250_54069_lg_27gn750__8_.png',
      lastPrice: 19200000,
      discount: 5,
      price: 18290000,
      status: true,
      quantity: 10
    }
  ]
}
