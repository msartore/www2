<template>
  <el-row>
    <el-col>
      <el-row>
        <el-row style="width: 100%" justify="space-between">
          <h1 v-if="message.length > 0" style="width: 100%" class="name">
            {{ message }}
          </h1>
        </el-row>
        <el-row v-if="isMobile">
          <div class="about">
            <el-image class="profile-image" :src="p_picture" lazy />
            <p class="bio">
              {{ ini_text }}
            </p>
          </div>
        </el-row>
        <el-row v-else>
          <el-col :span="15">
            <p class="bio">
              {{ ini_text }}
            </p>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col style="text-align: center" :span="8">
            <el-image class="profile-image" :src="p_picture" lazy />
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
import p_picture from "@/assets/p_picture.png";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useHead } from "@unhead/vue";

const welcome_msg_list = [
  "welcome to my website",
  "explore my projects!",
  "do you need to customize your android? check out ATA-GUI!",
  "feel free to reach out for collaborations!",
];

const message = ref("hi, I'm Massimiliano");
const ini_text =
  "Hello, I'm Massimiliano Sartore, a software developer from Italy with a passion for mobile development and innovation. With a solid foundation in software engineering and Industry 4.0, I graduated as a Higher Technician in Computer Science from ITS-ICT in 2021. Currently, I'm pursuing a degree in Computer Science to further expand my knowledge and skills. I enjoy staying up-to-date with the latest technologies and applying them to real-world challenges that can drive positive impact. Through this website, you'll find more information about me, my projects, and get a glimpse into my work.";
const router = useRouter();
const props = defineProps({
  projects: Array,
  isMobile: Boolean,
});

var messagerWriting = false;
var currentMessageIndex = -1;

function navigateTo(path) {
  router.push(path);
  window.scrollTo(0, 0);
}

function messager() {
  let currentMessage = welcome_msg_list[currentMessageIndex];

  if (messagerWriting) {
    if (message.value.length < currentMessage.length) {
      if (message.value == "~")
        message.value = currentMessage[message.value.length - 1];
      else message.value += currentMessage[message.value.length];
    } else {
      setTimeout(() => {
        messagerWriting = false;
      }, 3000);
    }
  } else {
    if (message.value.length == 1) {
      message.value = "~";
      messagerWriting = true;
      if (currentMessageIndex == welcome_msg_list.length - 1) {
        currentMessageIndex = 0;
      } else {
        currentMessageIndex++;
      }
    } else {
      message.value = message.value.slice(0, -1);
    }
  }
}

const ew_list = [
  {
    company_name: "Universitat Oberta de Catalunya",
    course_name:
      "Bachelor's degree in Techniques for Software Application Development",
    description:
      "Bachelor's Degree in Techniques for Software Development, it equipped me with the skills to create usable, efficient, and error-free software for various applications. I gained the skills to follow the software creation process through all stages of its life cycle, from requirement definition and design to implementation, maintenance, and upgrades. I improved the way to facilitating effective communication and collaboration within development teams, by employing agile methods to achieve functionality, quality, and timely delivery. My knowledge includes a comprehensive understanding of the programming languages, tools, and technologies essential for building software across different platforms. Additionally, I have the capabilities in administering systems, networks, and applications, both locally and in the cloud.",
    logo: uoc,
    date: "Feb 2022 - Feb 2025",
  },
  {
    company_name: "Nextage S.R.L.",
    course_name: "Mobile Android Developer · Intership",
    description:
      "As a Mobile Android Developer in the medical area, I was responsible for designing and developing mobile applications for the Android ecosystem. My role involved working closely with cross-functional teams to create user-friendly and efficient apps that met the needs of healthcare professionals. I utilized my knowledge of Kotlin, Java and experience with third-party libraries and APIs to create robust and high-performing applications. I also contributed to the testing, releasing, and support of these applications to ensure their continued success. During my time in tmy position, I gained valuable experience working in the healthcare industry.",
    logo: nextage,
    date: "Apr 2021 - Dec 2021",
  },
  {
    company_name:
      "Istituto Tecnico Superiore per le Tecnologie dell'Informazione e della Comunicazione",
    course_name: "Development of software systems for industry 4.0",
    description:
      "As a highly technological professional, I specialize in analyzing, designing, developing, and managing software and hardware systems to support Industry 4.0. My training includes comprehensive technical and design skills, covering all phases of the process from client briefings and programming activities to testing and release. Additionally, I am adept at implementing application security and data protection, ensuring robust management and safeguarding of data.",
    logo: its,
    date: "2019 - 2021",
  },
];

useHead({
  title: "Massimiliano Sartore - Software Developer",
  meta: [
    {
      name: "description",
      content:
        "Massimiliano Sartore, a software developer and tech enthusiast, shares my projects and insights on technology. Explore my work, learn about my journey, and get in touch.",
    },
    {
      property: "og:title",
      content: "Massimiliano Sartore - Software Developer",
    },
    {
      property: "og:description",
      content: "Massimiliano Sartore, a software developer and tech enthusiast",
    },
    { property: "og:url", content: "https://msartore.dev/" },
    { property: "og:type", content: "website" },
  ],
});

onMounted(() => {
  setTimeout(() => {
    setInterval(messager, 250);
  }, 3000);
});
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

p {
  text-align: justify;
}

.profile-image {
  width: 100%;
  align-items: center;
  border-radius: 50%;
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
