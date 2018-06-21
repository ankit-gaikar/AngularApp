import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  template: `
  <p>
  Educating for Better Tomorrow!!!
  {{ Demo }}
  </p>
  `,
  styles: [`p
  {
      color:blue;
  }`]
})
export class XyzComponent implements OnInit {
  public Demo="Inside pune";
  constructor() { }

  ngOnInit() {
  }

}
