import { Injectable } from '@angular/core';
import { BarGraph } from '../models/graphs/bar-graph.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {


  public technologies: BarGraph = new BarGraph(
    "Technologies",
    [ 
      { title: "Beg.", level: 25 }, 
      { title: "Int.", level: 60 }, 
      { title: "Exp.", level: 100 }
    ],
    [ 
      { title: "Android", measure: 75, image: "assets/android.webp", color: "#32de84" },
      { title: "NodeJS", measure: 90, image: "assets/nodejs.webp", color: "#76bb76" },
      { title: "Angular", measure: 73, image: "assets/angular.png", color: "#d45050" },
      { title: "Firebase", measure: 65, image: "assets/firebase.png", color: "#ffa500"}
    ]
  )


  public languages: BarGraph = new BarGraph(
    "Languages",
    [ 
      { title: "Beg.", level: 25 }, 
      { title: "Int.", level: 60 }, 
      { title: "Exp.", level: 100 }
    ],
    [ 
      { title: "Typescript", measure: 97, image: "assets/typescript.webp", color: "#3679c5" },
      { title: "Java/Kotlin", measure: 83, image: "assets/kotlin.webp", color: "#e27923" },
      { title: "Python", measure: 65, image: "assets/python.png", color: "#e6d326" },
      { title: "C/C++", measure: 60, image: "assets/c.webp", color: "#5248d4"}
    ]
  )

  constructor() { }
}
