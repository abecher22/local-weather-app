import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { WeatherService } from "../weather/weather.service";
import { WeatherServiceFake } from "../weather/weather.service.fake";
import { CurrentWeatherComponent } from "./current-weather.component";
import { MaterialModule } from "../material.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material";

describe("CurrentWeatherComponent", () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      imports: [MaterialModule, NoopAnimationsModule, MatFormFieldModule],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
