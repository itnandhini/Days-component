import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

let emailRegex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public ScheduleForm: FormGroup;
  public newUsergroup: FormGroup;
  testArray = [];
  stopEvent = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.ScheduleForm = this.fb.group({
      //  date: this.fb.control(new Date()),
      days: this.fb.array([])
    })
  }

  removeFormControl(i) {
    let usersArray = this.ScheduleForm.controls.days as FormArray;
    usersArray.removeAt(i);
  }

  addFormControl() {

    let usersArray = this.ScheduleForm.controls.days as FormArray;
    let arraylen = usersArray.length;

    this.newUsergroup = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    })

    usersArray.insert(arraylen, this.newUsergroup);
    console.log(arraylen, this.newUsergroup);
  }
  clickMe(value, i) {
    console.log(value);
    this.testArray = [];
    switch (value) {
      case "All":
        console.log("All");
        this.stopEvent = true;
        // this.users.forEach(user => {
        //   user.active = true;
        // })
        this.users = [{
          id: 1,
          name: "Sunday",
          active: true
        },
        {
          id: 2,
          name: "Monday",
          active: true
        },
        {
          id: 3,
          name: "Tuesday",
          active: true
        },
        {
          id: 4,
          name: "Wednesday",
          active: true
        },
        {
          id: 5,
          name: "Thusday",
          active: true
        },
        {
          id: 6,
          name: "Friday",
          active: true
        },
        {
          id: 7,
          name: "Saturday",
          active: true
        }];
        this.newUsergroup.setControl('name', this.fb.array(this.users || []));

        break;
      case "Five":
        console.log("five");
        this.stopEvent = true;
        this.users.forEach(user => {
          if (user.name == "Sunday" || user.name == "Saturday") {
            user.active = false;
          } else {
            user.active = true;
          }

        })
        this.testArray = ["Monday", "Tuseday", "Wednesday", "Thursday", "Friday"];
        this.newUsergroup.setControl('name', this.fb.array(this.testArray || []));
        break;
      case "Two":
        console.log("two");
        this.stopEvent = true;
        this.users.forEach(user => {
          if (user.name == "Sunday" || user.name == "Saturday") {
            user.active = true;
          } else {
            user.active = false;
          }

        })
        this.testArray = ["Sunday", "Saturday"];
        this.newUsergroup.setControl('name', this.fb.array(this.testArray || []));
        break;
      case "Any":
        console.log("any");
        this.stopEvent = !this.stopEvent;
        this.users.forEach(user => {
          user.active = false;
        })
        this.testArray = [];
        this.newUsergroup.setControl('name', this.fb.array(this.testArray || []));
        break;
    }
  }
  click(user, id) {
    console.log("user", id)
    if (this.testArray.indexOf(user.name) !== -1) {
      var index = this.testArray.indexOf(user.name);
      this.testArray.splice(index, 1);
      console.log(this.testArray);
    } else {

      this.testArray.push(user.name);
      console.log(this.testArray);
    }
    user.active = !user.active;
this.ScheduleForm.controls.days.value[id].name = this.testArray;
//   this.ScheduleForm.controls.days[id].setControl('name', this.fb.array(this.testArray || []));
 //   this.newUsergroup.setControl('name', this.fb.array(this.testArray || []));

  }
  users: Array<any> = [
    {
      id: 1,
      name: "Sunday",
      active: false
    },
    {
      id: 2,
      name: "Monday",
      active: false
    },
    {
      id: 3,
      name: "Tuesday",
      active: false
    },
    {
      id: 4,
      name: "Wednesday",
      active: false
    },
    {
      id: 5,
      name: "Thusday",
      active: false
    },
    {
      id: 6,
      name: "Friday",
      active: false
    },
    {
      id: 7,
      name: "Saturday",
      active: false
    }
  ];

}
