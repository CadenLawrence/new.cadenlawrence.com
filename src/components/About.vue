<template>
  <div class="about" id="about">
    <section>
      <div class="container center">
        <div class="Logo">
          <div class="sm-col-12">
            <transition
              name="custom-classes-transition"
              enter-active-class="animated-quick fadeInUp"
            >
              <img src="../assets/cadenlawrencefinal.png" />
            </transition>
          </div>
          <div class="sm-col-12">
            <h2>Database Developer, Security Enthusiast, & Software Designer</h2>
          </div>
          <div>
            <a href="https://github.com/CadenLawrence" aria-label="Homepage" class="footer-octicon" title="GitHub">
              <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill="white" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div v-if="this.scrolled==false">
      <svg  class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      scrolled: false,
      hasLeft: false
    };
  },
  props: {},
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
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
<style>
@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

@-webkit-keyframes arrow /*Safari and Chrome*/
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

.arrows path.a1 {
	animation-delay:-1s;
	-webkit-animation-delay:-1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
	animation-delay:-0.5s;
	-webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {	
	animation-delay:0s;
	-webkit-animation-delay:0s; /* Safari 和 Chrome */
}
.arrows {
	width: 60px;
	height: 72px;
	position: absolute;
	left: 50%;
	margin-left: -30px;
	bottom: 20px;
}

.arrows path {
	stroke: #2994D1;
	fill: transparent;
	stroke-width: 1px;	
	animation: arrow 2s infinite;
	-webkit-animation: arrow 2s infinite; 
}

.center{
  margin-top: 30%;
}
.Logo{
  color: white;
}
.Logo img {
  height: auto;
  width: 50%;
}
#about-img {
  border-radius: 20%;
}
.description {
  text-align: left;
  margin-top: 20px;
}
.about{
  background-image: url(../assets/wedding.jpg);
  background-size: cover;
}
</style>
