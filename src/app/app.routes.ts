import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';
import { LayoutComponent } from './layout/layout.component';
import { DictionaryComponent } from './modules/dictionary/dictionary.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, 
        children: [
            {path: 'dictionary', component: DictionaryComponent}
        ]
    },
    {
        path: '', component: DictionaryComponent
    },
    {
        path: 'auth', component: AuthComponent,
        children: [
            {
                path: '', component: SignInComponent
            },
        ]
    }
];
