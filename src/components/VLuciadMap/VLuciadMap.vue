<template>
    <div class="VLuciadMap" ref="luciadmapref"/>
</template>

<script>
    import { WebGLMap } from "@luciad/ria/view/WebGLMap";
    import { getReference } from '@luciad/ria/reference/ReferenceProvider';

    import LayerFactory from './factories/LayerFactory';
    import ModelFactory from './factories/ModelFactory';
    import {createBounds} from "@luciad/ria/shape/ShapeFactory";

    export default {
        name: "VLuciadMap",
        props: ['dataset', 'bounds'],
        data () {
            return {
                map: null // This will hold our luciadria map created with new WebGLMap
            }
        },
        watch: {}, // Implement your watches here
        methods: {
            createMap () {
                const REF_GEOCENTRIC = getReference('EPSG:4978')
                const domElement = this.$refs.luciadmapref
                this.map = new WebGLMap(domElement, {reference: REF_GEOCENTRIC})
            },
            createMapLayers () {
                // Do something if needed
                const wmsModel = ModelFactory.createWMSModel()
                const elevationModel = ModelFactory.createLTSModel()
                // Create Layers
                const WMSlayer = LayerFactory.createWMSLayer(wmsModel)


                const elevationLayer = LayerFactory.createLTSLayer(elevationModel, {label: "Elevation"})
                // Insert Layers
                this.map.layerTree.addChild(WMSlayer, 'bottom')
                this.map.layerTree.addChild(elevationLayer)

                let vectorLayer =  null
                if (this.dataset) {
                    const vectorModel = ModelFactory.createGeoJSONModel({target: './resources/' + this.dataset})
                    vectorLayer = LayerFactory.createFeatureLayer(vectorModel, {label: this.dataset, selectable: true})
                    this.map.layerTree.addChild(vectorLayer)
                }
                // Add Grid
                const gridLayer = LayerFactory.createGrid()
                this.map.layerTree.addChild(gridLayer, 'top')

                // Fit to vector layer
                if (this.bounds) {
                    const wgs84 = getReference('EPSG:4326')
                    const bounds  = createBounds(wgs84, this.bounds);
                    this.map.mapNavigator.fit({bounds: bounds, animate: false})
                } else  {
                    if (vectorLayer) {
                        const queryFinishedHandle = vectorLayer.workingSet.on("QueryFinished", () => {
                            this.map.mapNavigator.fit({
                                bounds: vectorLayer.bounds,
                                animate: true
                            });
                            queryFinishedHandle.remove();
                        });
                    }
                }
            },
            onError (error) {
                this.$emit('error', error)
            }
        },
        mounted () {
            this.createMap()
            this.createMapLayers()
        },
        beforeDestroy () {
            this.map.destroy()
            this.map = null
        }
    }
</script>

<style scoped>
    /* A very basic CSS just for this sample, change according to your needs */
    .VLuciadMap {
        height: 100%;
        width: 100%;
        background-color: black;
        display: inline-block; /* inline block to center the div ( Similar to the img we replaced) */
    }
</style>