import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ademo';
  final = [];
  data = [
    {
      'id': 'dashboard',
      'type': 'item'
    },
    {
      'id': 'twitter',
      'type': 'group',
      'child': [
        {
          'id': 'search',
          'type': 'item'
        }
      ]
    }
  ];
  nav = [
    {
      'id': 'dashboard',
      'type': 'item',
      'title': 'DASHBOARD'
    },
    {
      'id': 'twitter',
      'type': 'group',
      'title': 'TWITTER',
      'child': [
        {
          'id': 'search',
          'type': 'item',
          'title': 'SEARCH'
        },
        {
          'id': 'monitoring',
          'type': 'item',
          'title': 'MONITORING'
        }
      ]
    }
  ];

  ngOnInit(): void {
    for (const iterator of this.data) {
      if (iterator.type === 'item') {
        this.nav.filter((x) => x.id === iterator.id)
        .map((x) => {
          this.final.push({
            'id': x.id,
            'type': x.type,
            'title': x.title
          });
        });
        continue;
      }
      if (iterator.type === 'group') {
        this.nav.filter((x) => x.id === iterator.id)
        .map((x) => {
          this.final.push({
            'id': x.id,
            'type': x.type,
            'title': x.title,
            'child': this.children(iterator.child, x.child)
          });
        });
      }
    }
    console.log(this.final);
    }

    children(childData, childNav) {
      let child:any[] = [];
      for (const iterator of childData) {
        if (iterator.type === 'item') {
          childNav.filter((x) => x.id === iterator.id)
          .map((x) => {
            child.push({
              'id': x.id,
              'type': x.type,
              'title': x.title
            });
          });
          return child;
        }
    }
  }


}
