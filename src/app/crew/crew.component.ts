import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate: object){
    console.log("Adding...", candidate["name"]);
    this.inCrew = this.crew.includes(candidate);
    if(this.crew.length < 3 && !this.inCrew){
      this.crew.push(candidate);
    }
    if(this.inCrew){
      let index: number = this.crew.indexOf(candidate, 0);
      console.log((index == -1), candidate["name"]);
      this.crew.splice(index, 1);
    }
  }

}
