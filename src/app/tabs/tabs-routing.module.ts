import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'sound',
        loadChildren: () => import('../pages/sound/sound.module').then(m => m.SoundPageModule)
      },
      {
        path: 'related',
        loadChildren: () => import('../pages/related/related.module').then(m => m.RelatedPageModule)
      },
      {
        path: 'rhymeBook',
        loadChildren: () => import('../pages/rhymeBook/rhymeBook.module').then(m => m.RhymeBookPageModule)
      },
      {
        path: 'brainstorm',
        loadChildren: () => import('../pages/brainstorm/brainstorm.module').then(m => m.BrainstormPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/rhymeBook',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/rhymeBook',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
