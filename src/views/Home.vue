<template>
  <el-row class="home-content">
    <el-col>
      <el-row>
        <div slot="header" class="clearfix">
          <h1>About Me</h1>
        </div>
      </el-row>
      <el-row>
        <div class="about">
          <p style="text-align: justify">
            Hello and thank you for visiting my website. My name is Massimiliano
            Sartore and I am a software developer from Italy. I have a passion
            for mobile development and creating innovative solutions for
            different platforms. I have a solid foundation in software
            engineering and industry 4.0, as I graduated from ITS-ICT as a
            Higher technician in 2021. I am also pursuing a degree in computer
            science to expand my knowledge and skills in this field. I love
            learning new technologies and applying them to real-world challenges
            that can make a positive impact. On this website, you can find out
            more about me and my projects, as well as contact me if you are
            interested in working with me or collaborating on something
            exciting.
          </p>
          <el-image
            class="profile-image"
            src="https://avatars.githubusercontent.com/u/56435388?v=4"
            lazy
          />
        </div>
      </el-row>
    </el-col>
  </el-row>
  <el-row>
    <el-col style="justify-content: center">
      <el-carousel :interval="4000" type="card">
        <el-carousel-item
          v-for="project in props.projects"
          :key="project.label"
        >
          <img
            style="object-fit: contain; height: 100%; width: 100%"
            :src="project.img"
            lazy
          />
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>

<script setup>
const props = defineProps({
  projects: Array,
});
</script>

<style>
.about {
  display: flex;
}

.profile-image {
  height: 50%;
  width: 50%;
  border-radius: 100%;
}

.ep-carousel__mask {
  background-color: transparent;
}
</style>
