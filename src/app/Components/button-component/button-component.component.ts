import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {
  @Input() label !: string
  @Input() icon !: string
  @Input() buttonStyle !: string
  @Input() disabled !: boolean

  primarybuttonClass : string = 'button'
  buttonClass : string = ''
  constructor() { }

  ngOnInit(): void {
    this.buttonClass = this.buttonStyle;
  }

}
