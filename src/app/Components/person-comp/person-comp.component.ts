import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatServiceService } from '../../Services/chat-service.service'

export interface ChatConfig {
  id: number,
  sender: string,
  message: string
}

@Component({
  selector: 'app-person-comp',
  templateUrl: './person-comp.component.html',
  styleUrls: ['./person-comp.component.css']
})

export class PersonCompComponent implements OnInit {

  @Input() index!: number
  personForm!: FormGroup

  chatArr: any

  inputTitle = ''
  constructor(public formBuilder: FormBuilder, public chatService: ChatServiceService) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      message: ['', Validators.required],
    })
    this.inputTitle = `Person ${this.index + 1}`;
  }

  sendMessage() {
    const chatObject: ChatConfig = {
      id: this.index,
      sender: this.inputTitle,
      message: this.personForm.value.message
    }
    if(chatObject.message){
      this.chatService.chatData.next(chatObject);
      this.personForm.reset();
    }
  }
}
