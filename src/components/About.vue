<template>
  <div class="about" id="about">
    <section>
      <div class="container">
        <div class="Logo">
          <div class="sm-col-12">
            <transition
              name="custom-classes-transition"
              enter-active-class="animated-quick fadeInUp"
            >
              <img src="../assets/cadenlawrencefinal.jpg" />
            </transition>
          </div>
          <div class="sm-col-12">
            <img id="about-img" src="../assets/about.jpg" alt="Picture at the Grand Canyon" />
            <h3>Developer, Security Enthusiast, & Software Designer</h3>
          </div>
        </div>
        <div class="description">
          <p>I am currently a Student Developer for the University of Cincinnati's Office of Research. I am working towards my Bachelor of Science in the College of Engineering and Applied Science, majoring in Computer Science. I also plan to minor in the Information Technology department, specifically focusing on cyber security. I currently develop during my day job, and practice penetrating systems at night!</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {};
  },
  props: {},
  methods: {}
};
</script>
<style>
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
</style>
