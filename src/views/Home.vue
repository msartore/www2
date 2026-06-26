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
              <img v-if="item.logo" class="company_logo" :src="item.logo" />
              <h3 style="width: 100%; text-align: center">
                {{ item.company_name }}
              </h3>
            </div>
            <h4>{{ item.course_name }}</h4>
            <ul v-if="item.highlights" class="exp-highlights">
              <li v-for="(point, i) in item.highlights" :key="i" v-html="point" />
            </ul>
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
import verizon_connect from "@/assets/company/verizon_connect.svg";
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
  "Hello, I'm Massimiliano Sartore, a software developer from Italy with a passion for mobile and desktop development. With a solid foundation in software engineering and Industry 4.0, I recently graduated from UOC with a Bachelor's degree in Techniques for Software Application Development. I enjoy staying up-to-date with the latest technologies and applying them to real-world challenges that can drive positive impact. Through this website, you'll find more information about me, my projects, and get a glimpse into my work.";
const router = useRouter();
const props = defineProps({
  projects: Array,
  isMobile: Boolean,
});

var messengerWriting = false;
var currentMessageIndex = -1;

function navigateTo(path) {
  router.push(path);
  window.scrollTo(0, 0);
}

function messenger() {
  let currentMessage = welcome_msg_list[currentMessageIndex];

  if (messengerWriting) {
    if (message.value.length < currentMessage.length) {
      if (message.value == "~")
        message.value = currentMessage[message.value.length - 1];
      else message.value += currentMessage[message.value.length];
    } else {
      setTimeout(() => {
        messengerWriting = false;
      }, 3000);
    }
  } else {
    if (message.value.length == 1) {
      message.value = "~";
      messengerWriting = true;
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
    company_name: "Verizon Connect",
    course_name: "Android Engineer (Team Lead)",
    highlights: [
      "Leading the Android engineering team for a <strong>flagship enterprise</strong> mobile platform",
      "Driving architecture modernization from <strong>XML to Jetpack Compose (MVI)</strong>, replacing legacy reactive patterns with <strong>Kotlin Coroutines</strong> and <strong>StateFlow</strong>",
      "Architected the migration of the primary <strong>Mapbox</strong>-based map to Compose, rewriting clustering, real-time location streaming, and overlay systems",
      "Improved <strong>crash-free users from 96% to 99%</strong> by resolving 23+ critical crashes and ANRs, and optimized the network layer to reduce unnecessary backend calls",
      "Designed a <strong>5-layer testing strategy</strong> from scratch, integrating <strong>Roborazzi screenshot testing</strong> into CI to prevent visual regressions before release",
      "Established module extraction standards, reducing <strong>build times by ~30%</strong> and enabling parallel development across multiple teams",
      "Authored <strong>8+ architecture blueprints</strong>, migration guides, and engineering playbooks to unify development patterns and scale engineering standards",
    ],
    logo: verizon_connect,
    date: "May 2025 - Present",
  },
  {
    company_name: "Universitat Oberta de Catalunya",
    course_name:
      "Bachelor's degree in Techniques for Software Application Development",
    highlights: [
      "Comprehensive education covering the full <strong>software development life cycle</strong>: requirements, design, implementation, maintenance, and upgrades",
      "Applied <strong>agile methodologies</strong> for cross-functional collaboration, ensuring quality and timely delivery",
      "Proficiency across <strong>programming languages, tools, and technologies</strong> for building software on different platforms",
      "Experience administering systems, networks, and applications both locally and in the <strong>cloud</strong>",
    ],
    logo: uoc,
    date: "Feb 2022 - Feb 2025",
  },
  {
    company_name: "Nextage S.R.L.",
    course_name: "Mobile Android Developer · Internship",
    highlights: [
      "Designed and developed <strong>medical Android applications</strong> for healthcare professionals using <strong>Kotlin</strong> and <strong>Java</strong>",
      "Integrated <strong>third-party libraries and APIs</strong> to build robust, high-performing applications for the medical area",
      "Contributed to <strong>testing, releasing, and supporting</strong> production applications to ensure their continued success",
      "Collaborated in cross-functional teams to deliver <strong>user-friendly, efficient, and patient-centric</strong> solutions",
    ],
    logo: nextage,
    date: "Apr 2021 - Dec 2021",
  },
  {
    company_name:
      "Istituto Tecnico Superiore per le Tecnologie dell'Informazione e della Comunicazione",
    course_name: "Development of Software Systems for Industry 4.0",
    highlights: [
      "Specialized in analyzing, designing, developing, and managing <strong>software and hardware systems</strong> for <strong>Industry 4.0</strong>",
      "Covers all phases from <strong>client briefings and programming</strong> activities through to <strong>testing and release</strong>",
      "Implemented <strong>application security and data protection</strong> best practices, ensuring robust data safeguarding",
    ],
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
    setInterval(messenger, 250);
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

.exp-highlights {
  margin: 8px 0 0 16px;
  padding: 0;
  text-align: justify;
}

.exp-highlights li {
  margin-bottom: 4px;
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.5;
  color: var(--ep-text-color-regular);
}

.exp-highlights li strong {
  color: var(--ep-text-color-primary);
  font-weight: 700;
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
