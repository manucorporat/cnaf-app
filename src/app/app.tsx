import { Component, Element } from '@stencil/core';
import '@ionic/core';

@Component({
  tag: 'my-app',
})
export class App {

  private searchByName: string = "page-home";

  @Element() el: HTMLElement;

  getNav(): any {
    return this.el.querySelector('ion-nav');
  }

  setPage(name: string) {
    if (this.searchByName !== name) {
      this.getNav().setRoot(name);
      this.searchByName = name;
    }
  }

  setByName() {
    this.setPage('page-home');
  }

  setByFreq() {
    this.setPage('page-range');
  }

  protected render() {

    return (
      <ion-app>
        <ion-router useHash={true}>
          <ion-route-redirect from="/" to="by_name" />
          <ion-route url="by_name" component="page-home" />
          <ion-route url="by_freq" component="page-range" />
        </ion-router>,
      <ion-split-pane when={true}>
          <ion-menu>
            <ion-header>
              <ion-toolbar color="dark">
                <ion-title>CNAF app</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <ion-item href="by_name">Buscar por nombre</ion-item>
                <ion-item href="by_freq">Buscar por banda</ion-item>
              </ion-list>
            </ion-content>
          </ion-menu>
          <ion-router-outlet main />
        </ion-split-pane>
      </ion-app>
    );
  }
}
