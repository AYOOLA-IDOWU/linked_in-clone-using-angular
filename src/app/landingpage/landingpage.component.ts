import { Component } from '@angular/core';
interface details{name: string, age:number, address:string, school:string}

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  // union |
public firstname: string | number |boolean ='idowu'
public age: number | string = 20
public test: boolean=true
public x: undefined | number | string
public details: details={name:'Idowu', age:30, address:'Oke alapata', school: 'SQI'}
public arrayOne: (string | number | boolean)[]=['ayo', 3, true]
public arrayTwo: details[]=[
  {
    school: 'WIS', 
    age:20,
    name: 'Taiye',
    address: 'Ayoola stress'
}
]





ngOnInit(){
  // let x
  // x=30
  // this.x=500
// this.firstname='Hannah'
// console.log(this.firstname);
// console.log(this.x);
console.log(this.arrayTwo);

// console.log(this.arrayOne);



}
}
