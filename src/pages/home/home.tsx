import { Component, Element, Listen, State, Prop } from '@stencil/core';
import { Segment, searchDataPoints } from '../../helpers';

@Component({
  tag: 'page-home',
  styleUrl: 'home.css'
})
export class HomePage {

  private width: number;
  private data: Segment[];
  private maxValue: number;
  private tr: any;
  private maps: any[] = [];

  @State() count = 0;

  @Element() el: HTMLElement;

  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: HTMLIonModalControllerElement;

  @Listen('input')
  onInput(ev) {
    if (this.data) {
      const text = ev.target.value;
      this.scheduleSearch(text);
    }
  }

  @Listen('keydown.enter')
  onInputEnter() {
    this.addHeapMap();
  }

  async componentDidLoad() {
    const response = await fetch('assets/data/data.json')
    this.data = await response.json();
    this.maxValue = Math.log10(this.data[this.data.length - 1].max);
    this.width = this.el.offsetWidth;

    this.addHeapMap();
  }

  getText(): string {
    return this.el.querySelector('input').value;
  }

  addHeapMap() {
    const prev = this.getHeapMap();
    if (prev) {
      prev.label = this.getText();
    }
    this.maps.push({
      data: this.search(this.getText()),
      width: this.width
    });
    this.update();
  }

  scheduleSearch(text: string) {
    clearInterval(this.tr);
    this.tr = setTimeout(() => this.setData(this.search(text)), 100);
  }

  getHeapMap() {
    return this.maps[this.maps.length - 1];
  }

  setData(data: any[]) {
    this.getHeapMap().data = data;
    this.update();
  }

  search(text: string) {
    return searchDataPoints(this.data, this.width / this.maxValue, text);
  }

  async openDetailPage(label: any) {
    if (label) {
      const modal = await this.modalCtrl.create({
        component: 'page-details',
        componentProps: {
          label,
          data: this.data,
        }
      });
      await modal.present();
    }
  }

  update() {
    this.count = this.count + 1;
  }

  protected render() {
    const maps = this.maps;
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-menu-button/>
          </ion-buttons>
          <ion-title>Busqueda por nombre</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-searchbar></ion-searchbar>
        <div>{maps.map((m) => mapHeatMap(this, m.label, m.width, m.data)).reverse()}</div>
      </ion-content>
    ];
  }
}

function mapHeatMap(obj: any, label: any, width: any, data: any) {
  return <my-heatmap
    label={label}
    width={width}
    data={data}
    onClick={function (ev: any) {
      const t = ev.target.closest('my-heatmap').label;
      obj.openDetailPage(t);
    }} />
}
