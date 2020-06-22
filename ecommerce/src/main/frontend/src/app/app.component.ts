import {Component, ViewChild} from '@angular/core';
import {EcommerceService} from "./ecommerce/services/EcommerceService";
import {EcommerceComponent} from "./ecommerce/ecommerce.component";
import {User} from "./ecommerce/models/users.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EcommerceService]
})
export class AppComponent {
  logged = false
  users: User[] = [];
  @ViewChild('ecommerceC')
  ecommerceC: EcommerceComponent;

  constructor(private ecommerceService: EcommerceService) {
  }

  ngOnInit() {
  }

  //The database is queried for a matching entry
  login(userName) {
    this.ecommerceService.getUserByName(userName)
      .subscribe(
        (users: any) => {
          this.users = users;
          this.users.forEach(users => {
              if (users.userName) {
                this.logged = true;
                //Assigning the logged user to be the user selected/logged in
                this.ecommerceService.loggedUser = users;
              }
            },
            (error) => console.log(error)
          );
        })
    //If the user did not log in then the username is wrong
    if (!this.logged) {
      this.userNotFound();
    }
  }

// In case a wrong loginis entered
  userNotFound() {
    const element = document.getElementById("login-input-bar");
    element.classList.add("error-class");
  }
}

