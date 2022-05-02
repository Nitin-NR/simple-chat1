import { Component, Input, OnInit } from '@angular/core';
import { ChatServiceService } from '../../Services/chat-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() personArr!: any[]
  navTitle: string = 'Simple Chat Application'
  navSubTitle: string = 'Material Design'
  navButtontitle : string = 'ADD NEW PERSON'

  constructor(public chatService: ChatServiceService) {
  }

  ngOnInit(): void {
  }

  addFunction() {
    this.chatService.totalUsers.next(1);
  }
}
