import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonService} from "../common.service";
import {AddDomainComponent} from "../add-domain/add-domain.component";

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css']
})
export class SiteDetailsComponent implements OnInit {
  @ViewChild('modal', {static: false})
  modal!: AddDomainComponent;
  public domainList: any;
  // @ts-ignore
  public searchKey: string;

  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
    this.getDomainList();
  }

  public getDomainList() {
    this._commonService.get().subscribe((res) => {
      this.domainList = res;
    })
  }

  public openModal() {
    this.modal.open();
  }

  public searchDomain(e: any) {
    let filterdata: any;
    this.searchKey = e.target.value;
    filterdata = this.domainList.filter((d: any) => {
      return d.domain.includes(this.searchKey)
    })
    this.domainList = filterdata;
    if(this.searchKey.length <=0) {
      this.getDomainList();
    }
  }


}
