import { RemovePrefixPipe } from './pipes/remove-prefix.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pipes-example';

  list: { id: number, name: string }[] = [
    { "id": 0, "name": "ALTERADO" },
    { "id": 1, "name": "INATIVO" },
    { "id": 2, "name": "CRIADO" }
  ];

  listComPrefix: { id: number, name: string }[] = [
    { "id": 0, "name": "APP - ALTERADO" },
    { "id": 1, "name": "App - INATIVO" },
    { "id": 2, "name": "App - CRIADO" }
  ];

  constructor(private order: OrderByPipe, private titleCase: TitleCasePipe, private removePrefix: RemovePrefixPipe) {
    this.list = order.transform(this.list, "name");

    this.list = this.list.map(item => {
      return {
        "id": item.id,
        "name": titleCase.transform(item.name)
      }
    });

    this.listComPrefix = this.listComPrefix.map(item => {
      return {
        "id": item.id,
        "name": removePrefix.transform(item.name, "App - ")
      }
    })

  }

}
