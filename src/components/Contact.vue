<template>
  <div class="contact white-background view-height" id="contact">
    <section>
      <div class="container">
        <div class="title">
          <h3>Contact Me</h3>
        </div>
        <div class="row">
          <form>
            <div class="field name-box">
              <input type="text" id="name" placeholder="Who Are You?" />
              <label for="name">NAME</label>
              <span class="ss-icon">check</span>
            </div>

            <div class="field email-box">
              <input type="text" id="email" placeholder="name@email.com" />
              <label for="email">EMAIL</label>
              <span class="ss-icon">check</span>
            </div>

            <div class="field msg-box">
              <textarea id="msg" rows="4" placeholder="Your message goes here..." />
              <label for="msg">MESSAGE</label>
              <span class="ss-icon">check</span>
            </div>

            <input class="button" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Contact",
  components: {}
};
</script>
<style scoped>
form {
  width: 100%;
  margin: 0 auto;
}
form .field {
  width: 100%;
  position: relative;
  margin-bottom: 30px;
}
form .field label {
  position: absolute;
  top: 0;
  left: 0;
  background: #343434;
  color: white;
  width: 100%;
  padding: 12px 0;
  font-size: 1.25em;
  letter-spacing: 0.075em;
  -webkit-transition: all 333ms ease-in-out;
  -moz-transition: all 333ms ease-in-out;
  -o-transition: all 333ms ease-in-out;
  -ms-transition: all 333ms ease-in-out;
  transition: all 333ms ease-in-out;
}
form .field label + span {
  opacity: 0;
  color: white;
  display: block;
  position: absolute;
  top: 12px;
  left: 7%;
  font-size: 2.5em;
  text-shadow: 1px 2px 0 #106a9c;
  -webkit-transition: all 333ms ease-in-out;
  -moz-transition: all 333ms ease-in-out;
  -o-transition: all 333ms ease-in-out;
  -ms-transition: all 333ms ease-in-out;
  transition: all 333ms ease-in-out;
}
form .field input[type="text"],
form .field textarea {
  border: none;
  background: #e8e9ea;
  width: 100%;
  margin: 0;
  padding: 10px 0;
  padding-left: 19.5%;
  color: #313a3d;
  font-size: 1.4em;
  letter-spacing: 0.05em;
}
form .field input[type="text"]#msg,
form .field textarea#msg {
  height: 54px;
  resize: none;
  -webkit-transition: all 333ms ease-in-out;
  -moz-transition: all 333ms ease-in-out;
  -o-transition: all 333ms ease-in-out;
  -ms-transition: all 333ms ease-in-out;
  transition: all 333ms ease-in-out;
}
form .field input[type="text"]:focus,
form .field textarea:focus,
form .field input[type="text"].focused,
form .field textarea.focused {
  outline: none;
}
form .field input[type="text"]:focus#msg,
form .field textarea:focus#msg,
form .field input[type="text"].focused#msg,
form .field textarea.focused#msg {
  padding-bottom: 150px;
}
form .field input[type="text"]:focus + label,
form .field textarea:focus + label,
form .field input[type="text"].focused + label,
form .field textarea.focused + label {
  width: 18%;
  background: #106a9c;
  color: #313a3d;
}
form .field input[type="text"].focused + label,
form .field textarea.focused + label {
  color: #106a9c;
}
form .field:hover label {
  width: 18%;
  background: #313a3d;
  color: white;
}
form input[type="submit"] {
  background: #106a9c;
  color: white;
  -webkit-appearance: none;
  border: none;
  text-transform: uppercase;
  position: relative;
  padding: 13px 50px;
  font-size: 1.4em;
  letter-spacing: 0.1em;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  -webkit-transition: all 333ms ease-in-out;
  -moz-transition: all 333ms ease-in-out;
  -o-transition: all 333ms ease-in-out;
  -ms-transition: all 333ms ease-in-out;
  transition: all 333ms ease-in-out;
}
form input[type="submit"]:hover {
  background: #313a3d;
  color: #106a9c;
}
form input[type="submit"]:focus {
  outline: none;
  background: #106a9c;
}
</style>