import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ServiceComponent } from './components/service/service.component';
import { ScreenShotComponent } from './components/screen-shot/screen-shot.component';
import { PostComponent } from './components/post/post.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RandomCommentComponent } from './pages/random-comment/random-comment.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './services/request.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureComponent,
    ServiceComponent,
    ScreenShotComponent,
    PostComponent,
    ContactUsComponent,
    FooterComponent,
    RandomCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
