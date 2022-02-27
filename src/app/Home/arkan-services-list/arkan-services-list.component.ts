import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arkan-services-list',
  templateUrl:'./arkan-services-list.component.html',
  styleUrls: ['./arkan-services-list.component.scss']
})
export class ArkanServicesListComponent implements OnInit {
  Services:any=[
    {
      "title":"خدمات ما بعد البيع",
      "description":"يقوم فريقنا بمتابعة العميل بكافة خدمات ما قبل وما بعد البيع ، حتى في حال غياب العميل أيضا ، فإن مجموعة أركان للإستثمار والتطوير العقاري هدفها راحة العميل أولا",
    },
    {
      "title":"الجنسية التركية",
      "description":"نضمن لكم الحصول على الجنسية التركية بعد اختيار العقار المناسب لكم والقيام بالإجراءات اللازمة حتى استلام الهوية التركية وجواز السفر في مدة لا تتجاوز 100 يوم",
    },
    {
      "title":"الاستثمار العقاري",
      "description":"نقوم بتوعية العميل للأمور التي يجب أخذها بعين الإعتبار ليحقق الإستثمار العقاري المرغوب به ، وذلك عن طريق عرض عدة مشاريع قمنا باختيارها خصيصا للمستثمرين",
    },
    {
      "title":"الخدمات القانونية",
      "description":"نهتم بجعل عملية الشراء أكثر سلاسة وسهولة للعميل عن طريق المحاميين القانونيين الذين يقومون بترتيب جميع الأمور ليحظى العميل بتجربة شراء متكاملة",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
