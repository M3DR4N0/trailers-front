import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { TrailersModule } from './features/trailers/trailers.module';
import { CoreInterceptor } from './core/interceptor/core.interceptor';


@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        NgxSpinnerModule,
        MatPaginatorModule,
        SharedModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: CoreInterceptor, multi: true }
    ]
})
export class AppModule { }
