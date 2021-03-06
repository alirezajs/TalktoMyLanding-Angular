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
import { CommentComponent } from './pages/comment/comment.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './services/request.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HomeComponent } from './pages/home/home.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { ResponseCommentCardComponent } from './components/response-comment-card/response-comment-card.component';
import { MessageTimePipe } from './pipes/message-time-pipe';
import { CommentService } from './services/comment.service';
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
    CommentComponent,
    HomeComponent,
    CommentCardComponent,
    ResponseCommentCardComponent,
    MessageTimePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
  providers: [
    CommentService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
