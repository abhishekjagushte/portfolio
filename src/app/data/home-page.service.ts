import { Injectable } from '@angular/core';
import { SimpleSection } from '../models/simple-section.model';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor() { }

  initials: string = 'AJ';

  name: string = "Abhishek";
  surname: string = 'Jagushte';
  tagline: string =
    "A curious coder passionate about finished products & user experience! Currently working as Software Engineer at Zeus Learning.";

  greetingsLine: string = "Hey! I am,"

  email: string = 'mailto:abhishekjagushte@gmail.com';
  linkedIn: string = 'https://www.linkedin.com/in/abhishekjagushte';
  instagram: string = 'https://www.instagram.com/abhishekjagushte/';
  resume: string =
    'https://drive.google.com/file/d/1ifZ1__nMWhbJyg-ZS53I_wKpCsLsPMAQ/view?usp=sharing';

  connectLinks = [
    {
      link: 'mailto:abhishekjagushte@gmail.com',
      alt: 'Click here to email me',
      img: 'assets/mail.svg'
    },
    {
      link: 'https://www.linkedin.com/in/abhishekjagushte',
      alt: 'Click here to view my LinkedIn page.',
      img: 'assets/linkedin.svg'
    },
    {
      link: 'https://www.instagram.com/abhishekjagushte/',
      alt: 'Click here to view my Instagram page',
      img: 'assets/instagram.svg'
    },
    {
      link: 'https://drive.google.com/file/d/1ifZ1__nMWhbJyg-ZS53I_wKpCsLsPMAQ/view?usp=sharing',
      alt: 'Download my Resume',
      img: 'assets/resume.svg'
    },
    {
      link: 'https://github.com/abhishekjagushte',
      alt: 'CLick here to view my Github account.',
      img: 'assets/github.svg'
    },
    
  ]

  simpleSection: SimpleSection[] = [
    new SimpleSection(
      //title
      'What I Do ',

      //description
      [
        `I like developing new projects and exploring new technologies. I have a passion for good UI experience. I have explored and developed projects on Android Platform as well as web frameworks.`,
        `I am fluent in various object oriented programming languages like
        Java, Python, Kotlin yet constantly exploring them more. Apart from that I've been exploring competitive programming with the help of Data Structures and Algorithms, solving more and more problems with C/C++. 
       `,
        `I have released an Android Application on Google Play Store and have
        developed several applications as learning challenges in Java, Python
        and Kotlin.
`,
      ]
    )
  ];
}
