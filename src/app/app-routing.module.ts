import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageDashboardComponent } from "./pages/page-dashboard/page-dashboard.component";
import { PageInscriptionComponent } from "./pages/page-inscription/page-inscription.component";
import { PageLoginComponent } from "./pages/page-login/page-login.component";
import { PageStatisquesComponent } from "./pages/page-statisques/page-statisques.component";

const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statistiques',
        component: PageStatisquesComponent
      },
      {
        path: 'articles',
        component: PageArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

