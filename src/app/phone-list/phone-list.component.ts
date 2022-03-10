import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  productList: any[];
  searchText: string;
  order = '';

  // event handler for the select element's change event
  // tslint:disable-next-line: typedef
  selectChangeHandler(event: any) {
    // update the ui
    this.order = event.target.value;
  }

  constructor(
    private orderPipe: OrderPipe,
    public phoneService: PhoneService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.phoneService.getAllProducts().subscribe((data) => {
      this.productList = data;
      this.productList.sort((a, b) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 );
    },
    (error) => {
      console.log('http-error:');
      console.log(error);
    });
  }

}
