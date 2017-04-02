import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './components/app.component';
import {ClockComponent} from "./components/clock.component";
import {EmbeddedDialogComponent} from "./components/embeddedDialog.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ClockComponent,
        EmbeddedDialogComponent
    ],
    bootstrap: [AppComponent],
    providers: [
    ]
})
export class AppModule {
}
