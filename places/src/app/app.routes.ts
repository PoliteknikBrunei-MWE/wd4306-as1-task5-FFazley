import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  },
  // {
  //   path: 'places',
  //   loadComponent: () =>
  //     import('./places/places.page').then((m) => m.PlacesPage),
  // },

  {
    path: 'offers',
    loadComponent: () =>
      import('./places/offers/offers.page').then((m) => m.OffersPage),
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'places',
        loadComponent: () =>
          import('./places/places.page').then((m) => m.PlacesPage),
      },
      {
        path: 'offers',
        loadComponent: () =>
          import('./places/offers/offers.page').then((m) => m.OffersPage),
      },
    ],
  },
  {
    path: 'places',
    redirectTo: '/tabs/places',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
  },
  {
    path: 'discover',
    loadComponent: () => import('./places/discover/discover.page').then( m => m.DiscoverPage)
  },
];