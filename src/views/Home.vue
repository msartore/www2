<template>
  <el-row>
    <el-col>
      <el-row>
        <el-row style="width: 100%" justify="space-between">
          <h1 style="width: 100%" class="name">Welcome to my website!</h1>
        </el-row>
        <el-row v-if="isMobile">
          <div class="about">
            <el-image class="profile-image" :src="p_picture" lazy />
            <p class="bio">
              Hi my name is Massimiliano Sartore and I am a software developer
              from Italy. I have a passion for mobile development and creating
              innovative solutions for different platforms. I have a solid
              foundation in software engineering and industry 4.0, as I
              graduated from ITS-ICT as a Higher technician in 2021. I am also
              pursuing a degree in computer science to expand my knowledge and
              skills in this field. I love learning new technologies and
              applying them to real-world challenges that can make a positive
              impact. On this website, you can find out more about me and my
              projects, as well as contact me if you are interested in working
              with me or collaborating on something exciting.
            </p>
          </div>
        </el-row>
        <el-row v-else>
          <el-col :span="8">
            <el-image class="profile-image" :src="p_picture" lazy />
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="15">
            <p class="bio">
              Hi my name is Massimiliano Sartore and I am a software developer
              from Italy. I have a passion for mobile development and creating
              innovative solutions for different platforms. I have a solid
              foundation in software engineering and industry 4.0, as I
              graduated from ITS-ICT as a Higher technician in 2021. I am also
              pursuing a degree in computer science to expand my knowledge and
              skills in this field. I love learning new technologies and
              applying them to real-world challenges that can make a positive
              impact. On this website, you can find out more about me and my
              projects, as well as contact me if you are interested in working
              with me or collaborating on something exciting.
            </p>
          </el-col>
        </el-row>
      </el-row>
    </el-col>
  </el-row>
  <el-row>
    <h2>Projects</h2>
    <el-col style="text-align: center">
      <el-carousel
        v-if="isMobile"
        :interval="4000"
        indicator-position="outside"
      >
        <el-carousel-item
          v-for="project in props.projects"
          :key="project.label"
          @click="navigateTo(project.path)"
        >
          <img class="img_carousel" :src="project.img" lazy />
        </el-carousel-item>
      </el-carousel>
      <el-carousel
        v-else
        :motion-blur="true"
        :interval="4000"
        type="card"
        style="height: 100%"
      >
        <el-carousel-item
          v-for="project in props.projects"
          :key="project.label"
          @click="navigateTo(project.path)"
        >
          <img class="img_carousel" :src="project.img" lazy />
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
  <el-row>
    <h2>Education & Work Experience</h2>
    <div class="life">
      <el-timeline>
        <el-timeline-item
          center
          v-for="item in ew_list"
          :key="item.course_name"
          :timestamp="item.date"
          placement="top"
        >
          <el-card>
            <div class="flex">
              <img class="company_logo" :src="item.logo" />
              <h3 style="width: 100%; text-align: center">
                {{ item.company_name }}
              </h3>
            </div>
            <h4>{{ item.course_name }}</h4>
            <el-text tag="p">{{ item.description }}</el-text>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-row>
</template>

<script setup>
import its from "@/assets/company/its.jpg";
import nextage from "@/assets/company/nextage.jpg";
import uoc from "@/assets/company/uoc.jpg";
import p_picture from "@/assets/p_picture.jpg";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  projects: Array,
  isMobile: Boolean,
});

function navigateTo(path) {
  router.push(path);
  window.scrollTo(0, 0);
}

const ew_list = [
  {
    company_name: "Universitat Oberta de Catalunya",
    course_name:
      "Bachelor's degree in Techniques for Software Application Development",
    description:
      "Bachelor's Degree in Techniques for Software Development, equipped me with the skills to create usable, efficient, and error-free software for various applications. I manage the software creation process through all stages of its life cycle, from requirement definition and design to implementation, maintenance, and upgrades. I excel in communicating and collaborating within development teams, employing agile methods to achieve functionality, quality, and timely delivery. My expertise includes a thorough understanding of the programming languages, tools, and technologies essential for building software across different platforms. Additionally, I am proficient in administering systems, networks, and applications, both locally and in the cloud.",
    logo: uoc,
    date: "Feb 2022 - Feb 2025",
  },
  {
    company_name: "Nextage S.R.L.",
    course_name: "Mobile Android Developer · Intership",
    description:
      "As a Mobile Android Developer in the medical area, I was responsible for designing and developing mobile applications for the Android ecosystem. My role involved working closely with cross-functional teams to create user-friendly and efficient apps that met the needs of healthcare professionals. I utilized my knowledge of Kotlin, Java and experience with third-party libraries and APIs to create robust and high-performing applications. I also contributed to the testing, releasing, and support of these applications to ensure their continued success. During my time in this position, I gained valuable experience working in the healthcare industry.",
    logo: nextage,
    date: "Apr 2021 - Dec 2021",
  },
  {
    company_name:
      "Istituto Tecnico Superiore per le Tecnologie dell’Informazione e della Comunicazione",
    course_name: "Development of software systems for industry 4.0",
    description:
      "As a highly technological professional, I specialize in analyzing, designing, developing, and managing software and hardware systems to support Industry 4.0. My training includes comprehensive technical and design skills, covering all phases of the process from client briefings and programming activities to testing and release. Additionally, I am adept at implementing application security and data protection, ensuring robust management and safeguarding of data.",
    logo: its,
    date: "2019 - 2021",
  },
];
</script>

<style lang="scss">
.bio {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin: 0px;
}

.about {
  display: block;
  text-align: center;
}

.name {
  font-size: clamp(1rem, 5vw, 5rem);
  text-align: center;
  color: var(--ep-color-primary);
}

.company_logo {
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  background-clip: content-box;
}

.img_carousel {
  object-fit: contain;
  height: 100%;
  width: 70%;
}

.flex {
  display: flex;
}

h2 {
  margin-top: 10%;
}

.profile-image {
  width: 100%;
  border-radius: 100%;
  margin-bottom: 20px;
  margin-top: 50px;
  max-height: 200px;
  max-width: 200px;
}

.ep-carousel__mask {
  background-color: transparent;
}

.life {
  width: 100%;
  display: grid;
  justify-items: center;
}
</style>
