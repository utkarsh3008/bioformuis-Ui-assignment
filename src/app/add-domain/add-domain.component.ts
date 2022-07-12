import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CommonService} from "../common.service";


@Component({
  selector: 'app-add-domain',
  templateUrl: './add-domain.component.html',
  styleUrls: ['./add-domain.component.css']
})
export class AddDomainComponent implements OnInit {
  @ViewChild('myModal', {static: false})
  private modal!: ElementRef;
  public form = new FormGroup({
    domain: new FormControl('', Validators.required),
    storage: new FormControl('', Validators.required),
    usedStorage: new FormControl('', Validators.required),
    monthlyVisitor: new FormControl('', Validators.required),
  })

  constructor(private _commonService: CommonService) {
  }

  ngOnInit(): void {

  }

  get domain() {
    return this.form.get('domain')
  }

  get storage() {
    return this.form.get('storage')
  }

  get usedStorage() {
    return this.form.get('usedStorage')
  }

  get monthlyVisitor() {
    return this.form.get('monthlyVisitor')
  }

  public open() {
    this.modal.nativeElement.style.display = 'block';
  }

  public close() {
    this.modal.nativeElement.style.display = 'none';
  }

  public onSubmit() {
    console.log(JSON.stringify(this.form.value));
    this.postDAta()
    this.close();
  }

  public postDAta() {
    const body = this.form.value
    this._commonService.postData(body).subscribe((res: any) => {
      console.log(res)
    })
  }


}
