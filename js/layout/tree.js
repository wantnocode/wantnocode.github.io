function tree_layout(){myDiagram.div=null;myDiagram=GO(go.Diagram,"myDiagramDiv",{initialAutoScale:go.Diagram.Uniform,"undoManager.isEnabled":!0,layout:GO(go.TreeLayout,{isOngoing:!1,angle:90,layerSpacing:100,nodeSpacing:300})});myOverview.div=null;myOverview=GO(go.Overview,"myOverviewDIV",{observed:myDiagram});myDiagram.nodeTemplateMap.add("",GO(go.Node,"Auto",{layerName:"Foreground",doubleClick:function(){send_newGraph("\u5c5e\u6027")}},{toolTip:tooltipTemplate},GO(go.Picture,{source:"./img/ddqp.svg",
margin:new go.Margin(0,20,2,0),opacity:0}),GO(go.Picture,{source:"./img/ddqp.svg",margin:new go.Margin(-41,0,2,0),opacity:0}),GO(go.Picture,{source:"./img/ddqp.svg",margin:new go.Margin(-41,-20,2,0),opacity:0}),GO(go.Picture,{source:"./img/triangle.svg",margin:new go.Margin(0,0,0,0),opacity:1},new go.Binding("source","isExpand",function(a){if(1==a)return"./img/triangle_in.svg";if(2==a)return"./img/triangle_out.svg";if(3==V)return"./img/triangle.svg"}),new go.Binding("opacity","isExpand",function(a){return 0<
a?1:0})),GO(go.Shape,"RoundedRectangle",{name:"node_shape",stroke:"#006ADF",fill:"#fff",width:233,cursor:"pointer",height:60,margin:new go.Margin(1,-30,1,1),strokeWidth:1},new go.Binding("stroke","d_stroke"),new go.Binding("strokeWidth","stroke_width")),GO(go.Shape,"RoundedRectangle",{name:"node_shape",stroke:null,fill:"#006ADF",width:56,cursor:"pointer",height:59,margin:new go.Margin(0,145,0,0)},new go.Binding("fill","d_fill")),GO(go.Picture,{name:"icon_enetity",source:"./img/account.svg",margin:new go.Margin(0,
145,0,0),opacity:1},new go.Binding("source","icon",geoFunc)),GO(go.TextBlock,{name:"icon_label",text:"1",cursor:"pointer",opacity:1,stroke:"#333",margin:new go.Margin(0,0,0,70)},new go.Binding("text","text"),new go.Binding("font","font_size",function(a){return a+"px helvetica, bold Arial, sans-serif"})),GO(go.Shape,"RoundedRectangle",{name:"entity_label",margin:new go.Margin(0,300,34,30),fill:"red",cursor:"pointer",width:60,height:18,opacity:0},{},new go.Binding("opacity","tags",function(a){return 0==
labelisShow?0:0<a[0].style.width?1:0}),new go.Binding("fill","tags",function(a){return a[0].style.fill}),new go.Binding("stroke","tags",function(a){return a[0].style.stroke})),GO(go.Shape,"RoundedRectangle",{name:"entity_label2",margin:new go.Margin(4,270,0,0),fill:"red",cursor:"pointer",width:60,height:16,opacity:0},{},new go.Binding("opacity","tags",function(a){return 0==labelisShow?0:0<a[1].style.width?1:0}),new go.Binding("fill","tags",function(a){return a[1].style.fill}),new go.Binding("stroke",
"tags",function(a){return a[1].style.stroke})),GO(go.Shape,"RoundedRectangle",{name:"entity_label3",margin:new go.Margin(40,270,0,0),fill:"red",cursor:"pointer",width:60,height:16,opacity:0},{},new go.Binding("opacity","tags",function(a){return 0==labelisShow?0:0<a[2].style.width?1:0}),new go.Binding("fill","tags",function(a){return a[2].style.fill}),new go.Binding("stroke","tags",function(a){return a[2].style.stroke})),GO(go.TextBlock,{name:"entity_label_text1",text:"",cursor:"pointer",opacity:0,
stroke:"#fff",margin:new go.Margin(-25,280,0,0)},new go.Binding("opacity","tags",function(a){return 0==labelisShow?0:0<a[0].style.width?1:0}),new go.Binding("text","tags",function(a){return 5<strlen(a[0].text)?a[0].text.slice(0,2)+"...":a[0].text}),new go.Binding("stroke","tags",function(a){return a[0].style.font_color})),GO(go.TextBlock,{name:"entity_label_text_x1",text:"X",cursor:"pointer",opacity:0,stroke:"#fff",margin:new go.Margin(-26,230,0,0)},{click:function(a,b){delete_lable(1)}},new go.Binding("opacity",
"tags",function(a){return 0==labelisShow?0:0<a[0].style.width?1:0})),GO(go.TextBlock,{name:"entity_label_text2",text:"",cursor:"pointer",opacity:0,stroke:"#333",margin:new go.Margin(2,280,0,0)},new go.Binding("opacity","tags",function(a){return 0==labelisShow?0:0<a[1].style.width?1:0}),new go.Binding("text","tags",function(a){return 5<strlen(a[1].text)?a[1].text.slice(0,2):a[1].text}),new go.Binding("stroke","tags",function(a){return a[1].style.font_color})),GO(go.TextBlock,{name:"entity_label_text_x2",
text:"X",cursor:"pointer",opacity:0,stroke:"#fff",margin:new go.Margin(0,230,0,0)},{click:function(a,b){delete_lable(2)}},new go.Binding("opacity","tags",function(a){return 0==labelisShow?0:0<a[1].style.width?1:0})),GO(go.TextBlock,{name:"entity_label_text3",text:"",cursor:"pointer",opacity:0,stroke:"#333",margin:new go.Margin(38,280,0,0)},new go.Binding("opacity","tags",function(a){return 0==labelisShow?0:0<a[2].style.width?1:0}),new go.Binding("text","tags",function(a){return 5<strlen(a[2].text)?
a[2].text.slice(0,2):a[2].text}),new go.Binding("stroke","tags",function(a){return a[2].style.font_color})),GO(go.TextBlock,{name:"entity_label_text_x3",text:"X",cursor:"pointer",opacity:0,stroke:"#fff",margin:new go.Margin(36,230,0,0)},{click:function(a,b){delete_lable(3)}},new go.Binding("opacity","tags",function(a){return 0==labelisShow?0:0<a[2].style.width?1:0})),{selectionAdornmentTemplate:GO(go.Adornment,"Auto",GO(go.Shape,"RoundedRectangle",{width:100,height:130,fill:null,stroke:null,strokeWidth:5,
margin:new go.Margin(0,0,0,0)}),GO(go.Placeholder))}));myDiagram.nodeTemplateMap.add("square",GO(go.Node,"Auto",GO(go.Shape,"RoundedRectangle",{width:120,height:64,fill:"#fff",stroke:"#D55500",strokeWidth:2}),GO(go.TextBlock,{name:"icon_label",opacity:1,margin:8,maxSize:new go.Size(200,NaN),wrap:go.TextBlock.WrapFit,stroke:"#D55500",editable:!0},(new go.Binding("text")).makeTwoWay())));myDiagram.linkTemplate=GO(go.Link,go.Link.Orthogonal,{corner:5,relinkableFrom:!0,relinkableTo:!0,adjusting:go.Link.End},
{doubleClick:function(){send_newGraph("\u5c5e\u6027")}},{toolTip:tooltipTemplate_link},GO(go.Shape,{name:"link_arrow",toArrow:"standard",stroke:"#BDBDBD",fill:"#BDBDBD",visible:!1},new go.Binding("fill","d_stroke"),new go.Binding("stroke","d_stroke"),new go.Binding("strokeWidth","stroke_width"),new go.Binding("visible","dir",function(a){if(0===a)return!1;if(1===a)return!0;if(2===a)return!1;if(3===a)return!0})),GO(go.Shape,{name:"link_arrow",fromArrow:"Backward",stroke:"#BDBDBD",fill:"#BDBDBD",visible:!1},
new go.Binding("fill","d_stroke"),new go.Binding("stroke","d_stroke"),new go.Binding("strokeWidth","stroke_width"),new go.Binding("visible","dir",function(a){if(0===a||1===a)return!1;if(2===a||3===a)return!0})),GO(go.Shape,{isPanelMain:!0,stroke:null,strokeWidth:2,opacity:0},(new go.Binding("stroke","isHighlighted",function(a){return a?"blue":null})).ofObject()),GO(go.Shape,{name:"edge_shape",opacity:1,isPanelMain:!0,stroke:"#BDBDBD",strokeWidth:1,fill:"#BDBDBD"},new go.Binding("fill","d_stroke"),
new go.Binding("stroke","d_stroke"),new go.Binding("strokeWidth","stroke_width")),GO(go.TextBlock,{name:"link_text",textAlign:"center",font:"12px helvetica, bold Arial, sans-serif",stroke:"#333",text:"",editable:!1,opacity:1,segmentOffset:new go.Point(10,NaN),segmentOrientation:go.Link.OrientUpleft,margin:4},new go.Binding("text"),new go.Binding("font","font_size",function(a){return a+"px helvetica, bold Arial, sans-serif"})))};