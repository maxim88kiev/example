

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>mestro</title>

<link href="css/mestro.css" rel="stylesheet" type="text/css" />

<link href="fonts/stylesheet.css" rel="stylesheet" type="text/css" />

<link rel="stylesheet" type="text/css" href="pro_drop_1/pro_drop_1.css" />



<script src="pro_drop_1/stuHover.js" type="text/javascript"></script>

 

 <script >

function contact_submits()

{

	document.getElementById("div_success").style.display = "none";

	document.getElementById("div_success").innerHTML = "";





	document.getElementById("error").style.display = "none";

	document.getElementById("error").innerHTML = "";



	var name 				= document.getElementById("name");

	var email 				= document.getElementById("email");

	var last_name 				= document.getElementById("last_name");

	var phone				= document.getElementById("phone");	

	var message				= document.getElementById("message");			



	var errors = "";

	

	if(name.value=="")

	{

		errors+= 'Please provide your name.<br />';

	}

	else if(last_name.value=="")

	{

		errors+= 'Please provide your last name.<br />';

	}	

	else if(email.value=="")

	{

		errors+= 'Please provide an email.<br />';

	}	

	else if(checkcontact(email.value)==false) 

	{

		errors+= 'Please provide a valid  email.<br />';

	}

	else if(phone.value == "")

	{

		errors+= 'Please provide a phone no.<br />';

	}

	else if(isNaN(phone.value))

	{

		errors+= 'Please provide valid phone no.<br />';

	}

	else if(message.value=="")

	{

		errors+= 'Please provide a message.<br />';

	}



	if(errors)

	{	

		document.getElementById("error").style.display = "block";

		document.getElementById("error").innerHTML = errors;

	} 

	else 

	{	

		document.form.submit();

	}

}

function checkcontact(input)

{

	var pattern1=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

	if(pattern1.test(input))

	{

		return true;

	}

	else

	{

		return false;

	}

}

</script>

      

</head>

<body>



<div id="wrap">

	

	<!-- Top Section -->

	<div class="top_sec">

    	<div class="container">

        	<ul><li class="number">+0123 456 7890</li></ul>

            <div class="social">

            	<a href="#." class="fb"></a>

                <a href="#." class="tw"></a>

                <a href="#." class="flick"></a>

                <a href="#." class="skype"></a>

                <a href="#." class="db"></a>

            </div>

        </div>

    </div>

    <!-- Top Section End -->

    

    <!-- Header -->

	<div id="header">

    	<div class="container">

        	<img class="logo" src="images/logo.png" alt="" />

            

            <!-- Navigation -->

            <div class="nav">

            	<ul id="nav">

                	<li class="divider"><a href="index.html">Home</a></li>

                    <li class="divider"><a href="about.html">About Us</a></li>

                    <li class="top divider"><a href="#." id="products" class="top_link">Features</a>

			<ul class="sub">

			

            <li><a href="#." class="fly">Portfolio</a>

					<ul>

						<li><a href="portfolio_one.html">Portfolio One</a></li>

						<li><a href="portfolio_two.html">Portfolio Two</a></li>

						<li><a href="portfolio_three.html" class="last">Portfolio Three</a></li>

					</ul>

			</li>

			

            <li class="mid"><a href="#." class="fly">Pages</a>

					<ul>

						<li><a href="index.html">Home</a></li>

						<li><a href="about.html">About Us</a></li>

						<li><a href="contact.html">Contact</a></li>

						<li><a href="#nogo11" class="fly">Gallery</a>

							<ul>

								<li><a href="portfolio_one.html">Gallery One</a></li>

								<li><a href="portfolio_two.html">Gallery Two</a></li>

								<li><a href="portfolio_three.html" class="last">Gallery Three</a></li>

							</ul>

						</li>

						<li><a href="#.">Features</a></li>

						<li><a href="#." class="fly last">Blog Page</a>

							<ul>

								<li><a href="blog.html">Blog</a></li>

								<li><a href="blog_detail.html" class="last">Blog Detail</a></li>

							</ul>

						</li>

					</ul>

			</li>

			<li><a href="service.html">Services</a></li>

            <li><a href="typography.html">Typography</a></li>

			<li><a href="faq.html">Faq's</a></li>

            <li><a href="table.html">Table Plan</a></li>

            <li><a href="error.html">Error</a></li>

			

			</ul>

            </li>

            

            <li class="top divider"><a href="#nogo2" id="products" class="top_link">Portfolio</a>

                <ul class="sub">

                    <li><a href="portfolio_one.html">Portfolio One</a></li>

                    <li><a href="portfolio_two.html">Portfolio Two</a></li>

                    <li><a href="portfolio_three.html">Portfolio Three</a></li>

                </ul>

            </li>

                            

            <li class="top divider"><a href="#nogo2" id="products" class="top_link">Blog</a>

                <ul class="sub">

                    <li><a href="blog.html">Blog</a></li>

                    <li><a href="blog_detail.html">Blog Detail</a></li>

                </ul>

            </li>

                            

            <li class="divider"><a class="selected" href="contact.php">Contact us</a></li>

            </ul>

            </div>

            <!-- Navigation End -->

            

            

        </div>

    </div>

    <!-- Header End -->

   	

    <!-- Sub Banner -->

    <div id="sub_banner">

    	<div class="container">

        	<div class="text">

        	<h2>COntact Us</h2>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard   			dummy text ever since.</p>

            </div>

        </div>

    </div>

    <!-- Sub Banner End --> 

   

   <!-- Sub Content -->

	<div id="sub_content">

    	<div class="container">

        	<div class="contact">

    			<h2>Enquiry <span>Form</span></h2>	

                <div class="form">

                	<div id="div_success"></div>

					<?php

					if (isset($_REQUEST['email']))

					{

					$name = $_REQUEST['name'] ;

					$last_name = $_REQUEST['last_name'] ;

					$email = $_REQUEST['email'] ;

					$phone = $_REQUEST['phone'] ;

					$message = $_REQUEST['message'] ;

					$website = $_REQUEST['website'] ;

					

					$sub	 =	'Contact Us';

					

					$msg	 =	'Dear Admin,<br /><br />';	

					$msg	.=	'Name: '.$name."&nbsp;".$last_name.'<br /><br />';	

					$msg	.=	'Email: '.$email.'<br /><br />';			

					$msg	.=	'Phone: '.$phone.'<br /><br />';	

					$msg	.=	'Website: '.$website.'<br /><br />';		

					$msg	.=	'Message: '.$message.'<br /><br />';							

					$msg	.=	'<br /><br />Best Regards<br />'.$name."&nbsp;".$last_name;			

					

					

					

					$subject = $sub;



					$mailheader = "From: <".$email.">\r\n"; 

					$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

					$MESSAGE_BODY = $msg; 

					

					

					mail("alijani36@gmail.com", $subject, $MESSAGE_BODY, $mailheader);

					echo '<div class="error">Email has submited.</div>';

					}

					?>

   					<div id="error" class="error" style="display:none;"></div>

                    

                <form name="form" id="form"  method="post" action="" onsubmit="return false;" >    

                	<div class="field">

                    	<label>First Name:</label>

                        <input name="name" id="name" type="text" />

                    </div>

                    

                    <div class="field">

                    	<label>Last Name:</label>

                        <input name="last_name" id="last_name" type="text" />

                    </div>

                    

                    <div class="field">

                    	<label>Email Address:</label>

                        <input name="email" id="email" type="text" />

                    </div>

                    

                    <div class="field">

                    	<label>Phone No:</label>

                        <input name="phone" id="phone" type="text"/>

                    </div>

                    <div class="field">

                    	<label>Website:</label>

                        <input name="website" id="website" type="text" />

                    </div>

                    

                    <div class="field">

                    	<label>Message:</label>

                        <textarea name="message" id="message" cols="" rows=""></textarea>

                    </div>

                    <div class="clear"></div>

<!--                    <a class="submit" href="#." onclick="contact_submits();">submit</a>-->

					<input type="submit" name="Submit" id="Submit" onclick="contact_submits();"/>

                    </form>

                </div>



                <div class="social">

                	<ul>

                        <li class="fb"><a href="#." class="fb">fcebook/mestro</a></li>

                        <li class="tw"><a href="#." class="tw">twitter/mestro</a></li>

                        <li class="gp"><a href="#." class="gp">google+/mestro</a></li>

                        <li class="youtube"><a href="#." class="youtube">youtube/mestro</a></li>

                    </ul>

                </div>

                <div class="clear"></div>

                <img class="map" src="images/map.jpg" alt="" />

                

            </div>

        </div>

    </div>

    

	<div class="container">

    <img class="clients" src="images/client_img1.jpg" alt="" />

    </div>

	<div class="clear"></div>

    <!-- Sub Content End -->

    

     <!-- Footer -->

    <div id="footer">

    	<div class="twitter">

    		<div class="container">

            	<img class="tw_icon" src="images/twitter.jpg" alt="" />

                <div class="twitter_text">

                	<span><a class="green" href="#.">@Mestro</a> Lorem Ipsum is simply dummy text of the printing and typesetting  	 	 	 				industry. Lorem Ipsum has been the <a class="green" href="#.">http://evanto.markit #GraphicDesign</a></span>

                </div>

            </div>    

        </div>

        

        <div class="container">

        	<div class="footer_sec">

            	<h4>Links</h4>

                <div class="links">

                	<ul>

                    	<li><a href="#.">Home</a></li>

                        <li><a href="#.">About Us</a></li>

                        <li><a href="#.">Feature</a></li>

                        <li><a href="#.">Gellery</a></li>

                        <li><a href="#.">Blog</a></li>

                        <li><a href="#.">Contact Us</a></li>

                        <li><a href="#.">FAQ'S</a></li>

                        <li class="last"><a href="#.">Graphic Design</a></li>

                    </ul>

                </div>

            </div>

            

            <div class="footer_sec">

            	<h4>About Us</h4>

                <div class="about">

                	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. the  Lorem Ipsum has been the  	 	 	 				industry's standard dummy text ever since the you.</p>

                    <div class="tags">

                    	<ul>

                        	<li><a href="#.">Web Design</a></li>

                            <li><a href="#.">Graphic</a></li>

                            <li><a href="#.">Logo</a></li>

                            <li><a href="#.">Blog</a></li>

                            <li><a href="#.">Printing</a></li>

                            <li><a href="#.">Graphic Design</a></li>

                            <li><a href="#.">Gallery</a></li>

                        </ul>

                    </div>

                </div>

            </div>

            

            <div class="post_sec">

            	<h4>Recent Posts</h4>

                <div class="post">

                	<img class="post_img" src="images/post_img1.jpg" alt="" />

                    <p>Just a Single Clean Post</p>

                    <span>October 10, 2012</span>

                </div>

                <div class="clear"></div>

                

                <div class="post">

                	<img class="post_img" src="images/post_img2.jpg" alt="" />

                    <p>Just a Single Clean Post</p>

                    <span>October 10, 2012</span>

                </div>

                <div class="clear"></div>

                

                <div class="post">

                	<img class="post_img" src="images/post_img3.jpg" alt="" />

                    <p>Just a Single Clean Post</p>

                    <span>October 10, 2012</span>

                </div>

            </div>

            

            <div class="contact_form">

            	<h4>Recent Posts</h4>

                <div class="form">

                	<input name="" type="text" value="Name*" />

                    <input name="" type="text" value="Email Address*" />

                    <textarea name="" cols="" rows="">Message*</textarea>

                </div>

                <a class="submit" href="#.">submit</a>

            </div>

        </div>

        <div class="clear"></div>

        

        <div class="copyright">

        	<div class="container">

            	<p>Copyright 2012 @ MESTRO. All right reserved.</p>

                <ul>

                	<li><a href="#.">Privacy Policy</a></li>

                    <li class="last"><a href="#.">Term and Condition</a></li>

                </ul>

                

                <div class="social">

                    <a href="#." class="fb"></a>

                    <a href="#." class="tw"></a>

                    <a href="#." class="flick"></a>

                    <a href="#." class="skype"></a>

                    <a href="#." class="db"></a>

            	</div>

            

            </div>

        </div>

        <div class="clear"></div>

        

        <div class="container">

        	<img class="fotter_logo" src="images/footer_logo.jpg" alt="" />

            <span class="bot_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. the  Lorem Ipsum has been  	 		the industry's standard dummy text ever since the you. Lorem Ipsum is simply dummy text of the printing and typesetting  	 	 		industry. the  Lorem Ipsum has been the industry's standard dummy text ever since the you. </span>

        </div>

     <div class="clear"></div>   

    </div>

     <!-- Footer End -->	

    

</div>

</body>

</html>