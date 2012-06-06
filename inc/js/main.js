/***********************************
This JS file is created for ASME. 
Begain editing from 24th May 2012
Edited by Kangning
Contact:
---------------------
Email: liukangning@gmail.cm, liu.kangning@163.com
QQ: 410532598
************************************/

//filter blank
function cTrim(sInputString,iType)
{
	var sTmpStr = ' '
	var i = -1

	if(iType == 0 || iType == 1)
	{
	 while(sTmpStr == ' ')
	  {
	   ++i
	   sTmpStr = sInputString.substr(i,1)
	  }
	 sInputString = sInputString.substring(i)
	}

	if(iType == 0 || iType == 2)
	{
	  sTmpStr = ' '
	  i = sInputString.length
	  while(sTmpStr == ' ')
	   {
	    --i
	    sTmpStr = sInputString.substr(i,1)
	   }
	  sInputString = sInputString.substring(0,i+1)
	}
	 return sInputString
}

//if(cTrim(document.getElementById('blank').value,0) == ''){alert('Haha!');}


function checkemail(){
	var str=cTrim(document.getElementById('ifc_submitted_email').value,0);
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (filter.test(str))
		testresults=true
	else{
		//alert(str);
		testresults=false
	}

	return (testresults)
}



//verify dd/mm/yyyy or dd.mm.yyyy or dd-mm-yyyy
function check(num){ 
	var a=/^(?:(?:(?:0?[1-9]|1[0-9]|2[0-8])([-/.]?)(?:0?[1-9]|1[0-2])|(?:29|30)([-/.]?)(?:0?[13-9]|1[0-2])|31([-/.]?)(?:0?[13578]|1[02]))([-/.]?)(?!0000)[0-9]{4}|29([-/.]?)0?2([-/.]?)(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00))$/;
	if (!a.test(num)){ 
		alert("no!")
	} 
	else 
		alert("yes!")
}

//check("01/01/2222");

//print function by Kangning on 2011-6-9
function print_dom_in(oper){
	if (oper < 10){
		sprnstr="<!--startprint"+oper+"-->";//set start position
		eprnstr="<!--endprint"+oper+"-->";//set end position
		
		bdhtml=window.document.body.innerHTML;//get all html for the page
		
		prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+18); //get html in front of start
		prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//get html behind of end
		window.document.body.innerHTML=prnhtml;
		window.print();
		window.location.reload();
		//window.document.body.innerHTML=bdhtml;
	
	} else{
		window.print();
	}
}

var width = $(window).width();
var height = $(window).height();
function amend_footer(){
	if(height < $('body').height()+$('#footer').height()){//545
		//alert(height+'$$$'+$('body').height());
		$('#footer').addClass('relative_footer');	
	}else{
		//alert(height+'%%%'+$('body').height());
		$('#footer').removeClass('relative_footer');	
	}
}

function limitChars(id, count)
{
	var obj = document.getElementById(id);
	
	if (obj.value.length > count)
	{
		obj.value = obj.value.substr(0, count);
	}
}

function pop_confirm(msg){
	if(confirm(msg)){
		return true;	
	}else{
		return false;	
	}
}

var current = 0;
function slide(target){
	$('.news_ul li').hide();
	$('.news_ul li').eq(target).show();
	$('#current_news').text(target+1);
}

//for rotate square banner
var rotate_cur = 1;
function rotate(){
	var time = 1 * 1000;
	var rotate_all = $('.ad_td > div').length-1;
	
	$('.ad_td > div')
	.fadeOut()
	.eq(rotate_cur).fadeIn();
	
	rotate_cur ++;
	if(rotate_cur > rotate_all){
		rotate_cur = 0;	
	}
	
	/*
	$('.ad_td > div').each(function(){
		if($(this).css('display') == 'none'){
			$(this).fadeIn(time);
		}else{
			$(this).fadeOut(time);
		}
	});
	*/
}

//for rotate main banner
var current_banner = 1;
var whole_banner   = 5;
function rotate_banner(){
	for(var i = 1; i <= whole_banner; i ++){
		$('body').removeClass('banner_'+i);
	}
	$('body').addClass('banner_'+current_banner);
	current_banner ++;
	if(current_banner > whole_banner){
		current_banner = 1;
	}
}


$(function() {
    if (window.PIE) {
        $('*').each(function() {
            PIE.attach(this);
        });
    }

	width = $(window).width();
	height = $(window).height();
	//amend_footer();
	$(window).resize(function() {
		width = $(this).width();
		height = $(this).height();
		//amend_footer();
	});
	
	//for News click
	var all = $('.news_ul li').length - 1;
	$('.prev').click(function(){
		current --;
		if(current < 0){
			current = all;
		}
		slide(current);
	});
	$('.next').click(function(){
		current ++;
		if(current > all){
			current = 0;
		}
		slide(current);
	});

	//for rotate square banner
	var rotate_var = setInterval('rotate()', 8000);
	
	//for the second nav hvoer
	/*
	$('#fir_lvl_2 .sec_lvl > li:first-child').hover(function(){	
		$('#fir_lvl_2 .sec_lvl').height($('#fir_lvl_2 .thr_lvl').height());
	},function(){
		$('#fir_lvl_2 .sec_lvl').height('auto');
	});
	*/
	var thr_li_h = 22; // length of 3rd level li
	$('.sec_lvl').each(function(n){
		var father_h = $(this).height();
		var child_h  = 0;

		$(this).attr('id', 'h_sec_'+n);
		var sec_lvl = $('#h_sec_'+n);
		var thr_lvl = $('#h_sec_'+n+' .thr_lvl');

		thr_lvl.each(function(){
			var thr_h = $(this).children('li').length * thr_li_h;
			if(thr_h > child_h){
				child_h = thr_h;
			}
		});
		if(child_h != 0){
			thr_lvl.height(child_h);
		}
		if(child_h > father_h){
			$('#h_sec_'+n+' > li').hover(function(){
				if($(this).children('a').hasClass('has_child')){
					sec_lvl.height(child_h);	
				}
			},function(){
				sec_lvl.height('auto');	
			});
		}
	});

	//for rotate main banner
	var rotate_banner = setInterval('rotate_banner()', 8000);

	//for expandable banner
	var expandable = $('#expandable');
	$('#header_right_inner').hover(function(){
		expandable.stop().fadeIn();
	},function(){
		expandable.stop().fadeOut();
	});
	
});