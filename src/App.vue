<template>
  <div @scroll="handleScroll" id="app">
    <nav v-if="this.scrolled==true" class="navbar-fixed-top navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="col-sm-3 nav-img">
        <!-- <transition
          name="custom-classes-transition"
          @after-leave="hasLeft"
          leave-active-class="animated bounceOutRight"
        >
          <img v-if="this.scrolled==false" src="./assets/cadenlawrencefinalcl.png" alt />
        </transition>-->
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
        <div class="middle-imgs navbar-brand">
          <transition name="custom-classes-transition" enter-active-class="animated-quick fadeInUp">
            <a v-if="this.scrolled==true" href="#">
              <img style="width:30px;" src="./assets/cadenlawrencefinalcl.png" alt />
            </a>
          </transition>
          <transition name="custom-classes-transition" enter-active-class="animated-quick fadeInUp">
            <a href="#" v-if="this.scrolled==true">
              <img src="./assets/cadenlawrencecropped.png" alt />
            </a>
          </transition>
        </div>
      </div>
      <div class="col-sm-3 collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#about">
              About
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <!--<li class="nav-item">
            <a class="nav-link" href="#experience">Experience</a>
          </li>-->
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="main">
      <About></About>
      <Project></Project>
      <!--<Experience></Experience>-->
      <Contact></Contact>
    </div>
  </div>
</template>

<script>
import About from "./components/About";
import Project from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default {
  name: "app",
  components: {
    About,
    Project,
    Experience,
    Contact
  },
  data() {
    return {
      scrolled: false,
      hasLeft: false
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 600) {
        return (this.scrolled = true);
      } else {
        return (this.scrolled = false);
      }
    },
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
$width: 100%;
.middle img {
  height: auto;
  width: 90%;
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
  width: 30px;
  height: auto;
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

