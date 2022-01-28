<template>
  <div class="projects" id="projects">
    <section>
      <div class="container">
          <div class="title">
              <h3>Projects</h3>
          </div>
        <div class="row">
            <div class="img-container col-md-6 col-sm-12">
                <div class="content">
                <a href="https://research.uc.edu/researchweek" target="_blank">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="../assets/researchweek.png">
                    <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">R&I Week 2019</h3>
                    <p class="content-text">
                        Developer for UC's Research and Innovation Week 2019.
                        <br>Languages: Html, Jquery, and CSS
                    </p>
                    </div>
                </a>
                </div>
            </div>
            <div class="img-container col-md-6 col-sm-12">
                <div class="content">
                <a href="https://researchhow2.uc.edu/" target="_blank">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="../assets/rh2.png">
                    <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">Research How 2</h3>
                    <p class="content-text">
                        Developed as a easily searchable database that holds all the Office of Research's documents.
                        <br>Languages: Html, Jquery, and CSS
                    </p>
                    </div>
                </a>
                </div>
            </div>
            <!--<div class="img-container col-md-4 col-sm-12">
                <div class="content">
                <a href="http://rsrch-webserver.uc.edu/" target="_blank">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="../assets/limitedsub.png">
                    <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">Limited Submission</h3>
                    <p class="content-text">
                        Created because of a need for a more efficient way to track and get in contact with researchers interested in funding.
                        <br>Languages: Angular, Redis, Mocha, and Jasmine
                    </p>
                    </div>
                </a>
                </div>
            </div>-->
        </div>
        <div class="row">
          <div class="img-container col-md-6 col-sm-12">
                <div class="content">
                    <a href="https://research.uc.edu" target="_blank">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="../assets/cyber.png">
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">UC's Research Website</h3>
                        <p class="content-text">
                        UC's Front-end Research Website.
                        <br>Languages: Html, CSS, and Jquery
                        </p>
                    </div>
                    </a>
                </div>
                </div>
            <!--<div class="img-container col-md-4 col-sm-12">
                <div class="content">
                    <a href="#" target="_blank">
                    <div class="content-overlay"></div>
                    <img
                        class="content-image"
                        src="../assets/newwebsite.png"
                    >
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Current Portfolio Website</h3>
                        <p class="content-text">
                        The current version of my portfolio. An excuse to use a new language.
                        <br>Languages: Vue.js and Firebase
                        </p>
                    </div>
                    </a>
                </div>
            </div>-->
            <div class="img-container col-md-6 col-sm-12">
                <div class="content">
                    <a href="https://cadenlawrence.com" target="_blank">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="../assets/oldwebsite.png">
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Old Portfolio Website</h3>
                        <p class="content-text">
                        My very first try as a developer. Created authentication, as well as a contact database.
                        <br>Languages: React and Firebase
                        </p>
                    </div>
                    </a>
                </div>
            </div>
            
            </div>
        </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'Projects',
  components: {

  }
}
</script>
<style scoped>
.main-title {
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
}
.img-container {
  padding: 1em 0;
  float: left;
}


.img-container .title {
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
}

.content {
  position: relative;
  width: 90%;
  max-width: 500px;
  margin: auto;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}

.content-image {
  width: 100%;
   
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}
section{
  background-color: #BFBEBE;
}
.fadeIn-bottom {
  top: 80%;
}
</style>