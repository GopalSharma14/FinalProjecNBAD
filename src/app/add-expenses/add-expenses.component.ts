import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})

export class AddExpensesComponent implements OnInit {

  expForm = new FormGroup({
    title: new FormControl(''),
    amount: new FormControl(''),
    category: new FormControl(''),
    date: new FormControl('')
  });

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.expForm.value);
    axios({
      method: "post",
      headers: { Pragma: "no-cache" },
      url: "http://localhost:3000/add-expenses",
      data: {
        username: localStorage.getItem("currentUser"),
        title: this.expForm.value.title,
        amount: this.expForm.value.amount,
        category: this.expForm.value.category,
        date: this.expForm.value.date
      },
    });
    this.router.navigate(['/expenses']);
  }
}
