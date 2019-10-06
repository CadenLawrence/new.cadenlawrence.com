<template>
  <div @scroll="handleScroll" id="app">
    <nav class="navbar-fixed-top navbar navbar-fixed-top navbar-expand-lg navbar-light">
      <div class="col-sm-12 nav-img">
        <ul class="navbar-nav ml-auto">
          <a href="#">
            <img src="./assets/cadenlawrencefinal.png" alt />
          </a>
          <li class="nav-item active">
            <a class="nav-link" href="#about">
              About
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience">Experience</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="col-sm-3 middle">
        <div class="middle-imgs navbar-brand"></div>
      </div>
      <div class="col-sm-3 collapse navbar-collapse" id="navbarSupportedContent"></div>
    </nav>

    <div class="main">
      <div class="front-facing sm-col-12">
        <h2>Developer | Software Designer | Security Enthusiast</h2>
      </div>
      <div class="fade-out down-center" data-aos>
        <p>About</p>
        <i class="down"></i>
      </div>

      <parallax :fixed="true">
        <img src="https://picsum.photos/1920/1080/?blur" />
      </parallax>
      <About></About>
      <Project></Project>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  </div>
</template>

<script>
import About from "./components/About";
import Project from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Parallax from "vue-parallaxy";

export default {
  name: "app",
  components: {
    About,
    Project,
    Experience,
    Contact,
    Parallax
  },
  data() {
    return {
      // scrolled: false,
      // hasLeft: false
    };
  },
  methods: {
    // handleScroll() {
    //   if (window.scrollY > 40) {
    //     return (this.scrolled = true);
    //   } else {
    //     return (this.scrolled = false);
    //   }
    // },
    hasLeft() {
      if (this.scrolled) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
.front-facing {
  position: absolute;
  top: 50%;
  left: 30%;
}
.nav-link {
  color: #fff !important;
}
.navbar-expand-lg {
  background-color: rgba(0, 0, 0, 0.3);
}
.main h2 {
  color: #fff;
}
.fade-out.aos-animate {
  opacity: 0;
}
.down-center {
  position: absolute;
  width: 100%;
  bottom: 0px;
  text-transform: uppercase;
  font-weight: 600;
  color: #2d2d2d;
  font-size: 13px;
  text-align: center;
  padding-bottom: 36px;
  letter-spacing: 0.03em;
}
.go-to-about p {
  margin-bottom: 0;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
i {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
}
$width: 100%;
.middle img {
  height: auto;
  width: 90%;
}
.view-height {
  height: 100vh;
}
.white-background {
  background-color: #fff;
}
.middle-imgs {
  width: 100%;
  height: auto;
  float: right;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animated-quick {
  -webkit-animation-duration: 0.25s;
  animation-duration: 0.25s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  transition-delay: 2s;
  -webkit-transition-delay: 2s;
}
@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(700px, 0, 0);
    transform: translate3d(700px, 0, 0);
  }
}

@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(700px, 0, 0);
    transform: translate3d(700px, 0, 0);
  }
}

.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav-img img {
  width: 250px;
  height: auto;
  vertical-align: middle;
  margin-right: 10px;
  padding-top: 5px;
}
section {
  min-height: 100vh;
  padding-top: 20px;
}
@media (max-width: 500px) {
  section {
    padding: 0;
  }
}
.title h3 {
  position: relative;
  font-style: italic;
  border-width: 1px;
  border-style: solid;
  border-color: transparent transparent #272727 transparent;
  text-transform: uppercase;
  font-weight: bold;
  color: #272727;
  padding: 15px 30px;
  display: inline-block;
  overflow: hidden;
}
.title {
  text-align: left;
  margin: 20px 0;
}
.title h3 hr {
  border: 1px solid red;
  position: absolute;
  top: 62%;
  right: 0;
  left: 0;
  width: 5%;
}
.main {
  text-align: center;
  margin-top: 54px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

.middle {
  margin: auto;
  text-align: center;
  width: 100%;
}
.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.navbar-fixed-bottom,
.navbar-fixed-top {
  position: fixed !important;
  right: 0;
  left: 0;
  z-index: 1030;
}
@media (max-width: 992px) {
  main {
    margin-top: 84px !important;
  }
}

@media (min-width: 768px) {
  .navbar-fixed-bottom,
  .navbar-fixed-top {
    border-radius: 0;
  }
}
</style>

