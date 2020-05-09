import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'related',
    loadChildren: () => import('./pages/related/related.module').then( m => m.RelatedPageModule)
  },
  {
    path: 'brainstorm',
    loadChildren: () => import('./pages/brainstorm/brainstorm.module').then( m => m.BrainstormPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
