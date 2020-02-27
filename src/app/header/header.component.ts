import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userIcon = "./assets/images/user.png";
  public userAction = false;
  public menuShow = false;
  public visibleObj = {
    left:"0%",
    transition:"left 0.5s"
  };
  public invisibleObj = {
    left:"-70%",
    transition:"left 0.5s"
  };
  public isVisibleObj = this.invisibleObj;
  constructor(private router : Router) { }

  ngOnInit() {

  }
  onUserClick(){
    this.userAction = !this.userAction;
  }
  onUserMouseOut(){
    this.userAction = false;
  }
  onUserMouseOver(){
    this.userAction = true;
  }
  onMenuClick(){
    console.log(this.menuShow);
    this.menuShow = !this.menuShow;
    if(this.menuShow){
      this.isVisibleObj = this.visibleObj;
    }
    else{
      this.isVisibleObj = this.invisibleObj;
    }
  }
  onRoute(route){
      this.router.navigate(['/'+route]);
  }

}
