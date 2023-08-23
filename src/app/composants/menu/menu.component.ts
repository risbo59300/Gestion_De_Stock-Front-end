import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fa-solid fa-chart-line',
      url: '',
      sousMenu: [
        {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'fa-solid fa-chart-pie',
        url: '',
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'fa-solid fa-chart-column',
          url: 'statistiques',
        },
      ]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fa-solid fa-boxes-stacked',
      url: '',
      sousMenu: [
        {
        id: '21',
        titre: 'Articles',
        icon: 'fa-solid fa-boxes-stacked',
        url: 'articles',
        },
        {
          id: '22',
          titre: 'Mouvements du stock',
          icon: 'fa-brands fa-stack-overflow',
          url: 'mvtstk',
        },
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fa-solid fa-users',
      url: '',
      sousMenu: [
        {
        id: '31',
        titre: 'Clients',
        icon: 'fa-solid fa-users',
        url: 'clients',
        },
        {
          id: '32',
          titre: 'Commande clients',
          icon: 'fa-solid fa-basket-shopping',
          url: 'commandesclient',
        },
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fa-solid fa-users',
      url: '',
      sousMenu: [
        {
        id: '41',
        titre: 'Fournisseurs',
        icon: 'fa-solid fa-users',
        url: 'fournisseurs',
        },
        {
          id: '42',
          titre: 'Commande fournisseur',
          icon: 'fa-solid fa-truck',
          url: 'commandesfournisseur',
        },
      ]
    },
    {
      id: '5',
      titre: 'Paramétrages',
      icon: 'fa-solid fa-gear',
      url: '',
      sousMenu: [
        {
        id: '51',
        titre: 'catégories',
        icon: 'fa-solid fa-screwdriver-wrench',
        url: '',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fa-solid fa-users-gear',
          url: '',
        }
      ]
    }
  ]

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  navigate(url?: string): void {
    this.router.navigate([url]);
  }

}
