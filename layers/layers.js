var wms_layers = [];

var lyr_Ortho20cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/CLEF/geoportail/r/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortho 20 cm",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_0, 0]);
var format_ptmarre_1 = new ol.format.GeoJSON();
var features_ptmarre_1 = format_ptmarre_1.readFeatures(json_ptmarre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ptmarre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ptmarre_1.addFeatures(features_ptmarre_1);
var lyr_ptmarre_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ptmarre_1, 
                style: style_ptmarre_1,
                popuplayertitle: "pt marre",
                interactive: true,
                    title: '<img src="styles/legend/ptmarre_1.png" /> pt marre'
                });
var format_try_2 = new ol.format.GeoJSON();
var features_try_2 = format_try_2.readFeatures(json_try_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_try_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_try_2.addFeatures(features_try_2);
var lyr_try_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_try_2, 
                style: style_try_2,
                popuplayertitle: "try",
                interactive: true,
                    title: '<img src="styles/legend/try_2.png" /> try'
                });

lyr_Ortho20cm_0.setVisible(true);lyr_ptmarre_1.setVisible(true);lyr_try_2.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_ptmarre_1,lyr_try_2];
lyr_ptmarre_1.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'url': 'url', });
lyr_try_2.set('fieldAliases', {'id': 'id', 'paa': 'paa', });
lyr_ptmarre_1.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'url': 'ExternalResource', });
lyr_try_2.set('fieldImages', {'id': 'TextEdit', 'paa': 'TextEdit', });
lyr_ptmarre_1.set('fieldLabels', {'id': 'hidden field', 'nom': 'no label', 'url': 'no label', });
lyr_try_2.set('fieldLabels', {'id': 'hidden field', 'paa': 'no label', });
lyr_try_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});