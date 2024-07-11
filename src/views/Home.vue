<template>
  <el-row class="home-content">
    <el-col>
      <el-row>
        <div class="about">
          <div class="p_name">
            <el-image
              class="profile-image"
              src="/src/assets/p_picture.jpg"
              lazy
            />
            <b>Massimiliano Sartore</b>
          </div>
          <div>
            <b>Bio</b>
            <p>
              Hello and thank you for visiting my website. My name is
              Massimiliano Sartore and I am a software developer from Italy. I
              have a passion for mobile development and creating innovative
              solutions for different platforms. I have a solid foundation in
              software engineering and industry 4.0, as I graduated from ITS-ICT
              as a Higher technician in 2021. I am also pursuing a degree in
              computer science to expand my knowledge and skills in this field.
              I love learning new technologies and applying them to real-world
              challenges that can make a positive impact. On this website, you
              can find out more about me and my projects, as well as contact me
              if you are interested in working with me or collaborating on
              something exciting.
            </p>
          </div>
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
  text-align: justify;
  display: flex;
  margin-bottom: 10%;
  margin-top: 5%;
}

.profile-image {
  width: 100%;
  border-radius: 100%;
  max-height: 200px;
  max-width: 200px;
}

.ep-carousel__mask {
  background-color: transparent;
}

.p_name {
  padding-right: 10%;
  justify-content: center;
  text-align: center;
}
</style>
