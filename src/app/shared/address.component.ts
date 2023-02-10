import {Component} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  standalone: true
})
export class AddressComponent {

  addressForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {
  }

  public createAddressForm() {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required]
    });
    return this.addressForm;
  }

}
