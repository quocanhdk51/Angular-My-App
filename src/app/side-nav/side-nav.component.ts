import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  closeNav(): void {
    (document.getElementById("mySidenav") as HTMLElement).classList.remove("sidenav--open");
    (document.getElementById("main") as HTMLElement).classList.remove("main--open");
    (document.getElementById("opacity") as HTMLElement).classList.remove("opacity-overlay");
  }

  openNav(): void {
    (document.getElementById("mySidenav")  as HTMLElement).classList.add("sidenav--open");
    (document.getElementById("main")  as HTMLElement).classList.add("main--open");
    (document.getElementById("opacity") as HTMLElement).classList.add("opacity-overlay");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
