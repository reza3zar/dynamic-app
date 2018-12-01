import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fake-loader',
  templateUrl: './fake-loader.component.html',
  styleUrls: ['./fake-loader.component.css']
})
export class FakeLoaderComponent implements OnInit {
  public fakeLine:any[10];

  constructor() { }

  ngOnInit() {
  }

  public generateFake(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

}
