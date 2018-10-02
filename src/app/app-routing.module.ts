import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GunResolver } from '@app/services/guns.resolver.service';

import { HomeComponent } from './home/home.component';

import { OldComponent } from './home/old/old.component';
import { OldHomeComponent } from './home/old/old-home/old-home.component';
import { OldAboutComponent } from './home/old/old-about/old-about.component';
import { OldInventoryComponent } from './home/old/old-inventory/old-inventory.component';
import { OldHandgunsComponent } from './home/old/old-inventory/old-handguns/old-handguns.component';
import { OldLonggunsComponent } from './home/old/old-inventory/old-longguns/old-longguns.component';

import { NewComponent } from './home/new/new.component';
import { MainContentComponent } from './home/new/main-content/main-content.component';
import { MainComponent } from './home/new/main-content/main/main.component';
import { SidebarComponent } from './home/new/main-content/main-sidebar/sidebar.component';
import { AboutComponent } from './home/new/main-content/about/about.component';
import { StockComponent } from './home/new/main-content/stock/stock.component';
import { StockSidebarComponent } from './home/new/main-content/stock-sidebar/stock-sidebar.component';
import { StockListComponent } from '@app/home/new/main-content/stock/stock-list/stock-list.component';
import { StockDetailsComponent } from '@app/home/new/main-content/stock/stock-details/stock-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/old',
    pathMatch: 'full'
  },
  {
    path: 'old',
    component: OldComponent,
    children: [
      {
        path: '',
        component: OldHomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: OldAboutComponent,
        pathMatch: 'full'
      },
      {
        path: 'inventory',
        children: [
          {
            path: '',
            component: OldInventoryComponent,
            pathMatch: 'full'
          },
          {
            path: 'handguns',
            component: OldHandgunsComponent,
            pathMatch: 'full'
          },
          {
            path: 'longguns',
            component: OldLonggunsComponent,
            pathMatch: 'full'
          }
        ]
      }
    ]
  },
  {
    path: 'new',
    component: NewComponent,
    children: [
      {
        path: '',
        component: MainComponent,
        pathMatch: 'full',
        resolve: {
          guns: GunResolver
        }
      },
      // {
      //   path: '',
      //   component: SidebarComponent,
      //   outlet: 'sidebar'
      // },
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
      },
      // {
      //   path: 'inventory',
      //   component: StockSidebarComponent,
      //   outlet: 'sidebar'
      // },
      {
        path: 'inventory',
        component: StockComponent,
        children: [
          {
            path: '',
            component: StockListComponent,
            pathMatch: 'full'
          },
          {
            path: ':id',
            component: StockDetailsComponent,
            pathMatch: 'full'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
