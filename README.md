# AngularLibrary

This is a demo project that shows how to release a library to npm.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install my-lib
```

## Usage

```typescript
@Component({
  selector: 'my-component',
  template: ` <my-lib></my-lib> `,
  imports: [MyLibComponent],
})
export class MyComponent {}
```
