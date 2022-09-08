# MableFrontendEngineeringChallenge

Frontend engineering challenge from Mable.

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.
- I use RxJs as it was provided with Angular upon install, and a standard library with it.

## Getting Started

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Remaining Work

- Add guide lines for each list using the ::before object
- Clean up the css. Add improved styling for buttons and nodes
- Fix some bugs in the add/delete algorithms - uses DFS. I likely needs improvements and proper testing given its the most complex part.
- Move the node editing to the service so components are dumb and dont do work.
- Improve the layout to serpate dumb components from feature level ones (components that call services are smart, common ones that just emit upwards are dumb).
- Create a generic component file and folder components extend so it can share the proposed-name logic once rather than duplicating.
- JS recursion doesnt have tail call optimization support in all browsers - switch from recursion to loops......
