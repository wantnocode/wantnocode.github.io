function SankeyLayout(){go.LayeredDigraphLayout.call(this)}go.Diagram.inherit(SankeyLayout,go.LayeredDigraphLayout);SankeyLayout.prototype.createNetwork=function(){this.diagram.nodes.each(function(a){var b=getAutoHeightForNode(a),c="normal "+Math.max(6,Math.round(b/8))+"pt Segoe UI, sans-serif",d=a.findObject("SHAPE"),e=a.findObject("TEXT"),f=a.findObject("TEXTNAME");a=a.findObject("LTEXT");d&&(d.height=b);e&&(e.font=c,f.font=c);a&&(a.font=c)});return go.LayeredDigraphLayout.prototype.createNetwork.call(this)};
function getAutoHeightForNode(a){for(var b=0,c=a.findLinksInto();c.next();){var d=c.value;b+=d.computeThickness()}var e=0;for(c=a.findLinksOutOf();c.next();)d=c.value,e+=d.computeThickness();a=Math.max(b,e);10>a&&(a=5);return a}
SankeyLayout.prototype.nodeMinColumnSpace=function(a,b){if(null===a.node){if(1<=a.edgesCount){b=1;for(a=a.edges;a.next();){var c=a.value;if(null!=c.link){a=c.link.computeThickness();a>b&&(b=a);break}}return Math.max(2,Math.ceil(b/this.columnSpacing))}return 10}return go.LayeredDigraphLayout.prototype.nodeMinColumnSpace.call(this,a,b)};SankeyLayout.prototype.nodeMinLayerSpace=function(a,b){return null===a.node?300:go.LayeredDigraphLayout.prototype.nodeMinLayerSpace.call(this,a,b)};
SankeyLayout.prototype.assignLayers=function(){go.LayeredDigraphLayout.prototype.assignLayers.call(this);for(var a=this.maxLayer,b=this.network.vertexes.iterator;b.next();){var c=b.value;0==c.destinationVertexes.count&&(c.layer=0);0==c.sourceVertexes.count&&(c.layer=a)}};SankeyLayout.prototype.commitLayout=function(){go.LayeredDigraphLayout.prototype.commitLayout.call(this);for(var a=this.network.edges.iterator;a.next();){var b=a.value.link;b&&b.curve===go.Link.Bezier&&b.invalidateRoute()}};
var animation=new go.Animation;animation.easing=go.Animation.EaseLinear;
function sankey_layout(){graph_layout_type=1;myDiagram.div=null;myDiagram=GO(go.Diagram,"myDiagramDiv",{initialAutoScale:go.Diagram.Uniform,"animationManager.isEnabled":!1,ModelChanged:function(a){},layout:GO(SankeyLayout,{setsPortSpots:!1,direction:0,initializeOption:go.LayeredDigraphLayout.InitDepthFirstIn,packOption:go.LayeredDigraphLayout.PackStraighten||go.LayeredDigraphLayout.PackMedian,layerSpacing:300,columnSpacing:2})});myOverview.div=null;myOverview=GO(go.Overview,"myOverviewDIV",{observed:myDiagram});
myDiagram.nodeTemplateMap.add("",GO(go.Node,"Vertical",{visible:!0,layerName:"Foreground",click:function(a,b){},doubleClick:function(){send_newGraph("\u5c5e\u6027")}},new go.Binding("visible"),GO(go.Shape,"Ellipse",{name:"node_shape",stroke:"#fff",fill:"#006ADF",width:60,cursor:"pointer",height:60,portId:""},{toolTip:tooltipTemplate},new go.Binding("stroke","d_stroke"),(new go.Binding("fill","isHighlighted",function(a,b){return a?"red":b.part.data.d_fill})).ofObject(),new go.Binding("width"),new go.Binding("height")),
GO(go.Picture,{name:"node_icon",source:"./img/account.svg",margin:new go.Margin(-40,0,0,0),opacity:1},new go.Binding("source","icon",geoFunc),new go.Binding("width","width",function(a){return.6*a}),new go.Binding("height","height",function(a){return.5*a}),new go.Binding("margin","height",function(a){return new go.Margin(.78*-a,0,0,0)})),GO(go.Panel,"Auto",{name:"node_text",margin:12,opacity:!1},new go.Binding("margin","width",function(a){return 12*a/60*1.2}),GO(go.Shape,"Rectangle",{fill:null,stroke:null,
margin:new go.Margin(5,0,0,0)},(new go.Binding("fill","isSelected",function(a){return a?"#FFC106":null})).ofObject("")),GO(go.TextBlock,{margin:6,font:"12px helvetica, bold Arial, sans-serif"},new go.Binding("text","text",function(a){return a}),(new go.Binding("stroke","isSelected",function(a){return a?"#fff":"#000"})).ofObject(""),new go.Binding("font","fontSize",function(a){return a+"px helvetica, bold Arial, sans-serif"}))),{selectionAdornmentTemplate:GO(go.Adornment,"Vertical",GO(go.Shape,"RoundedRectangle",
{width:100,height:130,fill:null,stroke:null,strokeWidth:5,margin:new go.Margin(0,0,0,0)}),GO(go.Placeholder))},{selectionAdorned:!1}));GO(go.Adornment,"Link",GO(go.Shape,{isPanelMain:!0,fill:null,stroke:"blue",strokeWidth:3}));myDiagram.linkTemplate=GO(go.Link,go.Link.Bezier,{fromEndSegmentLength:150,toEndSegmentLength:150,adjusting:go.Link.End},{doubleClick:function(){send_newGraph("\u5c5e\u6027")}},{},(new go.Binding("points")).makeTwoWay(),GO(go.Shape,{opacity:1,isPanelMain:!0,stroke:"#BDBDBD",
strokeWidth:1,fill:"#BDBDBD"},new go.Binding("strokeWidth","money",function(a){return 1E7<a?4:1E6<a?3:1E5<a?2:1}),new go.Binding("stroke","money",function(a){return 1E7<a?"red":1E6<a?"orange":1E5<a?"green":"#ccc"})),GO(go.Shape,{isPanelMain:!0,stroke:"white",strokeWidth:3,name:"PIPE",strokeDashArray:[10,10],opacity:0}),GO(go.TextBlock,"2/3",{segmentIndex:NaN,segmentFraction:.5,font:" 14pt Segoe UI, sans-serif",stroke:"#333"},new go.Binding("text","text",function(a){return a.replace(/(\r\n)|(\n)/g,
"  ")})),GO(go.Shape,{name:"link_arrow",toArrow:"standard",stroke:"#BDBDBD",fill:"#BDBDBD"},new go.Binding("strokeWidth","money",function(a){return 1E7<a?4:1E6<a?3:1E5<a?2:1}),new go.Binding("stroke","money",function(a){return 1E7<a?"red":1E6<a?"orange":1E5<a?"green":"#ccc"})))};