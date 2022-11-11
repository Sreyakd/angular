import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any;
  @Output() newItemEvent=new EventEmitter()

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.service.getCategories().then(res=>res.json()).then(data=>this.categories=data);
  }
  listbycategory(cat:string){
    console.log(cat);
    this.newItemEvent.emit(cat);
    

  }

}
