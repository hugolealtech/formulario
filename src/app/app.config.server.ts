// Verifique se o arquivo server.config.ts realmente existe
import { mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

// Caso não use um arquivo server.config.ts, apenas passe a configuração appConfig
export const config = mergeApplicationConfig(appConfig);
