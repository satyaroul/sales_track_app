import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/service/constants.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-withpass',
  templateUrl: './withpass.component.html',
  styleUrls: ['./withpass.component.scss'],
})
export class WithpassComponent implements OnInit {
isActive = false;
  constructor(private constService :  ConstantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {}

  login(){
   this.isActive =  this.constService.checkUserDetails();
   if (this.isActive == true) {
     this.router.navigate(['/setup'], { relativeTo: this.route });
   } else {
     this.router.navigate(['/register'], { relativeTo: this.route })
   }
  }
}
