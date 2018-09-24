import { async, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import { WeatherService } from "./weather/weather.service";
import { WeatherServiceFake } from "./weather/weather.service.fake";
import { MaterialModule } from "./material.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitySearchComponent } from './city-search/city-search.component';

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CurrentWeatherComponent, CitySearchComponent],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("span").textContent).toContain("Local Weather");
  }));
});
