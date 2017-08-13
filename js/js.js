$(function(){
	var svgIndex=0;
	var progressAnim=false;
	$("html,body").animate({scrollTop:0}, 500);        

	$('g').eq(svgIndex).find('.svgPath').css({"fill":"#71A960"});

	//导航栏切换
	$('.svgPath').on('mouseenter',function(){
		$('.svgPath').css({"fill":"#FFB401"});
		$(this).css({"fill":"red"});
	});
	$('.svgPath').on('mouseout',function(){
		$('.svgPath').css({"fill":"#FFB401"});
		$('g').eq(svgIndex).find('.svgPath').css({"fill":"#71A960"});
	});
	$('.navChild').hover(function(){ 
		svgIndex=$('.navChild').index(this);
		$('.svgPath').css({"fill":"#FFB401"});
		$('g').eq(svgIndex).find('.svgPath').css({"fill":"#71A960"});
	});
	$('g').on('click',function(){
		svgIndex=$(this).index();
	});

	//小球变色
	$('.fa_github_acc').hover(function(){
		$(this).attr("src","images/github_h.png"); 
	},function(){
		$(this).attr("src","images/github.png"); 
	})
	$('.fa_blog').hover(function(){
		$(this).attr("src","images/blog_h.png"); 
	},function(){
		$(this).attr("src","images/blog.png"); 
	})
	$('.fa_xlwb_acc').hover(function(){
		$(this).attr("src","images/xlwb_h.png"); 
	},function(){
		$(this).attr("src","images/xlwb_h.png"); 
	})
	$('.fa_bky_acc').hover(function(){
		$(this).attr("src","images/bky_h.png"); 
	},function(){
		$(this).attr("src","images/bky.png"); 
	})

	//滚动到skill执行动画
	$('#skill').hover(function(){
		$('.progress-bar').each(function(){
			$(this).animate({  width: Number($(this).attr('value')) +'%'},'ease');
		});
	},function(){
		$('.progress-bar').each(function(){
			$(this).css({  width: '0'});
		});
	});

	//导航栏动态变化
	function svgCurve() {
		if(screen.width<=500){
			//手机
			document.getElementById('svg_nav').setAttribute("viewBox", "0 0 500 500"); 
		}else{
			//电脑
			document.getElementById('svg_nav').setAttribute("viewBox", "0 0 300 300"); 
		}
		window.requestAnimationFrame(svgCurve);//刷新页面
	}
	window.requestAnimationFrame(svgCurve);

	$('.info').hover(function(){
		if(screen.width<=500){
			// $(this).width(10);
			console.log(($(this).parent().index()-1)%4);
			$('#about ul li').eq(($(this).parent().index(-1)%4).width(360).siblings().width(10);
		}
	},function(){

	});
})


