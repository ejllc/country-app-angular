import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';


  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
    this.countries = this.countriesService.cacheStore.byCountry.countries;
  }

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }

}
