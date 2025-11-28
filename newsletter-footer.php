<div class="footer container-fluid d-flex justify-content-center align-items-center">
		<div class="footer-btn" onclick="hideShow()"><i class="bi bi-chevron-down" id="footer-arrow"></i></div>
		<div class="row footer-form">
			
		<form id="newsletter-form" action="https://ezytronic.com.my/mailerlite/subscribe_mail.php" method="post" onsubmit="onSubmit(event)">
			<div class="col-lg-5 col-sm-12 col-12">
				<p class="footer-desc">Sign up to receive latest promotion and product updates! </p>
			</div>
			<div class="flex-box">
				<div class="col-lg-4 col-sm-8 col-7">
					<input type="email" class="footer-input" name="email" id="news-email" placeholder="Email Address..." required>
				</div>
				<div class="col-lg-3 col-sm-4 col-5">
					<input type="submit" name="newsBtn" class="footer-sbt-btn" value="GET OUR NEWSLETTER">
				</div>
			</div>
			<!-- Add hidden input for reCAPTCHA token -->
			<input type="hidden" id="recaptcha-token" name="recaptcha-token">
		</form>

			
			

		</div>
	</div>
	
	
	
	