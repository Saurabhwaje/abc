import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
// import { CtsComponent } from './cts/cts.component';
import { CtaComponent } from './cta/cta.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatChipsModule } from '@angular/material/chips';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ClientComponent,
    // CtsComponent,
    CtaComponent,
    HeaderComponent,
    HeroComponent,
    SkillsComponent,
    TestimonialsComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
