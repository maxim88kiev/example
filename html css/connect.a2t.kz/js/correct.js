$(document).ready(function() {
	var a = tpj(".top_sec")
	tpj(window).scroll(function() {
		if(tpj(window).scrollTop()==0 ) 
		{
			a.slideUp()
		}
		else 
		{
			a.slideDown()
		}
	})
})
