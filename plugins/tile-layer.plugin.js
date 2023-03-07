export default class extends HTMLElement {
  leaflet;
  addMapLayerDelegate;

  layerName;
  layerType;
  active;
  urlTemplate;
  options;

  obtainHeaderCallback = () => `Tile Layer`;

  hostFirstLoadedCallback() {
    const tileLayer = this.leaflet?.tileLayer(this.urlTemplate, this.options);
    this.addMapLayerDelegate?.(
      tileLayer,
      this.layerName,
      this.layerType,
      this.active
    );
  }
}
