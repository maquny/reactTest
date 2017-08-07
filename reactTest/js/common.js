var win_iw = window.innerWidth;
var win_iH = window.innerHeight;
var win_ow = window.outerWidth;
var win_oH = window.outerHeight;
var mysevics_tab_h;
var mysevics_tab_h2;
var $wh_height;
var $wh_Weight2;
var $con_lybody;


function s_header(){
	var id_header = $('#header').height();

	if($('.top_induce_banner').is(":visible")){

	}else{
		$('.contianer').css('margin-top',id_header + 20);
	}

	if ($("#header").hasClass("de_no")){

		if($('.top_induce_banner').is(":visible")){
			var id_header = $('.top_induce_banner').height() + $('.header_top').height() + $('.sharing_nav').height();
			$('.contianer').css('margin-top',id_header + 20);
		} else {
			var id_header = $('.top_induce_banner').height() + $('.header_top').height() + $('.sharing_nav').height();var id_header = $('.header_top').height() + $('.sharing_nav').height();
			$('.contianer').css('margin-top',id_header + 20);
		}
	} else {
		$('#header').addClass('de_no');
	}

	if($(".contianer").hasClass("event")) {
		$('#header').css('overflow','hidden');
		var id_header = $('#header').height();

		$(window).scroll(function() {
			if ($(this).scrollTop() > $('#header').height() ) {
				$('#header').removeClass('de_no').addClass('fixed');
				if ($("#footer").hasClass("con_footer")){
					$('.contianer').css('padding-bottom',$("#footer").height()-1);
				} else {
					return false;
				}
			} else {
				$('#header').addClass('de_no').removeClass('fixed');
				$('.contianer').css('margin-top',id_header);
			}

		});

	} else {

		if($("#top_induce_banner").hasClass("top_induce_banner")) {

			$(window).scroll(function() {
				if ($(this).scrollTop() > $('#header').height() ) {

					$('#header').removeClass('de_no').addClass('fixed');

					if ($("#footer").hasClass("con_footer")){
						$('.contianer').css('padding-bottom',$("#footer").height()-1);
					} else {
						return false;
					}
				} else if($(".contianer").hasClass("no_top_h")) {
					$('#header').addClass('de_no').removeClass('fixed');
					$('.contianer').css('margin-top',id_header);

				} else {
					if($('.top_induce_banner').is(":visible")){
						var id_header = $('.top_induce_banner').height() + $('.header_top').height() + $('.sharing_nav').height();
					}else{
						var id_header = $('.header_top').height() + $('.sharing_nav').height();
					}

					$('#header').addClass('de_no').removeClass('fixed');
					$('.contianer').css('margin-top',id_header + 20);
				}
			});

		} else {
			$('.contianer').css('margin-top',id_header);

			if ($("#wrap").hasClass("allim_content")){
				$('.contianer').css({'margin-top':id_header,'padding-bottom': $('.con_footer').height()});
			}
			if($(".contianer").hasClass("no_top_h")) {

			} else {
				var id_header = $('#header').height();
				$('.contianer').css('margin-top',id_header + 20);
			}

			if ($(".contianer").hasClass("cus_f")){
				$('.cus_footer ').css({'position':'static','border-top':'0'})
			}

			if ($("#wrap").hasClass("social_code")){
				$('.contianer').css('margin-top',id_header);
			}

			$(window).scroll(function() {
				if ($(this).scrollTop() > $('#header').height() ) {
					$('#header').removeClass('de_no').addClass('fixed');
					if ($("#footer").hasClass("con_footer")){
						$('.contianer').css('padding-bottom',$("#footer").height()-1);
					} else {
						return false;
					}
				} else if($(".contianer").hasClass("no_top_h")) {
					$('#header').addClass('de_no').removeClass('fixed');
					$('.contianer').css('margin-top',id_header);
				} else {
					$('#header').addClass('de_no').removeClass('fixed');
					$('.contianer').css('margin-top',id_header + 20);
				}
			});	
		}
		
	}
	

}
//탑으로가기
function top_upgo(){

	$("body").append('<div class="top_upgo" style="display:none"><img src="/w/img/common/top_upgo.png"></div>')
	$('.top_upgo').css('bottom',$('#footer').height() + 10)
	if ($(".contianer").hasClass("main")){
		if ($(".contianer").hasClass("main_no_slider")){
			$('.contianer').css('margin-top',id_header + 20);
			return
		}
		var id_header = $('.top_induce_banner').height() + $('.header_top').height() + $('.sharing_nav').height();
		$('.contianer').css('margin-top',id_header + 20);
	}

	$(window).scroll(function() {
		if ($(this).scrollTop() > $('#header').height() ) {
			$('.top_upgo').fadeIn();
		} else {
			$('.top_upgo').fadeOut()
		}
	});

	$('.top_upgo').unbind('click').bind("click", function() {
		$("body").scrollTop(0);
	});

}
/*
function s_header(){
	var id_header = $('#header').height();

	$(window).scroll(function() {
		if ($(this).scrollTop() > $('.header_top').height() ) {
			$('#header').addClass('header_fixed');
			$('.contianer').css('margin-top',id_header + 20);
			m_touch_handler();
			return false;
		} else {
			$('#header').removeClass('header_fixed').css('opacity','1');
			$('.contianer').removeAttr('style');
			return false;
		}
	});

	function m_touch_handler(){
		$('#wrap').on('touchend', function (e){
			$('.header_fixed').css('opacity', '1');
			flag = true;
		});

		var flag, x,y, distance = 5;

		$('#wrap').on('touchstart', function (e){
			x = e.originalEvent.changedTouches[0].pageX
			y = e.originalEvent.changedTouches[0].pageY
		});

		$('#wrap').on('touchmove', function (e){

			var deltaX = e.originalEvent.changedTouches[0].pageX - x;
			var deltaY = e.originalEvent.changedTouches[0].pageY - y;
			var difference = (deltaX * deltaX) + (deltaY * deltaY)

			if(Math.sqrt(difference) > distance) {
//				console.log("trigger move");
				$('.header_fixed').css('opacity', '0');
				flag = true;
			} else {
//				console.log("suppress move: " + Math.sqrt(difference));
			}
		});
	}
	
}
*/
/* 앱다운로드 관련 탑 배너 */
function top_induce_click(){
	$('.top_induce_banner .close_btn').unbind('click').bind("click", function() {
		common.setCookie( "topInduceBanner", "done" , 1); //1일 동안 팝업을 열지 않게 합니다.
		top_induce_close();
	})
}
function top_induce_open(){
	$('.top_induce_banner').show();

	var induce_banner = $(".top_induce_banner").height();
	if($('.top_induce_banner').is(":visible")){
		
		if ($(".contianer").hasClass("main")){
			var id_header = $('.top_induce_banner').height() + $('.header_top').height() + $('.sharing_nav').height();
			$('.contianer').css('margin-top',id_header + 20);
		} else{
			$('.sharing_slider_container').css('padding-top', induce_banner)
			$('.contianer').css('margin-top', induce_banner + $('.sharing_slider_container').width())
		}

	}else{

	}
}
//최초 실행 가이드라인 슬라이드
function home_inforguide_slide(){
	var win_iH = window.innerHeight;
	$("body").append('<div class="home_inforguide"><div class=" home_inforguide_box"><div class="sharing_wrapper"><li class="sharing_slide sharing_slide_active img1"></li><li class="sharing_slide img2"></li><li class="sharing_slide img3"></li><li class="sharing_slide img4"><div class="inforguide_lastbtn_box"><ul><a href="http://stg-w.ssocio.com/join"><li>회원가입</li></a></ul><ul><a href="http://stg-w.ssocio.com/login"><li>로그인</li></a></ul></div></li></div><div class="sharing_pagination"></div></div></div>')
	$('.home_inforguide_box .sharing_wrapper .sharing_slide').css('height',win_iH)
	$('.home_inforguide_box .sharing_wrapper .sharing_slide').css('background-size',win_iH)
	$('.home_inforguide_box .sharing_wrapper .sharing_slide').children('img')
	var home_inforguide_slide = new Swiper('.home_inforguide_box', {
        pagination: '.sharing_pagination',
        paginationClickable: true
    });
	$( window ).resize(function() {
		var win_iH = window.innerHeight;
		$('.home_inforguide_box').css('height',win_iH);
		$('.home_inforguide_box .sharing_wrapper .sharing_slide').css('height',win_iH)
		$('.home_inforguide_box .sharing_wrapper .sharing_slide').css('background-size',win_iH)
		$('.home_inforguide_box .sharing_wrapper .sharing_slide').children('img')
	});
	
	$('.inforguide_lastbtn_box a').unbind('click').bind('click', function() {
		$('.home_inforguide').remove()
	});
}

function top_induce_close(){
	$('.top_induce_banner').slideUp();
	$('.sharing_slider_container').removeAttr('style');

	if ($(".contianer").hasClass("main")){
		$('.contianer').css('margin-top', $('.header_top').height() + $('.sharing_nav').height() + 20)
	} else{
		$('.contianer').css('margin-top', $('.sharing_slider_container').width())
	}


}

function s_footer(){
	var left = ( $(window).scrollLeft() + ($(window).width() - $('.s_footer').width()) / 2 );
	var win_height = window.innerHeight;
	var c_height = $('#header').height() + $('.contianer').height() + $('.s_footer').height() + 50;

	$wh_Weight = window.innerWidth;
	$wh_Weight2 = window.innerWidth/2;
	$con_lybody = $('#footer').width()/2;

	if ( c_height < win_height){
		$('.s_footer').removeClass('commi');
	} else {
		$('.s_footer').addClass('commi');
		if (win_height < 300){
			$('.contianer').css('height','350');
		}
	}

}
function getMobileOperatingSystem(){
	var filter = "win16|win32|win64|mac";
 
	if(navigator.platform){
		if(0 > filter.indexOf(navigator.platform.toLowerCase())){
			m_pc_checkd();
		}else{
			m_pc_checkd();
		}
	}

    function m_pc_checkd(){
    	var isMobile = {
		    Android: function () {
				return navigator.userAgent.match(/Android/i) == null ? false : true;
		    },
		    BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
		    },
		    IOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
		    },
		    Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
		    },
		    Windows: function () {
				return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
		    },
		    any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
		    }
		};

    	if(isMobile.any()){
		    if(isMobile.Android()){
				android_inputfocus();
		    }else if(isMobile.IOS()){
		        
		    }else if(isMobile.BlackBerry()){
		        
		    }else if(isMobile.Opera()){
		        
		    }else if(isMobile.Windows()){
		        
		    }
		}
    };
    
}

function android_inputfocus(){
	var originalHeight = document.documentElement.clientHeight;
	var originalWidth = document.documentElement.clientWidth;
	var id_header = $('#header').height();

	$(window).resize(function() {

		if (document.documentElement.clientHeight == originalWidth && document.documentElement.clientWidth == originalHeight) {
			originalHeight = document.documentElement.clientHeight;
			originalWidth = document.documentElement.clientWidth;
		}
		if (document.documentElement.clientHeight < originalHeight) {
			$('.s_footer').hide();
			$('.categiry_footer').hide();
			$('.my_title_header').hide();
			$('.dl_title_type.sub_txt').hide();
			$('.custom_input_box').hide();
			$('#footer').hide();
			$('.slideup_type_contianer').removeAttr('style');
			$(window).scroll(function() {
				if ($(this).scrollTop() > 0 ) {
					$('.contianer').removeAttr('style');
					$('#wrap').removeAttr('style');
				} else {
					$('.contianer').removeAttr('style');
				}
			});
			// $('.item_infortbox').addClass('style_h'); //회원가입 페이지에서 안드로이드 문제로 잠시 숨김
		} else {
			$('.categiry_footer').show();
			$('.s_footer').show();
			$('.my_title_header').show();
			$('.dl_title_type.sub_txt').show();
			$('.custom_input_box').show();
			$('#footer').show();
			// $('.item_infortbox').removeClass('style_h'); //회원가입 페이지에서 안드로이드 문제로 잠시 숨김
			$('.contianer').removeAttr('style');
			var id_header = $('#header').height();
			$('.contianer').css('margin-top',id_header+20);

		}
	});
}

function android_mumberinputfocus(){
	var originalHeight = document.documentElement.clientHeight;
	var originalWidth = document.documentElement.clientWidth;
	var id_header = $('#header').height();

	$(window).resize(function() {

		if (document.documentElement.clientHeight == originalWidth && document.documentElement.clientWidth == originalHeight) {
			originalHeight = document.documentElement.clientHeight;
			originalWidth = document.documentElement.clientWidth;
		}
		if (document.documentElement.clientHeight < originalHeight) {
				$('.s_footer').hide();
				$(window).scroll(function() {
					if ($(this).scrollTop() > 0 ) {
						$('.contianer').removeAttr('style');
						$('#wrap').removeAttr('style');
					} else {
						$('.contianer').removeAttr('style');
					}
				});
				$('.item_infortbox').addClass('style_h');
			} else {
				$('.categiry_footer').show();
				$('.s_footer').show();
				$('.my_title_header').show();
				$('.dl_title_type.sub_txt').show();
				$('.custom_input_box').show();
				$('.item_infortbox').removeClass('style_h');
				var item_innerHeight= window.innerHeight;
				var cont_box = $('.s_header').height() + $('.progress_bar').height() + $('.s_footer').height() + $('#seach_input').height() + 60;
				$('.item_infortbox').css('height',item_innerHeight - cont_box);
			}
	});
}

function timeline_b_going(){
	$("html, body").animate({ 
		scrollTop: $('.timeline').height() 
	}, 10);
}
function main_social_log(){
	var left = ( $(window).scrollLeft() + ($(window).width() - $('.main_social_log').outerWidth()) / 2 );
	if( $('#wrap').width() < 640){
		$('.main_social_log').css({'margin':'0 5% 0 5%','padding':'0'});
	} else{
		$('.main_social_log').css({'margin-left':left,'padding':'0 32px'});
	}
}

function item_infortbox_h(){
	var item_innerHeight= window.innerHeight;
	var cont_box = $('.s_header').height() + $('.progress_bar').height() + $('.s_footer').height() + $('#seach_input').height() + 60;
	$('.item_infortbox').css('height',item_innerHeight - cont_box);

	// $( window ).resize(function() {
	// 	postaddres_window_change();
	// });
}

/* ios input fixed */
function ios_input_focustype(){
	var userAgent = navigator.userAgent.toLocaleLowerCase();

	$("input, select, textarea").on('focus', function() {
		if (userAgent.match(/iphone|ipad|ipod/)) {
			$("#header").css({
				'position': 'absolute',
				'top': $(document).scrollTop()
			});
			focusing = true;
		}
	})
	$("input, select, textarea").on('blur', function() {
		if (userAgent.match(/iphone|ipad|ipod/)) {
			$("#header").css({
				'position': 'fixed',
				'top': 0
			});
			focusing = false;
		}
	})

	$(window).scroll(function() {
		if ( focusing ) $("#header").css({ 'top': $(document).scrollTop() });
	});
}



/* 패스워드 관련 (영문,숫자,특수문자 조합 8~20)*/
function singup_pass_inspection(){
	var first_pass = $("#first_pass").val();
	var confirm_pass = $("#confirm_pass").val();
	
	$("#successText").html("");
	
	var checkAndChange = function(){

		var pw = first_pass;
		var num = pw.search(/[0-9]/g);

		var eng = pw.search(/[a-z]/ig);
		var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

		if(pw.length < 8 || pw.length > 20){
		  $("#successText").html("사용불가");
		  return false;
		 }
		if(pw.search(/₩s/) != -1){
			$("#password_form").removeClass("firsr_ok").children('li.password').removeClass("incorrect")
			$("#successText").html("사용불가");
			return false;
		} else if(num < 0 || eng < 0 || spe < 0 ){
			$("#password_form").removeClass("firsr_ok").children('li.password').removeClass("incorrect")
			$("#successText").html("사용불가");
			return false;
		} else {
			$("#password_form").addClass("firsr_ok").children('li.password').removeClass("correct").addClass("incorrect");
			$("#successText").html("사용가능");
		}
		if ($("#password_form").hasClass("firsr_ok")){
			if(first_pass == confirm_pass){
				$("#password_form").addClass("last_ok").removeClass("firsr_ok").children('li.password_re').removeClass("correct").addClass("incorrect");
				$("#successText2").html("일치");
				$('.sf_btn2').addClass('password_success');
				$('.sf_btn').addClass('password_success');

				if($('#nicknametxt').html() == '사용가능'){
					$('.sf_btn2').removeClass('no_active').addClass('nickname_success');
				}

				$('.sf_btn2.password_success.nickname_success').each(function(){
					$('.sf_btn2').removeClass('no_active');
				});
				$('.sf_btn.password_success').each(function(){
					$('.sf_btn').removeClass('no_active');
				});
			} else if (first_pass != confirm_pass){
				$("#password_form").removeClass("last_ok").addClass("firsr_ok").children('li.password_re').removeClass("incorrect").addClass("correct");
				$("#successText2").html("불일치");
				$('.sf_btn2').removeClass('password_success').addClass('no_active');
			}  else {
				return false;
			}
		} else{
			return false;
		}
		return false;
	}
	
	$("#password_form input").keyup(function(){
		var newfirst_pass = $("#first_pass").val();
		var newconfirm_pass = $("#confirm_pass").val();
		
		first_pass = newfirst_pass;
		confirm_pass = newconfirm_pass;

		$("#password_form #first_pass").focus(function() { 
			$("#successText").html("");
			$("#successText2").html("");
			$('#password_form li').removeClass('incorrect');
			$('.sf_btn2').removeClass('password_success');
			$('#password_form input').val('');
			$('.sf_btn.password_success').each(function(){
				$('.sf_btn').removeClass('password_success').addClass('no_active')
			});
		}).blur(function() { 
			if($('#password_form input').val() == '') { 
				$('#password_form input').val();
			}
		});

		$("#password_form #confirm_pass").focus(function() { 
			$("#successText2").html("");
			$('#password_form #confirm_pass li').removeClass('incorrect');
			$('.sf_btn2').removeClass('password_success');
			$('#password_form #confirm_pass').val('');
			$('.sf_btn2').addClass('no_active').removeClass('password_success');
			$("#password_form").addClass("firsr_ok").removeClass('last_ok');
			$('.sf_btn.password_success').each(function(){
				$('.sf_btn').removeClass('password_success').addClass('no_active')
			});
		}).blur(function() { 
			if($('#password_form #confirm_pass').val() == '') { 
				$('#password_form #confirm_pass').val(); 
			}
		});
		checkAndChange();
	});

}
function checkPasswordMatch() {
    var password = $("#txtNewPassword").val();
    var confirmPassword = $("#txtConfirmPassword").val();

    if (password != confirmPassword)
       alert('123')
    else
        alert('456')
}	
/* 닉네임 관련 (2~12wk 숫자조합가능)*/
function nicknametxt_inspection(){

	var first_pass3 = $("#first_pass3").val();
	var first_passnext_btn = $("#first_pass3").parent().next();
	//first_passnext_btn.addClass('active')
	//$("#nicknametxt").html("");
	var nicknamecheckAnd = function(){
		var pw = first_pass3;
		var spe = pw.search(/^[가-힣a-zA-Z0-9]+$/gi);

		if(pw.length < 2 || pw.length > 10){
			$('.sf_btn2').addClass('no_active');
			return false;
		 }

		if(pw.search(/₩s/) != -1){
			return false;
		} else if(spe > 0 ){
			// $("#nicknametxt").html("사용불가");
			// $("#nicknametxt").removeClass('er_fck');	
			first_passnext_btn.removeClass('active')
			$('.sf_btn2').each(function(){
				$('.sf_btn2').addClass('no_active');
			});

			return false;
		} else {
			// $("#nicknametxt").html("사용가능");
			// $("#nicknametxt").addClass('er_fck');
			first_passnext_btn.addClass('active')
		}
	}
	
	$("#nickname_form input").keyup(function(){
		var newfirst_pass = $("#first_pass3").val();
		var pw = newfirst_pass;
		var spe = pw.search(/^[가-힣a-zA-Z0-9]+$/gi);
		nicknamecheckAnd();

		if( newfirst_pass.length <= 0){
			//$("#nicknametxt").html("사용불가");
			$("#nicknametxt").removeClass('er_fck');
			$('.sf_btn2').addClass('no_active');
			first_passnext_btn.removeClass('active')
		} else if (spe < 0 ){
			//$("#nicknametxt").html("사용불가");
			$("#nicknametxt").removeClass('er_fck');
			first_passnext_btn.removeClass('active')
			$('.sf_btn2').each(function(){
				$('.sf_btn2').addClass('no_active');
			});
			return false;
		} else {
			//$("#nicknametxt").html("사용가능");
			$("#nicknametxt").addClass('er_fck');
			first_passnext_btn.addClass('active')
		}
	})
	$("#first_pass3").focus(function() { 
		$("#nicknametxt").html("");
		$('.sf_btn2').addClass('no_active');
	})

}

// function nicknametxt_inspection(){

// 	var first_pass3 = $("#first_pass3").val();
	
// 	$("#nicknametxt").html("");
	
// 	var nicknamecheckAnd = function(){

// 		var pw = first_pass3;
// 		var num = pw.search(/[0-9]/g);

// 		var eng = pw.search(/[a-z]/ig);
// 		var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

// 		if(pw.length < 2 || pw.length > 10){
// 		  $('.sf_btn2').addClass('no_active').removeClass('nickname_success');
// 		  return false;
// 		 }

// 		if(pw.search(/₩s/) != -1){
// 			return false;
// 		} else if(spe > 0 ){
// 			$("#nicknametxt").html("사용불가");
// 			$("#nicknametxt").removeClass('er_fck');	

// 			$('.sf_btn2').each(function(){
// 				$('.sf_btn2').addClass('no_active').removeClass('nickname_success');
// 			});

// 			return false;
// 		} else {
// 			$("#nicknametxt").html("사용가능");
// 			$("#nicknametxt").addClass('er_fck');
// 			if ($("#password_form").hasClass("last_ok")){
// 				if ($("#nicknametxt").hasClass("er_fck")){
// 					$('.sf_btn2').each(function(){
// 						$('.sf_btn2').addClass('nickname_success').removeClass('no_active');
// 					});
// 				}
// 			}
// 		}
// 	}
	
// 	$("#nickname_form input").keyup(function(){
// 		var newfirst_pass = $("#first_pass3").val();
// 		var pw = newfirst_pass;
// 		var spe = pw.search(/^[가-힣a-zA-Z0-9]+$/gi);
// 		nicknamecheckAnd();

// 		if( newfirst_pass.length <= 1){
// 			$("#nicknametxt").html("사용불가");
// 			$("#nicknametxt").removeClass('er_fck');
// 			$('.sf_btn2').addClass('no_active').removeClass('nickname_success');
// 		} else if (spe < 0 ){
// 			$("#nicknametxt").html("사용불가");
// 			$("#nicknametxt").removeClass('er_fck');	

// 			$('.sf_btn2').each(function(){
// 				$('.sf_btn2').addClass('no_active').removeClass('nickname_success');
// 			});

// 			return false;
// 		} else {
// 			$("#nicknametxt").html("사용가능");
// 			$("#nicknametxt").addClass('er_fck');
// 			if ($("#password_form").hasClass("last_ok")){
// 				if ($("#nicknametxt").hasClass("er_fck")){
// 					$('.sf_btn2').each(function(){
// 						$('.sf_btn2').addClass('nickname_success').removeClass('no_active');
// 					});
// 				}
// 			}
// 		}
// 	})

// 	$("#first_pass3").focus(function() { 
// 		if ($("#password_form").hasClass("last_ok")){
// 			if ($("#nicknametxt").hasClass("er_fck")){
// 				$('.sf_btn2').each(function(){
// 					$('.sf_btn2').addClass('nickname_success').removeClass('no_active');
// 				});
// 			}
// 		}
// 	});

// }

/* 휴대폰 번호 - 자동 추가 */
function autoHypenPhone(str){
	str = str.replace(/[^0-9]/g, '');
	var tmp = '';
	if( str.length < 4){
		return str;
	}else if(str.length < 7){
		tmp += str.substr(0, 3);
		tmp += '-';
		tmp += str.substr(3);
		return tmp;
	}else if(str.length < 11){
		tmp += str.substr(0, 3);
		tmp += '-';
		tmp += str.substr(3, 3);
		tmp += '-';
		tmp += str.substr(6);
		return tmp;
	}else{				
		tmp += str.substr(0, 3);
		tmp += '-';
		tmp += str.substr(3, 4);
		tmp += '-';
		tmp += str.substr(7);
		return tmp;
	}
	return str;
}
/* 휴대폰 번호 - 자동 삭제 */
function autoHypenPhone_m(str){
	str = str.replace(/[^0-9]/g, '');
	var tmp = '';
	if( str.length < 11){
		tmp += str.substr(0);
		tmp += '';
		return tmp;
	}
	return str;
}
function cellPhone(){
	var cellPhone = document.getElementById('cellPhone');
	cellPhone.onkeyup = function(event){
		event = event || window.event;
		var _val = this.value.trim();
		this.value = autoHypenPhone_m(_val) ;
	}
}
function last_box_h(){
	var item_innerHeight= window.innerHeight;
	var cont_box = $('#header').height() + $('.s_footer').height() + 40;
	var last_ba_wbox = $('.last_ba_box').width();
	var last_ba_hbox = $('.last_ba_box').height();
	var last_ba_wbox2 = $('.last_ba_box').width()/2;
	var last_ba_hbox2 = $('.last_ba_box').height()/2;

	if ($(".s_footer").hasClass("last_depth")){
//		console.log($('#header').height() , $('.s_footer').height() , 40)
		$('.custom_btl_t').css('height',item_innerHeight - cont_box - 25);
	} else  {
		$('.custom_btl_t').css('height',item_innerHeight - cont_box + 18);
	}
	if ($("#wrap").hasClass("social_code")){
		var cont_box = $('#header').height() + $('.s_footer').height() + 20;
		$('.custom_btl_t').css('height',item_innerHeight - cont_box - 25);
		console.log( $('#header').height() , $('.s_footer').height() , 40 ,item_innerHeight , cont_box)
	}
}


/* 공용 레이어팝업 커스텀 추후 제작 */
function true_ly_type(){
	
	if ($('.contianer').hasClass("sales")){
		$('.ly_common').each(function(){
			$('.ly_infor_title .title').html('판매 상품 등록 정보 확인');
			$('.ly_infor_conbox .depth_day dt').html('판매 기간');
			$('.ly_infor_conbox .depth_money dt').html('판매금액');
			$('.ly_infor_conbox .depth_if').hide();
			$('.ly_infor_conbox .depth_day .dd_sharing').hide();
			$('.ly_infor_conbox .depth_day .dd_share').hide();
			$('.ly_infor_conbox .depth_money .dd_sharing').hide();
		});
	} else if ($('.contianer').hasClass("sharing")){
		$('.ly_common').each(function(){
			$('.ly_infor_title .title').html('셰어링 상품 등록 정보 확인')
			$('.ly_infor_conbox .depth_day dt').html('셰어링 기간');
			$('.ly_infor_conbox .depth_money dt').html('상품금액');
			$('.ly_infor_conbox .depth_if dt').html('셰어링 조건');
			$('.ly_infor_conbox .depth_day .dd_sales').hide();
			$('.ly_infor_conbox .depth_day .dd_share').hide();
			$('.ly_infor_conbox .depth_money .dd_sales').hide();

		});
	} else if ($('.contianer').hasClass("share")){
		$('.ly_common').each(function(){
			$('.ly_infor_title .title').html('나눔 상품 등록 정보 확인')
			$('.ly_infor_conbox .depth_day dt').html('나눔 신청 기간');
			$('.ly_infor_conbox .depth_money').hide();
			$('.ly_infor_conbox .depth_if').hide();
			$('.ly_infor_conbox .depth_day .dd_sales').hide();
			$('.ly_infor_conbox .depth_day .dd_sharing').hide();
		});
	}

	$('.ly_active_btn').click(function(){
			var win_iw = window.innerWidth;
			if( window.innerWidth > 640 ){
				var win_iw = 640;
			}
			
			var win_iw_boxml = (win_iw/10);//디바이스 전체 넓이값을 10등분함
			var win_iw_wcon = win_iw_boxml*8;//디바이스의 80%를 할당
			var win_iw_wcon2 = win_iw_wcon/2;//넓이값을 받은 컨텐츠의 마진-값을 줘서 중앙으로 보냄
		
		if ( $(this).hasClass("item_deal_sytem") === true ){
			
			var $ly_common_box = $('.item_deal_box');
			var $ly_common_subbox = $('.item_deal_box').children(".ly_contents");

			$($ly_common_box).fadeIn();
			$($ly_common_subbox).css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})


			var win_ih_boxml = $($ly_common_subbox).height();
			var win_ih_boxml2 = win_ih_boxml/2;

			$($ly_common_subbox).css({"margin-top":win_ih_boxml2 - win_ih_boxml})

			// $('.ly_bg').click(function(){
			// 	co_ly_close();
			// });
			$('.ly_common_close').click(function(){
				co_ly_close();
			});

		return false;

		} else if ($(this).hasClass("warning_item") === true ) {

			var $ly_common_box = $('.warning_box');
			var $ly_common_subbox = $('.warning_box').children(".ly_contents");

			$($ly_common_box).fadeIn();
			$($ly_common_subbox).css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})


			var win_ih_boxml = $($ly_common_subbox).height();
			var win_ih_boxml2 = win_ih_boxml/2;

			$($ly_common_subbox).css({"margin-top":win_ih_boxml2 - win_ih_boxml})

			// $('.ly_bg').click(function(){
			// 	co_ly_close();
			// });
			$('.ly_common_close').click(function(){
				co_ly_close();
			});
			return false;

		} else {
			true_ly_open();
		}

		// $('.ly_bg').click(function(){
		// 	co_ly_close();
		// });
		$('.ly_common_close').click(function(){
			co_ly_close();
		});

	})

}

function ly_active_btn(){

		var win_iw = window.innerWidth;
		if( window.innerWidth > 640 ){
			var win_iw = 640;
		}
		
		var win_iw_boxml = (win_iw/10);//디바이스 전체 넓이값을 10등분함
		var win_iw_wcon = win_iw_boxml*8;//디바이스의 80%를 할당
		var win_iw_wcon2 = win_iw_wcon/2;//넓이값을 받은 컨텐츠의 마진-값을 줘서 중앙으로 보냄
	
	if ( $(this).hasClass("item_deal_sytem") === true ){
		
		var $ly_common_box = $('.item_deal_box');
		var $ly_common_subbox = $('.item_deal_box').children(".ly_contents");

		$($ly_common_box).fadeIn();
		$($ly_common_subbox).css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})


		var win_ih_boxml = $($ly_common_subbox).height();
		var win_ih_boxml2 = win_ih_boxml/2;

		$($ly_common_subbox).css({"margin-top":win_ih_boxml2 - win_ih_boxml})

		// $('.ly_bg').click(function(){
		// 	co_ly_close();
		// });
		$('.ly_common_close').click(function(){
			co_ly_close();
		});

	return false;

	} else if ($(this).hasClass("warning_item") === true ) {

		var $ly_common_box = $('.warning_box');
		var $ly_common_subbox = $('.warning_box').children(".ly_contents");

		$($ly_common_box).fadeIn();
		$($ly_common_subbox).css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})


		var win_ih_boxml = $($ly_common_subbox).height();
		var win_ih_boxml2 = win_ih_boxml/2;

		$($ly_common_subbox).css({"margin-top":win_ih_boxml2 - win_ih_boxml})

		// $('.ly_bg').click(function(){
		// 	co_ly_close();
		// });
		$('.ly_common_close').click(function(){
			co_ly_close();
		});
		return false;

	} else {
		true_ly_open();
	}

	// $('.ly_bg').click(function(){
	// 	co_ly_close();
	// });
	$('.ly_common_close').click(function(){
		co_ly_close();
	});


}

function true_ly_open(){
	var win_iw = window.innerWidth;

	if( window.innerWidth > 640 ){
		var win_iw = 640;
	}
	
	var win_iw_boxml = (win_iw/10);//디바이스 전체 넓이값을 10등분함
	var win_iw_wcon = win_iw_boxml*8;//디바이스의 80%를 할당
	var win_iw_wcon2 = win_iw_wcon/2;//넓이값을 받은 컨텐츠의 마진-값을 줘서 중앙으로 보냄
	if( window.innerWidth < 340 ){
		var win_iw_wcon = win_iw_boxml*9;
		var win_iw_wcon2 = win_iw_wcon/2;
		$('.ly_contents').css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})
	}

	$('.ly_common').fadeIn();
	$('.ly_contents').css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})

	var win_ih_boxml = $('.ly_contents').height();
	var win_ih_boxml2 = win_ih_boxml/2;

	$('.ly_contents').css({"margin-top":win_ih_boxml2 - win_ih_boxml})

	// $('.ly_bg').click(function(){
	// 	co_ly_close();
	// });
	$('.ly_common_close').click(function(){
		co_ly_close();
	});


}
function select_ly_type(id){
	var win_iw = window.innerWidth;

	if( window.innerWidth > 640 ){
		var win_iw = 640;
	}
	
	var win_iw_boxml = (win_iw/10);//디바이스 전체 넓이값을 10등분함
	var win_iw_wcon = win_iw_boxml*8;//디바이스의 80%를 할당
	var win_iw_wcon2 = win_iw_wcon/2;//넓이값을 받은 컨텐츠의 마진-값을 줘서 중앙으로 보냄
	if( window.innerWidth < 340 ){
		var win_iw_wcon = win_iw_boxml*9;
		var win_iw_wcon2 = win_iw_wcon/2;
		$(id+' .ly_contents').css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})
	}

	$(id).fadeIn();
	$(id+' .ly_contents').css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})

	var win_ih_boxml = $(id+' .ly_contents').height();
	var win_ih_boxml2 = win_ih_boxml/2;

	$(id+' .ly_contents').css({"margin-top":win_ih_boxml2 - win_ih_boxml})

	// $('.ly_bg').click(function(){
	// 	co_ly_close();
	// });
	$(id+' .ly_common_close').click(function(){
		co_ly_close();
	});
}
function co_ly_close(){
	$('.ly_common').hide();
}

/* 주문서 관련 멀티 레이어팝업 */
function order_settype(ly_name){
	$('.ly_common').hide();
	var win_iw = window.innerWidth;

	if( window.innerWidth > 640 ){
		var win_iw = 640;
	}
	
	var win_iw_boxml = (win_iw/10);
	var win_iw_wcon = win_iw_boxml*9;
	var win_iw_wcon2 = win_iw_wcon/2;

	if( window.innerWidth < 340 ){
		var win_iw_wcon = win_iw_boxml*9;
		var win_iw_wcon2 = win_iw_wcon/2;
		$('.ly_contents').css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})
	}

	$(ly_name).fadeIn();
	$('.ly_contents').css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})

	var win_ih_boxml = $(ly_name).children('.ly_contents').height();
	var win_ih_boxml2 = win_ih_boxml/2;

	$('.ly_contents').css({"margin-top":win_ih_boxml2 - win_ih_boxml})

	// $('.ly_bg').click(function(){
	// 	co_ly_close();
	// 	$('body').removeClass('b_fixed');
	// });

	if ($(".ly_footer li").hasClass("close_reload_btn")){
		$('.ly_common_close').click(function(){
			window.location.reload();
			co_ly_close();
			$('body').removeClass('b_fixed');
		});
	} else {
		$('.ly_common_close').click(function(){
			co_ly_close();
			$('body').removeClass('b_fixed');
		});
	}

	$('body').addClass('b_fixed');

}
function lytype_reload(){
	$('.ly_common_close').click(function(){
		window.location.reload();
		co_ly_close();
		$('body').removeClass('b_fixed');
	});
}


function loading_barsettype(ly_name){
	//$('.loading_bar_ly').hide();
	var win_iw = window.innerWidth;
	var ly_cont = $(ly_name).children(".loading_ly_contents");
	var ly_bgbox = $(ly_name).children(".loading_ly_bg");
	var ly_close = $(ly_name).contents().contents().children(".ly_infor_title").children(".loading_ly_close");
//	console.log($(ly_cont).height())
	if( window.innerWidth > 640 ){
		var win_iw = 640;
	}
	
	var win_iw_boxml = (win_iw/10);
	var win_iw_wcon = win_iw_boxml*9;
	var win_iw_wcon2 = win_iw_wcon/2;

	if( window.innerWidth < 340 ){
		var win_iw_wcon = win_iw_boxml*9;
		var win_iw_wcon2 = win_iw_wcon/2;
		$(ly_cont).css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})
	}

	$(ly_name).fadeIn();
	$(ly_cont).css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})

	var win_ih_boxml = $(ly_cont).height();
	var win_ih_boxml2 = win_ih_boxml/2;

	$(ly_cont).css({"margin-top":win_ih_boxml2 - win_ih_boxml})

	// $(ly_bgbox).click(function(){
	// 	$(this).parent().hide();
	// 	$('body').removeClass('b_fixed');
	// });

	$('.loading_ly_close').click(function(){
		$(this).parent().parent().parent().parent().hide();
		$('body').removeClass('b_fixed');
	});
	$('.loading_btn').click(function(){
		$(this).parent().parent().parent().parent().parent().hide();
		$('body').removeClass('b_fixed');
	});

	$('body').addClass('b_fixed');
}

function search_settype(ly_name){
	$('.ly_common').hide();
	var win_iw = window.innerWidth;

	if( window.innerWidth > 640 ){
		var win_iw = 640;
	}
	
	var win_iw_boxml = (win_iw/10);
	var win_iw_wcon = win_iw_boxml*9;
	var win_iw_wcon2 = win_iw_wcon/2;

	if( window.innerWidth < 340 ){
		var win_iw_wcon = win_iw_boxml*9;
		var win_iw_wcon2 = win_iw_wcon/2;
		$('.ly_contents').css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})
	}

	$(ly_name).fadeIn();
	$('.ly_contents').css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})

	var win_ih_boxml = $(ly_name).children('.ly_contents').height();
	var win_ih_boxml2 = win_ih_boxml/2;

	$('.ly_contents').css({"margin-top":win_ih_boxml2 - win_ih_boxml})

	// $('.ly_bg').click(function(){
	// 	co_ly_close();
	// 	$('body').removeClass('b_fixed');
	// });
	$('.ly_common_close').click(function(){
		co_ly_close();
		$('body').removeClass('b_fixed');
	});

	$('body').addClass('b_fixed');

}

/* header menu */
function sharing_nav(){
	(function(e) {
		var $sharing_nav = $('#sharing_nav');
		var $slidee = $sharing_nav.children('ul').eq(0);
		var $wrap = $sharing_nav.parent();

		// Call Sly on sharing_nav
		$sharing_nav.sly({
		horizontal: 1,
		itemNav: 'basic',
		smart: 1,
		activateOn: 'click',
		mouseDragging: 1,
		touchDragging: 1,
		releaseSwing: 1,
		startAt: 0,
		scrollBar: $wrap.find('.scrollbar'),
		scrollBy: 1,
		pagesBar: $wrap.find('.pages'),
		activatePageOn: 'click',
		speed: 300,
		elasticBounds: 1,
		easing: 'easeOutExpo',
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1
		});

	}());
}

function select_coustom_Bank(name){
	
	$(".input.two_list_select").click(function() { 
		var select = $(this).children("select");
		//$(this).removeClass('focus');
		$(select).change(function(){
		    var select_name = $(select).children("option:selected").text();
	        $(this).siblings("label").text(select_name);
	        $(this).parent().addClass('focus');
	        $('option.first').remove();

	        var select_name = $(this).children("option:selected").text();
	        $(this).prevAll("label").text(select_name);
	    });

	    $(select).click(function() { 
	    	var select_name = $(select).children("option:selected").text();
	        $(this).siblings("label").text(select_name);
	        $(this).parent().addClass('focus');
	        $('option.first').remove();

	        var select_name = $(this).children("option:selected").text();
	        $(this).prevAll("label").text(select_name);
	    });
	})
}

/* iframe all ly */
function iframe_lytype_open(){
	$(".iframe_lytype_box").addClass('open');
	$('body').css({'height':'100%', 'overflow':'hidden','position':'relative','z-index':'1'})

	$('#dynamic_wrap').addClass('iframe_addtop');
	$('.iframe_lytype_box').each(function(){
		if( $(this).parent().hasClass('iframe_addtop') != true ){
			$('.iframe_lytype_box').removeAttr('style');
			setTimeout(function(){
				$('.iframe_lytype_box').css({'height': window.innerHeight-$('#dynamic_header').height(),'top':$('#dynamic_header').height()});
			}, 500);
		}
	});

}
function iframe_lytype_close(){
	$(".iframe_lytype_box").removeClass('open');
	$('body').removeAttr('style');
}

//팝업창 화면 터치 락
function bind_preventtouchmove(){
	$("body").bind('touchmove', function(e){
	e.preventDefault()
	});
}
function bind_unbindtouchmove(){
	$("body").unbind('touchmove')
}
//* iframe all ly */

//우편번호 공통
function post_addres_ly(){
	$wh_height = window.innerHeight;
	var header_h = $('#header').height() - $('.progress_bar').height();

	$('.post_addres_change').click(function(){
		$( '#slideup_type_ly #hidden_apply_box').css("height", $wh_height );
		$('.category_contianer').css({'height':$wh_height - header_h,'overflow':'auto'});
		postaddres_listbox_type();
		$('body').css('overflow','hidden');
		return false;
	});
	$('#ly_type_close').click(function() {
		postaddres_listbox_hide();
	});
	$( window ).resize(function() {
		postaddres_window_change();
	});

}

function postaddres_window_change(){
	$wh_height = window.innerHeight;
	var header_h = $('#header').height() - $('.progress_bar').height();
	$( '#slideup_type_ly #hidden_apply_box').css("height", $wh_height );
	$('.category_contianer').css({'height':$wh_height - header_h,'overflow':'auto'});

	return false;
}

function postaddres_listbox_type(){
	$( '#slideup_type_ly #hidden_apply_box' ).slideDown( "fast");
}

function postaddres_listbox_hide(){
	$('#slideup_type_ly #hidden_apply_box').slideUp();
	$('body').removeAttr('style');
	return false; 
}

/*  상품등록 관련 */
function multi_accordion_menu(){
	
	$.fn.multi_accordion_Module = function(option) {
		var obj,
			item;
		var options = $.extend({
				Speed: 220,
				autohide: 1
			},
			option);
		obj = $(this);

		item = obj.find("ul").parent("li").children("a");
		item.attr("data-option", "off");

		item.unbind('click').on("click", function() {
			var a = $(this);

	//닫을때
	//			if (options.autohide) {
	//				a.parent().parent().find("a[data-option='on']").parent("li").children("ul").slideUp(options.Speed / 1.2,
	//					function() {
	//						$(this).parent("li").children("a").attr("data-option", "off");
	//					})
	//			}

			if (a.attr("data-option") == "off") {
				a.parent("li").children("ul").slideDown(options.Speed, function() {
					a.attr("data-option", "on");
				});
			}
			if (a.attr("data-option") == "on") {
				a.attr("data-option", "off");
				a.parent("li").children("ul").slideUp(options.Speed);
				$(this).blur();
			}
		});
	}

}


/* 카테고리 선택하기 */
function category_list_change2(){
	$wh_height = window.innerHeight;
	var header_h = $('#header').height();
	var categiry_h = $('.categiry_footer').height();
	var ca_heght = header_h + categiry_h + 40;

	$('.option_change').click(function(){
		$( '#slideup_type_ly #hidden_apply_box').css("height", $wh_height );
		$('.category_contianer').css('height',$wh_height);
		category_listbox_type2();

		$('body').css('overflow','hidden');
		return false;
	})
	$('#ly_type_close').click(function() {
		category_listbox_hide2();
		return false;
	});
	$( window ).resize(function() {
		 category_window_change();
	});
}

function category_window_change(){
	$wh_height = window.innerHeight;
	var header_h = $('#header').height();
	var categiry_h = $('.categiry_footer').height();
	var ca_heght = header_h + categiry_h + 40;

	$( '#slideup_type_ly #hidden_apply_box').css("height", $wh_height );
	$('.category_contianer').css('height',$wh_height);

	return false;
}

function category_listbox_type2(){
	$( '#slideup_type_ly #hidden_apply_box' ).slideDown( "fast");
	return false;
}

function category_listbox_hide2(){
	$('#slideup_type_ly #hidden_apply_box').slideUp();
	$('body').removeAttr('style');
	return false; 
}

function temporary_saveform_ly(){
	var win_iw = window.innerWidth;

	if( window.innerWidth > 640 ){
		var win_iw = 640;
	}
	
	var win_iw_boxml = (win_iw/10);//디바이스 전체 넓이값을 10등분함
	var win_iw_wcon = win_iw_boxml*8;//디바이스의 80%를 할당
	var win_iw_wcon2 = win_iw_wcon/2;//넓이값을 받은 컨텐츠의 마진-값을 줘서 중앙으로 보냄

	var $ly_common_box = $('.temporary_saveform');
	var $ly_common_subbox = $('.temporary_saveform').children(".ly_contents");

	$($ly_common_box).fadeIn();
	$($ly_common_subbox).css({"width":win_iw_wcon,"margin-left":win_iw_wcon2 - win_iw_wcon})


	var win_ih_boxml = $($ly_common_subbox).height();
	var win_ih_boxml2 = win_ih_boxml/2;

	$($ly_common_subbox).css({"margin-top":win_ih_boxml2 - win_ih_boxml})

	// $('.ly_bg').click(function(){
	// 	co_ly_close();
	// });
	$('.ly_common_close').click(function(){
		co_ly_close();
	});
}

/* 메인 관련 */

function category_accordion_open(){
		var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			var links = this.el.find('.accordion_menu');
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
		}
		Accordion.prototype.dropdown = function(e) {
			var $el = e.data.el;
				$this = $(this),
				$next = $this.next();
			$next.slideToggle();
			$this.parent().toggleClass('open');

// 다른메뉴 숨길시 언락
//			if (!e.data.multiple) {
//				$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
//			};

		}	

		var accordion = new Accordion($('#category_accordion'), false);
}

function main_my_sevics(){
	var my_service_inbox = $('.my_service_inbox');
	$(my_service_inbox).addClass('min_my_infor').append('<div class="copy_cont"></div>');
	var order_status = $(my_service_inbox).children('.sharing_wrapper').contents().children('.order_status_default').clone();
	var featured_products = $(my_service_inbox).children('.sharing_wrapper').contents().children('.featured_products').clone();
	var recently_viewed_products = $(my_service_inbox).children('.sharing_wrapper').contents().children('.recently_viewed_products').clone();
	var notice = $(my_service_inbox).children('.sharing_wrapper').contents().children('.notice').clone();

	$(my_service_inbox).children(".copy_cont").append(order_status).append(featured_products).append(recently_viewed_products).append(notice)
	$('.my_sevics_btn').click(function(){
		if ($(".my_service_inbox").hasClass("min_my_infor")){
			$(this).parent().removeClass('min_my_infor');
		} else {
			$(this).parent().addClass('min_my_infor');
			return
		}
		return false;
	})
}

function main_my_sevicsopen(){
	$('.my_service_inbox').removeClass('min_my_infor');
	return false;
}

function card_list_change(){
two_listimg_wh();
	$('.change_list_btn').click(function(){
		var list_area = $('.item_list_area.main_list_f');

		if ($(list_area).hasClass("two_list_type")){//100
			// $('.iteim_img').removeAttr('style');
			$(this).attr('src', '/w/img/card_list_icon.png');
			$(list_area).removeClass('two_list_type');
			two_listimg_wh();
		} else {
			$(this).attr('src', '/w/img/multi_list_icon.png');
			$(list_area).addClass('two_list_type');
			two_listimg_wh();
		}
		return false;
	})
}

function two_listimg_wh(){
	var list_area = $('.item_list_area.main_list_f');
//	var list_area_by = $(list_area).contents().children('ul').width()
//	var list_area_list = $(list_area).contents().contents().children('.iteim_img')
//	var list_area_img = $(list_area).contents().contents().children('.iteim_img').children('img');
	var list_area_by = $(list_area).children().find('ul').width();
	var list_area_list = $(list_area).children().find('li.iteim_img');
	var list_area_img = $(list_area).children().find('li.iteim_img').children().find('img');
	
	if ($(list_area).hasClass("two_list_type")){
		var list_area_by = $(list_area).children().find('li.iteim_img').width();
		$(list_area_list).css('height',list_area_by);
	} else {
		var list_area_by = $(list_area).children().find('li.iteim_img').width()
		$(list_area_list).css('height',list_area_by+"px");
	}
	

}

/* 구분 최신순 */
function category_list_change(){
	$wh_height = window.innerHeight;
	var header_h = $('#hidden_apply_box #header').height();
	var categiry_h = $('.categiry_footer').height();
	var ca_heght = header_h + categiry_h + 40;
	var scroll_now_val = '';

	$('.option_change').click(function(){
		categoryreset();
		scroll_now_val = $(document).scrollTop();

		$( '#slideup_type_ly #hidden_apply_box').css("height", $wh_height );
		$('.category_contianer').css({'height':$wh_height - ca_heght,'overflow':'auto'});

		$('#multi_accordion_menu').contents().children('li').removeClass('con_open');//상품등록카테고리 선택하기 초기화

		category_listbox_type();
		$('body').css('overflow','hidden');
		re_size_height();
		return false;
	});
	function re_size_height(){
		var header_h = $('#hidden_apply_box #header').height();
		var categiry_h = $('.categiry_footer').height();
		var ca_heght = header_h + categiry_h + 40;
		$('.category_contianer').css({'height':$wh_height - ca_heght,'overflow':'auto'});
	}
	$('#ly_type_close').click(function() {
		category_listbox_hide();
		$(document).scrollTop(scroll_now_val)
	});

	$( window ).resize(function() {
		categorylist_window_change();
	});
}

function categorylist_window_change(){
	$wh_height = window.innerHeight;
	var header_h = $('#hidden_apply_box #header').height();
	var categiry_h = $('.categiry_footer').height();
	var ca_heght = header_h + categiry_h + 40;

	$( '#slideup_type_ly #hidden_apply_box').css("height", $wh_height );
	$('.category_contianer').css({'height':$wh_height - ca_heght,'overflow':'auto'});

	return false;
}

function category_listbox_type(){
	$( '#slideup_type_ly #hidden_apply_box' ).slideDown(300, function() {
		$('#wrap').css('display','none')
		if( $('#wrap').width() < 640){
			$(this).parent().css('position','static')
		} else{

		}
		
	});
}

function category_listbox_hide(){
		$('#wrap').removeAttr('style');
		$('body').removeAttr('style');
		$('#slideup_type_ly').removeAttr('style');
		$('#slideup_type_ly #hidden_apply_box').slideUp();

	return false; 
}

function input_area_co(){
	$(".input_area .input").click(function(e) {

		$("label[type='checkbox']", this)
		var pX = e.pageX,
		pY = e.pageY,
		oX = parseInt($(this).offset().left),
		oY = parseInt($(this).offset().top);

		$(this).addClass('active');

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			if ($(this).hasClass('active-2')) {
				if ($("input", this).attr("type") == "checkbox") {
					$(this).css("color","#333");
					if ($("span", this).hasClass('click-efect')) {
						$(".click-efect").css({
							"margin-left": (pX - oX) + "px",
							"margin-top": (pY - oY) + "px"
						})
						$(".click-efect", this).animate({
							"width": "0",
							"height": "0",
							"top": "0",
							"left": "0"
						}, 400, function() {
							$(this).remove();
						});
					} else {
						$(this).css("color","#fff");
						$(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
						$('.x-' + oX + '.y-' + oY + '').animate({
							"width": "500px",
							"height": "500px",
							"top": "-250px",
							"left": "-250px",
						}, 600);
					}
				}

				if ($("input", this).attr("type") == "radio") {

					$(".input_area .input input[type='radio']").parent().removeClass('active-radio').addClass('no-active-radio');
					$(this).addClass('active-radio').removeClass('no-active-radio');

					$(".input_area .input.no-active-radio").each(function() {
						$(".click-efect", this).animate({
							"width": "0",
							"height": "0",
							"top": "0",
							"left": "0"
						}, 400, function() {
							$(this).remove();
						});
					});

					if (!$("span", this).hasClass('click-efect')) {
						$(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
						$('.x-' + oX + '.y-' + oY + '').animate({
							"width": "500px",
							"height": "500px",
							"top": "-250px",
							"left": "-250px",
						}, 600);
					}

				}
			}
			if ($(this).hasClass('active-2')) {
				$(this).removeClass('active-2')
			} else {
				$(this).addClass('active-2');
			}
		}

	});
}

/* 스크롤 & 그랍 그레그 */
function slippylist_active(){
	$(window).load(function() {
		var win_iH = window.innerHeight
		var id_header = $('#header').height();
		var con_title = $('#ti_btn_typee1').height();
		var con_s_footer = $('.c_footer').height();
		var con_scroll_h = id_header + con_title + con_s_footer + 80;

		if ($("#slippylist_scroll").hasClass("slippylist_scroll")){
			
		} else {
			$('#slippylist_scroll').css('height',win_iH - con_scroll_h);
		}

      setupSlip(slippylist_body);

   });

}
/* 스크롤 & 그랍 그레그 컨텐츠 높이 */
function scroll_listnum(){
	var list_num = $('#slippylist_body li').length;
	var num = 0;
	for (i=0;i<list_num;i++){
		num += $('#slippylist_body').children("li").eq(i).height()+1;
	}
	$('#slippylist_scroll').css('height',num)
	$('#wrap').css('padding-bottom', $('.c_footer').height() +41)
}

function setupSlip(list) {
     list.addEventListener('slip:afterswipe', function(e){
         e.target.parentNode.appendChild(e.target);
     }, false);

     list.addEventListener('slip:reorder', function(e){
         e.target.parentNode.insertBefore(e.target, e.detail.insertBefore);
         return false;
     }, false);
     return new Slip(list);
 }


/* 검색 스크롤 아이템 on_off */ 
function seach_box_scroll(){
	var seachscroll_now_val = '';
	$("#seach_input2 #main_seach").unbind("focus").focus(function(){
		
		$('#footer').hide();
		//터치 락
		bind_preventtouchmove();

		$(this).css('text-align','left');
		$(this).parent().parent().addClass('key_up_bar');
		$("#main_seach").attr("onkeypress","if(event.keyCode==13) {search.changeHash($(this).val());}");
		
		$('.text_close').unbind('click').bind('click', function(){
			$('#main_seach').val("");
			$("#seach_input2 #main_seach").focus();
			searchCaller.recentKeyword();
		});

		/* ios
		seachscroll_now_val = $(document).scrollTop();
		$("#header").css({'position':'absolute','top':seachscroll_now_val})
		$(document).scrollTop(seachscroll_now_val);
		$("#header").addClass('focus_sc');
		focusing = true;
		*/
    });

    $("#seach_input2 #main_seach").unbind("blur").blur(function(){

    	$('#footer').show();
    	//터치 락 해제
    	bind_unbindtouchmove();

		var name = $("input[name='main_seach']").val().toString();
		if(name === ""){
			$(this).removeAttr('style');
			$(this).parent().parent().removeClass('key_up_bar');	
		}
		$("#main_seach").focus(function(){
			$(this).parent().parent().addClass('key_up_bar');
       });

		/* ios
		$("#header").css({'position':'fixed','top':'0px'})
		$("#header").removeClass('focus_sc');
		focusing = false;
		*/
    });

	$(window).scroll(function() {
		if ( focusing ) $(".focus_sc").css({'top':$(document).scrollTop()});
	});
}

function seach_box_scroll2(){
	$(".seach_input2 #main_seach").unbind("focus").focus(function(){
		$('#footer').hide();
		bind_preventtouchmove();
        $(this).unbind("blur").blur(function(){
        	$('#footer').show();
        	bind_unbindtouchmove();
            var name = $("input[name='main_seach']").val().toString();
            if(name === ""){
            	$(this).removeAttr('style');
				$(this).parent().parent().removeClass('key_up_bar');	
            }
            $("#main_seach").focus(function(){
            	$(this).parent().parent().addClass('key_up_bar');
            });
        });
        $(this).css('text-align','left');
		$(this).parent().parent().addClass('key_up_bar');
    });
 //    $(document).on('blur', 'input, textarea', function () {
	// 	setTimeout(function () {
	// 		window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
	// 	}, 0);
	// });
}
// $("#main_seach").on("focus", function () {
//     $("body").css("position", "fixed");
// });

// $("#main_seach").on("blur", function () {
//     $("body").css("position", "static");
// });
/**/
function item_citation_more(){

	if ($('.contianer').hasClass("sales")){
		$('.contianer').children(".share").hide();
		$('.contianer').children(".sharing").hide();
	} else if ($('.contianer').hasClass("sharing")){
		$('.contianer').children(".sales").hide();
		$('.contianer').children(".share").hide();
	} else if ($('.contianer').hasClass("share")){
		$('.contianer').children(".sharing").hide();
		$('.contianer').children(".sales").hide();
	}

	$('.radio_infor .custom_input .open').click(function(){
		$('.radio_infor_dtd').show();
	})

	$('.radio_infor .custom_input .box_close').click(function(){
		$('.radio_infor_dtd').hide();
	})

	if($('.contianer').hasClass('sales') ){

		$('.end_day_list').hide();
		$('.last_list').hide();

		if($('.radio_infor').hasClass('two_open') ){
			$('.end_day_list').show();
			$('.last_list').show();
			$('.radio_infor .custom_input input.be_ing').attr( 'checked', false )
			$('.radio_infor .custom_input input.ing').attr( 'checked', true )
		} else {

		}

		$('.radio_infor .custom_input').children('.ing').click(function(){
			$(this).parent().parent().addClass('two_open');
			$('.end_day_list').show();
			$('.last_list').show();
			$('.myproof_select').removeClass('ing');
			$('.myproof_select select').removeAttr('disabled'); 
		})

		$('.radio_infor .custom_input').children('.be_ing').click(function(){
			$(this).parent().parent().removeClass('two_open');
			$('.end_day_list').hide();
			$('.last_list').hide();	
			$('.myproof_select').addClass('ing');
			$('.myproof_select select').attr('disabled', 'true');
		})

	} else {

		$('.radio_infor .custom_input .ing').click(function(){
			$('.myproof_select').removeClass('ing');
			$('.myproof_select select').removeAttr('disabled'); 
		})

		$('.radio_infor .custom_input .be_ing').click(function(){
			$('.myproof_select').addClass('ing');
			$('.myproof_select select').attr('disabled', 'true');
		})
	}



}

/* 토글버튼 관련 */
function tgl_disabled_off(){
	$('.tgl-gray').removeClass('active'); 
}
function tgl_disabled_on(){
	$('.tgl-gray').addClass('active'); 
}


/* 구매페이지 */
/*function provide_inforacc(){
	$('.title_name').on("click", function() {

	    var $obj = $('.provide_information_name');

	    if ($obj.prop('checked') === true){
			$obj.prop('checked', !$obj.prop('checked'));
			$(this).nextAll('.txt_box').slideUp('fast');
			return false;
	    } else {
			$obj.prop('checked', !$obj.prop('checked'));
			$(this).nextAll('.txt_box').slideDown('fast');
			return false;
	    }
	});
}*/
function provide_inforacc(){

	$('.multi_accordion_arrow2').addClass('open').parent().nextAll('.txt_box').slideDown('fast');
	$('.multi_accordion_arrow2').parent().nextAll('.txt_box').slideDown('fast');

	$('.multi_accordion_arrow2').on("click", function() {//아코디언
		if ($(this).hasClass("open")){
			$(this).removeClass('open').parent().nextAll('.txt_box').slideUp('fast');
			return false;
		} else{
			$(this).addClass('open').parent().nextAll('.txt_box').slideDown('fast');
			$(this).parent().nextAll('.txt_box').slideDown('fast');
			return false;
		}
	});

	$('.title_name label').on("click", function() {
		var $obj = $(this).prevAll('.provide_information_name');
		var $all_obj = $('.title_name  .provide_information_name');

	    if ($obj.prop('checked') === true){
			$obj.prop('checked', !$obj.prop('checked'));
			var $all_obj = $('.all_check  .provide_information_name');
			 $(".all_check input[name=provide_information_name]").prop("checked",true);
			$all_obj.prop('checked', !$all_obj.prop('checked'));
			return false;
	    } else {
			$obj.prop('checked', !$obj.prop('checked'));
			if( $("input[name=provide_information_name]:checkbox:checked").length == 2 ){
				var $all_obj = $('.all_check  .provide_information_name');
				$all_obj.prop('checked', !$all_obj.prop('checked'));
			}
			return false;
	    }
	});

	$('.title_name.all_check label').on("click", function() {
		var $all_obj = $('.title_name  .provide_information_name');

	    if ($(this).hasClass("all_check")){
			$all_obj.prop('checked', !$all_obj.prop('checked'));
			return false;
		} else{
			$all_obj.prop('checked', !$all_obj.prop('checked'));
			return false;
		}
	});
}

function provide_inforacc2(){

	$('.title_name').unbind('click').bind("click", function() {
	    if ($(this).hasClass("open")){
			$(this).removeClass('open').nextAll('.txt_box').slideUp('fast');
			return false;
		} else{
			$(this).addClass('open').nextAll('.txt_box').slideDown('fast');
			return false;
		}

	});
}
function provide_inforacc3(){
	$('.title_name').unbind('click').bind("click", function() {
	    if ($(this).hasClass("open")){
			$(this).removeClass('open').nextAll('.txt_box').slideUp('fast');
			return false;
		} else{
			$(this).addClass('open').nextAll('.txt_box').slideDown('fast');
			return false;
		}
	});
}
function final_payment_input(){
	$(".final_payment_txt input").focus(function() {
		if ( $(this).attr('readonly') == 'readonly'){

		} else {
			$(this).nextAll('.point').addClass('active');
		}
	}).blur(function() { 
		if($('.final_payment_txt input').val() == '') { 
			$(this).nextAll('.point').removeClass('active');
		} else {
			return false;
		}
	});

	var $ettle_cd_ = $('#settle_gb_cd_card');
	if ($ettle_cd_.prop('checked') != true) {
    	$('.two_list_select').addClass('hide');
    	$('.payment_infor_input').addClass('hide');
    }

	$('.payment_radio_infor .custom_input input').on("click", function() {
	    var $obj = $('#settle_gb_cd_phone');

	    if ($obj.prop('checked') === true || $('#settle_gb_cd_billing').prop('checked')) {
	    	$('.two_list_select').addClass('hide');
	    	$('.payment_infor_input').addClass('hide');
	    } else {
	    	$('.two_list_select').removeClass('hide');
	    	$('.payment_infor_input').removeClass('hide');
	    }
	});
	
}

/* 주문현황 스와이퍼 */
function prisharing_slider(num){
	var prisharing = new Swiper('.sharing_slider_container', {
	    slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 10,
        initialSlide: num,
        slidesPerGroup : 4,
        onInit: function(swiper){
        	$('.sharing_slider_container').children(".sharing_wrapper").children().eq(num).contents().addClass('active');
	    }
	});
}
/* 텍스트아레아 클자 제한 */
function fnChkByte(obj, maxByte, isNotByteInfo){
	var str = '';
	if (obj.value && obj.value != '') {
		str = obj.value;
	} else if (obj[0]){
		str = obj[0].value;
	} 

	var str_len = str.length;

	var rbyte = 0;
	var rlen = 0;
	var one_char = "";
	var str2 = "";

	for(var i=0; i<str_len; i++){
		one_char = str.charAt(i);
		if(escape(one_char).length > 4){
		    rbyte += 2;
		}else{
		    rbyte++;
		}

		if(rbyte <= maxByte){
		    rlen = i+1;
		}
	}

	if(rbyte > maxByte){
	    str2 = str.substr(0,rlen);
	    if (obj.value && obj.value != '') {
	    	obj.value = str2;	
	    } else if (obj[0]){
	    	obj[0].value = str2;
	    }
	    
	    fnChkByte(obj, maxByte, isNotByteInfo);
	    alert('메시지는 최대 ' + Math.floor(maxByte/2) + '자(한글)까지 등록 가능합니다');
	} else if (isNotByteInfo){
	    
	} else {
		document.getElementById('byteInfo').innerText = rbyte;
	}
}

function mydeal_status_tab(){
	var win_iH = window.innerHeight;
	var height_h = $('#header').height();
	var footer_h = $('#footer').height();
	var height_footer_h = height_h+footer_h;

	$(".description_content").hide();
	$(".description_content:first").show();
	var de_content_length = $(".description_content:first .item_list_box").children("ul").length;

	// if( de_content_length <= 0 ){
	// 	$(".description_content:first .item_list_box").addClass('not_list');
	// 	$(".description_content:first .item_list_box").css('height',win_iH-height_footer_h);
	// 	$(".description_content:first .item_list_box").html('<li class="noitem_keywordbox"><dl><dt><img src="/w/img/common/no_event_listicon.png"></dt><dd>진행중인 이벤트가 없습니다.</dd></dl></li>')
	// } else {
	
	// }

	$(".mydeal_status_tabs li").unbind('click').bind('click',function() {

		$(".description_content").hide();
		$(".description_content .item_list_box").removeClass('not_list');
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();		
		var de_content_length = $("#"+activeTab).children(".item_list_box").children("ul").length;

		// if( de_content_length <= 0 ){
		// 	$("#"+activeTab).children(".item_list_box").addClass('not_list');
		// 	$("#"+activeTab).children(".item_list_box").css('height',win_iH-height_footer_h);
		// 	$("#"+activeTab).children(".item_list_box").html('<li class="noitem_keywordbox"><dl><dt><img src="/w/img/common/no_event_listicon.png"></dt><dd>진행중인 이벤트가 없습니다.</dd></dl></li>')
			
		// } else {
			
		// }

		$(".mydeal_status_tabs li").removeClass("active");
		$(this).addClass("active");

		$(".tab_drawer_heading").removeClass("d_active");
		$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

		return false;
	});

	$('.mydeal_status_tabs li').last().addClass("tab_last");
}

/* 별점 및 평가 관련 */
function inputrange_star(){

	var $r = $('input[type="range"]');
	var $ruler = $('<div class="rangeslider__ruler" />');

	var t_starinput = $('#t_starinput').val();
	$('.to_val_txt').html(t_starinput);

	// Initialize
	$r.rangeslider({
	  polyfill: false,
	  onInit: function() {
	    $ruler[0].innerHTML = getRulerRange(this.min, this.max, this.step);
	    this.$range.prepend($ruler);},
	    onSlide: function(position, value) {
	    	var t_starinput = $('#t_starinput').val();
	    	$('.to_val_txt').html(t_starinput);
	    	//$('.rangeslider__fill').css('width',$('.rangeslider__fill').width()-1)
	    },
	    onSlideEnd: function(position, value) {
			
		}
	});

	function getRulerRange(min, max, step) {
	  var range = '';
	  var i = 0;

	var rangesliderhorizontal = $('.rangeslider--horizontal').width()/5;
	$('.rangeslider__fill').css('background-size',rangesliderhorizontal+"px " + "100%")

	$( window ).resize(function() {
		var rangesliderhorizontal = $('.rangeslider--horizontal').width()/5;
		$('.rangeslider__fill').css('background-size',rangesliderhorizontal+"px " + "100%")
	});

	  while (i <= max) {
	    range += i + ' ';
	    i = i + step;
	  }
	  return range;
	}
}

function acc_depth1_test(num){
		$(num).removeClass('open');
		$(num).parent().removeClass('con_open');

	if ($(num).hasClass("open")){
		$(num).removeClass('open');
		$(num).parent().removeClass('con_open');
	} else {
		$(num).addClass('open');
		$(num).parent().addClass('con_open');
	}	
}

/* 상세페이지 관련_ */ 
function detail_page_plugin(){
	var mi_f= $('.detail_footer').height();
	var dt_f= $('.detail_option_box').height();
	var induce_banner = $(".top_induce_banner").height();
	$('.contianer').css('margin-top', induce_banner + $('.sharing_slider_container').width())
	setTimeout(function(){ 
		//sales sharing share
		$('.contianer').css('padding-bottom', mi_f);
		$('.detail_option_box').css('bottom',  dt_f - (dt_f*2));
		if ($('.detail_footer').hasClass("sharing")){
			$('.detail_option_box').css('bottom',  dt_f - (dt_f*2));
			//detail_option_btn();
			//$('.pri_btn').html('셰어링 하기');
		} else if ($('.detail_footer').hasClass("sales")){
			//detail_option_btn();
			//('.pri_btn').html('구매하기')
		} else {
			// $('.pri_btn').html('나눔신청하기');
		}

	}, 200);

	function comment_comm_open(t_btn){
		$(t_btn).parent().nextAll('.comment_txt_box').addClass('open');
	}

	function comment_comm_close(){
		$(t_btn).parent().nextAll('.comment_txt_box').addClass('open');
	}
	
	detail_pg_banner();
	description_content_tab();
	chose_heart_active();
	inputrange_star();
	
	$( window ).resize(function() {
		detail_pg_banner();
	});
}

function rangeslider_infor(){
	var day_range = $('#day_amount_range').val();
	var day_input = $('#day_amount_input').val();
	var range = $('#day_amount_range').attr('max');
	var max_range = $('#day_amount_range').attr('max');
	var min_range = $('#day_amount_range').attr('min');
	var ans_range = max_range - min_range;
	var rangeval = ans_range / 10;
	var going_bar_w = (win_iw-62) / ans_range;
	// var going_bar_w = ($('.rangeslider').width()-22) / ans_range;

	$(".number1").addClass('active');

	$('.number1').html(min_range)
	$('.number4').html(range)



	if ( min_range == 3 ){
		if (max_range <= 10){
			$('.number2').html(Math.ceil(rangeval*3))
			$('.number3').html(Math.ceil(rangeval*8))

			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number2').css('left', going_bar_w * (Math.ceil(rangeval*3)-min_range) )
				$('.number3').css('left', going_bar_w * (Math.ceil(rangeval*8)-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});

			$(".number1").remove();
			if(day_range == min_range){
				$(".number2").addClass('active');
			}
		} else if(max_range == 20){
			$('.number2').html(Math.ceil(rangeval*4)+1)
			$('.number3').html(Math.ceil(rangeval*8)-1)
			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number2').css('left', going_bar_w * (Math.ceil((rangeval*4)+1)-min_range))
				$('.number3').css('left', going_bar_w * (Math.ceil((rangeval*8)-1)-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});
		} else if (max_range == 30){
			$('.number2').html(Math.ceil(rangeval*4)+1)
			$('.number3').html(Math.ceil(rangeval*8)-1)

			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number2').css('left', going_bar_w * (Math.ceil((rangeval*4)+1)-min_range) )
				$('.number3').css('left', going_bar_w * (Math.ceil((rangeval*8)-1)-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});
		}

	} else if ( min_range == 5 ){
		if (max_range <= 10){
			$(".number1").remove();
			$(".number2").remove();
			$('.number3').html(Math.ceil(rangeval*9))

			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number3').css('left', going_bar_w * (Math.ceil(rangeval*9)-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});

			if(day_range == min_range){
				$(".number3").addClass('active');
			}
		} else if (max_range == 20) {
			$('.number2').html(Math.ceil(rangeval*6)+1)
			$('.number3').html(Math.ceil(rangeval*9)+1)
			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number2').css('left', going_bar_w * (Math.ceil((rangeval*6)+1)-min_range))
				$('.number3').css('left', going_bar_w * (Math.ceil((rangeval*9)+1)-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});
		} else if (max_range == 30){
			$('.number2').html(Math.ceil(rangeval*5))
			$('.number3').html(Math.ceil(rangeval*9)-1)
			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number2').css('left', going_bar_w * (Math.ceil(rangeval*5)-min_range))
				$('.number3').css('left', going_bar_w * (Math.ceil((rangeval*9)-1)-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});
		}
	} else if( min_range == 7 ){
		if (max_range == 10){
			$(".number1").remove();
			$(".number2").remove();
			$('.number3').html(min_range)
			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number3').css('left', going_bar_w * (min_range-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});

			$(".number1").remove();
			$(".number4").addClass('active');
			if(day_range == min_range){
				$(".number3").addClass('active');
			}
		} else if (max_range == 20){
			$('.number2').html(Math.ceil(rangeval*7)+1)
			$('.number3').html(Math.ceil(rangeval*9)+3)
			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number2').css('left', going_bar_w * (Math.ceil((rangeval*7)+1)-min_range))
				$('.number3').css('left', going_bar_w * (Math.ceil((rangeval*9)+3)-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});
		} else if (max_range == 30){
			$('.number2').html(Math.ceil(rangeval*6)+1)
			$('.number3').html(Math.ceil(rangeval*9)+1)
			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number2').css('left', going_bar_w * (Math.ceil((rangeval*6)+1)-min_range))
				$('.number3').css('left', going_bar_w * (Math.ceil((rangeval*9)+1)-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});
		}
	} else if( min_range == 10 ){
		if (min_range == max_range){
			var ans_range = $('.daynumbers_row').width();
			var rangeval = ans_range / 10;
			var going_bar_w = (win_iw-62) / ans_range;
			var $rangeslider_next = $('#day_amount_range').next();
			$('#day_amount_input').attr('disabled', 'disabled');
			$('.rangeslider--horizontal').addClass('rangeslider--disabled');
			$(".number1").remove();
			$(".number2").remove();
			$('.number3').html(min_range)
			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number3').css('left', going_bar_w * (min_range-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});
			setTimeout(function(){ 
				$('.rangeslider__handle').css('left', going_bar_w * Math.ceil(rangeval*10))
				$('.rangeslider__fill').css('width', going_bar_w * Math.ceil(rangeval*10))
			},1500);
			$(".number1").remove();
			if(day_range == min_range){
				$(".number4").addClass('active');
			}
		} else if (max_range == 20){
			$('.number2').html((rangeval*10)+3)
			$('.number3').html((rangeval*10)+7)
			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number2').css('left', going_bar_w * ((rangeval*10)+3-min_range))
				$('.number3').css('left', going_bar_w * ((rangeval*10)+7-min_range))
				$('.number4').css('left', going_bar_w * rangeval*10)
			});
		} else if (max_range == 30){
			$('.number2').html(Math.ceil(rangeval*7)+2)
			$('.number3').html(Math.ceil(rangeval*10)+3)
			$(".going_bar").not("#first_going_bar").each(function(i){
				$('.number2').css('left', going_bar_w * (Math.ceil((rangeval*7)+2)-min_range))
				$('.number3').css('left', going_bar_w * (Math.ceil((rangeval*10)+3)-min_range))
				$('.number4').css('left', going_bar_w * Math.ceil(rangeval*10))
			});
		}
	}

	$(".going_bar").on("click", function(e) {
		e.preventDefault();
		if (min_range == max_range){
			return
		}
		$('.going_bar').removeClass('active');
		var stat_num = $(this).html();
		$rangeslider.val( stat_num ).change();
		$(this).addClass('active');
	});

	var $rangeslider = $('#day_amount_range');
	var $amount = $('#day_amount_input');
	var i=1;

	$rangeslider
	.rangeslider({
		polyfill: false,
	})
	.on('input', function() {
		$amount[0].value = this.value;
		
		$('.going_bar').removeClass('active');

		if ( min_range == 3 ){
			if (max_range == 10){
				if(this.value == min_range){
					$(".number2").addClass('active');
				} else if(this.value == Math.ceil(rangeval*3)){
					$(".number2").addClass('active');
				} else if(this.value == Math.ceil(rangeval*8)){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			} else if (max_range == 20){
				if(this.value == min_range){
					$(".number1").addClass('active');
				} else if(this.value == Math.ceil(rangeval*4)+1){
					$(".number2").addClass('active');
				} else if(this.value == Math.ceil(rangeval*8)-1){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			} else if (max_range == 30){
				if(this.value == min_range){
					$(".number1").addClass('active');
				} else if(this.value == Math.ceil(rangeval*4)+1){
					$(".number2").addClass('active');
				} else if(this.value == Math.ceil(rangeval*8)-1){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			}
		} else if( min_range == 5 ){
			if (max_range == 10){
				if(this.value == min_range){
					$(".number3").addClass('active');
				} else if(this.value == Math.ceil(rangeval*3)){
					$(".number3").addClass('active');
				} else if(this.value == Math.ceil(rangeval*9)){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			} else if (max_range == 20){
				if(this.value == min_range){
					$(".number1").addClass('active');
				} else if(this.value == Math.ceil(rangeval*6)+1){
					$(".number2").addClass('active');
				} else if(this.value == Math.ceil(rangeval*9)+1){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			} else if (max_range == 30){
				if(this.value == min_range){
					$(".number1").addClass('active');
				} else if(this.value == Math.ceil(rangeval*5)){
					$(".number2").addClass('active');
				} else if(this.value == Math.ceil(rangeval*9)-1){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			}
		} else if(min_range == 7){
			if (max_range <= 10){
				if(this.value == min_range){
					$(".number3").addClass('active');
				} else if(this.value == Math.ceil(rangeval*3)){
					$(".number3").addClass('active');
				} else if(this.value == Math.ceil(rangeval*9)){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			} else if (max_range <= 20){
				if(this.value == min_range){
					$(".number1").addClass('active');
				} else if(this.value == Math.ceil(rangeval*7)+1){
					$(".number2").addClass('active');
				} else if(this.value == Math.ceil(rangeval*9)+3){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			} else if (max_range <= 30){
				if(this.value == min_range){
					$(".number1").addClass('active');
				} else if(this.value == Math.ceil(rangeval*6)+1){
					$(".number2").addClass('active');
				} else if(this.value == Math.ceil(rangeval*9)+1){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			}
		} else if(min_range == 10){
			if (min_range == max_range){
				$(".number4").addClass('active');
			} else if (max_range <= 20){
				if(this.value == min_range){
					$(".number1").addClass('active');
				} else if(this.value == Math.ceil(rangeval*10)+3){
					$(".number2").addClass('active');
				} else if(this.value == Math.ceil(rangeval*10)+7){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			} else if (max_range <= 30){
				if(this.value == min_range){
					$(".number1").addClass('active');
				} else if(this.value == Math.ceil(rangeval*7)+2){
					$(".number2").addClass('active');
				} else if(this.value == Math.ceil(rangeval*10)+3){
					$(".number3").addClass('active');
				} else if(this.value == range){
					$(".number4").addClass('active');
				}
			}
		}
	})

	$(".day_button_down").on("click", function(e) {
		e.preventDefault();
		var stat = $('#day_amount_input').val();
		var numchk = parseInt(stat,10);
		var num = parseInt(stat,10);
		num--;
		if (min_range == max_range){
			return
		}
		if(numchk > 1){
			
		}else{
			$('#day_amount_input').val(1);
			num = 1;
		}
		$rangeslider.val( num ).change();
	});

	$(".day_button_up").on("click", function(e) {
		e.preventDefault();
		var stat = $('#day_amount_input').val();
		var numchk = parseInt(stat,10);
		var num = parseInt(stat,10);
		num++;
		if (min_range == max_range){
			return
		}
		if(numchk > 0){
			
		}else{
			$('#day_amount_input').val(1);
			num=1;
		}

		$rangeslider.val( num ).change();
	});

	$amount.on('input', function() {
		if(this.value > 0){
			
			$rangeslider.val(this.value).change();
		} else {
			$rangeslider.val(1).change();
			$amount.val('').change();
		}
	});

	$amount.focus(function() {

	}).blur(function() { 
		if(this.value < min_range){
			$rangeslider.val(min_range).change();
			$amount.val(min_range).change();
			return
		}
	});

}

function detail_option_btn(){
	var dt_f= $('.detail_option_box').height();
	var da_f= $('.detail_footer').height();

	if ($('.detail_footer').hasClass("sales")){
		$(".pri_btn").addClass('open');
		$('.detail_option_box').css('bottom',  0)
		$('.detail_ly_bg').show();
	} else {
		$(".pri_btn").addClass('open');
		$('.detail_option_box').css('bottom',  da_f)
		$('.detail_ly_bg').show();
	}

	// $(".pri_btn").click(function() {
	// 	if ($('.detail_footer').hasClass("sales")){
	// 		$(this).addClass('open');
	// 		$('.detail_option_box').css('bottom',  0)
	// 		$('.detail_ly_bg').show();
	// 		return false;
	// 	} else {
	// 		$(this).addClass('open');
	// 		$('.detail_option_box').css('bottom',  da_f)
	// 		$('.detail_ly_bg').show();
	// 		return false;
	// 	}
	// });

		
	$(".detail_ly_bg").click(function() {
		$(this).removeClass('open');
		$('.detail_option_box').css('bottom',  dt_f - (dt_f*2))
		$('.detail_ly_bg').hide();
		return false;
	});

	function detail_option_close(){
		$(this).removeClass('open');
		$('.detail_option_box').css('bottom',  dt_f - (dt_f*2))
		$('.detail_ly_bg').hide();
	}
}

function chose_heart_active(){
	$('.share_icon').click(function(){
		true_ly_open();
		$('.ly_infor_title').each(function(){
			$(this).addClass('shareicon');
		});
	})
	// $('.ly_bg').click(function(){
	// 	co_ly_close();
	// });
	$('.ly_common_close').click(function(){
		co_ly_close();
	});

	$('.heart_active').click(function(){
		if ($(this).hasClass("active")){
			$('.heart_active').removeClass('active');
			$('.heart_lytype ul').each(function(){
				$(this).parent('.heart_w_h').addClass('close');
				$(this).contents().children('dd.name').html('취소완료!');
			});
		} else {
			$('.heart_active').addClass('active');
			$('.heart_lytype ul').each(function(){
				$(this).parent('.heart_w_h').removeClass('close');
				$(this).contents().children('dd.name').html('찜하기 완료!');
			});
		}
		$('.heart_lytype').fadeIn();

		setTimeout(function(){ 
			co_ly_close2()
		},1500);

	})
	function co_ly_close2(){
		$('.heart_lytype').fadeOut();
	}
	function co_ly_close(){
		$('.heart_lytype').hide();
	}
}

function detail_pg_banner(){
	var detail_slider = $('.sharing_slider_container');
		
	if( $('.sharing_slider_container .sharing_wrapper .sharing_slide').length == 1){
		// var sharing = new Swiper('.sharing_slider_container', {
		//     pagination: '.sharing_pagination',
		//     paginationClickable: true,
		// });
	} else {
		
		// var dpg_sharing_slide = $('.sharing_slider_container .sharing_wrapper .sharing_slide').length

		// for(var i=0;i<dpg_sharing_slide;i++){
		// 	var data_original = $('.sharing_slider_container .sharing_wrapper').children().eq(i).children("img").attr('data-original')
		// 	$('.sharing_slider_container .sharing_wrapper').children().eq(i).children("img").attr("src", data_original);
		// }

		var sharing = new Swiper('.sharing_slider_container', {
		    pagination: '.sharing_pagination',
		    paginationClickable: true,
		    loop:true,
		});
		// setTimeout(function(){ 
		// 	var slider_first = $('.sharing_slider_container .sharing_wrapper').children().first();
		// 	var slider_last = $('.sharing_slider_container .sharing_wrapper').children().last();
		// 	$(slider_first).children("img").remove();
		// 	$(slider_last).children("img").remove();
		// 	$(slider_last).prev().children("img").clone().appendTo($(slider_first)).addClass('first');
		// 	$(slider_first).next().children("img").clone().appendTo($(slider_last)).addClass('last');
		// }, 1000);
	}

 	$(detail_slider).css('height',$(detail_slider).width());
	if($('.top_induce_banner').is(":visible")){
		var induce_banner = $(".top_induce_banner").height();
		$('.sharing_slider_container').css('padding-top', induce_banner)
		$('.contianer').css('margin-top', induce_banner + $('.sharing_slider_container').width())
	} else {
		$('.sharing_slider_container').css('padding-top', induce_banner)
		$('.contianer').css('margin-top', $('.sharing_slider_container').width())
	}

	$(window).load(function() {
		detailtouchstart();
	});

	$(window).scroll(function() {
		detailtouchstart();
	});

	//앱 상세 테스트
	$('#wrap').on('touchend', function (e){
		
	});

	$('#wrap').on('touchstart', function (e){
		detailtouchstart()
	});

	$('#wrap').on('touchmove', function (e){
		detailtouchstart();
	});
}

function detailtouchstart(){
	var sharing_slide_ih = $('.sharing_wrapper').height();
	var slide_ih_f = sharing_slide_ih/100;
	var scroll_bar_pg = ($(document).scrollTop()/slide_ih_f)/100;
	var  scroll_bar_num = scroll_bar_pg/100;
	if (scroll_bar_pg < 1 ) {
		$('.detail_pg_bg').addClass('active').css('background-color','rgba(255,255,255,'+scroll_bar_pg+')');
	}

	if( scroll_bar_pg > 0.5){
		$('.detail_pg').addClass('scroll');
		$('.top_left').addClass('scroll');
		$('#header').css('background-color','rgba(0,0,0,0.5)')
	} else {
		$('.detail_pg').removeClass('scroll');
		$('#header').css('background-color','rgba(0,0,0,'+scroll_bar_pg+')')
		$('.top_left').removeClass('scroll');
	}
}
function detail_ct_banner(){
	var sharing_ct_banner = new Swiper('.detail_ct_banner', {
	     pagination:'.swiper-pagination',
        slidesPerView:'auto',
        paginationClickable:true,
        spaceBetween:20
	});
}
function description_content_tab(){
	$(".description_content").hide();
	$(".description_content:first").show();

	$(".product_tabs li").click(function() {

		$(".description_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();		

		$(".product_tabs li").removeClass("active");
		$(this).addClass("active");

		$(".tab_drawer_heading").removeClass("d_active");
		$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

	});

	$('.product_tabs li').last().addClass("tab_last");

	$(".product_tabs li.tab_last").click(function() {
		
		$('.photo_body li').css({'height':$('.photo_body li img').width(),'overflow':'hidden'})//cdn 거처 크롭되면 삭제

		$('.photo_body li').unbind('click').bind('click', function() {
			

			var this_img = $(this).children('img').attr('src');
			// var this_img = 'http://w.ssocio.net/w/img/common/item_01.png?1000x1000';
			var win_iw = window.innerWidth/10;
			var win_iw_img = win_iw*8;
			var win_iH = window.innerHeight/10;
			var win_iH_img = win_iH*8;

			if (this_img.indexOf('?') != -1 && this_img.split('?').length > 0) {
				this_img = this_img.split('?')[0];
			}

			$('body').append('<div class="photo_body_ly"><ul><li class="photo_body_list"><img src="'+this_img+'" alt=""></li></ul></div>').css({'position':'fxed','height':'100%','overflow':'hidden'});

			setTimeout(function(){ 
				var this_img_w = $('.photo_body_list').children('img').width();
				var this_img_h = $('.photo_body_list').children('img').height();
				setTimeout(function(){ 
					if(this_img_w < this_img_h){
						$('.photo_body_list').css({'width':win_iw_img,'height':win_iH_img,'top':win_iH*1,'margin-left':-win_iw_img/2,'overflow-y':'auto'});
					} else {
						if(this_img_w > this_img_h){
							$('.photo_body_list').css({'width':win_iw_img,'margin-top':-this_img_h/2,'margin-left':-win_iw_img/2});
						} else {
							$('.photo_body_list').css({'width':win_iw_img,'margin-top':-win_iw_img/2,'margin-left':-win_iw_img/2});
						}
					}
				}, 10);
			}, 10);

			$('.photo_body_ly').unbind('click').bind('click', function() {
				$('.photo_body_ly').remove();
				$('body').removeAttr('style');
			})
		});
	})
}

function photocontactus(){
	$('.photo_body li').css({'height':$('.photo_body li img').width(),'overflow':'hidden'})//이미지 cdn 적용후 살제해도 될 기능

	$('.photo_body li').unbind('click').bind('click', function() {
		var this_img_w = $(this).children('img').width();
		var this_img_h = $(this).children('img').height();

		var this_img = $(this).children('img').attr('src');
		// var this_img = 'http://w.ssocio.net/w/img/common/item_01.png?1000x1000';
		var win_iw = window.innerWidth/10;
		var win_iw_img = win_iw*8;
		var win_iH = window.innerHeight/10;
		var win_iH_img = win_iH*8;

		if (this_img.indexOf('?') != -1 && this_img.split('?').length > 0) {
			this_img = this_img.split('?')[0];
		}

		$('body').append('<div class="photo_body_ly"><ul><li class="photo_body_list"><img src="'+this_img+'" alt=""></li></ul></div>').css({'position':'fxed','height':'100%','overflow':'hidden'});
		if(this_img_h > win_iH_img){
			$('.photo_body_list').css({'width':win_iw_img,'height':win_iH_img,'top':win_iH*1,'margin-left':-win_iw_img/2,'overflow-y':'auto'});
		} else {
			$('.photo_body_list').css({'width':win_iw_img,'margin-top':-win_iw_img/2,'margin-left':-win_iw_img/2});
		}
		

		$('.photo_body_ly').unbind('click').bind('click', function() {
			$('.photo_body_ly').remove();
			$('body').removeAttr('style');
		})
	});
}

function customPhotoContactus($this){
	$this.unbind('click').bind('click', function() {
		var this_img_w = $(this).children('img').width();
		var this_img_h = $(this).children('img').height();

		var this_img = $(this).children('img').attr('src');
		var win_iw = window.innerWidth/10;
		var win_iw_img = win_iw*8;
		var win_iH = window.innerHeight/10;
		var win_iH_img = win_iH*8;
		
		if (this_img.indexOf('?') != -1 && this_img.split('?').length > 0) {
			this_img = this_img.split('?')[0];
		}
		
		$('body').append('<div class="photo_body_ly"><ul><li class="photo_body_list"><img src="'+this_img+'" alt=""></li></ul></div>').css({'position':'fxed','height':'100%','overflow':'hidden'});
		if(this_img_h > win_iH_img){
			$('.photo_body_list').css({'width':win_iw_img,'height':win_iH_img,'top':win_iH*1,'margin-left':-win_iw_img/2,'overflow-y':'auto'});
		} else {
			$('.photo_body_list').css({'width':win_iw_img,'margin-top':-win_iw_img/2,'margin-left':-win_iw_img/2});
		}
		

		$('.photo_body_ly').unbind('click').bind('click', function() {
			$('.photo_body_ly').remove();
			$('body').removeAttr('style');
		})
	});
}

/* 주문현황 셰어링 슬라이드 */
function final_payment_slider(){
	var sharing = new Swiper('.sharing_slider_container', {
	    slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 10,
        slidesPerGroup : 4,
	});
}

function mysevics_window_change(){
	$wh_height = window.innerHeight;
	var mys_header_h = $('.header_top').height();
	var mys_tabmenu_h = $('.my_sevics_tabs').height();

	var mysevics_tab_h = mys_header_h + mys_tabmenu_h;
	var mysevics_tab_h2 = mys_header_h + mys_tabmenu_h + 54;

	$( '#slideup_itemtype_ly #my_sevics_box').css("height", $wh_height );
	$( '.mysevics_tab_container .item_list_area').css("height", $wh_height - mysevics_tab_h);
	$( '.mysevics_tab_container .item_list_area.my_optionsevics').css("height", $wh_height - mysevics_tab_h2);

	return false;
}

$( window ).resize(function() {
	mysevics_window_change();
});

/* 플로팅 메뉴 */
function floating_menu(){
	if ($('#wrap').hasClass("detail_footer")){
		$('.floating_menu').css('bottom','20px')
	} else {
		$('.floating_menu').css('bottom',$('.detail_footer').height()+20)
	}
	var scroll_now_val = '';

	$('.floatingmenu').on("click", function() {
		var floating_m_h = $('.floating_menu_body li').height();
		bind_preventtouchmove()
		
		if( $('.floating_menu_body li').length >= 4){
			if ($('.floating_menu_body .floatingmenu').hasClass("active")){
				bind_unbindtouchmove()
				$(document).scrollTop(scroll_now_val)
				console.log(scroll_now_val)
				$('.floating_menu_body li').removeClass('active');
				$('.floating_bg').fadeOut()
				$(".floatingmenu_1").animate({ 
					bottom : (floating_m_h+10)-(floating_m_h+10) 
				},100).promise().then(function() {
					return $(".floatingmenu_2").animate({ 
						bottom : ((floating_m_h*2)+20)-((floating_m_h*2)+20) 
					},160).promise();
				}).then(function() {
					return $(".floatingmenu_3").animate({
						bottom : ((floating_m_h*3)+30)-((floating_m_h*3)+30) 
					},180).promise();
				}).then(function() {
					$('.floating_menu_txtbody').fadeOut();
				});
				return false;
			} else {
				$('.floating_menu_body .floatingmenu').addClass('active');
				scroll_now_val = $(document).scrollTop();
				$(document).scrollTop(0)
				console.log(scroll_now_val)
				$(".floatingmenu_1").animate({ 
					bottom : floating_m_h+10 
				},100).promise().then(function() {
					return $(".floatingmenu_2").animate({ 
						bottom : (floating_m_h*2)+20 
					},160).promise();
				}).then(function() {
					return $(".floatingmenu_3").animate({
						bottom : (floating_m_h*3)+30
					},180).promise();
				}).then(function() {
					$('.floating_menu_txtbody').fadeIn();
				});
				$('.floating_bg').fadeIn()
				return false;
			}
		} else {
			if ($('.floating_menu_body .floatingmenu').hasClass("active")){
				bind_unbindtouchmove()
				$(document).scrollTop(scroll_now_val)
				console.log(scroll_now_val)
				$('.floating_menu_body li').removeClass('active');
				$('.floating_bg').fadeOut()
				$(".floatingmenu_1").animate({ 
					bottom : (floating_m_h+10)-(floating_m_h+10) 
				},100).promise().then(function() {
					return $(".floatingmenu_3").animate({ 
						bottom : ((floating_m_h*2)+20)-((floating_m_h*2)+20) 
					},160).promise();
				}).then(function() {
					$('.floating_menu_txtbody').fadeOut();
				});
				return false;
			} else {
				$('.floating_menu_body .floatingmenu').addClass('active');
				scroll_now_val = $(document).scrollTop();
				$(document).scrollTop(0)
				console.log(scroll_now_val)
				$(".floatingmenu_1").animate({ 
					bottom : floating_m_h+10 
				},100).promise().then(function() {
					return $(".floatingmenu_3").animate({ 
						bottom : (floating_m_h*2)+20 
					},160).promise();
				}).then(function() {
					$('.floating_menu_txtbody').fadeIn();
				});
				$('.floating_bg').fadeIn()
				return false;
			}
		}


	});

	// $('.floatingmenu_3').on("click", function() {
	// 	if ($('.floatingmenu_3').hasClass("on")){
	// 		$('.floatingmenu_3').removeClass('on');
	// 		return false;
	// 	} else {
	// 		$('.floatingmenu_3').addClass('on');
	// 		return false;
	// 	}
	// });

	$('.floating_bg').on("click", function() {
		bind_unbindtouchmove()
		$(document).scrollTop(scroll_now_val)
				console.log(scroll_now_val)
		var floating_m_h = $('.floating_menu_body li').height();
		$('.floating_menu_body li').removeClass('active');
		$('.floating_bg').fadeOut()
		$(".floatingmenu_1").animate({ 
			bottom : (floating_m_h+10)-(floating_m_h+10) 
		},100).promise().then(function() {
			return $(".floatingmenu_2").animate({ 
				bottom : ((floating_m_h*2)+20)-((floating_m_h*2)+20) 
			},160).promise();
		}).then(function() {
			return $(".floatingmenu_3").animate({
				bottom : ((floating_m_h*3)+30)-((floating_m_h*3)+30) 
			},180).promise();
		}).then(function() {
			$('.floating_menu_txtbody').fadeOut();
		});
	});
}
//팝업창 화면 터치 락
// bind_preventtouchmove()
// bind_unbindtouchmove()
function floating_menu_open(){
	var floating_m_h = $('.floating_menu_body li').height();
	$('.floating_menu_body .floatingmenu').addClass('active');
	$('.floating_bg').fadeIn()
	$(".floatingmenu_1").animate({ 
		bottom : floating_m_h+10 
	},100).promise().then(function() {
		return $(".floatingmenu_2").animate({ 
			bottom : (floating_m_h*2)+20 
		},160).promise();
	}).then(function() {
		return $(".floatingmenu_3").animate({
			bottom : (floating_m_h*3)+30
		},180).promise();
	}).then(function() {
		$('.floating_menu_txtbody').fadeIn();
	});
}

function floating_menu_close(){
	var floating_m_h = $('.floating_menu_body li').height();
	$('.floating_menu_body li').removeClass('active');
	$('.floating_bg').fadeOut()
	$(".floatingmenu_1").animate({ 
		bottom : (floating_m_h+10)-(floating_m_h+10) 
	},100).promise().then(function() {
		return $(".floatingmenu_2").animate({ 
			bottom : ((floating_m_h*2)+20)-((floating_m_h*2)+20) 
		},160).promise();
	}).then(function() {
		return $(".floatingmenu_3").animate({
			bottom : ((floating_m_h*3)+30)-((floating_m_h*3)+30) 
		},180).promise();
	}).then(function() {
		$('.floating_menu_txtbody').fadeOut();
	});
}

/* 알림 */
function allim_edit_active(){
	$(".allim_edit").unbind('click').bind('click', function() {
		if ($('div.allim_list').length > 0 || $(this).hasClass("min_allim_infor")) {
			if ($(this).hasClass("min_allim_infor")){
				$(this).removeClass("min_allim_infor");
				min_my_allimfalse();
			} else {
				$(this).addClass("min_allim_infor");
				min_my_allimtrue();
			}
		}
	});
}
function min_my_allimtrue(){
	$(".allim_edit").html('완료').addClass("min_allim_infor");
	$('.allim_list').addClass('remove');
}
function min_my_allimfalse(){
	$(".allim_edit").html('편집').removeClass("min_allim_infor");
	$('.allim_list').removeClass('remove');
}

function timeline_dataload2(){
	$(window).scroll(function() {
		if ($(this).scrollTop() > $('#header').height()) {
			
		} else {
			$('#timeline').prepend('<li class="sharing"><dl class="timeline_description"><dt><span class="box">셰어링</span><span class="day">2017-03-28</span></dt><dd class="txt_infor">주방에서 사용할 안쓰는 믹서기 파실 분 없나요?믹서기가 없어서 굶고 있어요</dd><dd class="btn_infor"><span>상품등록하기</span><span class="nikname">nikname</span></dd></dl></li>');
		}
	});
}

/* 우리단지에서 찾아요 */
function registration_change(){// 등록하기
	$wh_height = window.innerHeight;
	var header_h = 66;
	var myop_heght = header_h + 70 + 20;

	$('.addbtn').unbind('cf').bind('click',function(){
		$( '#slideup_type_myoption #hidden_apply_box').css("height", $wh_height );
		$('.slideup_type_contianer').css('height',$wh_height - myop_heght);
		slideup_registration_type ();
		return false;
	})
	$('#myoption_type_close').unbind('click').bind('click',function() {
		$('#wrap').removeAttr('style');
		$('#slideup_type_myoption').removeAttr('style');
		slideup_registration_hide();
	});
	$( window ).resize(function() {
		registration_window_change();
	});
}

function registration_window_change(){// 등록하기 리사이즈 관련
	$wh_height = window.innerHeight;
	var header_h = 66;
	var myop_heght = header_h + 70 + 20;

	$( '#slideup_type_myoption #hidden_apply_box').css("height", $wh_height );
	$('.slideup_type_contianer').css('height',$wh_height - myop_heght);

	return false;
}

function slideup_registration_type (){//등록하기 open
	$( '#slideup_type_myoption #hidden_apply_box' ).slideDown(300, function() {
		$('#wrap').css('display','none')

		if( $('#wrap').width() < 640){
			$(this).parent().css('position','static')
		} else{

		}
		
	});
}
function slideup_registration_hide(){//등록하기 close
	$('#slideup_type_myoption #hidden_apply_box').slideUp();
	return false; 
}

function cart_nolist2(){// 리스트 없을때 //우리단지에서 찾아요 겸용
	$('.timeline_row').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_document.png'></dt><dd>아직 등록된 요청글이 없습니다.<br/>필요하신 물건이 있다면<br/> “우리단지에서 찾아요”에 올려주세요! </dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height();
	$(".contianer").addClass('nolist_timeline');

	if($(".contianer").hasClass("nolist_timeline")) {
		$('.contianer').removeAttr('style');
	} else {
		
	}
	$('.custom_btl_t').css('height', win_iH-hf_height);
}

/* 로딩바 관련 */
function loadingbar_syn(){//bg 없음
	$('#loading_bar').show();
}
function loadingbar_asyn(){//bg 있음
	$('#loading_bar').addClass('asyn');
}
function loadingbar_syn_end(){//bg 없음
	$('#loading_bar').hide();
}
function loadingbar_asyn_end(){//bg 있음
	$('#loading_bar').hide().removeClass('asyn');
}

//isbn 정보가 없을 경우
function isbn_nocode(){
	$('#header .s_header .title i').html('도서 정보');
	$('.contianer, .sub_cont_box, .isbn_footer').hide()
	var cont_cont = $('.isbn_footer.nocode').height()+$('#header').height()+41
	var cont_minus_cont = window.innerHeight - cont_cont;
	$('.isbn_footer.nocode').show();
	$('.nocode').before("<div class='list_none_conf'><div class='list_none_conb'><li class='note_icon'></li><li class='txt1'>입력하신 ISBN 코드를 찾을 수 없습니다.<br/><span>등록하신 ISBN과 매칭 되는 도서정보를 찾을 수 없습니다.</span></li><li class='txt2'>출판 과정에서 ISBN이 잘 못 인쇄되거나 정식 출판된 도서가 아닐 경우 ISBN이 검색되지 않을 수 있습니다.</li></div></div>");
	$('.list_none_conf').css('height',cont_minus_cont);
}
/* 리스트 없을때 */
function itemadd_nolist(){//상품관리
	$('.item_list_box').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_document.png'></dt><dd>등록된 상품이 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('#footer').height();
	$('.custom_btl_t').css('height', win_iH - hf_height);
}
function seach_nolist(){//검색
	$('.scroll_listbox ul').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/noitem_seach.png'></dt><dd>최근 검색어가 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('#footer').height()+40;
	$('.custom_btl_t').css('height', win_iH - hf_height);
}
function mydeal_nolist(){//나의거래현황
	$('.description_content').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_document.png'></dt><dd>아직 거래 내역이 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('#footer').height() + $('.mydeal_status_tabs').height();
	$('.custom_btl_t').css('height', win_iH - hf_height);
}
function myrating_nolist(){//나의 평점내역
	$('#mydeal_rating').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_point.png'></dt><dd>나의 평점 내역이 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('.my_infor_s').height() + $('.mydeal_status_tabs').height() + 30;
	$('.custom_btl_t').css('height', win_iH - hf_height);
}
function idealrating_nolist(){//내가 남긴 평점내역
	$('#ideal_rating').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_point.png'></dt><dd>내가 남긴 평점 내역이 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('.my_infor_s').height() + $('.mydeal_status_tabs').height() + 30;
	$('.custom_btl_t').css('height', win_iH - hf_height);
}
function contactus_nolist(){//1:1문의하기
	$('.point_d_listbox').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_document.png'></dt><dd>문의하신 내역이 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height();
	$('.custom_btl_t').css('height', win_iH - hf_height);
}
function event_nolist(){//이벤트 리스트 
	$('.item_list_box').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/no_event_listicon.png'></dt><dd>진행중인 이벤트가 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('#footer').height() + $('.mydeal_status_tabs').height();
	$('.custom_btl_t').css('height', win_iH - hf_height);
}
function point_nolist(){//포인트 등록
	$('.point_d_listbox').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_point.png'></dt><dd>최근 적립/사용내역이 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('.my_infor').height() + $('.provide_information').height() + 50;
	$('.custom_btl_t').css('height', win_iH - hf_height);
}
function allim_nolist(){//알림
	$('.allim_list_area').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_point.png'></dt><dd>최근 알림내역이 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('.seachbox').height() + $('#footer').height() + 20;
	$('.custom_btl_t').css('height', win_iH - hf_height);
}
function my_menu_nolist(){//마이메뉴
	//$('.allim_list_area').append( "<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_point.png'></dt><dd>최근 적립/사용내역이 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('.my_sevics_tabs').height();
	$('.item_list_area').css('height', window.innerHeight - $('#header').height() + $('.my_sevics_tabs').height());
}
function proceeds_nolist(){//수익금 table 까지 숨김
	$('.point_tbl_body').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_point.png'></dt><dd>지급된 수익금이 없습니다.<br/>일반적으로 셰어링의 경우에는 회수완료 후,<br/> 판매상품은 구매확정 후<br/> 다음주 목요일에<br/> 쏘시오 이용 수수료를 제외하고 지급 됩니다. </dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('.point_title').height() + 21;
	$('.custom_btl_t').css('height', win_iH - hf_height);
}

function cart_nolist(){//카트 
	$('.pri_item_listinfor').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_document.png'></dt><dd>카트에 담긴 상품이 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('.point_title').height() + 21;
	$('.custom_btl_t').css('height', 300);
}
function detail_ct_nolist(){//카테고리 내 신규상품
	$('.detail_ct_banner').append("<div class='custom_btl_td'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/my_gift_noitem.png'></dt><dd>새롭게 등록된 상품이 아직 없어요!</dd></dl></div></div></div></div>" );
	$('.custom_btl_t').css('height', 147);
}
function addcontact_nolist(){//이용문의 
	$('.service_review .star_rating_f').prepend("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_document.png'></dt><dd>아직 새롭게 등록된 이용문의가 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('.service_review .title').height() + $('.multi_addtxt_box').height() + 71;

	if($(".description_content").hasClass("sharing_service_review")) {
		$('.service_review .star_rating_f').addClass('nolist');
		$('.custom_btl_t').css('height', 300);
	} else {
		$('.custom_btl_t').css('height', win_iH - hf_height);
	}
}
function addreview_nolist(prod_type_cd){//이용후기 
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height() + $('.sharing_review .title').height() + $('.sharing_sub_ti').height() + 71;
	$('.sharing_review .star_rating_f').prepend("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_document.png'></dt><dd>아직 새롭게 등록된 후기가 없어요!<br/>" + prod_type_cd + " 해보시고 새로운 후기를 등록해주세요!</dd></dl></div></div></div></div>" );
	
	if($(".description_content").hasClass("sharing_service_review")) {
		$('.custom_btl_t').css('height', 300);
	} else {
		$('.custom_btl_t').css('height', win_iH - hf_height);
	}
}
function opnotice_nolist(){//공지사항  
	$('.provide_information').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_document.png'></dt><dd>새로운 공지사항이 없습니다.</dd></dl></div></div></div></div>" );
	var win_iH = window.innerHeight;
	var hf_height = $('#header').height();
	$('.provide_information').css('margin-bottom','0');
	$('.custom_btl_t').css('height', win_iH - hf_height);
}

function smain_nolist(){//메인 등록상품  
	$('.item_list_box').append("<div class='custom_btl_t'><div class='custom_btl_r'><div class='custom_btl_s'><div class='sing_up_fbox'><dl class='sing_up_txtbox'><dt><img src='/w/img/common/cont_document.png'></dt><dd>현재 등록상품이 없습니다.</dd></dl></div></div></div></div>" );
	$('.custom_btl_t').css({'height': '200px','background':'none'});
}

//상품 카테고리 선택 초기화
function categoryreset(){
	lvl_1_ctry_nm = "";
	lvl_2_ctry_nm = "";
	lvl_3_ctry_nm = "";
	$("#select_ctry_nm").text("");
	$("#btnCategoryConfirm").removeClass("active").removeClass("ok").addClass("no_active");
}

/**/
function easypayment_UI(){
  var html = '';
  html += '<div id="dynamic_wrap" style="display:none">';
  html += '   <div id="header" class="de_no"><div class="s_header">';
  html += '      <li class="title">';
  html += '         <span><img src="/w/img/common/s_top_close.jpg"></span>';
  html += '         <i>쏘시오 간편결제</i></li>';
  html += '      </li>';
  html += '   </div>';
  html += '</div>';
  html += '<div id="cont_startView" class="dynamic_contianer" style="display:none"></div>';//처음 시작 view
  html += '<div id="cont_realNameAuthView" class="dynamic_contianer" style="display:none"></div>';//실명인증 View

  html += '<div id="cont_AuthView" class="dynamic_contianer">';//3depth start
  html += '   <div class="AuthView_top_nav"><ui>';
  html += '      <li class="termAgree_icon">이용</li>';
  html += '      <li class="card_icon">카드</li>';
  html += '      <li class="secureKeypad_icon">비밀</li>';
  html += '   </ui></div>';
  html += '   <div id="cont_termAgreeView" class="cont_subView"></div>';//약관동의 view
  html += '   <div id="cont_cardRegist" class="cont_subView"></div>';//카드 정보 등록 View
  html += '   <div id="cont_secureKeypadView" class="cont_subView"></div>';//결제 비밀번호 등록 View
  html += '</div>';//3depth end

  html += '<div id="cont_easypaymentsuccessView" class="dynamic_contianer" style="display:none"></div>';//간편결제 등록 완료 View
  html += '</div>';
  $('body').prepend(html);

  $('#wrap').hide();
  $('#dynamic_wrap').show();
  $('.dynamic_contianer').css('margin-top',$('#dynamic_wrap #header').height()+20)
//      dynamicUI.startView();
}

function easypayment_UI_end(){
  //현재 생성한 UI는 삭제하지 않고 숨김처리로 해놓음
  $('#wrap').show();
  $('#dynamic_wrap').hide();
  $('.dynamic_contianer').removeAttr('style');
}