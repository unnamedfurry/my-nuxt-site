<template>
  <LightPillar
        topColor="#ffd700"
        bottomColor="#b8860b"
        :intensity="1.0"
        :rotationSpeed="0.3"
        :glowAmount="0.005"
        :pillarWidth="3.0"
        :pillarHeight="0.4"
        :noiseIntensity="0.5"
        :pillarRotation="25"
        :interactive="false"
        mixBlendMode="normal"
        class="background"/>
  <ClickSpark
      spark-color="#ffd700"
      :spark-size="12"
      :spark-radius="25"
      :spark-count="12"
      :duration="600"
      easing="ease-out"
      :extra-scale="1.2"
      class="clickspark"/>

  <div class="header">
    <GlassSurface
        :width="1440"
        :height="64"
        :border-radius="24"
    class="glass"/>

    <div class="header-content">
      <img src="/avatarka.png" class="header-avatar">
      <p class="header-about">unnamed_furry</p>
      <div class="buttons">
        <a href="https://discord.gg/VDQxDtPde5" target="_blank">
          <div class="discord-button">
            <img src="/discord.png" class="discord-icon">
            <p class="discord-text">Discord</p>
          </div>
        </a>
        <a href="https://github.com/unnamedfurry/" target="_blank">
          <div class="github-button">
            <img src="/github.png" class="github-icon">
            <p class="github-text">Github</p>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="main-content">
    <div class="welcome">
      <p class="welcome-1">Hi!</p>
      <p class="welcome-2">I'm <span class="welcome-cursive">Daniel</span> and welcome to my <span class="welcome-cursive">BIO</span> :yaaaay:</p>
    </div>
    <div class="about-me">
      <DecryptedText
          text="I'm a 15-year-old full-stack dev with a focus on building strong and reliable console applications. I specialize in backend development using Java but also frontend development using Vue & Nuxt. Most of my projects are in the hosting space, where performance, security, and scalability are key."
          :speed="50"
          :max-iterations="1"
          :sequential="true"
          reveal-direction="start"
          :use-original-chars-only="false"
          animate-on="view"
          class-name="text-green-500"
          encrypted-class-name="text-red-500"
          class="short-about-me"
      />
      <GlassSurface
          :width="1500"
          :height="160"
          :border-radius="16"
          class="glass-1"/>
    </div>
    <div class="my-projects">
      <p class="projects-header">My projects :3</p>
      <GlassSurface
          :width="700"
          :height="120"
          :border-radius="16"
          class="glass-2"/>
      <div class="cards-projects">
        <ProfileCard
            name="BLV Bot"
            title="Discord Bot"
            handle=""
            status="Written on Java with Java Discord Api"
            contact-text=""
            avatar-url="/BotLogo.png"
            icon-url=""
            grain-url=""
            :show-user-info="true"
            :show-behind-gradient="false"
            :enable-tilt="true"
            class="bot-card"
        />
        <ProfileCard
          name="This site"
          title="yeah, that very BIO"
          handle=""
          status="Written on VUE with Nuxt"
          contact-text=""
          avatar-url="/site-icon.png"
          icon-url=""
          grain-url=""
          :show-user-info="true"
          :show-behind-gradient="false"
          :enable-tilt="true"
          class="site-card"
      />
      </div>
    </div>
    <div class="my-skills">
      <p class="skills-header">My skills :3</p>
      <GlassSurface
          :width="600"
          :height="120"
          :border-radius="16"
          class="glass-3"/>
      <div class="cards-skills">
        <CardSwap
            :card-distance="60"
            :vertical-distance="90"
            :delay="3000"
            :skew-amount="6"
            easing="elastic"
            :pause-on-hover="true"
            class="skills"
        >
          <template #card-0>
            <div class="card-content">
              <div class="card-header">
                <img class="pi pi-circle-fill icon" src="/java.png" alt="">
                <span>Java</span>
              </div>
              <img src="/java-bg.jpg" alt="" class="card-bg">
            </div>
          </template>

          <template #card-1>
            <div class="card-content">
              <div class="card-header">
                <img class="pi pi-code icon" src="/javafx.png" alt="">
                <span>JavaFX</span>
              </div>
              <img src="/javafx-bg.jpg" alt="" class="card-bg">
            </div>
          </template>

          <template #card-2>
            <div class="card-content">
              <div class="card-header">
                <img class="pi pi-sliders-h icon" src="/html.png" alt="">
                <span>HTML/CSS</span>
              </div>
              <img src="/html-bg.jpg" alt="" class="card-bg">
            </div>
          </template>

          <template #card-3>
            <div class="card-content">
              <div class="card-header">
                <img class="pi pi-sliders-h icon" src="/vue.png" alt="">
                <span>VUE</span>
              </div>
              <img src="/vue-bg.jpg" alt="" class="card-bg">
            </div>
          </template>
        </CardSwap>
      </div>
      <div class="skills-space"></div>
    </div>
    <div class="sponsor">
      <div class="sponsor-top">
        <p class="sponsor-header">Meet my HSP :3</p>
        <GlassSurface
            :width="560"
            :height="120"
            :border-radius="16"
            class="glass-5"/>
      </div>
      <div class="lendnodes">
        <ElectricBorder
            :color="'#FFD700FF'"
            :speed="0.4"
            :chaos="0.6"
            :thickness="4"
            class="electricborder"
        >
          <div>

          </div>
        </ElectricBorder>
      </div>
    </div>
    <div class="continue">
      <TrueFocus
          sentence="Thats not all..."
          :manualMode="true"
          :blurAmount="5"
          borderColor="yellow"
          :animationDuration="0.3"
          :pauseBetweenAnimations="1"
          class="continue-1"
          textSize="6rem"
      />
      <TrueFocus
          sentence="I'll add new pages whenever inspiration strikes XD"
          :manualMode="true"
          :blurAmount="5"
          borderColor="yellow"
          :animationDuration="0.3"
          :pauseBetweenAnimations="1"
          class="continue-2"
          textSize="3rem"
      />
      <GlassSurface
          :width="1400"
          :height="220"
          :border-radius="24"
          class="glass-4"/>
    </div>
    <div class="end">
      <p>Made with 💚 on <span class="nuxt-word">Nuxt</span></p>
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
a{
  text-decoration: none;
  color: black;
  transition: transform 0.3s ease;
}
a:hover{
  transform: scale(0.95);
}
.background{
  position: fixed;
  width: 1920px;
  height: 100%;
}
.clickspark{
  position: fixed;
  width: 1920px;
  height: 100%;
}
.header{
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: transparent;
  width: 1440px;
  height: 64px;
  margin: 0 auto;
  padding-top: 18px;
}
.glass{
  position: relative;
  pointer-events: none;
}
.header-content{
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: start;
}
.header-avatar{
  display: flex;
  width: 42px;
  height: 42px;
  padding: 12px;
  pointer-events: none;
}
.header-about{
  display: flex;
  color: gold;
  font-size: 28px;
  justify-content: center;
  align-items: center;
  font-family: Sans;
  font-weight: bold;
  padding-right: 876px;
  pointer-events: none;
}
.buttons{
  display: flex;
  padding: 8px;
  gap: 8px;
}
.discord-button{
  display: flex;
  align-items: center;
  background-color: gold;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 12px;
  padding: 4px;
}
.discord-icon{
  display: flex;
  width: 36px;
  height: 36px;
  padding-right: 4px;
}
.discord-text{
  display: flex;
  font-size: 18px;
  font-family: Sans;
  font-weight: bolder;
  padding-left: 4px;
}
.github-button{
  display: flex;
  align-items: center;
  background-color: gold;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 12px;
  padding: 4px;
}
.github-icon{
  display: flex;
  width: 36px;
  height: 36px;
  padding-right: 4px;
}
.github-text{
  display: flex;
  font-size: 18px;
  font-family: Sans;
  font-weight: bolder;
  padding-left: 4px;
}
.main-content{
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.welcome{
  display: flex;
}
.welcome-1{
  padding-left: 180px;
  color: white;
  font-size: 180px;
  font-family: Sans;
}
.welcome-2{
  padding-top: 180px;
  padding-left: 160px;
  color: white;
  font-size: 64px;
  font-family: FreeMono;
  white-space: pre-wrap;
}
.welcome-cursive{
  font-style: italic;
}
.about-me{
  display: flex;
  width: 1500px;
  height: 162px;
  margin: 0 auto;
}
.short-about-me{
  position: relative;
  color: white;
  font-family: FreeMono;
  font-size: 32px;
  text-align: center;
  padding: 12px;
}
.glass-1{
  position: absolute;
  display: flex;
  margin: 0 auto;
}
.my-projects{
  padding-top: 14%;
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.projects-header{
  display: flex;
  color: white;
  font-size: 72px;
  font-family: FreeMono;
  margin: 0 auto;
  padding-left: 34%;
  padding-bottom: 120px;
}
.glass-2{
  position: absolute;
  display: flex;
  margin-top: -210px;
  margin-left: 600px;
}
.cards-projects{
  display: flex;
  justify-content: center;
  position: relative;
  gap: 60px;
}
.bot-card{
  pointer-events: all;
}
.site-card{
  pointer-events: all;
}
.my-skills{
  padding-top: 14%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 200px;
}
.skills-header{
  display: flex;
  color: white;
  font-size: 72px;
  font-family: FreeMono;
  padding-bottom: 120px;
  padding-left: 180px;
}
.glass-3{
  position: absolute;
  display: flex;
  margin-top: -120px;
  margin-left: 140px;
}
.cards-skills{
  display: flex;
  justify-content: center;
  position: relative;
  padding-right: 120px;
}
.skills{
  padding-top: 80px;
  pointer-events: all;
}
.card-content {
  height: 100%;
  border-bottom: 0px solid white;
  background: linear-gradient(to top, #222, #0b0b0b);
  border-radius: 32px;
  overflow: hidden;
}
.card-header {
  padding: 12px;
  display: flex;
  align-items: center;
  color: gray;
  font-size: 32px;
  font-family: Sans;
  border-bottom: 0px solid white;
}
.icon {
  width: 60px;
  height: 60px;
  margin-right: 8px;
  font-size: 1.25rem;
  border-radius: 32px;
}
.card-header span {
  padding-left: 16px;
}
.card-header * {
  color: white;
}
.card-bg{
  width: 100%;
  height: 100%;
}
.continue{
  padding-top: 210px;
  display: block;
  width: 100%;
  pointer-events: all;
  justify-content: center;
  white-space: pre-line;
  padding-bottom: 300px;
}
.continue-1{
  width: 100%;
}
.continue-2{
  width: 100%;
}
.glass-4{
  position: absolute;
  display: flex;
  margin-top: -210px;
  margin-left: 250px;
  pointer-events: none;
}
.end{
  display: flex;
  width: 100%;
  justify-content: center;
}
.end p{
  font-size: 20px;
  font-family: FreeMono;
  color: white;
}
.nuxt-word{
  color: #00dc82;
}
.sponsor{
  display: block;
  align-items: center;
  padding-top: 400px;
  width: 100%;
}
.sponsor-top{
  display: flex;
  justify-content: center;
  width: 100%;
}
.sponsor-header{
  color: white;
  font-size: 56px;
  font-family: FreeMono;
  margin-top: -166px;
}
.glass-5{
  position: absolute;
  display: flex;
  margin-top: -200px;
}
.electricborder{
  background-color: black;
  margin: 0 auto;
  border-radius: 16px;
  width: 1200px;
  height: 400px;
  pointer-events: all;
}
</style>

<script setup lang="ts">
import GlassSurface from "../src/component/GlassSurface/GlassSurface.vue";
import LightPillar from "../src/component/LightPillar/LightPillar.vue";
import ClickSpark from "../src/component/ClickSpark/ClickSpark.vue";
import DecryptedText from "../src/component/DecryptedText/DecryptedText.vue";
import ProfileCard from "../src/component/ProfileCard/ProfileCard.vue";
import CardSwap from "../src/component/CardSwap/CardSwap.vue";
import TrueFocus from "../src/component/TrueFocus/TrueFocus.vue";
import ElectricBorder from "../src/component/ElectricBorder/ElectricBorder.vue";
</script>