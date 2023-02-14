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
      { title: "Android", measure: 80, image: "assets/android.webp", color: "#32de84" },
      { title: "NodeJS", measure: 100, image: "assets/nodejs.webp", color: "#76bb76" },
      { title: "Angular", measure: 70, image: "assets/angular.png", color: "#d45050" },
      { title: "React", measure: 55, image: "assets/reactjs.png", color: "#61dbfb" },
    ]
  )

  
  public dbTechnologies: BarGraph = new BarGraph(
    "Database Technologies",
    [ 
      { title: "Beg.", level: 25 }, 
      { title: "Int.", level: 60 }, 
      { title: "Exp.", level: 100 }
    ],
    [ 
      { title: "PostgreSQL", measure: 95, image: "assets/postgreSQL.png", color: "#2f6792" },
      { title: "Firbase", measure: 70, image: "assets/firebase.png", color: "#ffa100" },
      { title: "MySQL", measure: 80, image: "assets/mySQL.png", color: "#5383a1" },
      { title: "MongoDB", measure: 55, image: "assets/mongodb.webp", color: "#4caf54"}
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
      { title: "Java/Kotlin", measure: 83, image: "assets/kotlin.webp", color: "#e27923" },
      { title: "Typescript", measure: 97, image: "assets/typescript.webp", color: "#3679c5" },
      { title: "Python", measure: 65, image: "assets/python.png", color: "#e6d326" },
      { title: "C/C++", measure: 60, image: "assets/c.webp", color: "#5248d4"}
    ]
  )

  public otherTechnologies = [
    {img: "assets/javascript.webp", name: "JavaScript"},
    {img: "assets/wordpress.webp", name: "Wordpress"},
    {img: "assets/Git.webp", name: "Git"},
    {img: "assets/expressjs.png", name: "Express"}
  ]

  public barGraphs = [
    this.technologies,
    this.dbTechnologies,
    this.languages
  ]

  constructor() { }
}
