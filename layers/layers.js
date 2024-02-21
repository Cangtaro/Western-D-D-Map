var wms_layers = [];

var format_DarnoniaCells202402201558_0 = new ol.format.GeoJSON();
var features_DarnoniaCells202402201558_0 = format_DarnoniaCells202402201558_0.readFeatures(json_DarnoniaCells202402201558_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DarnoniaCells202402201558_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DarnoniaCells202402201558_0.addFeatures(features_DarnoniaCells202402201558_0);
var lyr_DarnoniaCells202402201558_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DarnoniaCells202402201558_0, 
                style: style_DarnoniaCells202402201558_0,
                popuplayertitle: "Darnonia Cells 2024-02-20-15-58",
                interactive: true,
                title: '<img src="styles/legend/DarnoniaCells202402201558_0.png" /> Darnonia Cells 2024-02-20-15-58'
            });
var format_Biomes2dissolved_1 = new ol.format.GeoJSON();
var features_Biomes2dissolved_1 = format_Biomes2dissolved_1.readFeatures(json_Biomes2dissolved_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biomes2dissolved_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biomes2dissolved_1.addFeatures(features_Biomes2dissolved_1);
var lyr_Biomes2dissolved_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Biomes2dissolved_1, 
                style: style_Biomes2dissolved_1,
                popuplayertitle: "Biomes2 — dissolved",
                interactive: true,
                title: '<img src="styles/legend/Biomes2dissolved_1.png" /> Biomes2 — dissolved'
            });
var format_Culturesingle_parts_2 = new ol.format.GeoJSON();
var features_Culturesingle_parts_2 = format_Culturesingle_parts_2.readFeatures(json_Culturesingle_parts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Culturesingle_parts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Culturesingle_parts_2.addFeatures(features_Culturesingle_parts_2);
var lyr_Culturesingle_parts_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Culturesingle_parts_2, 
                style: style_Culturesingle_parts_2,
                popuplayertitle: "Culture — single_parts",
                interactive: true,
                title: '<img src="styles/legend/Culturesingle_parts_2.png" /> Culture — single_parts'
            });
var format_States2single_parts_3 = new ol.format.GeoJSON();
var features_States2single_parts_3 = format_States2single_parts_3.readFeatures(json_States2single_parts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_States2single_parts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_States2single_parts_3.addFeatures(features_States2single_parts_3);
var lyr_States2single_parts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_States2single_parts_3, 
                style: style_States2single_parts_3,
                popuplayertitle: "States 2 — single_parts",
                interactive: true,
                title: '<img src="styles/legend/States2single_parts_3.png" /> States 2 — single_parts'
            });
var format_DarnoniaBurgs202402201612_4 = new ol.format.GeoJSON();
var features_DarnoniaBurgs202402201612_4 = format_DarnoniaBurgs202402201612_4.readFeatures(json_DarnoniaBurgs202402201612_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DarnoniaBurgs202402201612_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DarnoniaBurgs202402201612_4.addFeatures(features_DarnoniaBurgs202402201612_4);
var lyr_DarnoniaBurgs202402201612_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DarnoniaBurgs202402201612_4, 
                style: style_DarnoniaBurgs202402201612_4,
                popuplayertitle: "Darnonia Burgs 2024-02-20-16-12",
                interactive: true,
                title: '<img src="styles/legend/DarnoniaBurgs202402201612_4.png" /> Darnonia Burgs 2024-02-20-16-12'
            });
var format_DarnoniaMarkers202402201616_5 = new ol.format.GeoJSON();
var features_DarnoniaMarkers202402201616_5 = format_DarnoniaMarkers202402201616_5.readFeatures(json_DarnoniaMarkers202402201616_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DarnoniaMarkers202402201616_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DarnoniaMarkers202402201616_5.addFeatures(features_DarnoniaMarkers202402201616_5);
var lyr_DarnoniaMarkers202402201616_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DarnoniaMarkers202402201616_5, 
                style: style_DarnoniaMarkers202402201616_5,
                popuplayertitle: "Darnonia Markers 2024-02-20-16-16",
                interactive: true,
                title: '<img src="styles/legend/DarnoniaMarkers202402201616_5.png" /> Darnonia Markers 2024-02-20-16-16'
            });

lyr_DarnoniaCells202402201558_0.setVisible(true);lyr_Biomes2dissolved_1.setVisible(true);lyr_Culturesingle_parts_2.setVisible(true);lyr_States2single_parts_3.setVisible(true);lyr_DarnoniaBurgs202402201612_4.setVisible(true);lyr_DarnoniaMarkers202402201616_5.setVisible(true);
var layersList = [lyr_DarnoniaCells202402201558_0,lyr_Biomes2dissolved_1,lyr_Culturesingle_parts_2,lyr_States2single_parts_3,lyr_DarnoniaBurgs202402201612_4,lyr_DarnoniaMarkers202402201616_5];
lyr_DarnoniaCells202402201558_0.set('fieldAliases', {'id': 'id', 'height': 'height', 'biome': 'biome', 'type': 'type', 'population': 'population', 'state': 'state', 'province': 'province', 'culture': 'culture', 'religion': 'religion', 'neighbors': 'neighbors', });
lyr_Biomes2dissolved_1.set('fieldAliases', {'fid': 'fid', 'Biome': 'Biome', 'Color': 'Color', });
lyr_Culturesingle_parts_2.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Name': 'Name', 'Color': 'Color', });
lyr_States2single_parts_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'height': 'height', 'biome': 'biome', 'type': 'type', 'population': 'population', 'province': 'province', 'culture': 'culture', 'religion': 'religion', 'neighbors': 'neighbors', 'State': 'State', 'Full Name': 'Full Name', 'Color': 'Color', });
lyr_DarnoniaBurgs202402201612_4.set('fieldAliases', {'Id': 'Id', 'Burg': 'Burg', 'Province': 'Province', 'Province Full Name': 'Province Full Name', 'State': 'State', 'State Full Name': 'State Full Name', 'Culture': 'Culture', 'Religion': 'Religion', 'Population': 'Population', 'X': 'X', 'Y': 'Y', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Elevation (ft)': 'Elevation (ft)', 'Capital': 'Capital', 'Port': 'Port', 'Citadel': 'Citadel', 'Walls': 'Walls', 'Plaza': 'Plaza', 'Temple': 'Temple', 'Shanty Town': 'Shanty Town', });
lyr_DarnoniaMarkers202402201616_5.set('fieldAliases', {'Id': 'Id', 'Type': 'Type', 'Icon': 'Icon', 'Name': 'Name', 'Note': 'Note', 'X': 'X', 'Y': 'Y', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_DarnoniaCells202402201558_0.set('fieldImages', {'id': 'Range', 'height': 'Range', 'biome': 'Range', 'type': 'TextEdit', 'population': 'Range', 'state': 'Range', 'province': 'Range', 'culture': 'Range', 'religion': 'Range', 'neighbors': 'List', });
lyr_Biomes2dissolved_1.set('fieldImages', {'fid': 'TextEdit', 'Biome': 'TextEdit', 'Color': 'TextEdit', });
lyr_Culturesingle_parts_2.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Name': 'TextEdit', 'Color': 'TextEdit', });
lyr_States2single_parts_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'height': 'Range', 'biome': 'Range', 'type': 'TextEdit', 'population': 'Range', 'province': 'Range', 'culture': 'Range', 'religion': 'Range', 'neighbors': 'KeyValue', 'State': 'TextEdit', 'Full Name': 'TextEdit', 'Color': 'TextEdit', });
lyr_DarnoniaBurgs202402201612_4.set('fieldImages', {'Id': 'Range', 'Burg': 'TextEdit', 'Province': 'TextEdit', 'Province Full Name': 'TextEdit', 'State': 'TextEdit', 'State Full Name': 'TextEdit', 'Culture': 'TextEdit', 'Religion': 'TextEdit', 'Population': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Elevation (ft)': 'Range', 'Capital': 'TextEdit', 'Port': 'TextEdit', 'Citadel': 'TextEdit', 'Walls': 'TextEdit', 'Plaza': 'TextEdit', 'Temple': 'TextEdit', 'Shanty Town': 'TextEdit', });
lyr_DarnoniaMarkers202402201616_5.set('fieldImages', {'Id': 'TextEdit', 'Type': 'TextEdit', 'Icon': 'TextEdit', 'Name': 'TextEdit', 'Note': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_DarnoniaCells202402201558_0.set('fieldLabels', {'id': 'no label', 'height': 'no label', 'biome': 'no label', 'type': 'no label', 'population': 'no label', 'state': 'no label', 'province': 'no label', 'culture': 'no label', 'religion': 'no label', 'neighbors': 'no label', });
lyr_Biomes2dissolved_1.set('fieldLabels', {'fid': 'no label', 'Biome': 'no label', 'Color': 'inline label - always visible', });
lyr_Culturesingle_parts_2.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Name': 'no label', 'Color': 'inline label - always visible', });
lyr_States2single_parts_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'height': 'no label', 'biome': 'no label', 'type': 'no label', 'population': 'no label', 'province': 'no label', 'culture': 'no label', 'religion': 'no label', 'neighbors': 'no label', 'State': 'no label', 'Full Name': 'no label', 'Color': 'no label', });
lyr_DarnoniaBurgs202402201612_4.set('fieldLabels', {'Id': 'no label', 'Burg': 'no label', 'Province': 'no label', 'Province Full Name': 'no label', 'State': 'no label', 'State Full Name': 'no label', 'Culture': 'no label', 'Religion': 'no label', 'Population': 'no label', 'X': 'no label', 'Y': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Elevation (ft)': 'no label', 'Capital': 'no label', 'Port': 'no label', 'Citadel': 'no label', 'Walls': 'no label', 'Plaza': 'no label', 'Temple': 'no label', 'Shanty Town': 'no label', });
lyr_DarnoniaMarkers202402201616_5.set('fieldLabels', {'Id': 'no label', 'Type': 'no label', 'Icon': 'no label', 'Name': 'no label', 'Note': 'no label', 'X': 'no label', 'Y': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_DarnoniaMarkers202402201616_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});