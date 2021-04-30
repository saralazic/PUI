import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  user: User;

  constructor(private usrv: UserService) { }

  ngOnInit(): void {
    this.user = this.usrv.getlogged();
  }

  delNot(i: number): void{
    this.user.notifications.splice(i, 1);
  }



}
