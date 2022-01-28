<template>
	<div class="contact" id="contact">
		<section>
			<div class="container">
				<div class="title">
					<h3>Contact Me</h3>
				</div>
				<div class="row">
					<div class="contactForm">
						<form @submit.prevent="sendEmail">
							<div class="inputGroup inputGroup1">
							<input v-model="firstname" class="inputGroup__textfield" type="text" name="" value="" placeholder="Firstname*" required data-value-missing="Please fill out this field.">
							</div>

							<div class="inputGroup inputGroup2">
							<input v-model="Lastname" class="inputGroup__textfield" type="text" name="" value="" placeholder="Lastname*" required data-value-missing="Please fill out this field.">
							</div>
							<div class="inputGroup inputGroup5">
          						<input v-model="email" class="inputGroup__textfield" type="text" name="" value="" placeholder="Email">
        					</div>
							<div class="inputGroup inputGroup6">
							<textarea v-model="message" class="inputGroup__textfield" name="name" rows="8" placeholder="Message?*" required data-value-missing="Please fill out this field."></textarea>
							</div>

							<div class="inputGroup inputGroup7">
							<button type="submit" name="button">Send</button>
							</div>
						</form>
					</div> 

				</div>
			</div>
		</section>
	</div>
</template>
<script>

export default {
  name: 'Contact',
  components: {

  },
  methods: {
	  sendEmail(e) {
      try {
        emailjs.sendForm('service_tcmtfp8', 'fa8a9b1d978c01fbf1bc3c0d02315745', e.target,
        'user_MFNFMQbfDfV7JrkkSXYNV', {
          firstname: this.firstname,
		  lastname: this.lastname,
          email: this.email,
          message: this.message
        });

      } 
	  catch(error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>
<style scoped>
section{
  background-color: #F7F7F7;
}
 .contactForm {
    width: calc(100% - 20px);
    max-width: 700px;
    margin: 0 auto;
}

/* STYLES FOR FORM */
form {
    width: 100%;
    display: grid;
    grid-gap: 30px;
    padding-top: 20px;
}

.inputGroup {
    width: 100%;
    position: relative;
}

  .inputGroup1 {
      grid-column: 1;
      grid-row: 1;
  }
  .inputGroup2 {
      grid-column: 2;
      grid-row: 1;
  }
  .inputGroup3 {
      grid-column: 1;
      grid-row: 2;
  }
  .inputGroup4 {
      grid-column: 2;
      grid-row: 2;
  }
  .inputGroup5 {
      grid-column: 1 / span 2;
      grid-row: 3;
  }
  .inputGroup6 {
      grid-column: 1 / span 2;
      grid-row: 4;
  }
  .inputGroup7 {
      grid-column: 2;
      grid-row: 5;
      text-align: right;
  }


.inputGroup__textfield {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    font-size: 13px;
    padding: 20px;
    border: 1px solid #FFF;
    outline: 0;
    border-radius: 0;
    transition: border 0.3s ease-in-out;

}
  .inputGroup__textfield:focus, .inputGroup__textfield:active {
      border: 1px solid #D9D9D9;
  }


button {
    padding: 20px;
    width: 50%;
    border: 0;
    background: #000;
    cursor: pointer;
    color: #FFF;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.1);
}

  button:hover {
      box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.2);
  }


/* STYLES FOR VALIDATION WARNING */
.hf-warning {
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    transform: translate(-15%, -50%) !important;
    background: orangered !important;
    display: inline-block !important;
    padding: 7px 14px !important;
    color: #FFFFFF !important;
    font-size: 11px !important;
    font-family: sans-serif;
    box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.1) !important;
    border: 0 !important;
    border-radius: 2px !important;
}

  .hf-warning:after {
      content: "";
      width: 10px;
      height: 10px;
      background: orangered;
      position: absolute;
      z-index: 1;
      bottom: -5px;
      right: 15px;
      transform: rotate(45deg);
  }


@media screen and (max-width: 480px) {
    form {
      display: flex !important;
      flex-wrap: wrap;
    }

    form > div {
      margin-bottom: 30px;
    }
}

</style>