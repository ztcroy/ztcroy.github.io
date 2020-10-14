(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AhpBoIk/gJID9jBIhakxIEFC0IEGi0IhaExID9DBIk/AJIhqEsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-40.4,85,80.8);


// stage content:
(lib.ClassicTweenwithTrail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(27.4,189.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.53,scaleY:2.53,guide:{path:[27.5,189.1,29.7,191,32.6,193.2,42.8,200.6,53.2,204.8,58.8,207.2,65.6,210.3,71,212.9,73.3,213.7,79.4,215.8,96.4,215.8,116.4,215.8,128,209.1,134,205.7,137.8,200.5,145.2,190.3,145.2,169.4,145.2,159.6,140,155.8,137,153.5,132.5,153.5,128.6,153.5,126.9,159.3,124.7,166.5,124.7,185.9,124.7,198.7,128,209.1,131.9,221.4,140.4,230.2,155.1,245.4,178.1,245.4,193.1,245.4,207.7,237.8,220.8,231.1,231.9,219.3,235.4,215.6,238.4,211.8,244.2,204.3,248.2,196.1,254.2,184,254.2,174.6,254.2,168.5,250.7,167,249.7,166.6,245.2,166.6,238.8,166.6,235.9,173.1,232.8,179.9,232.8,195.8,232.8,202.5,236.1,208.3,237,210,238.4,211.8,240.8,215.1,244.6,219.1,248.1,222.7,256.5,231.3,264.1,239.6,269.9,248.4,284.8,271.6,289.8,289.1,291.4,295,294.5,302.4,292.9,308.6,292.9,316.2,292.9,333.3,281.6,340,275.7,343.5,268.3,343.5,259,343.5,253.8,326.6,249.8,313.9,249.8,301.1,249.8,297.2,252,295.1,254.9,292.5,261.8,292.5,270.3,292.5,277.2,295.1,281.2,296.8,294.5,302.4,311.1,309.5,344.3,309.5,357.2,309.5,362.6,309,370.1,308.2,375.1,305.6,380.4,303,385.7,297.1,390.4,291.8,397.9,280.7,399.3,278.6,406.3,262.6,408.9,256.4,410.8,251.9,413.9,244.6,414.9,241.4,417.5,233.7,418,223.1,418,222.8,418,211.3,418,196.2,412.3,185.7,405.5,173.1,392.7,173.1,389.4,173.1,387,178.3,383.5,185.7,383.5,201.6,383.5,210.3,383.6,210.8,383.8,214.9,385.1,218.4,387.7,225.3,401.4,243.7,404.4,247.6,410.8,251.9,411.2,252.1,411.6,252.4,418.2,256.8,422.3,257.6,426.2,258.4,434.5,258.4,441.8,258.4,445.3,256.6,449.8,254.3,452.9,247.4,458.3,235.6,467.2,184.3,471,162.7,481.2,152.5,489,144.8,499.3,144.8,503.9,144.8,507.9,145.9,518.9,148.9,525.2,160,533.1,173.8,533.1,199,533.1,215.3,531.8,220.1,530.9,223.7,527.9,223.7,514.7,223.7,509.1,201.4,505.6,187.4,505.6,168.1,505.6,154.6,507.9,145.9,508,145.4,508.1,144.9,510.8,135.3,517.7,127.1,524.1,119.3,537.2,109.3,544.7,103.6,560.7,92.5]}},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260,348.8,85,80.8);
// library properties:
lib.properties = {
	id: '27143C241358CB41A7B4616BD03269B8',
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
an.compositions['27143C241358CB41A7B4616BD03269B8'] = {
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