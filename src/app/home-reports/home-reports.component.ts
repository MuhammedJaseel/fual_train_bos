import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-reports',
  templateUrl: './home-reports.component.html',
  styleUrls: ['./home-reports.component.css']
})
export class HomeReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbarData = [
    {
      name: "All Reports",
      subMenu: [{
        cardName: "Equipment wise alarm",
        cardDesc: "Description"
      },
      {
        cardName: "Field officer inspection",
        cardDesc: "Description"
      },
           
      ]
    },
    {
      name: "Trends Report",
      subMenu: [{
        cardName: "Equipment wise alarm",
        cardDesc: "Description"
      },         
      ]
    },
    {
      name: "Transactions",
      subMenu: [{
        cardName: "",
        cardDesc: ""
      },         
      ]
    },
    {
      name: "Deliveries",
      subMenu: [{
        cardName: "",
        cardDesc: ""
      },         
      ]
    },
    {
      name: "Report builder",
      subMenu: [{
        cardName: "",
        cardDesc: ""
      },         
      ]
    },
    {
      name: "Custom Report",
      subMenu: [{
        cardName: "",
        cardDesc: ""
      },         
      ]
    },
    {
      name: "Data Reconcilation Report",
      subMenu: [{
        cardName: "",
        cardDesc: ""
      },         
      ]
    },
  ]

  onNavIconClick = (k: number) =>
  {
    
  }

}
