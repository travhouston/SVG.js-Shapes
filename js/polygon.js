var draw_polygon = SVG('polygon');
draw_polygon.size(120, 120);
var polygon = draw_polygon.polygon('0,0 100,50 50,100');
polygon.fill('#2ABFB5').stroke({ width: 3 })