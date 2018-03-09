import { Inject, Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    public isProd : Boolean;
    public devServiceUrl:String;
    public prodServiceUrl : String;
    constructor() {
        this.isProd=false;
        this.devServiceUrl="http://localhost:8080/";
        this.prodServiceUrl="";
    }

}