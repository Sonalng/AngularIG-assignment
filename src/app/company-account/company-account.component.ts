import { Component, OnInit } from '@angular/core';
import { Company_Details } from '../company_details';
import { Companies } from '../mock-companies';

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.css']
})
export class CompanyAccountComponent implements OnInit {

  companies = Companies;
  selectedCompany: Company_Details;
  constructor() { }

  ngOnInit() {
  }

  onSelect(comapny: Company_Details): void {
    this.selectedCompany = comapny;
  }

}
