import { Routes } from '@angular/router';
import { TorneioComponent } from './torneio/torneio.component';
import { TorneioDetalheComponent } from './torneio-detalhe/torneio-detalhe.component';

export const routes: Routes = [
    { path: '', redirectTo: '/torneios', pathMatch: 'full' },
    { path: 'torneios', component: TorneioComponent },
    { path: 'torneio-detalhe', component: TorneioDetalheComponent }
];

