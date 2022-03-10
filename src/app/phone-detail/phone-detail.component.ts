import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhoneService } from '../phone.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  phoneId = '';
  productList: any[];
  chosenPhone: any = '';
  faCheck = faCheck;
  faMinus = faMinus;
  newImageString = '';
  allReady = false;

  constructor(
    private route: ActivatedRoute,
    private phonoService: PhoneService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone(): void {
    // tslint:disable-next-line: no-string-literal
    this.phoneId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      // tslint:disable-next-line: no-string-literal
      this.phoneId = params['id'];
    });
    this.phonoService.getProduct(this.phoneId).subscribe((data => {
      this.chosenPhone = data;
      this.allReady = true;
    }));
  }

  goBack(): void {
    this.location.back();
  }

  // tslint:disable-next-line: typedef
  changeImg(event: any) {
    this.newImageString = event.target.getAttribute('src');
    document.getElementById('view-img').setAttribute('src', this.newImageString);
  }

}
