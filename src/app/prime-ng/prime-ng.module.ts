import { NgModule } from "@angular/core";

//PrimeNg
import { ButtonModule } from "primeng/button";
/* import { CardModule } from 'prime/card'; */
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
    exports: [
        ButtonModule,
        /* CardModule */
        MenubarModule
    ],
})

export class PrimeNgModule{ }