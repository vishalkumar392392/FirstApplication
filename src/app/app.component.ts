import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "myFirstApp";
  details = {
    candidate: "",
    branch: ""
  };
  storge = [];
  onSubmit(theForm: NgForm) {
    // (this.details.candidate = theForm.value.candidate),
    //   (this.details.branch = theForm.value.branch);
    let {
      value: { branch, candidate }
    } = theForm;
    this.storge.push({
      candidate,
      branch
    });
    console.log(this.storge);
  }
}
