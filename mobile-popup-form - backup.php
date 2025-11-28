<div class="mb-form-container">
	<div class="row">
				
		<div class="form-close-btn" onclick="hideForm()"><i class="bi bi-x" id="form-btn-close"></i></div>
						
			<form action="https://ezytronic.com.my/recaptcha.php" method="post"">
				<div class="row inner-form-row">
					<div class="col">
						<h2 class="txt-center">Send us a message.</h2>
						<input id="name" name="name" type="text" placeholder="Name*" class="form-input" required>
					</div>
				 </div>
					 
				<div class="row inner-form-row">
					<div class="col">
						<input id="email" name="email" type="email" placeholder="Email*" class="form-input" required>
					</div>
					<div class="col">
						<input id="contact-num" name="contactNum" type="tel" pattern="^[0-9]+" placeholder="Contact Number*" class="form-input" required>
					</div>
				</div>

				<div class="row inner-form-row">
					<div class="col">
						<select id="reasons" onchange="enableField(this)">
							<option value="" disabled selected>Reason contacting us</option>
							<option value="1">Send in inquiries</option>
							<option value="2">Job Application</option>
						</select>
					</div>
				</div>

				<div class="row inner-form-row d-none" id="inquiry-field">
					<div class="col">
						<textarea rows="3" cols="50" class="form-input" id="body" name="body" placeholder="Your inquiry here..."></textarea>
						<input type="hidden" name="token" id="token" /> 
						<input type="hidden" name="action" id="action" /> 
					</div>
				</div>

				<div class="row inner-form-row d-none" id="job-selection">
					<div class="col">
						<select id="reasons" name="reasons" onchange="enableField(this)">
							<option value="" disabled selected>Please select a job</option>
							<option value="Inside Sales">Inside Sales</option>
							<option value="Procurement Assistant">Procurement Assistant</option>
							<option value="Sales Executive">Sales Executive</option>
							<option value="IT Technical Support">IT Technical Support</option>
							<option value="IT Technician">IT Technician</option>
						</select>
						<br><br>
						<label for="myResume">Please upload your resume:</label>
  						<input type="file" id="myResume" name="myResume"><br><br>
					</div>
				</div>

				<div class="row inner-form-row">
					<div class="col">
						<input type="submit" name="submit" value="SEND" class="form-btn hover-area">
					</div>
				</div>
			</form>
		  <script src="https://www.google.com/recaptcha/api.js?render=6LehcCQeAAAAAP3utso2sOGBgOk4J9vx6kkhOyWi"></script>
		  <script  src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

		  <script type="text/javascript">
			function enableField(answer){
				console.log(answer.value);
				if(answer.value == 1){
					document.getElementById('inquiry-field').classList.remove('d-none');
					document.getElementById('job-selection').classList.add('d-none');
				}
				else if(answer.value == 2){
					document.getElementById('inquiry-field').classList.add('d-none');
					document.getElementById('job-selection').classList.remove('d-none');
				}
			}
		  </script>	

		  <script type="text/javascript">
			 $(document).ready(function(){
				setInterval(function(){
				grecaptcha.ready(function() {
					grecaptcha.execute('6LehcCQeAAAAAP3utso2sOGBgOk4J9vx6kkhOyWi', {action: 'application_form'}).then(function(token) {
						$('#token').val(token);
						$('#action').val('application_form');
					});
				});
				}, 3000);
			 });
			 
		  </script>	
	</div>
</div>
