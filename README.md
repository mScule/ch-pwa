# CH PWA

## Commands

| Command                   | Description                                                            |
| ------------------------- | ---------------------------------------------------------------------- |
| `npm run dev`             | Start [dev server](http://localhost:5173/)                             |
| `npm run storybook`       | Start [storybook server](http://localhost:6006/)                       |
| `npm run test`            | Start testing session                                                  |
| `npm run lint`            | Run linter                                                             |
| `npm run preview`         | Run the built project in preview mode                                  |
| `npm run host`            | Run the built project in preview mode that external devices can access |
| `npm run build`           | Build the project                                                      |
| `npm run build-storybook` | Build storybook                                                        |

## How preview the app as PWA?

1. Build the app with `npm run build`
2. Preview the build with `npm run preview`

After these steps you can view the app as pwa at [port 4173](http://localhost:4172)

### What if I want to view it in my phone?

Preview the build with `npm run host` instead

## Technologies used

**Core library**: [React](https://react.dev/)

**Component library**: [Material UI](https://mui.com/)

**Unit testing library**: [Vitest](https://vitest.dev/)

**Component testing library**: [Testing Library](https://testing-library.com/)

**Authentication**: [Firebase](https://firebase.google.com/)
