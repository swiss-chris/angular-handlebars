import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyContainerComponent } from './components/my-container/my-container.component';
import { SafeHtmlPipe } from './components/safe-html-pipe.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MyContainerComponent,
    SafeHtmlPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
