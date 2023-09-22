import { Component } from "@angular/core";

@Component({
  selector: "app2",
  template: `
    <link
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/ngx-bootstrap/datepicker/bs-datepicker.css"
    />
    <div class="form-group">
      This was rendered by App2 which is written in Angular
    </div>
    <div class="form-group">
      <a [routerLink]="['/subroute1']" routerLinkActive="active"
        >Angular route 1</a
      >
      <a [routerLink]="['/subroute2']" routerLinkActive="active"
        >Angular route 2</a
      >
    </div>
    <router-outlet></router-outlet>
  `
})
export class App2 {}
