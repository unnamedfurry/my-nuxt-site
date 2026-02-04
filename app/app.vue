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
        width="76vw"
        height="4vw"
        border-radius="1.2vw"
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
          width="80vw"
          height="10vw"
          border-radius="1vw"
          class="glass-1"/>
    </div>
    <div class="my-projects">
      <p class="projects-header">My projects :3</p>
      <GlassSurface
          width="39vw"
          height="6vw"
          border-radius="1vw"
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
          width="32vw"
          height="6.6vw"
          border-radius="1vw"
          class="glass-3"/>
      <div class="cards-skills">
        <CardSwap
            :card-distance="60"
            :vertical-distance="90"
            :delay="3000"
            :skew-amount="6"
            easing="elastic"
            :pause-on-hover="false"
            class="skills"
            width="48vw"
            height="28vw"
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
    <div class="whyblocked">
      <div class="lendnodes-top">
        <p class="lendnodes-header">Meet my HSP :3</p>
        <GlassSurface
            width="30vw"
            height="6vw"
            border-radius="1vw"
            class="glass-5"/>
      </div>
      <div class="lendnodes">
        <ElectricBorder
            :color="'#FFD700FF'"
            :speed="0.6"
            :chaos="0.4"
            :thickness="4"
            class="electricborder"
            onclick="window.open('https://discord.gg/j6q34d6tnA', '_blank')"
        >
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
          textSize="5vw"
      />
      <TrueFocus
          sentence="I'll add new pages whenever inspiration strikes XD"
          :manualMode="true"
          :blurAmount="5"
          borderColor="yellow"
          :animationDuration="0.3"
          :pauseBetweenAnimations="1"
          class="continue-2"
          textSize="2.6vw"
      />
      <GlassSurface
          width="72vw"
          height="12vw"
          border-radius="1vw"
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
  width: 100%;
  height: 100%;
}
.clickspark{
  position: fixed;
  width: 100%;
  height: 100%;
}
.header{
  display: flex;
  align-items: center;
  justify-content: start;
  width: 76vw;
  height: 4vw;
  margin: 0 auto;
  padding-top: 1vw;
  z-index: 100;
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
  width: 2.4vw;
  height: 2.4vw;
  padding: 0.8vw;
  pointer-events: none;
}
.header-about{
  display: flex;
  color: gold;
  font-size: 1.4vw;
  justify-content: center;
  align-items: center;
  font-family: Sans;
  font-weight: bold;
  margin-right: 45vw;
  pointer-events: none;
}
.buttons{
  display: flex;
  padding: 0.8vw;
  gap: 1vw;
}
.discord-button{
  display: flex;
  align-items: center;
  background-color: gold;
  justify-content: center;
  width: 6.4vw;
  height: 2.2vw;
  border-radius: 0.6vw;
  padding: 0.3vw;
}
.discord-icon{
  display: flex;
  width: 1.8vw;
  height: 1.8vw;
  padding-right: 0.2vw;
}
.discord-text{
  display: flex;
  font-size: 1vw;
  font-family: Sans;
  font-weight: bolder;
  margin-left: 0.2vw;
}
.github-button{
  display: flex;
  align-items: center;
  background-color: gold;
  justify-content: center;
  width: 6.4vw;
  height: 2.2vw;
  border-radius: 0.6vw;
  padding: 0.3vw;
}
.github-icon{
  display: flex;
  width: 1.8vw;
  height: 1.8vw;
  padding-right: 0.2vw;
}
.github-text{
  display: flex;
  font-size: 1vw;
  font-family: Sans;
  font-weight: bolder;
  margin-left: 0.2vw;
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
  margin-left: 10vw;
  color: white;
  font-size: 10vw;
  font-family: Sans;
}
.welcome-2{
  margin-top: 14vw;
  padding-left: 8vw;
  color: white;
  font-size: 3vw;
  font-family: FreeMono;
  white-space: pre-wrap;
}
.welcome-cursive{
  font-style: italic;
}
.about-me{
  display: flex;
  width: 80vw;
  height: 20vw;
  margin: 0 auto;
}
.short-about-me{
  position: relative;
  color: white;
  font-family: FreeMono;
  font-size: 1.7vw;
  text-align: center;
  padding: 1.2vw;
  z-index: 100;
}
.glass-1{
  position: absolute;
  display: flex;
  margin: 0 auto;
}
.my-projects{
  padding-top: 6vw;
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.projects-header{
  display: flex;
  color: white;
  font-size: 4vw;
  font-family: FreeMono;
  margin-left: 33vw;
  margin-bottom: 6vw;
  z-index: 100;
}
.glass-2{
  position: absolute;
  display: flex;
  margin-top: -10.8vw;
  margin-left: 30vw;
}
.cards-projects{
  display: flex;
  justify-content: center;
  position: relative;
  gap: 1.6vw;
}
.bot-card{
  pointer-events: all;
}
.site-card{
  pointer-events: all;
}
.my-skills{
  padding-top: 14vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 200px;
}
.skills-header{
  display: flex;
  color: white;
  font-size: 4vw;
  font-family: FreeMono;
  margin-bottom: 10vw;
  margin-left: 9.6vw;
  z-index: 100;
}
.glass-3{
  position: absolute;
  display: flex;
  margin-top: -6vw;
  margin-left: 8vw;
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
  background: linear-gradient(to top, #222, #0b0b0b);
  border-radius: 2vw;
  overflow: hidden;
}
.card-header {
  height: 2vw;
  padding: 1vw;
  display: flex;
  align-items: center;
  color: gray;
  font-size: 1.8vw;
  font-family: Sans;
}
.icon {
  width: 2.6vw;
  height: 2.6vw;
  margin-right: 0.4vw;
  border-radius: 2vw;
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
  margin-top: 20vw;
  display: block;
  width: 100%;
  pointer-events: all;
  justify-content: center;
  white-space: pre-line;
  margin-bottom: 8vw;
}
.continue-1{
  width: 100%;
  z-index: 100;
}
.continue-2{
  width: 100%;
  z-index: 100;
}
.glass-4{
  position: absolute;
  display: flex;
  margin-top: -11vw;
  margin-left: 14vw;
  pointer-events: none;
}
.end{
  display: flex;
  width: 100%;
  justify-content: center;
}
.end p{
  font-size: 1.2vw;
  font-family: FreeMono;
  color: white;
}
.nuxt-word{
  color: #00dc82;
}
.whyblocked{
  display: block;
  align-items: center;
  padding-top: 20vw;
  width: 100%;
}
.lendnodes-top{
  display: flex;
  justify-content: center;
  width: 100%;
}
.lendnodes-header{
  color: white;
  font-size: 3vw;
  font-family: FreeMono;
  margin-top: -4vw;
  z-index: 100;
}
.glass-5{
  position: absolute;
  display: flex;
  margin-top: -5.4vw;
}
.electricborder{
  background-image: url("/lendnodes.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 0 auto;
  border-radius: 1vw;
  width: 74vw;
  height: 28vw;
  pointer-events: all;
  display: block;
  margin-top: 3vw;
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