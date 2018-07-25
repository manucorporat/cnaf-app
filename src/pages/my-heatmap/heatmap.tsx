import { Component, Element, Prop } from '@stencil/core';
import simpleheat from 'simpleheat';
import { format } from '../../helpers';

@Component({
  tag: 'my-heatmap',
  styleUrl: 'heatmap.css'
})
export class Heapmap {

  private heat: any;
  private legends: string[] = [];
  @Element() el: HTMLElement;

  @Prop() min = 1;
  @Prop() max = 275000000;
  @Prop() heatMax = 40;
  @Prop() heatSize = 4;
  @Prop() heatBlur = 0;
  @Prop() height = 100;
  @Prop() width = 300;
  @Prop() data: any[];
  @Prop() label: string;

  constructor() {
    const min = Math.log10(this.min);
    const max = Math.log10(this.max);
    const nu = 10;
    const step = (max - min) / nu;
    let value = min;
    for (let i = 0; i < nu; i++) {
      let r = Math.pow(10, value);
      this.legends.push(format(r));
      value += step;
    }
  }

  async componentDidLoad() {
    const canvas = this.el.querySelector('canvas');
    this.heat = simpleheat(canvas);
    this.updateHeap();
  }

  private updateHeap() {
    if (this.heat && this.data) {
      this.heat.clear();
      this.heat.data(this.data);
      this.heat.max(40);
      this.heat.radius(8, 4);
      this.heat.draw();
    }
  }

  protected render() {
    requestAnimationFrame(() => {
      this.updateHeap();
    });

    const size = 2;
    const dom = [];
    if (this.label && this.label.length > 0) {
      dom.push(<h3>{this.label}</h3>);
    }
    dom.push(
      <div style={{
        width: `${this.width}px`,
        height: `${this.height}px`
      }}>
        <canvas
          width={this.width}
          style={{ transform: `scaleY(${this.height / size})` }}
          height={size} />
      </div>
    );
    dom.push(
      <div class='legend'>
        {this.legends.map(t => (
          <div>{t}</div>
        ))}
      </div>
    )
    return dom;
  }
}
