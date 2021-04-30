import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  user: User;
  mess: string;
  newpass: string;

  constructor(private serv: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.serv.getlogged();
    this.newpass = this.user.password;
  }

  edit() {
    if (this.user.first_name.length == 0 || this.user.first_name == null ||
      this.user.last_name.length == 0 || this.user.last_name == null ||
      this.user.phone.length == 0 || this.user.phone == null ||
      this.user.address.length == 0 || this.user.address == null ||
      this.user.password.length == 0 || this.user.password == null ||
      this.newpass.length == 0 || this.newpass == null) {
      this.mess = "Sva polja moraju biti popunjena!";
    }
    else{
      if(this.user.password!=this.newpass){
        this.mess = "Lozinke se ne poklapaju!";
      }
      else{
        this.mess = "Uspešno ste izmenili podatke";
        this.serv.editUser(this.user);
      }
    }
  }

}
