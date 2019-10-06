<template>
  <div class="about" id="about">
    <section>
      <div class="container-fluid">
        <div class="Logo">
          <div data-aos="fade-right" class="sm-col-12">
            <img id="about-img" src="../assets/about.jpg" alt="Picture at the Grand Canyon" />
          </div>
        </div>
        <div class="description" data-aos="fade-left" style="float:right;">
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
  width: 25%;
  float: left;
}
.about::after {
  content: "";
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.8) 50%
  );
  opacity: 0.7;
}
.about > * {
  z-index: 100;
}
#about-img {
  border-radius: 20%;
}
.description {
  position: absolute;
  top: 175vh;
  color: #fff;
  right: 0;
  text-align: left;
  width: 51%;
  margin-top: 20px;
}
</style>
