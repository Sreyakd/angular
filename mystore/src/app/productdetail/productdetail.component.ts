import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product:any;
  form=new FormGroup(
    {
      "comment":new FormControl(),
     "rating":new FormControl()
    }
  )

  constructor(private router:ActivatedRoute,private service:ProductsService) { }

  ngOnInit(): void {
    let id=this.router.snapshot.paramMap.get("id")
    
    this.service.getProductDetail(id).then(res=>res.json()).then(data=>this.product=data);
    
    
    
  }
  addReview(){
    console.log(this.form.value);
    
  }

}
