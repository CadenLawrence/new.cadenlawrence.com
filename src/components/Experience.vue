<template>
  <div class="experience" id="experience">
    <section>
      <div class="container">
        <div class="title">
          <h3>Experience</h3>
        </div>
        <div class="row">
          <div class="box-wrapper">
            <div class="display-box">
              <h3><span style="font-style: italic;">Student Developer</span> <span style="float:right;">May 2017-Present</span><br/>University of Cincinnati Office of Research IT</h3>
              <div class="content">
              <ul>
                <li>- Created front-end applications on multiple projects using Angular, JQuery, or Handlebars</li>
                <li>- Design and implemented back-end caching service with Redis</li>
                <li>- Added widget templates utilizing the Sitefinity CMS, as well as the .NET framework</li>
                <li>- Assisted with tech support to over 100+ users<br/></li>
                <li>- Actualized an interface to a MySQL database using Microsoft Access</li>
              </ul>
              </div>
            </div>
          </div>
          <div class="box-wrapper">
            <div class="display-box">
              <h3><span style="font-style: italic;">Construction Laborer</span> <span style="float:right;">2014-2016</span><br/>Professional Coatings and Weatherization</h3>
              <div class="content">
              <ul>
                <li>- Lead or assisted on large commercial weatherization and painting projects</li>
                <li>- Worked on government jobs to supply better living environments and bill reduction</li>
                <li>- Communicated with clients to insure customer loyalty and satisfaction</li>
                <li>- Organized paperwork and supplies for the business</li>
                <li>- Motivated team serving as a positive team member during long shifts</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'Experience',
  components: {

  }
}
</script>
<style scoped>
.resume img{
  height: 30px;
  width: auto;
}
.resume h3{
    margin-left: 32px;
    text-align: left;
    width: 100%;
    color: #272727!important;
}
ul{
  list-style-type:disc;
}
li{
  width: 100%;
}
section{
  background-color: #BFBEBE;
}
.box-wrapper .display-box {
    text-align: left;
    background-color: white;
    box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.5);
    margin: 3%;
    padding: 0% 6%;
    border: 1px solid rgba(0, 0, 0, 0.3);
}
.box-wrapper h3 {
    border-bottom: 1px solid #C5C5C5;
    margin: 5% 0%;
    padding-bottom: 3%;
}
.box-wrapper h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.box-wrapper .content {
    text-align: left;
    margin-bottom: 5%;
    padding-bottom: 5%;
    border-bottom: 1px solid #C5C5C5;
}
</style>