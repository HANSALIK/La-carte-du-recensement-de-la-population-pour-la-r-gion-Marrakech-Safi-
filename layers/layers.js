var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Province_Marrakech_Safi_1 = new ol.format.GeoJSON();
var features_Province_Marrakech_Safi_1 = format_Province_Marrakech_Safi_1.readFeatures(json_Province_Marrakech_Safi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Province_Marrakech_Safi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_Marrakech_Safi_1.addFeatures(features_Province_Marrakech_Safi_1);
var lyr_Province_Marrakech_Safi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_Marrakech_Safi_1, 
                style: style_Province_Marrakech_Safi_1,
                popuplayertitle: " Province_Marrakech_Safi",
                interactive: true,
    title: ' Province_Marrakech_Safi<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_0.png" /> 246098<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_1.png" /> 345772<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_2.png" /> 378932<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_3.png" /> 425449<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_4.png" /> 560075<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_5.png" /> 642171<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_6.png" /> 719299<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_7.png" /> 1560704<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_8.png" /> <br />'
        });
var format_Pointsdepuisunetable_2 = new ol.format.GeoJSON();
var features_Pointsdepuisunetable_2 = format_Pointsdepuisunetable_2.readFeatures(json_Pointsdepuisunetable_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsdepuisunetable_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsdepuisunetable_2.addFeatures(features_Pointsdepuisunetable_2);
var lyr_Pointsdepuisunetable_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointsdepuisunetable_2, 
                style: style_Pointsdepuisunetable_2,
                popuplayertitle: "Points depuis une table",
                interactive: true,
                title: '<img src="styles/legend/Pointsdepuisunetable_2.png" /> Points depuis une table'
            });
var format_cheflieu_3 = new ol.format.GeoJSON();
var features_cheflieu_3 = format_cheflieu_3.readFeatures(json_cheflieu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheflieu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheflieu_3.addFeatures(features_cheflieu_3);
var lyr_cheflieu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheflieu_3, 
                style: style_cheflieu_3,
                popuplayertitle: "chef lieu",
                interactive: true,
                title: 'chef lieu'
            });
var format_FrontiereMaroc_4 = new ol.format.GeoJSON();
var features_FrontiereMaroc_4 = format_FrontiereMaroc_4.readFeatures(json_FrontiereMaroc_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrontiereMaroc_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrontiereMaroc_4.addFeatures(features_FrontiereMaroc_4);
var lyr_FrontiereMaroc_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrontiereMaroc_4, 
                style: style_FrontiereMaroc_4,
                popuplayertitle: "Frontiere Maroc",
                interactive: true,
                title: '<img src="styles/legend/FrontiereMaroc_4.png" /> Frontiere Maroc'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_Province_Marrakech_Safi_1.setVisible(true);lyr_Pointsdepuisunetable_2.setVisible(true);lyr_cheflieu_3.setVisible(true);lyr_FrontiereMaroc_4.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_Province_Marrakech_Safi_1,lyr_Pointsdepuisunetable_2,lyr_cheflieu_3,lyr_FrontiereMaroc_4];
lyr_Province_Marrakech_Safi_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_provinces_Code_Provi': 'Data_provinces_Code_Provi', 'Data_provinces_Nom_Provin': 'Data_provinces_Nom_Provin', 'Data_provinces_Area': 'Data_provinces_Area', 'Data_provinces_Population_2024': 'Data_provinces_Population_2024', 'Data_provinces_Chef lieu': 'Data_provinces_Chef lieu', 'Data_provinces_lat': 'Data_provinces_lat', 'Data_provinces_long': 'Data_provinces_long', });
lyr_Pointsdepuisunetable_2.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', });
lyr_cheflieu_3.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_FrontiereMaroc_4.set('fieldAliases', {'fid': 'fid', });
lyr_Province_Marrakech_Safi_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'Hidden', 'Data_provinces_Code_Provi': 'Hidden', 'Data_provinces_Nom_Provin': 'TextEdit', 'Data_provinces_Area': 'TextEdit', 'Data_provinces_Population_2024': 'TextEdit', 'Data_provinces_Chef lieu': 'TextEdit', 'Data_provinces_lat': 'Hidden', 'Data_provinces_long': 'Hidden', });
lyr_Pointsdepuisunetable_2.set('fieldImages', {'fid': '', 'Code_Provi': '', 'Nom_Provin': '', 'Area': '', 'Population_2024': '', 'Chef lieu': '', 'lat': '', 'long': '', });
lyr_cheflieu_3.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'TextEdit', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_FrontiereMaroc_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_Province_Marrakech_Safi_1.set('fieldLabels', {'Data_provinces_Nom_Provin': 'no label', 'Data_provinces_Area': 'no label', 'Data_provinces_Population_2024': 'no label', 'Data_provinces_Chef lieu': 'no label', });
lyr_Pointsdepuisunetable_2.set('fieldLabels', {'fid': 'no label', 'Code_Provi': 'no label', 'Nom_Provin': 'no label', 'Area': 'no label', 'Population_2024': 'no label', 'Chef lieu': 'no label', 'lat': 'no label', 'long': 'no label', });
lyr_cheflieu_3.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_FrontiereMaroc_4.set('fieldLabels', {'fid': 'no label', });
lyr_FrontiereMaroc_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});