import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BUYER } from 'src/app/data/Users';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serv: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  update(){
    let path : string; 
    let l: User = this.serv.getlogged();
    if (l == null) path = '';
    else {
      if(l.type == BUYER) path = 'buyer';
      else path ='seller';
    }
    this.router.navigate([path]);
  }

}
