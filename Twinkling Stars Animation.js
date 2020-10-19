(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Twinkle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9712").s().p("AjOFpIqBC+IF7onIl7omIKBC+IGWoTIARKdIJ3DeIp3DfIgRKdg");
	this.shape.setTransform(84.8,89.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD495").s().p("AjOFpIqBC+IF7onIl7omIKBC+IGWoTIARKdIJ3DeIp3DfIgRKdg");
	this.shape_1.setTransform(84.8,89.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9651").s().p("AjOFpIqBC+IF7onIl7omIKBC+IGWoTIARKdIJ3DeIp3DfIgRKdg");
	this.shape_2.setTransform(84.8,89.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9B64").s().p("AjOFpIqBC+IF7onIl7omIKBC+IGWoTIARKdIJ3DeIp3DfIgRKdg");
	this.shape_3.setTransform(84.8,89.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9C78").s().p("AjOFpIqBC+IF7onIl7omIKBC+IGWoTIARKdIJ3DeIp3DfIgRKdg");
	this.shape_4.setTransform(84.8,89.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFAB82").s().p("AjOFpIqBC+IF7onIl7omIKBC+IGWoTIARKdIJ3DeIp3DfIgRKdg");
	this.shape_5.setTransform(84.8,89.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBD82").s().p("AjOFpIqBC+IF7onIl7omIKBC+IGWoTIARKdIJ3DeIp3DfIgRKdg");
	this.shape_6.setTransform(84.8,89.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC68F").s().p("AjOFpIqBC+IF7onIl7omIKBC+IGWoTIARKdIJ3DeIp3DfIgRKdg");
	this.shape_7.setTransform(84.8,89.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.7,178.4);


// stage content:
(lib.TwinklingStarsAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Twinkle("synched",7);
	this.instance.parent = this;
	this.instance.setTransform(502.5,165.1,0.439,0.439,0,0,0,84.8,89.2);

	this.instance_1 = new lib.Twinkle("synched",6);
	this.instance_1.parent = this;
	this.instance_1.setTransform(254.5,65.3,0.68,0.68,0,0,0,84.8,89.2);

	this.instance_2 = new lib.Twinkle("synched",1);
	this.instance_2.parent = this;
	this.instance_2.setTransform(214.7,183.7,0.579,0.579,0,0,0,85,89.3);

	this.instance_3 = new lib.Twinkle("synched",5);
	this.instance_3.parent = this;
	this.instance_3.setTransform(461.6,284.1,0.736,0.736,0,0,0,84.8,89.2);

	this.instance_4 = new lib.Twinkle("synched",4);
	this.instance_4.parent = this;
	this.instance_4.setTransform(277.1,291.6,0.916,0.916,0,0,0,84.8,89.2);

	this.instance_5 = new lib.Twinkle("synched",3);
	this.instance_5.parent = this;
	this.instance_5.setTransform(89.6,306.6,0.699,0.699,0,0,0,84.8,89.2);

	this.instance_6 = new lib.Twinkle("synched",2);
	this.instance_6.parent = this;
	this.instance_6.setTransform(397,97.1,1,1,0,0,0,84.8,89.2);

	this.instance_7 = new lib.Twinkle("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(93.5,95.1,1,1,0,0,0,84.8,89.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(283.7,204.6,531.2,368.7);
// library properties:
lib.properties = {
	id: 'A6CC9A6C9570EF45896842BCAC5625D4',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A6CC9A6C9570EF45896842BCAC5625D4'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;