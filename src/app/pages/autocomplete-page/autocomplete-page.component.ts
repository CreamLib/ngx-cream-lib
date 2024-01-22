import { Component } from '@angular/core';

@Component({
  selector: 'app-autocomplete-page',
  templateUrl: './autocomplete-page.component.html',
  styleUrls: ['./autocomplete-page.component.css'],
})
export class AutocompletePageComponent {
  pageTitle = 'Autocomplete';
  componentName = 'c3m-autocomplete';
  resourceType = 'Component';

  countries = [
    'Hauts-de-France',
    'Normandie',
    'Grand Est',
    'Bretagne',
    'Ile-de-France',
    'Pays de la Loire',
    'Centre-Val de Loire',
    'Bourgogne-Franche-Comte',
    'Nouvelle Aquitaine',
    'Auvergne-Rhone-Alpes',
    'Occitanie',
    'Corse',
    'Mayotte',
    'La Reunion',
    'Guyane',
    'Martinique',
    'Guadeloupe',
  ];
}
