/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@ionic/core';


import {
  App as MyApp
} from './app/app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  DetailsPage as PageDetails
} from './pages/details/details';

declare global {
  interface HTMLPageDetailsElement extends PageDetails, HTMLElement {
  }
  var HTMLPageDetailsElement: {
    prototype: HTMLPageDetailsElement;
    new (): HTMLPageDetailsElement;
  };
  interface HTMLElementTagNameMap {
    "page-details": HTMLPageDetailsElement;
  }
  interface ElementTagNameMap {
    "page-details": HTMLPageDetailsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-details": JSXElements.PageDetailsAttributes;
    }
  }
  namespace JSXElements {
    export interface PageDetailsAttributes extends HTMLAttributes {
      title?: string;
      data?: any[];
    }
  }
}


import {
  HomePage as PageHome
} from './pages/home/home';

declare global {
  interface HTMLPageHomeElement extends PageHome, HTMLElement {
  }
  var HTMLPageHomeElement: {
    prototype: HTMLPageHomeElement;
    new (): HTMLPageHomeElement;
  };
  interface HTMLElementTagNameMap {
    "page-home": HTMLPageHomeElement;
  }
  interface ElementTagNameMap {
    "page-home": HTMLPageHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-home": JSXElements.PageHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface PageHomeAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  Heapmap as MyHeatmap
} from './pages/my-heatmap/heatmap';

declare global {
  interface HTMLMyHeatmapElement extends MyHeatmap, HTMLElement {
  }
  var HTMLMyHeatmapElement: {
    prototype: HTMLMyHeatmapElement;
    new (): HTMLMyHeatmapElement;
  };
  interface HTMLElementTagNameMap {
    "my-heatmap": HTMLMyHeatmapElement;
  }
  interface ElementTagNameMap {
    "my-heatmap": HTMLMyHeatmapElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-heatmap": JSXElements.MyHeatmapAttributes;
    }
  }
  namespace JSXElements {
    export interface MyHeatmapAttributes extends HTMLAttributes {
      min?: number;
      max?: number;
      heatMax?: number;
      heatSize?: number;
      heatBlur?: number;
      height?: number;
      width?: number;
      data?: any[];
      title?: string;
    }
  }
}


import {
  RangePage as PageRange
} from './pages/range/range';

declare global {
  interface HTMLPageRangeElement extends PageRange, HTMLElement {
  }
  var HTMLPageRangeElement: {
    prototype: HTMLPageRangeElement;
    new (): HTMLPageRangeElement;
  };
  interface HTMLElementTagNameMap {
    "page-range": HTMLPageRangeElement;
  }
  interface ElementTagNameMap {
    "page-range": HTMLPageRangeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "page-range": JSXElements.PageRangeAttributes;
    }
  }
  namespace JSXElements {
    export interface PageRangeAttributes extends HTMLAttributes {
      
    }
  }
}

