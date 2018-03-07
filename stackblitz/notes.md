# Stackblitz

Information on how to embed

[stackblitz-sdk-instantly-add-live-environments-to-your-docs-blogs-more](https://medium.com/@ericsimons/stackblitz-sdk-instantly-add-live-environments-to-your-docs-blogs-more-73dab05c51ae)

```text
npm install --save @stackblitz/sdk
```

## Component

```typescript
import { Component, OnInit } from '@angular/core';
import {  } from '@angular/common';

import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  gitHubRepo: string = `buildmotion/better-business-logic-with-typescript/tree/master/DesignPatterns/template-method`
  title = 'Stackblitz :: template method pattern app';

  ngOnInit(): void {
    // load github repo: buildmotion/better-business-logic-with-typescript/tree/master/DesignPatterns/template-method
    sdk.embedGithubProject('stackblitz-app', this.gitHubRepo, {height: 820});
  }
}

```

```html
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
</div>
<div id="stackblitz-app"></div>


```