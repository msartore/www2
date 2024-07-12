<template>
  <el-row>
    <h2>About</h2>
    <el-col>
      <el-row>
        <el-row style="width: 100%" justify="space-between">
          <el-col :span="6" style="align-content: center">
            <el-image
              class="profile-image grid-content"
              src="/src/assets/p_picture.jpg"
              lazy
            />
          </el-col>
          <el-col :span="18">
            <h1 style="width: 100%" class="name">Massimiliano Sartore</h1>
          </el-col>
        </el-row>
        <el-text tag="p">
          Hello and thank you for visiting my website. My name is Massimiliano
          Sartore and I am a software developer from Italy. I have a passion for
          mobile development and creating innovative solutions for different
          platforms. I have a solid foundation in software engineering and
          industry 4.0, as I graduated from ITS-ICT as a Higher technician in
          2021. I am also pursuing a degree in computer science to expand my
          knowledge and skills in this field. I love learning new technologies
          and applying them to real-world challenges that can make a positive
          impact. On this website, you can find out more about me and my
          projects, as well as contact me if you are interested in working with
          me or collaborating on something exciting.
        </el-text>
      </el-row>
    </el-col>
  </el-row>
  <el-row>
    <h2>Projects</h2>
    <el-col style="text-align: center">
      <el-carousel
        :motion-blur="true"
        :interval="4000"
        type="card"
        style="height: 100%"
      >
        <el-carousel-item
          v-for="project in props.projects"
          :key="project.label"
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
const props = defineProps({
  projects: Array,
});

const ew_list = [
  {
    company_name: "Universitat Oberta de Catalunya",
    course_name:
      "Bachelor's degree in Techniques for Software Application Development",
    description:
      "Bachelor's Degree in Techniques for Software Development, equipped me with the skills to create usable, efficient, and error-free software for various applications. I manage the software creation process through all stages of its life cycle, from requirement definition and design to implementation, maintenance, and upgrades. I excel in communicating and collaborating within development teams, employing agile methods to achieve functionality, quality, and timely delivery. My expertise includes a thorough understanding of the programming languages, tools, and technologies essential for building software across different platforms. Additionally, I am proficient in administering systems, networks, and applications, both locally and in the cloud.",
    logo: "/src/assets/company/uoc.jpg",
    date: "Feb 2022 - Feb 2025",
  },
  {
    company_name: "Nextage S.R.L.",
    course_name: "Mobile Android Developer · Intership",
    description:
      "As a Mobile Android Developer in the medical area, I was responsible for designing and developing mobile applications for the Android ecosystem. My role involved working closely with cross-functional teams to create user-friendly and efficient apps that met the needs of healthcare professionals. I utilized my knowledge of Kotlin, Java and experience with third-party libraries and APIs to create robust and high-performing applications. I also contributed to the testing, releasing, and support of these applications to ensure their continued success. During my time in this position, I gained valuable experience working in the healthcare industry.",
    logo: "/src/assets/company/nextage.jpg",
    date: "Apr 2021 - Dec 2021",
  },
  {
    company_name:
      "Istituto Tecnico Superiore per le Tecnologie dell’Informazione e della Comunicazione",
    course_name: "Development of software systems for industry 4.0",
    description:
      "As a highly technological professional, I specialize in analyzing, designing, developing, and managing software and hardware systems to support Industry 4.0. My training includes comprehensive technical and design skills, covering all phases of the process from client briefings and programming activities to testing and release. Additionally, I am adept at implementing application security and data protection, ensuring robust management and safeguarding of data.",
    logo: "/src/assets/company/its.jpg",
    date: "2019 - 2021",
  },
];
</script>

<style>
.name {
  font-size: 5vw;
  text-align: end;
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

p {
  text-align: justify;
}

h2 {
  margin-top: 10%;
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

.life {
  width: 100%;
  display: grid;
  justify-items: center;
}
</style>
