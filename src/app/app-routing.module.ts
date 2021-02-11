import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// import { CrisisListComponent } from './crisis-list/crisis-list.component';
/* . . . */
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

SelectivePreloadingStrategyService

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
/* . . . */
{
  path: 'compose',
  component: ComposeMessageComponent,
  outlet: 'popup'
},
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  // canLoad: [AuthGuard]
},
{
  path: 'crisis-center',
  loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
  data: { preload: true }
},
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true,
        // preloadingStrategy: PreloadAllModules } // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService } // <-- debugging purposes only
      
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}