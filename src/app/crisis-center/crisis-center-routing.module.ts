import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

const crisisCenterRoutes: Routes = [
  {
    path: 'routing/crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
          },
          {
            path: '',
            component: CrisisCenterHomeComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule],
})
export class CrisisCenterRoutingModule {}

// const crisisCenterRoutes: Routes = [
//   {
//     path: 'routing/crises',
//     component: CrisisListComponent,
//     data: { animation: 'crises' },
//   },
//   {
//     path: 'routing/crisis/:id',
//     component: CrisisDetailComponent,
//     data: { animation: 'crisis' },
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(crisisCenterRoutes)],
//   import { CrisisListComponent } from './../crisis-list/crisis-list.component';

// })
// export class CrisisCenterRoutingModule  {}
