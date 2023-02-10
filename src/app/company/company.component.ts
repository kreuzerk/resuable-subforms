import {Component, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";

import {AddressComponent} from "../shared/address.component";

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  imports: [
    ReactiveFormsModule,
    AddressComponent,
    JsonPipe
  ],
  styles: [`
    :host {
      width: 100%;
    }
  `],
  standalone: true
})
export class CompanyComponent implements OnInit {

  @ViewChild(AddressComponent, {static: true}) addressComponent!: AddressComponent;

  companyForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      address: this.addressComponent.createAddressForm()
    })
  }

}
