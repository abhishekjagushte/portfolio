import { Component, Input, OnInit } from '@angular/core';
import { BarGraph } from 'src/app/models/graphs/bar-graph.model';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  @Input("barGraph") barGraph: BarGraph = new BarGraph("",[],[])

  constructor() { }

  ngOnInit(): void {
  }

}
