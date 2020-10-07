import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

@Input()
showSidebar: boolean;

@Output()
showSidebarChange:EventEmitter<boolean> = new EventEmitter<boolean>();

constructor(private appService:AppService,private router:Router) { }

ngOnInit() {
  }

  afficherSidebar(){
    this.showSidebar = !this.showSidebar;
    this.showSidebarChange.emit(this.showSidebar);
  }

  logout(){
    this.appService.logout(()=>{
      this.router.navigateByUrl('/login');
    });
  }
}
