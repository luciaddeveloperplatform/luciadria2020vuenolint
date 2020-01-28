import {FeatureLayer} from "@luciad/ria/view/feature/FeatureLayer";
import {GridLayer} from "@luciad/ria/view/grid/GridLayer";
import {LonLatGrid} from "@luciad/ria/view/grid/LonLatGrid";
import {RasterTileSetLayer} from "@luciad/ria/view/tileset/RasterTileSetLayer";
import {LayerType} from "@luciad/ria/view/LayerType";


class LayerFactory {

  static createWMSLayer (wmsModel, options) {
    options = options ? options : {};
    options.label = options.label ? options.label : 'Earth Image';
    options.layerType = options.layerType ? options.layerType : LayerType.STATIC;

    const wmsLayer = new RasterTileSetLayer(wmsModel, {
    })
    return wmsLayer
  }

  static createLTSLayer (ltsModel, options) {
    options = options ? options : {};
    options.label = options.label ? options.label : 'Elevation';
    options.layerType = options.layerType ? options.layerType : LayerType.STATIC;
    const elevationLayer = new RasterTileSetLayer(ltsModel, options);
    return elevationLayer
  }

  static createGrid () {
    let lonLatGridModel = new LonLatGrid()
    let gridLayer = new GridLayer(lonLatGridModel, {label: 'Grid', id: 'Grid'})
    return gridLayer
  }

  static createFeatureLayer (model, options) {
    options = options ? options : {};
    options.label = options.label ? options.label : 'Feature Layer';
    options.layerType = options.layerType ? options.layerType : LayerType.STATIC;
    let layer = new FeatureLayer(model, options);
    return layer
  }

}

export default LayerFactory
