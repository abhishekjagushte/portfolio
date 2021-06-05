import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";

@Injectable({providedIn: "root"})
export class ProjectsService{
    projects: Project[] = [
        new Project("Attendance Organizer",
        "An intuitive attendance manager Android application for university students which gives insightful tips to 'organize' attendance",
        "../../assets/ao.png",
        ["../../assets/java.png"],
        "https://play.google.com/store/apps/details?id=com.abhishekjagushte.attendanceorganizer&hl=en&gl=US"),

        new Project("Engage Chat Application",
        "A chat application built for Android employing the latest and Google recommended MVVM architechture and all the new Android Jetpack libraries.",
        "../../assets/chat.png",
        ["../../assets/kotlin.jpeg",
        "../../assets/firebase.png"],
        "https://github.com/abhishekjagushte/Engage"),

        new Project("Piction Photo Editor",
        "A lightweight python image editor application that allows most of the common image editing options with minimal complexity.",
        "../../assets/taylor.jpg",
        ["../../assets/python.png",
        "../../assets/opencv.png"],
        "https://github.com/abhishekjagushte/Piction-Photo-Editor"),

        new Project("Website for RGIT's Robotics Club",
        "The official website of RGIT's Robotics Club. This website is designed to notify students about the events conducted by RRC and carry out registrations smoothly.",
        "../../assets/robotics.png",
        ["../../assets/wordpress.webp"],
        "https://www.rgitsroboticsclub.com/")
    ]

}
