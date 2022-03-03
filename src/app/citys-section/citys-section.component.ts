import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citys-section',
  templateUrl: './citys-section.component.html',
  styleUrls: ['./citys-section.component.scss']
})
export class CitysSectionComponent implements OnInit {
  citys: any = [
    {
      "id": 1,
      "title": "باشاك شهير",
      "image": "https://iltizamtr.com/wp-content/uploads/2020/09/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A8%D9%8A%D8%B9-%D9%81%D9%8A-%D8%A8%D8%A7%D8%B4%D8%A7%D9%83-%D8%B4%D9%87%D9%8A%D8%B1-835x467.jpg",
      "count": 1,
      "description" :"عروض عقارية"
    },
    {
      "id": 2,
      "title": "بهشة شهير",
      "image": "https://i0.wp.com/www.portokoza.com/wp-content/uploads/2019/06/1-810x430.jpg?fit=810%2C430&ssl=1&w=810&quality=80&strip=all",
      "count": 4,
      "description" :"عروض عقارية"
    },
    {
      "id": 3,
      "title": "الواجهة البحرية",
      "image": "https://primedubai.com/wp-content/uploads/2019/07/ajmanmedia-600x338.jpg",
      "count": 5,
      "description" :"عروض عقارية"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
