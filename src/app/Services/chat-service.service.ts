import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatConfig } from '../Components/person-comp/person-comp.component';

@Injectable({
  providedIn: 'root'
})

export class ChatServiceService {

  totalUsers = new Subject<number>();
  chatData  = new Subject<ChatConfig>()

  constructor() {
  
   }
}
