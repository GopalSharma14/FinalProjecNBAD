import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';


interface Expenses {
  username: string,
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

@Component({
  selector: 'app-update-expenses',
  templateUrl: './update-expenses.component.html',
  styleUrls: ['./update-expenses.component.scss']
})
export class UpdateExpensesComponent implements OnInit {

  expForm = new FormGroup({
    title: new FormControl(''),
    amount: new FormControl(''),
    category: new FormControl(''),
    date: new FormControl('')
  });

  public tempExpense: any = [];

  constructor(public dataservice: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.uid);
    axios({
      method: "post",
      headers: { Pragma: "no-cache" },
      url: "http://localhost:3000/expenses",
      data: {
        id: this.route.snapshot.params.uid
      },
    })
    .then((response) => {
      console.log(response.data);
      this.tempExpense.push(response.data);
    })
    .catch(function(error){
        console.log(error);
    });
  }


  updateRow(id: string) {

  }

}
