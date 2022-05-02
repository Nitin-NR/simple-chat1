import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatServiceService } from './Services/chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'SimpleChatApp';
  personArr: any[] = [1]

  constructor(public chatService: ChatServiceService) {

  }

  ngOnInit(): void {
    this.chatService.totalUsers.subscribe((users: any) => {
      if (this.personArr.length < 9) {
        console.log("Root App Person Add", users);
        this.personArr.push(users);
      }
      else {
        alert("Sorry!!  Maximum user limit reached");
      }
    })
  }

}
