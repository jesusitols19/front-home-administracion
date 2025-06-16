import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FormPostulanteComponent } from './Components/form-postulante/form-postulante.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'FormularioPostulante',
        component:FormPostulanteComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
    
];
