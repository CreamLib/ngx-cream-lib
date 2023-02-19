import { Component } from '@angular/core';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css'],
})
export class ConfigPageComponent {
  pageTitle = 'Configuring CreamNg';

  codeCommand = `
  "styles": [
    "/node_modules/ngx-cream-lib/assets/css/main.css"
  ],`;

  codeAsset = `
  "assets": [
    "src/favicon.ico",
    "src/assets",
  ],`;

  codeAssetHighlight = `
  {
    "glob": "**/*",
    "input": "./projects/ngx-cream-lib/assets",
    "output": "/assets/"
  }`;

  codeInternationalisation = `...
  <trans-unit id="7022070615528435141" datatype="html">
    <source>Delete</source>
    <target>Supprimer</target>

    <context-group purpose="location">
      <context context-type="sourcefile">projects/ngx-cream-lib/src/lib/chip/chip.component.html</context>
      <context context-type="linenumber">19</context>
    </context-group>
  </trans-unit>
          ...`;
}
