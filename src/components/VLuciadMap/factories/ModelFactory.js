import {WMSTileSetModel} from "@luciad/ria/model/tileset/WMSTileSetModel";
import {getReference} from "@luciad/ria/reference/ReferenceProvider";
import {createBounds} from "@luciad/ria/shape/ShapeFactory";
import {FusionTileSetModel} from "@luciad/ria/model/tileset/FusionTileSetModel";
import {FeatureModel} from "@luciad/ria/model/feature/FeatureModel";
import {UrlStore} from "@luciad/ria/model/store/UrlStore";
import {RasterDataType} from "@luciad/ria/model/tileset/RasterDataType";
import {RasterSamplingMode} from "@luciad/ria/model/tileset/RasterSamplingMode";

class ModelFactory {

  static createWMSModel (options) {
    options = options ? options : {
      getMapRoot: 'https://sampleservices.luciad.com/wms',
      version: '1.3.0',
      reference: getReference('CRS:84'),
      layers: ['4ceea49c-3e7c-4e2d-973d-c608fb2fb07e'],
      transparent: false
    };
    return new WMSTileSetModel(options);
  }

  static createLTSModel (options) {
    let tileSetReference = getReference('EPSG:4326')
    options = options ? options : {
        url: 'https://sampleservices.luciad.com/lts',
        coverageId: 'e8f28a35-0e8c-4210-b2e8-e5d4333824ec',
        reference: tileSetReference,
        bounds: createBounds(tileSetReference, [-180, 360, -90, 180]),
        levelCount: 24,
        level0Columns: 4,
        level0Rows: 2,
        tileWidth: 32,
        tileHeight: 32,
        dataType: RasterDataType.ELEVATION,
        samplingMode: RasterSamplingMode.POINT
    }
    return new FusionTileSetModel(options)
  }

  static createGeoJSONModel (options) {
    let urlStore = new UrlStore(options);
    return new FeatureModel(urlStore)
  }
}

export default ModelFactory;
