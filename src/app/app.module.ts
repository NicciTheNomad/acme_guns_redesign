import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
// import { GunResolver } from './services/guns.resolver';
// import { GunsService } from './services/guns.service';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { HomeComponent } from './home/home.component';

import { OldComponent } from './home/old/old.component';
import { OldHomeComponent } from './home/old/old-home/old-home.component';
import { OldAboutComponent } from './home/old/old-about/old-about.component';
import { OldInventoryComponent } from './home/old/old-inventory/old-inventory.component';
import { OldHandgunsComponent } from './home/old/old-inventory/old-handguns/old-handguns.component';
import { OldLonggunsComponent } from './home/old/old-inventory/old-longguns/old-longguns.component';

import { NewComponent } from './home/new/new.component';
import { HeaderComponent } from './home/new/header/header.component';
import { FooterComponent } from './home/new/footer/footer.component';
import { MainContentComponent } from './home/new/main-content/main-content.component';

import { MainComponent } from './home/new/main-content/main/main.component';

import { SidebarComponent } from './home/new/main-content/main-sidebar/sidebar.component';
import { ContactInfoComponent } from './home/new/main-content/main-sidebar/contact-info/contact-info.component';
import { QuickPicksComponent } from './home/new/main-content/main-sidebar/quick-picks/quick-picks.component';
import { MapComponent } from './home/new/main-content/main-sidebar/map/map.component';
import { AboutComponent } from './home/new/main-content/about/about.component';
import { StockComponent } from './home/new/main-content/stock/stock.component';
import { StockSidebarComponent } from './home/new/main-content/stock-sidebar/stock-sidebar.component';
import { StockListComponent } from './home/new/main-content/stock/stock-list/stock-list.component';
import { StockDetailsComponent } from './home/new/main-content/stock/stock-details/stock-details.component';
import { StockBreadcrumbsComponent } from './home/new/main-content/stock/stock-breadcrumbs/stock-breadcrumbs.component';
import { SearchComponent } from './home/new/main-content/stock/search/search.component';
import { CarouselComponent } from './home/new/main-content/main/carousel/carousel.component';
import { CarouselItemComponent } from './home/new/main-content/main/carousel-item/carousel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    SidebarComponent,
    ContactInfoComponent,
    QuickPicksComponent,
    MapComponent,
    MainComponent,
    AboutComponent,
    StockComponent,
    StockSidebarComponent,
    StockListComponent,
    StockDetailsComponent,
    StockBreadcrumbsComponent,
    SearchComponent,
    OldComponent,
    NewComponent,
    OldHomeComponent,
    OldAboutComponent,
    OldInventoryComponent,
    OldHandgunsComponent,
    OldLonggunsComponent,
    ToggleComponent,
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SlideshowModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
