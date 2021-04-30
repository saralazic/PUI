import { Injectable } from '@angular/core';
import { USERS, BUYER } from '../data/Users';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) {
  }

  initUsers() {
    if (localStorage.getItem('users') == null) {
      localStorage.setItem('users', JSON.stringify(USERS));
    }
  }



  getUsers(): User[] {
    return JSON.parse(localStorage.getItem('users'));
  }



  findUser(uname): User {
    let usrs = JSON.parse(localStorage.getItem('users'));
    return usrs.filter(user => user.username == uname)[0];
  }



  editUser(user) {
    let usrs = this.getUsers();
    usrs.forEach((u, index) => {
      if (u.username == user.username) {
        usrs[index] = user;
      }
    });
    localStorage.setItem('users', JSON.stringify(usrs));
  }



  deleteUser(user) {
    let usrs = this.getUsers();
    usrs.forEach((u, index) => {
      if (u.username == user.username) {
        usrs.splice(index, 1);
      }
    });
    localStorage.setItem('users', JSON.stringify(usrs));
  }


  login(uname, pass) {
    let mess = "";
    //alert("servis pozvan");
    let u: User;
    u = this.findUser(uname);
    if (u == null) {
      mess = "Ne postoji korisnik!";
    }
    else {
      if (u.password == pass) {
        localStorage.setItem("logged", JSON.stringify(u.username));
        if (u.type == BUYER)
          this.router.navigate(['buyer']);
        else
          this.router.navigate(['seller']);
        mess = "";
      }
      else mess = "Pogresni kredencijali";
    }
    return mess;
  }


  logout() {
    localStorage.removeItem("logged");
    this.router.navigate(['']);
  }

  getlogged(): User {
    //   alert("pozvan");
    let ul: User;
    let usrs = this.getUsers();
    let uname = JSON.parse(localStorage.getItem('logged'));
    console.log(usrs);
    ul = usrs.filter(u => u.username==uname)[0];
    return ul;
  }


}