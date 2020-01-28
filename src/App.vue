<template>
    <div>
        <h1>LuciadRIA 2020 with VUE</h1>
        <div class="maincontainer">
            <div class="panels">
                <div class="mapholder">
                    <v-luciadmap dataset="texas.json"/>
                </div>
            </div>
            <div class="panels">
                <div class="mapholder">
                    <v-luciadmap dataset="states.json"/>
                </div>
            </div>
            <div class="panels">
                <div class="mapholder">
                    <v-luciadmap :bounds="boundsMap3"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VLuciadMap from './components/VLuciadMap/VLuciadMap'

    export default {
        name: "App",
        data: () => {
            return {
                boundsMap3: [-118.4, 0.2, 33.75, 0.2]
            }
        },
        components: {
            'v-luciadmap': VLuciadMap
        }
    }
</script>

<style scoped>
   h1 {
       font-weight: bold;
       text-align: center;
       font-size: large;
   }
    .maincontainer {
        width: 100%;
        height: 800px;
    }
    .panels {
        display: inline-block;
        width: 33%;
        height: 100%;
        float: left;
    }
    .mapholder {
        width: 100%;
        height: 100%;
    }
</style>