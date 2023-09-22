import { Component } from "@angular/core";

@Component({
  template: `
    <div class="form-group col-md-2 col-md-offset-4">
      <input type="text" class="form-control" placeholder="date" />
      Subroute 2 is working!
    </div>

    <div class="form-group col-md-2 col-md-offset-4 input-group">
      <input
        class="form-control"
        placeholder="Pickup date"
        name="pickupDate"
        #pickupDate="bsDatepicker"
        bsDatepicker
        autocomplete="off"
        [bsConfig]="{ dateInputFormat: 'MM/DD/YYYY' }"
        required
      />
      <span class="input-group-addon" (click)="pickupDate.toggle()"
        ><i class="fa fa-calendar"></i
      ></span>
    </div>
  `
})
export class Subroute2 {}
