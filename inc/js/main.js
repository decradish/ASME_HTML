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

$(function() {
    if (window.PIE) {
        $('*').each(function() {
            PIE.attach(this);
        });
    }
	
	width = $(window).width();
	height = $(window).height();
	amend_footer();
	$(window).resize(function() {
		width = $(this).width();
		height = $(this).height();
		amend_footer();
	});
	
	//for select functions
	$('.border_select')
	.focus(function(){
		if(!$(this).hasClass('disable')){
			var select_ul = $(this).next('ul.select_ul');
			select_ul.show();
		}
	})
	.blur(function(){
		var select_ul = $(this).next('ul.select_ul');
		select_ul.hide();
		if($('.selected').length > 0){
			$(this).val($('.selected').text());
		}
	});
	$('.select_ul li').hover(function(){
		$(this).addClass('selected');	
	},function(){
		$(this).removeClass('selected');
	});
	
	//for view all users in Question 8 table of "Review and Submit" page
	$('#look_end').click(function(){
		$('#look_end, .front').hide();
		$('#look_front, .end').show();	
	});
	$('#look_front').click(function(){
		$('#look_front, .end').hide();
		$('#look_end, .front').show();	
	});
});















