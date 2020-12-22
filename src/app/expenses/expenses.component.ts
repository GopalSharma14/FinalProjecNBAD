import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import axios from "axios";

interface Expenses {
  username: string,
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  private tempExpenses: Expenses[] = [];
  constructor(public dataservice: DataService, private router: Router) { }

    ngOnInit(): void {
    this.dataservice.getData().subscribe((res) => {
      for (var i = 0; i < res.length; i++) {
        this.tempExpenses[i] = res[i];
      }
    });
  }
deleteRow(id: string){
  console.log("id", id)
  axios({
    method: "post",
    headers: { Pragma: "no-cache" },
    url: "http://localhost:3000/deleteData",
    data: {
      id: id
    },
  });
  window.location.reload();
}

  updateRow(id: string) {
    this.router.navigate(['/update-expenses/' + id]);
  }
  expensesArray = this.tempExpenses;
}
