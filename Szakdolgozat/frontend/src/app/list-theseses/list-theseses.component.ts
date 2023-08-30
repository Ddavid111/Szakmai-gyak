import { Component, OnInit } from '@angular/core';
import {ListThesesesService} from "../_services/list-theseses.service";

@Component({
  selector: 'app-list-theseses',
  templateUrl: './list-theseses.component.html',
  styleUrls: ['./list-theseses.component.css']
})
export class ListThesesesComponent implements OnInit {


  data: any

  constructor(private listThesesesService: ListThesesesService) {
 //   this.getThesesList()
  }

  ngOnInit() {
    this.getThesesList()
  }

  getThesesList() {
    this.listThesesesService.getThesesList().subscribe(
        (resp) => {
          this.data = resp
          console.log(resp)
        },
        (err) => {
          alert(err)
        }
    )
  }
}
