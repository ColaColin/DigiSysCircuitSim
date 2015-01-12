var preload = undefined; //'{"sockets":[{"key":"and","x":619.890625,"y":32.890625,"index":0,"aFrom":9,"bFrom":11},{"key":"lamp","x":1335.9375,"y":159.875,"index":1,"aFrom":14},{"key":"lamp","x":1199.90625,"y":149.75,"index":2,"aFrom":14},{"key":"lamp","x":1462.96875,"y":164.875,"index":3,"aFrom":14},{"key":"0","x":322.8958435058594,"y":103.375,"index":4},{"key":"1","x":320.8958435058594,"y":190.875,"index":5},{"key":"1","x":324.857666015625,"y":283.3368225097656,"index":6},{"key":"1","x":319.82293701171875,"y":377.11114501953125,"index":7},{"key":"not","x":419.9375,"y":102.953125,"index":8,"aFrom":4},{"key":"not","x":417.921875,"y":200.9375,"index":9,"aFrom":5},{"key":"not","x":415.890625,"y":292.515625,"index":10,"aFrom":6},{"key":"not","x":414.890625,"y":394.390625,"index":11,"aFrom":7},{"key":"lamp","x":700.96875,"y":3892.4375,"index":12},{"key":"lamp","x":13788.95849609375,"y":150.6458,"index":13},{"key":"or","x":842.96875,"y":34.96875,"index":14,"aFrom":0,"bFrom":16},{"key":"and","x":620.984375,"y":121.953125,"index":15,"aFrom":8,"bFrom":6},{"key":"or","x":841.984375,"y":134.96875,"index":16,"aFrom":15,"bFrom":18},{"key":"and","x":617.984375,"y":223.953125,"index":17,"aFrom":5,"bFrom":6},{"key":"or","x":840.96875,"y":228.96875,"index":18,"aFrom":17,"bFrom":21},{"key":"and","x":614.953125,"y":320.984375,"index":19,"aFrom":4,"bFrom":20},{"key":"and","x":614.9375,"y":427.9375,"index":20,"aFrom":10,"bFrom":11},{"key":"or","x":833.9375,"y":320.9375,"index":21,"aFrom":19,"bFrom":22},{"key":"or","x":802.96875,"y":438.984375,"index":22,"aFrom":23,"bFrom":25},{"key":"and","x":615.96875,"y":537.40625,"index":23,"aFrom":4,"bFrom":24},{"key":"and","x":623.984375,"y":645.390625,"index":24,"aFrom":9,"bFrom":10},{"key":"and","x":624,"y":798,"index":25,"aFrom":8,"bFrom":26},{"key":"and","x":589,"y":909,"index":26,"aFrom":5,"bFrom":7},{"key":"lamp","x":1087,"y":223,"index":27,"aFrom":30},{"key":"lamp","x":1089,"y":313,"index":28,"aFrom":30},{"key":"lamp","x":1092,"y":410,"index":29,"aFrom":30},{"key":"not","x":970,"y":360,"index":30,"aFrom":31},{"key":"not","x":1006,"y":1011,"index":31,"aFrom":43},{"key":"not","x":400,"y":1174,"index":32,"aFrom":4},{"key":"not","x":530,"y":1180,"index":33,"aFrom":32},{"key":"not","x":532,"y":1262,"index":34,"aFrom":4},{"key":"not","x":506,"y":1482,"index":35,"aFrom":5},{"key":"not","x":418,"y":1374,"index":36,"aFrom":35},{"key":"not","x":422,"y":1588,"index":37,"aFrom":38},{"key":"not","x":530,"y":1678,"index":38,"aFrom":6},{"key":"not","x":526,"y":1876,"index":39,"aFrom":7},{"key":"not","x":426,"y":1776,"index":40,"aFrom":39},{"key":"and","x":894,"y":1114,"index":41,"aFrom":33,"bFrom":37},{"key":"and","x":894,"y":1238,"index":42,"aFrom":33,"bFrom":39},{"key":"or","x":1085,"y":1132,"index":43,"aFrom":41,"bFrom":44},{"key":"or","x":1138,"y":1234,"index":44,"aFrom":42,"bFrom":46},{"key":"and","x":896,"y":1357.9999870117188,"index":45,"aFrom":33,"bFrom":35},{"key":"or","x":1144,"y":1356,"index":46,"aFrom":49,"bFrom":45},{"key":"and","x":904,"y":1520,"index":47,"aFrom":35,"bFrom":48},{"key":"and","x":912,"y":1624,"index":48,"aFrom":38,"bFrom":39},{"key":"or","x":1160,"y":1506,"index":49,"aFrom":47,"bFrom":52},{"key":"and","x":914,"y":1806,"index":50,"aFrom":36,"bFrom":51},{"key":"and","x":918,"y":1918,"index":51,"aFrom":37,"bFrom":39},{"key":"or","x":1170,"y":1814,"index":52,"aFrom":50,"bFrom":53},{"key":"and","x":912,"y":2088,"index":53,"aFrom":34,"bFrom":54},{"key":"and","x":912,"y":2196,"index":54,"aFrom":36,"bFrom":55},{"key":"and","x":916,"y":2306,"index":55,"aFrom":38,"bFrom":40},{"key":"lamp","x":1100,"y":592,"index":56,"aFrom":59},{"key":"lamp","x":1103,"y":690,"index":57,"aFrom":59},{"key":"lamp","x":1103,"y":787,"index":58,"aFrom":59},{"key":"not","x":987,"y":731,"index":59,"aFrom":60},{"key":"not","x":1418,"y":2544,"index":60,"aFrom":69},{"key":"not","x":472,"y":2554,"index":61,"aFrom":62},{"key":"not","x":566,"y":2648,"index":62,"aFrom":33},{"key":"not","x":450,"y":2772,"index":63,"aFrom":64},{"key":"not","x":548,"y":2862,"index":64,"aFrom":36},{"key":"not","x":432,"y":3014,"index":65,"aFrom":66},{"key":"not","x":522,"y":3102,"index":66,"aFrom":37},{"key":"not","x":426,"y":3268,"index":67,"aFrom":68},{"key":"not","x":524,"y":3358,"index":68,"aFrom":40},{"key":"or","x":1220,"y":2548,"index":69,"aFrom":0,"bFrom":70},{"key":"or","x":1224,"y":2660,"index":70,"aFrom":71,"bFrom":41},{"key":"or","x":1228,"y":2776,"index":71,"aFrom":72,"bFrom":73},{"key":"and","x":958,"y":2718,"index":72,"aFrom":61,"bFrom":63},{"key":"or","x":1230,"y":2902,"index":73,"aFrom":74},{"key":"and","x":920,"y":2934,"index":74,"aFrom":63,"bFrom":75},{"key":"and","x":920,"y":3042,"index":75,"aFrom":65,"bFrom":68},{"key":"lamp","x":1188,"y":874,"index":76,"aFrom":79},{"key":"lamp","x":1320,"y":874,"index":77,"aFrom":79},{"key":"lamp","x":1441,"y":877,"index":78,"aFrom":79},{"key":"or","x":1770,"y":1069.0000740234375,"index":79,"aFrom":88,"bFrom":50},{"key":"not","x":1656,"y":1410,"index":80,"aFrom":81},{"key":"not","x":1754,"y":1500,"index":81,"aFrom":36},{"key":"not","x":1770,"y":1698,"index":82,"aFrom":37},{"key":"not","x":1660,"y":1626,"index":83,"aFrom":82},{"key":"not","x":1770,"y":1304,"index":84,"aFrom":33},{"key":"not","x":1684,"y":1226,"index":85,"aFrom":84},{"key":"not","x":1655.0000435058594,"y":1848,"index":86,"aFrom":87},{"key":"not","x":1766,"y":1942,"index":87,"aFrom":40},{"key":"or","x":2251,"y":1233.9999870117188,"index":88,"aFrom":89,"bFrom":90},{"key":"and","x":2057,"y":1211.9999870117188,"index":89,"aFrom":85,"bFrom":82},{"key":"or","x":2256,"y":1343.9999870117188,"index":90,"aFrom":91,"bFrom":95},{"key":"and","x":2057,"y":1336.9999870117188,"index":91,"aFrom":81,"bFrom":92},{"key":"and","x":2061,"y":1434.9999870117188,"index":92,"aFrom":83,"bFrom":86},{"key":"and","x":2059,"y":1573.9999870117188,"index":93,"aFrom":84,"bFrom":94},{"key":"and","x":2059,"y":1667.9999870117188,"index":94,"aFrom":81,"bFrom":87},{"key":"or","x":2270,"y":1454.9999870117188,"index":95,"aFrom":93,"bFrom":96},{"key":"and","x":2060,"y":1882.000048046875,"index":96,"aFrom":80,"bFrom":97},{"key":"and","x":2056,"y":1976.000048046875,"index":97,"aFrom":86,"bFrom":82},{"key":"lamp","x":1558,"y":724,"index":98,"aFrom":107},{"key":"lamp","x":1551,"y":821,"index":99,"aFrom":107},{"key":"lamp","x":1556,"y":628,"index":100,"aFrom":107},{"key":"not","x":2508.000148046875,"y":1216.9999870117188,"index":101,"aFrom":102},{"key":"not","x":2597.0000870117187,"y":1333.9791,"index":102,"aFrom":85},{"key":"not","x":2508,"y":1466.9999870117188,"index":103,"aFrom":104},{"key":"not","x":2599,"y":1558.9999870117188,"index":104,"aFrom":80},{"key":"not","x":2510,"y":1700.9999870117188,"index":105,"aFrom":106},{"key":"not","x":2602.0000870117187,"y":1802.9999870117188,"index":106,"aFrom":83},{"key":"or","x":1718,"y":737,"index":107,"bFrom":108},{"key":"or","x":3208.000148046875,"y":1085.9999717529297,"index":108,"aFrom":45,"bFrom":111},{"key":"not","x":2491.9999740234375,"y":1958.000048046875,"index":109,"aFrom":110},{"key":"not","x":2577.0000870117187,"y":2070.0000480468752,"index":110,"aFrom":86},{"key":"or","x":3248.000148046875,"y":1329.9583,"index":111,"aFrom":112,"bFrom":114},{"key":"and","x":2864.0000717529297,"y":1251.9999717529297,"index":112,"aFrom":101,"bFrom":113},{"key":"and","x":2863.000148046875,"y":1351.9999870117188,"index":113,"aFrom":109,"bFrom":106},{"key":"or","x":3259.000148046875,"y":1453.9999870117188,"index":114,"aFrom":115,"bFrom":116},{"key":"and","x":2899.0000717529297,"y":1537.9999717529297,"index":115,"aFrom":103,"bFrom":102},{"key":"or","x":3260.0000717529297,"y":1581.9999717529297,"index":116,"aFrom":117,"bFrom":118},{"key":"and","x":2936.0000870117187,"y":1714.9999870117188,"index":117,"aFrom":104,"bFrom":109},{"key":"or","x":3266.0000717529297,"y":1710.9999717529297,"index":118,"aFrom":119},{"key":"and","x":2931.0000717529297,"y":1897.9999717529297,"index":119,"aFrom":102,"bFrom":106},{"key":"lamp","x":1548,"y":444,"index":120,"aFrom":123},{"key":"lamp","x":1549,"y":332.984375,"index":121,"aFrom":123},{"key":"lamp","x":1552,"y":230,"index":122,"aFrom":123},{"key":"or","x":1782,"y":354.96875,"index":123,"bFrom":124},{"key":"or","x":1861.9861450195312,"y":497.99305800781246,"index":124,"bFrom":133},{"key":"not","x":3669.0000740234377,"y":1263.9791435058594,"index":125,"aFrom":126},{"key":"not","x":3759,"y":1353.9999435058594,"index":126,"aFrom":101},{"key":"not","x":3654.0000740234377,"y":1438.9999870117188,"index":127,"aFrom":128},{"key":"not","x":3745.9999870117185,"y":1531.9999870117188,"index":128,"aFrom":103},{"key":"not","x":3631.0000740234377,"y":1633.9999870117188,"index":129,"aFrom":130},{"key":"not","x":3739.0000740234377,"y":1720.9999870117188,"index":130,"aFrom":105},{"key":"not","x":3610.0000740234377,"y":1825.9999870117188,"index":131,"aFrom":132},{"key":"not","x":3704.0000740234377,"y":1963,"index":132,"aFrom":109},{"key":"or","x":4302.000074023437,"y":1352.9999870117188,"index":133,"aFrom":134,"bFrom":138},{"key":"and","x":4090.0000740234377,"y":1396.9999870117188,"index":134,"aFrom":125,"bFrom":135},{"key":"and","x":4091.0000740234377,"y":1495.9999870117188,"index":135,"aFrom":131,"bFrom":130},{"key":"and","x":4118.000074023437,"y":1682.9999870117188,"index":136,"aFrom":126,"bFrom":137},{"key":"and","x":4112.000074023437,"y":1786.9999870117188,"index":137,"aFrom":131,"bFrom":129},{"key":"or","x":4307.99997175293,"y":1478.9999717529297,"index":138,"aFrom":136,"bFrom":140},{"key":"and","x":4117.000048046875,"y":1950.000048046875,"index":139,"aFrom":126,"bFrom":128},{"key":"or","x":4336.000074023437,"y":1626,"index":140,"aFrom":139,"bFrom":143},{"key":"and","x":4133,"y":2081.9999740234375,"index":141,"aFrom":126,"bFrom":142},{"key":"and","x":4127,"y":2181.9999740234375,"index":142,"aFrom":132,"bFrom":130},{"key":"or","x":4369.000074023437,"y":1763,"index":143,"aFrom":144,"bFrom":141},{"key":"and","x":4136.000074023437,"y":2340.0000870117187,"index":144,"aFrom":128,"bFrom":132},{"key":"lamp","x":1460.984375,"y":530.984375,"index":145,"aFrom":148},{"key":"lamp","x":1336.984375,"y":542.984375,"index":146,"aFrom":148},{"key":"lamp","x":1217.984375,"y":548.96875,"index":147,"aFrom":148},{"key":"or","x":1656.953125,"y":548.96875,"index":148,"bFrom":168},{"key":"not","x":2720.951766796875,"y":12.98648452758789,"index":149,"aFrom":150},{"key":"not","x":2819.951603027344,"y":100.95833587646484,"index":150,"aFrom":160},{"key":"not","x":2725.9636076171873,"y":166.9523162841797,"index":151,"aFrom":152},{"key":"not","x":2815.9448087890623,"y":249.95718383789062,"index":152,"aFrom":157},{"key":"not","x":2712.94273359375,"y":316.95306396484375,"index":153,"aFrom":154},{"key":"not","x":2798.941166015625,"y":416.920166015625,"index":154,"aFrom":158},{"key":"not","x":2708.9480080078124,"y":489.9375305175781,"index":155,"aFrom":156},{"key":"not","x":2811.9305265625,"y":597.971435546875,"index":156,"aFrom":159},{"key":"or","x":1509.953125,"y":44.953125,"index":157,"bFrom":5},{"key":"or","x":1358.921875,"y":30.9375,"index":158,"aFrom":6},{"key":"or","x":1202.9375,"y":38.9375,"index":159,"aFrom":7},{"key":"or","x":1956.993603125,"y":53.969215393066406,"index":160,"bFrom":4},{"key":"lamp","x":1193.984375,"y":464.96875,"index":161,"aFrom":165},{"key":"lamp","x":1355.953125,"y":323.921875,"index":162,"aFrom":165},{"key":"lamp","x":1433.953125,"y":259.9375,"index":163,"aFrom":165},{"key":"lamp","x":1269.953125,"y":395.96875,"index":164,"aFrom":165},{"key":"and","x":925.984375,"y":524.984375,"index":165,"aFrom":8,"bFrom":166},{"key":"and","x":877.984375,"y":654.984375,"index":166,"aFrom":5,"bFrom":167},{"key":"and","x":828.96875,"y":756.96875,"index":167,"aFrom":10,"bFrom":11},{"key":"or","x":3370.9342140625,"y":857.9583740234375,"index":168,"aFrom":41,"bFrom":171},{"key":"or","x":3532.9722,"y":435.97222900390625,"index":169,"aFrom":178,"bFrom":176},{"key":"or","x":3513.9584060546877,"y":546.96875,"index":170,"aFrom":172,"bFrom":169},{"key":"or","x":3467.9896560546877,"y":650.982666015625,"index":171,"aFrom":45,"bFrom":170},{"key":"and","x":3200.972416015625,"y":285.97918701171875,"index":172,"aFrom":173,"bFrom":154},{"key":"and","x":3208.982853027344,"y":168.96182250976562,"index":173,"aFrom":150,"bFrom":151},{"key":"and","x":3170.965519042969,"y":413.96881103515625,"index":174,"aFrom":175,"bFrom":156},{"key":"and","x":3133.9723,"y":519.982666015625,"index":175,"aFrom":150,"bFrom":151},{"key":"and","x":3001.94105,"y":794.951416015625,"index":176,"aFrom":153,"bFrom":152},{"key":"and","x":3068.986216015625,"y":643.982666015625,"index":177,"aFrom":149,"bFrom":155},{"key":"or","x":3540.9966072509765,"y":340.9965362548828,"index":178,"aFrom":174,"bFrom":177},{"key":"notes","x":147,"y":447,"text":"Click these buttons to control the bits. The upper one is the most significant bit.","index":179}],"switchTime":"100"}';

$.urlParam = function(name) {
	var results = new RegExp('[\\?&]' + name + '=([^&#]*)')
			.exec(window.location.href);
	return results == null ? undefined : (results[1] || undefined);
}

function Gate(foldFunc, name) {
	var self = this;
	self.output = ko.observable(false);
	self.inputA = ko.observable(false);
	self.inputB = ko.observable(false);
	self.name = ko.observable(name);
	
	self.foldFunc = ko.observable(foldFunc);
	
	self.step = function() {
		setTimeout(function() {
			self.output(self.foldFunc()(self.inputA(), self.inputB()));
		}, Number(model ? model.switchTime() : 75));
	};
	
	self.outputToA = ko.observableArray([]);
	self.outputToB = ko.observableArray([]);
	self.inputAFrom = ko.observable();
	self.inputBFrom = ko.observable();
	self.step();
	
	var gateSimSubscrs = [];
	
	gateSimSubscrs.push(self.foldFunc.subscribe(self.step))
	gateSimSubscrs.push(self.inputA.subscribe(self.step));
	gateSimSubscrs.push(self.inputB.subscribe(self.step));	
	gateSimSubscrs.push(self.output.subscribe(function(v) {
		var as = self.outputToA();
		for (var i = 0; i < as.length; i++) {
			as[i].inputA(v);
		}
		var bs = self.outputToB();
		for (var i = 0; i < bs.length; i++) {
			bs[i].inputB(v);
		}
	}));
	
	var setDeferUpdates = function(v) {
		for (var i = 0; i < gateSimSubscrs.length; i++) {
			gateSimSubscrs[i].deferUpdates = v;
		}
	};
	setDeferUpdates(false);
	
	self.cleanup = function() {
		var as = self.outputToA();
		for (var i = 0; i < as.length; i++) {
			as[i].inputAFrom(undefined);
		}
		var bs = self.outputToB();
		for (var i = 0; i < bs.length; i++) {
			bs[i].inputBFrom(undefined);
		}

		var cleanOuts = function(outs) {
			for (var i = 0; i < outs.length; i++) {
				if (outs[i] === self) {
					outs.splice(i, 1);
					break;
				}
			};
		};
		
		var aFrom = self.inputAFrom();
		if (aFrom) {
			cleanOuts(aFrom.outputToA());
		}
		var bFrom = self.inputBFrom();
		if (bFrom) {
			cleanOuts(bFrom.outputToB());
		}
	};
	
	var linkOutput = function(gate, key) {
		self["outputTo"+key].push(gate);
		var beforeIn = gate["input"+key+"From"]();
		if (beforeIn) {
			var outs = beforeIn["outputTo"+key];
			for (var i = 0; i < outs().length; i++) {
				if (outs()[i] === gate) {
					outs.splice(i, 1);
					break;
				}
			}
		}
		gate["input"+key+"From"](self);
		gate["input"+key](self.output());
		
		if (model) model.redraw();
	};
	
	self.linkOutputToA = function(gate) {
		linkOutput(gate, "A");
	};
	
	self.linkOutputToB = function(gate) {
		linkOutput(gate, "B");
	};
};

var newAndGate = function() {
	return new Gate(function(a, b) {
		return a && b;
	}, "and");
};

var newOrGate = function() {
	return new Gate(function(a, b) {
		return a || b;
	}, "or");
};

// inverters ignore inputB
var newNotGate = function() {
	return new Gate(function(a, b) {
		return !a;
	}, "not");
};

var newNandGate = function() {
	return new Gate(function(a, b) {
		return !(a && b);
	}, "nand");
};

var newNorGate = function() {
	return new Gate(function(a, b) {
		return !(a || b);
	}, "nor");
};

var newXorGate = function() {
	return new Gate(function(a, b) {
		return a ^ b;
	}, "xor");
};

var new1Gate = function() {
	return new Gate(function(a, b) {
		return true;
	}, "1");
};

var new0Gate = function() {
	return new Gate(function(a, b) {
		return false;
	}, "0");
};

// lamps show the state of a and have only one input and one output
var newLampGate = function() {
	return new Gate(function(a, b) {
		return a;
	}, "lamp");
}

var newNotesGate = function() {
	return new Gate(function(a, b) {
		return a;
	}, "notes");
}

function GateSocket(gate) {
	var self = this;
	self.gate = gate;
	self.image = gate.name;
	
	self.x = ko.observable(100);
	self.y = ko.observable(0);

	self.width = ko.observable(110 * 0.50);
	self.height = ko.observable(80 * 0.50);
	self.clickHandler = function(e) {
		
	};
	
	self.selected = ko.observable(false);
	self.states = ko.observableArray([]);
	self.text = ko.observable("");
};

function SimModel() {
	var self = this;
	self.buildbar = ko.observableArray(['and', 'or', 'not', 'nand', 'nor', 'xor', '1', '0', 'lamp', 'notes']);
	self.gateSockets = ko.observableArray([]);
	self.switchTime = ko.observable(75);
	
	self.showDetails = ko.observable(true);
	
	self.hasPreload = ko.observable(preload !== undefined);
	
	self.connecting = ko.observable();
	self.canvasElem = document.getElementById('drawpane'); 
	self.canvas = self.canvasElem.getContext('2d');
	self.canvas.lineWidth = 3;
	
	function intersectRect(r1, r2) {
		  return !(r2.left > r1.right || 
		           r2.right < r1.left || 
		           r2.top > r1.bottom ||
		           r2.bottom < r1.top);
		}
	
	self.moveSelectedElementsBy = function(xOffset, yOffset, exception) {
		for (var i = 0; i < self.gateSockets().length; i++) {
			var sock = self.gateSockets()[i];
			if (sock.selected() && sock !== exception) {
				sock.x(sock.x() + xOffset);
				sock.y(sock.y() + yOffset);
			}
		}
	};

	self.deselect = function() {
		for (var i = 0; i < self.gateSockets().length; i++) {
			self.gateSockets()[i].selected(false);
		}
	};
	
	self.select = function(x, y, width, height, shift) {
		var selectRect = {
			left: x,
			right: x + width,
			top: y,
			bottom: y + height
		};
		for (var i = 0; i < self.gateSockets().length; i++) {
			var sock = self.gateSockets()[i];
			var gateRect = {
				left: sock.x(),
				right: sock.x() + sock.width(),
				top: sock.y(),
				bottom: sock.y() + sock.height()
			};
			
			var hit = intersectRect(selectRect, gateRect);
			var wasSelected = sock.selected();
			
			sock.selected(hit || (wasSelected && shift));
			if (sock.selected() && self.connecting() === sock) {
				self.connecting(undefined);
			}
		}
	};
	
	var arrows = new ArrowDrawer(self.canvas);
	
	var drawingEnabled = true;
	
	self.redraw = function() {
		if (!drawingEnabled) {
			return;
		}
		self.canvasElem.width  = window.innerWidth;
		self.canvasElem.height = window.innerHeight;
		self.canvas.clearRect(0, 0, window.innerWidth, window.innerHeight);
		var sockets = self.gateSockets();
		
		var scrollTop  = window.pageYOffset || document.documentElement.scrollTop,
	    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		
		var drawLinesFor = function(fromX, fromY, targets, yOffsetFactor) {
			for (var i = 0; i < targets.length; i++) {
				var targetSocket = targets[i].socket;
				var tx = targetSocket.x()+targetSocket.width()*0.15;
				var yo = targets[i].name() === "not" || targets[i].name() === "lamp" ? 0.5 : yOffsetFactor; // hack
				var ty = targetSocket.y() + targetSocket.height()*yo;
				arrows.drawLineArrow(fromX-scrollLeft, fromY-scrollTop, tx-scrollLeft, ty-scrollTop);
			}
		};
		
		for (var i = 0; i < sockets.length; i++) {
			var gate = sockets[i].gate;
			var fX = sockets[i].x()+sockets[i].width()*0.85;
			var fY = sockets[i].y()+sockets[i].height()/2;
			drawLinesFor(fX, fY, gate.outputToA(), 0.25);
			drawLinesFor(fX, fY, gate.outputToB(), 0.85);
		}
	};
	
	$(document).scroll(function() {
		self.redraw();
	});
	$(document).resize(function() {
		setTimeout(self.redraw, 1000);
	})
	self.connecting.subscribe(self.redraw);
	self.gateSockets.subscribe(self.redraw);

	self.removeGateSocketByIndex = function(socket, index) {
		socket.gate.cleanup();
		self.gateSockets.splice(index, 1);
	};
	
	var processingQueue = false;
	var taskQueue = [];
	
	var processStateShowQueue = function() {
		if (taskQueue.length > 0) {
			taskQueue.pop()();
			setImmediate(processStateShowQueue);
		} else {
			processingQueue = false;
		}
	};
	
	var queueTask = function(task) {
		taskQueue.push(task);
		if (!processingQueue) {
			processingQueue = true;
			processStateShowQueue();
		}
	};
	
	var addOutputShow = function(socket) {
		var changed = ko.observable(false);
		socket.states.push({
			showChanged: changed,
			value: ko.computed(function() {
				changed(true);
				setTimeout(function() {
					changed(false);
				}, Number(model ? model.switchTime() : 0));
				return socket.gate.output() ? "1" : "0";
			}),
			offsetX: (socket.width()-10)+"px",
			offsetY: (socket.height()-35)+"px"
		});
	};
	
	var addInputBShow = function(socket) {
		var changed = ko.observable(false);
		socket.states.push({
			showChanged: changed,
			value: ko.computed(function() {
				changed(true);
				setTimeout(function() {
					changed(false);
				}, Number(model ? model.switchTime() : 0));
				return socket.gate.inputB() ? "1" : "0";
			}),
			offsetX: (5)+"px",
			offsetY: (socket.height())+"px"
		});
	};
	
	var addInputAShow = function(socket) {
		var changed = ko.observable(false);
		socket.states.push({
			showChanged: changed,
			value: ko.computed(function() {
				changed(true);
				setTimeout(function() {
					changed(false);
				}, Number(model ? model.switchTime() : 0));
				return socket.gate.inputA() ? "1" : "0";
			}),
			offsetX: (5)+"px",
			offsetY: "0px"
		});
	};
	
	var value3Show = function(socket) {
		queueTask(function() {
			addOutputShow(socket);
			addInputAShow(socket);
			addInputBShow(socket);
		});
	};	
	
	// TODO 200+ lines god function?! How did this even happen?
	self.addAt = function(key, x, y) {
		var n = undefined;
		
		var toggleConstant = function(foo) {
			return function() {
				if (foo.gate.name() === "1") {
					foo.gate.name("0");
					foo.gate.foldFunc(function(a, b) {
						return false;
					});
				} else {
					foo.gate.name("1");
					foo.gate.foldFunc(function(a, b) {
						return true;
					});
				}
			};
		};
		
		var connector = function(clicked) {
			return function(f, event) {
				if (clicked.gate.name() === "notes") {
					return;
				} 
				if (event.ctrlKey) {
					if (self.connecting() === undefined && !clicked.selected()) {
						self.connecting(clicked);
					} else {
						if (clicked.gate.name() === "not" || clicked.gate.name() === "lamp") {
							self.connecting().gate.linkOutputToA(clicked.gate);
							self.connecting(undefined);
						} else if (clicked.gate.name() !== "0" && clicked.gate.name() !== "1") {
							var y = event.offsetY || event.originalEvent.layerY;
							var aElseB = y < clicked.height()/2;
							
							if (aElseB) {
								self.connecting().gate.linkOutputToA(clicked.gate);
							} else {
								self.connecting().gate.linkOutputToB(clicked.gate);
							}
							
							self.connecting(undefined);
						}
					}
				}
			};
		};
		
		switch(key) {
		case "and":
			n = new GateSocket(newAndGate());
			break;
		case "or":
			n = new GateSocket(newOrGate());
			break;
		case "not":
			n = new GateSocket(newNotGate());
			break;
		case "nand":
			n = new GateSocket(newNandGate());
			break;
		case "nor":
			n = new GateSocket(newNorGate());
			break;
		case "xor":
			n = new GateSocket(newXorGate());
			break;
		case "1":
			n = new GateSocket(new1Gate());
			n.clickHandler = toggleConstant(n);
			break;
		case "0":
			n = new GateSocket(new0Gate());
			n.clickHandler = toggleConstant(n);
			break;
		case "lamp":
			n = new GateSocket(newLampGate());
			n.image = ko.computed(function() {
				return n.gate.output() ? "on" : "off";
			});
			break;
		case "notes":
			n = new GateSocket(newNotesGate());
			n.width(200);
			n.height(75);
			break;
		default:
			console.log("unknown key "+key+": Cannot add socket for that!");
		}
		
		if (key !== 'notes') {
			if (key !== "lamp" && key !== "0" && key !== "1" && key !== "not") {
				value3Show(n);
			} else {
				if (key !== "lamp") {
					queueTask(function() {
						addOutputShow(n)
					});
				}
				
				if (key === "not") {
					queueTask(function() {
						addInputAShow(n);
					});
				}
			}
		}
		
		var cClick = connector(n);
		var oldClick = n.clickHandler;
		n.clickHandler = function(a, e) {
			oldClick(a, e);
			cClick(a, e);
			self.storeState();
		};
		
		n.gate.socket = n;
		
		n.x(x);
		n.y(y);
		self.gateSockets.push(n);
		return n;
	};
	
	self.add = function(key, event) {
		self.addAt(key, event.pageX+75, event.pageY);
		self.storeState();
	};
	
	var packageGates = function(selector) {
		var serialized = [];
		var knownIds = {};
		for (var i = 0; i < self.gateSockets().length; i++) {
			var socket = self.gateSockets()[i];
			socket.gate.indexReminder = i;
			if (selector === undefined || selector(socket)) {
				serialized.push({
					key: socket.gate.name(),
					x: socket.x(),
					y: socket.y(),
					text: socket.text(),
					index: i
				});
				knownIds[i] = true; 
			}
		}
		
		for (var i = 0; i < serialized.length; i++) {
			var serialSock = serialized[i];
			var socket = self.gateSockets()[serialSock.index];
			var aFrom = socket.gate.inputAFrom();
			var index = aFrom !== undefined ? aFrom.indexReminder : -1;
			if (aFrom && knownIds[index]) {
				if (index !== -1) {
					serialSock.aFrom = index;
				}
			}
			
			var bFrom = socket.gate.inputBFrom();
			var index = bFrom !== undefined ? bFrom.indexReminder : -1;
			if (bFrom && knownIds[index]) {
				if (index !== -1) {
					serialSock.bFrom = index;
				}
			}
		}
		
		return serialized;
	};
	
	var getCurrentStateCopy = function() {
//		var dt = new Date().getTime();
		var state = {
			sockets: packageGates(),
			switchTime: self.switchTime(),
			showDetails: self.showDetails()
		};
//		console.log("stored within "+(new Date().getTime() - dt)+" ms");
		return state;
	};
	
	self.storeState = function() {
		if (preload) {
			return;
		}
		localStorage['state'] = JSON.stringify(getCurrentStateCopy());
	};
	
	self.showDetails.subscribe(self.storeState);
	
	self.switchTime.subscribe(function() {
		self.storeState();
	});	
	
	var injectGates = function(gatePackage) {
		drawingEnabled = false;
		var indexMap = {};
		var added = [];

		for (var i = 0; i < gatePackage.length; i++) {
			var packaged = gatePackage[i];
			var sock = self.addAt(packaged.key, packaged.x, packaged.y);
			sock.text(packaged.text);
			sock.text.subscribe(self.storeState);
			indexMap[packaged.index || i] = sock;
			added.push(sock);
		}
		
		for (var i = 0; i < gatePackage.length; i++) {
			var packaged = gatePackage[i];
			var sock = indexMap[packaged.index || i];
			if (packaged.aFrom !== undefined) {
				indexMap[packaged.aFrom].gate.linkOutputToA(sock.gate);
			}
			if (packaged.bFrom !== undefined) {
				indexMap[packaged.bFrom].gate.linkOutputToB(sock.gate);
			}
		}
		
		drawingEnabled = true;
		self.redraw();
		return added;
	};
	
	self.copied = ko.observable();
	
	self.copy = function() {
		self.copied(packageGates(function(g) {
			return g.selected();
		}));
	};
	
	self.paste = function(x, y) {
		if (self.copied()) {
			var gates = injectGates(self.copied());
			
			var midX = 0;
			var midY = 0;
			for (var i = 0; i < gates.length; i++) {
				midX += gates[i].x() + gates[i].width()/2;
				midY += gates[i].y() + gates[i].height()/2;
			}
			
			midX /= gates.length;
			midY /= gates.length;
			
			if (gates.length > 0) {
				var dX = x - midX;
				var dY = y - midY;
				
				for (var i = 0; i < gates.length; i++) {
					gates[i].x(gates[i].x() + dX);
					gates[i].y(gates[i].y() + dY);
				}
			}
			
			self.deselect();
			for (var i = 0; i < gates.length; i++) {
				gates[i].selected(true);
			}
			self.storeState();
		}
	};
	
	self.editClipText = ko.observable("");
	
	self.editcopy = function() {
		self.editClipText(JSON.stringify(self.copied()));
		$('#clipboardlg').dialog("open");
	};
	
	self.parseNewClipboard = function() {
		self.copied(JSON.parse(self.editClipText()));
		$('#clipboardlg').dialog("close");
	};
	
	$('#clipboardlg').dialog({
		autoOpen : false,
		minWidth : 650
	});
	
	self.importFileChanged = function(m, evt) {
		var file = evt.target.files[0];
		if (file) {
			var reader = new FileReader();
			reader.onload = function(e) {
				var state = JSON.parse(e.target.result);
				self.gateSockets([]);
				self.switchTime(state.switchTime);
				injectGates(state.sockets);
			};
			reader.readAsText(file);
		}
	};
	
	self.importFromFile = function() {
		if (confirm("Importing a file will delete all currently opened circuits, proceed?")) {
			$("#importFile").click();
		}
	};
	
	self.exportToFile = function() {
		saveAs(new Blob([JSON.stringify(getCurrentStateCopy())], {type: "application/json"}), "export.json");
	};
	
	var mouseX = 0;
	var mouseY = 0;
	
	$(document).mousemove(function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});
	
	var deleteSelected = function() {
		drawingEnabled = false;
		for (var i = 0; i < self.gateSockets().length; i++) {
			var sock = self.gateSockets()[i];
			if (sock.selected()) {
				self.removeGateSocketByIndex(sock, i);
				i--;
			}
		}
		drawingEnabled = true;
		self.redraw();
		self.storeState();
	};
	
	$(document).keydown(function(e) {
		if (e.ctrlKey && e.keyCode === 67) { // ctrl+c
			self.copy(mouseX, mouseY);
		} else if (e.ctrlKey && e.keyCode === 86) { // ctrl+v
			self.paste(mouseX, mouseY);
			self.redraw();
		} else if (e.ctrlKey && e.keyCode === 88) { // ctrl+x
			self.copy(mouseX, mouseY);
			deleteSelected();
		} else if (e.keyCode === 46) { // esc
			deleteSelected();
		}
	});
	
	self.restoreState = function() {
		if (typeof preload !== "string") {
			preload = JSON.stringify(preload);
		}
		var state = preload || localStorage['state'];
		if (state) {
			state = JSON.parse(state);
			
			self.switchTime(state.switchTime);
			
			if (state.showDetails === undefined) {
				state.showDetails = true;
			}
			
			self.showDetails(state.showDetails);
			
			injectGates(state.sockets);

			if (preload === undefined) {
				localStorage['state'] = JSON.stringify(state);
			}
		}
	};
	
	self.restoreState();	
	
	$('#helpdialog').dialog({
		autoOpen : false,
		minWidth : 500
	});
	
	self.showHelp = function() {
		$('#helpdialog').dialog("open");
	};
};

var draggingElement = ko.observable(false);
ko.bindingHandlers.draggableGate = {
   init: function(element, valueAccessor) {
       $(element).draggable({
    	   drag: function(event, ui) {
    		   var gate = valueAccessor();
    		   var xOffset = ui.offset.left - gate.x();
    		   var yOffset = ui.offset.top - gate.y();
    		   gate.x(ui.offset.left);
    		   gate.y(ui.offset.top);
    		   if (gate.selected()) {
    			   model.moveSelectedElementsBy(xOffset, yOffset, gate);
    		   }
    		   model.redraw();
    	   },
    	   start: function() {
    		   draggingElement(true);  
    	   },
    	   stop: function(event, ui) {
    		   draggingElement(false);
    		   model.storeState();
    	   }
       });
   }
};

var model = undefined;

$(document).ready(function() {
	var startSim = function() {
		model = new SimModel();
		var selector = makeSelector();
		selector.addListener(function(x, y, width, height, shift) {
			model.select(x, y, width, height, shift);
		});
		draggingElement.subscribe(function(v) {
			selector.setEnabled(!v);
		});
		ko.applyBindings(model);
	};
	
	if (preload === undefined && $.urlParam("load")) {
		$.ajax({
			type: "GET",
		    url: $.urlParam("load"),
		    dataType: "jsonp",
		    complete: startSim,
		});
	} else if (preload === undefined && localStorage['state'] === undefined) {
		localStorage['state'] = '{"sockets":[{"key":"nor","x":269,"y":61,"index":0,"aFrom":2,"bFrom":1},{"key":"nor","x":271,"y":133,"index":1,"aFrom":0,"bFrom":3},{"key":"0","x":179,"y":63,"index":2},{"key":"1","x":190,"y":139,"index":3},{"key":"lamp","x":366,"y":59,"index":4,"aFrom":0},{"key":"lamp","x":359,"y":136,"index":5,"aFrom":1},{"key":"nand","x":1070,"y":82,"index":6,"aFrom":8,"bFrom":7},{"key":"nand","x":1060,"y":140,"index":7,"aFrom":6,"bFrom":9},{"key":"nand","x":1001,"y":80,"index":8,"aFrom":15,"bFrom":10},{"key":"nand","x":988,"y":144,"index":9,"aFrom":8,"bFrom":15},{"key":"nand","x":914,"y":81,"index":10,"aFrom":12,"bFrom":11},{"key":"nand","x":915,"y":147,"index":11,"aFrom":10,"bFrom":13},{"key":"nand","x":825,"y":76,"index":12,"aFrom":14,"bFrom":18},{"key":"nand","x":837,"y":146,"index":13,"aFrom":12,"bFrom":18},{"key":"0","x":755,"y":66,"index":14},{"key":"0","x":951,"y":267,"index":15},{"key":"lamp","x":1142,"y":82,"index":16,"aFrom":6},{"key":"lamp","x":1138,"y":143,"index":17,"aFrom":7},{"key":"not","x":914,"y":227,"index":18,"aFrom":15},{"key":"notes","x":198,"y":216,"text":"A plain RS flip flop","index":19},{"key":"notes","x":1031,"y":246,"text":"D-Latch\\npositive edge triggered flip-flop","index":20}],"switchTime":75}';
	} else {
		startSim();
	}
});