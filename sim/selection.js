var makeSelector = (function() {
	var html = '<div id="topmask" class="highlight-mask"></div><div id="leftmask" class="highlight-mask"></div><div id="rightmask" class="highlight-mask"></div><div id="bottommask" class="highlight-mask"></div><div id="dragmask" class="highlight-drag"></div>';
	
	$('body').append(html);
	
	var isHighlightEnabled = true;
	var wasShiftSelected = false;
	$(document).keydown(function(event){
		if (event.keyCode==16) {
			wasShiftSelected = true;
		}
		
	});
	
	var startX, startY;
	var isDragging = false;

	$(document).keyup(function(event){
		if (event.keyCode == 16) {
			wasShiftSelected = false;
		}
	});
	
	$(document).mousedown(function(event){
	    if(isHighlightEnabled){
	        startX = event.pageX;
	        startY = event.pageY;
	        isDragging = true;
	        // prevent default behavior of text selection
	        //return false;
	    }
	});
	
	$(document).mousemove(function(event){
	    if(isDragging){
	        var left, top, width, height;
	        if(event.pageX>startX){
	            left = startX;
	            width = event.pageX - startX;
	        }
	        else {
	            left = event.pageX;
	            width = startX - event.pageX;
	        }
	        if(event.pageY>startY){
	            top = startY;
	            height = event.pageY - startY;
	        }
	        else {
	            top = event.pageY;
	            height = startY - event.pageY;
	        }

	        $("#dragmask").css(
		            {
		                'left'   :    left,
		                'top'    :    top,
		                'width'  :    width,
		                'height' :    height
		            }
		        );
	        
	        if (width * height > 25) {
		        $("#dragmask").show();
		        return false;
	        }
	    }
	});
	
	var listeners = [];
	
	$(document).mouseup(function(event){
	    if(isDragging){
	        isDragging = false;
	        $("#dragmask").hide();
	        var screenWidth = $(document).width();
	        var screenHeight = $(document).height();
	        var topOfHighlight, bottomOfHighlight;
	        if(event.pageY>startY){
	            topOfHighlight = startY;
	            bottomOfHighlight = event.pageY;
	        }
	        else{
	            topOfHighlight = event.pageY;
	            bottomOfHighlight = startY;
	        }
	        var leftOfHighlight, rightOfHighlight;
	        if(event.pageX>startX){
	            leftOfHighlight = startX;
	            rightOfHighlight = event.pageX;
	        } else {
	            leftOfHighlight = event.pageX;
	            rightOfHighlight = startX;
	        }
	        
	        var w = rightOfHighlight-leftOfHighlight;
	        var h = bottomOfHighlight-topOfHighlight;
	        
	        if (w * h > 25) {
		        for (var i = 0; i < listeners.length; i++) {
		        	listeners[i](leftOfHighlight, topOfHighlight, w, h, wasShiftSelected);
		        }
	        }
	        
//	        //position the top mask
//	        $("#topmask").css(
//	            {
//	                'left'    :    0,
//	                'width'   :    screenWidth,
//	                'top'     :    0,
//	                'height'  :    topOfHighlight
//	            }
//	        ).show();
//	        // position the bottom mask
//	        $("#bottommask").css(
//	            {
//	                'left'    :    0,
//	                'width'   :    screenWidth,
//	                'top'     :    bottomOfHighlight,
//	                'height'  :    screenHeight - bottomOfHighlight
//	            }
//	        ).show();
//	        // position the left mask
//	        $("#leftmask").css(
//	            {
//	                'left'    :    0,
//	                'width'   :    leftOfHighlight,
//	                'top'     :    topOfHighlight,
//	                'height'  :    bottomOfHighlight - topOfHighlight
//	            }
//	        ).show();
//	        // position the right mask
//	        $("#rightmask").css(
//	            {
//	                'left'    :    rightOfHighlight,
//	                'width'   :    screenWidth - rightOfHighlight,
//	                'top'     :    topOfHighlight,
//	                'height'  :    bottomOfHighlight - topOfHighlight
//	            }
//	        ).show();
	    }
	});
	
	return {
		addListener: function(listener) {
			listeners.push(listener);
		},
		setEnabled: function(en) {
			isHighlightEnabled = en;
			if (!isHighlightEnabled && isDragging) {
				isDragging = false;
				$("#dragmask").hide();
			}
		}
	};
});
