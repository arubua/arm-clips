import { Routes, RouterModule} from "@angular/router";

import { MovieComponent } from "./movies/movie.component";

const routes: Routes = [
  {path: "movies", component: MovieComponent},
  {path: "", redirectTo: "/movies", pathMatch: "full"}

];


export const AppRoutingModule = RouterModule.forRoot(routes);
