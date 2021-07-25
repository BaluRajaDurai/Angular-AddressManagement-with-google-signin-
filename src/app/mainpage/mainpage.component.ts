import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  public submitted: boolean = false;

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth'); //storing user details
    
  }
  validate(){ //validation function
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      alert("Please fill all the fields !!!");
    }
    else{
      this.submitted=true; // successfull page
    }
    form.classList.add('was-validated');
  }

  signOut(): void { // signout function
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }

}
