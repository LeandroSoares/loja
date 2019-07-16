import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Output() dismiss = new EventEmitter<any>();
  @Input() title = "Dialog";
  constructor() { }

  ngOnInit() {
  }
  onDismiss() {
    this.dismiss.emit();
  }
}
