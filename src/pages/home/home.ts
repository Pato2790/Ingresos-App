import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Login } from '../../pages/login/login';

import { ProductoresList } from '../../pages/productoresList/productoresList';
import { NewProductor } from '../../pages/new-productor/new-productor';
import { CamionesList } from '../../pages/camiones-list/camiones-list';
import { EmpresasList } from '../../pages/empresas-list/empresas-list';
import { InstitucionesList } from '../../pages/instituciones-list/instituciones-list';
import { ChacrasList } from '../../pages/chacras-list/chacras-list';
import { IngresosList } from '../../pages/ingresos-list/ingresos-list';
import { NewIngreso } from '../../pages/new-ingreso/new-ingreso';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	pages = [
      { title: 'Ingresos', icon: 'crop', component: IngresosList },
      { title: 'Nuevo Ingreso', icon: 'add', component: NewIngreso },
      { title: 'Productores', icon: 'contact', component: ProductoresList },
      { title: 'Nuevo Productor', icon: 'add', component: NewProductor },
      { title: 'Empresas', icon: 'briefcase', component: EmpresasList },
      { title: 'Chacras', icon: 'leaf', component: ChacrasList },
      { title: 'Camiones', icon: 'bus', component: CamionesList },
      { title: 'Instituciones', icon: 'home', component: InstitucionesList }
    ];

  	constructor(public navCtrl: NavController, public AuthServiceProvider: AuthServiceProvider) {
  		
  	}

  	signOut() {
	    this.AuthServiceProvider.signOut();
	    this.navCtrl.setRoot(Login);
	}

	goToPage(page)
	{
		this.navCtrl.push(page.component);
	}
}
