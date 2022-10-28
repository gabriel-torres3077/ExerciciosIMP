import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './exercises/consulta/consulta.component';
import { MathComponent } from './exercises/math/math.component';
import { TextInputComponent } from './exercises/text-input/text-input.component';
import { HubComponent } from './hub/hub.component';

const routes: Routes = [
  {
    path: 'exercises',
    component: HubComponent,
    children: [
      {
        path: 'textInput',
        component: TextInputComponent,
      },
      {
        path: 'consulta',
        component: ConsultaComponent,
      },
      {
        path: 'math',
        component: MathComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
