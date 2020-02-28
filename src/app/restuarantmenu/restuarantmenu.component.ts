import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-restuarantmenu',
  templateUrl: './restuarantmenu.component.html',
  styleUrls: ['./restuarantmenu.component.css']
})
export class RestuarantmenuComponent implements OnInit {

   @ViewChild('menubar', { read: ElementRef } as any) public menubar: ElementRef<any>;
  constructor() { }

  ngOnInit() {
  }

  onMenuLeft(){
    this.menubar.nativeElement.scrollTo({ left: (this.menubar.nativeElement.scrollLeft - 150), behavior: 'smooth' })
  }
  onMenuRight(){
    this.menubar.nativeElement.scrollTo({ left: (this.menubar.nativeElement.scrollLeft + 150), behavior: 'smooth' })
  }

}
