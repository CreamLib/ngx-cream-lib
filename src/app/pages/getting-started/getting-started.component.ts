import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css'],
})
export class GettingStartedComponent {
  pageTitle = 'Getting Started';

  commandAngular = `npm install -g angular-cli@latest`;
  commandNgxCreamLib = `npm install ngx-cream-lib`;
  commandInclude = `
import { NgxCreamLibModule } from 'ngx-cream-lib';


imports: [NgxCreamLibModule]
`;
}
