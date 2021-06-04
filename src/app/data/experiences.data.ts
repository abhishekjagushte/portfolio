import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
  experiences = [
    new Experience(
      'Android Develpment Team Lead',
      'Naaniz',
      [
        'Leading a team of 15 interns and had them trained on Firebase & MVVM Architecture',
        'Successfully shifted to MVVM Application Architecture',
        'Executed transition of Android Application from a activity based approach to Android Jetpack Navigation Component based approach',
      ],
      [{ title: 'Certificate', link: '' }]
    ),

    new Experience(
        "Programming Head",
        "RGIT's Robotics Club",
        [
            "Secured AIR 7 in Robocon 2021 Stage 1 - Documentation with score 94/100",
            "Leading a team of 12 programming enthusiasts for developing efficient algorithms for robots",
            "Establishing and maintaining efficient codebase for projects of RGIT's Robotics Club",
            "Ensuring technical superiority in the communication mechanism and control mechanism for Robots to be developed for DD Robocon 2021"
        ],
        [{title: "RRC Website", link: "https://rgitsroboticsclub.com/"},
        {title: "DD Robocon 2021", link: "http://www.ddrobocon.in/"}
        ]
    ),

    new Experience(
        "Marketing Head",
        "RGIT's Robotics Club",
        [
            "Improving the digital Marketing for Club Events",
            "Searching and interacting with Club Sponsors",
            "Improving the reach of RGIT's Robotics Club aiming towards better recruitments"
        ],
        [
            {title: "RRC Website", link: "https://rgitsroboticsclub.com/"},            
            {title: "RRC Instagram handle", link: "https://www.instagram.com/roboticsclubrgit/"}
        ]
    ),

  ];
}
