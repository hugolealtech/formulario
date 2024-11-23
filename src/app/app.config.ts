import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()), // Coloque o roteador diretamente dentro de providers
    provideAnimations(),
  ],
};
