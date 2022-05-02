import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from 'src/app/Services/chat-service.service';

@Component({
  selector: 'app-list-comp',
  templateUrl: './list-comp.component.html',
  styleUrls: ['./list-comp.component.css']
})

export class ListCompComponent implements OnInit {
  iconName: string = ''
  messageArr: any[] = []

  constructor(public chatService: ChatServiceService) {
  }

  ngOnInit(): void {
    this.iconName = 'bookmark'

    this.chatService.chatData.subscribe((data: any) => {
      console.log("List Comp data received :", data);
      this.messageArr.push(data);
    })
  }

  clearChat(){
    this.messageArr = [];
    return this.messageArr
  }
}
