import {Component, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {AddressComponent} from "../shared/address.component";

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
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
export class EmployeeComponent implements OnInit {

  @ViewChild(AddressComponent, {static: true}) addressComponent!: AddressComponent;

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: this.addressComponent.createAddressForm()
    })

  }

}
