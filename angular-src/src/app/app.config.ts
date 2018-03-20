import { InjectionToken } from '@angular/core';

export interface AppConfig {
    isProd : Boolean;
    devServiceUrl:string;
    prodServiceUrl : string;
  }

  export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
  
  export const HERO_DI_CONFIG: AppConfig = {
    isProd:false,
    devServiceUrl:"http://localhost:8080/",
    prodServiceUrl:""
  };
  


