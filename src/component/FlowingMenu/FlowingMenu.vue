<template>
  <div class="menu-container">
    <nav class="menu-nav">
      <div
          v-for="(item, idx) in items"
          :key="idx"
          class="menu-item"
          :ref="el => setItemRef(el, idx)"
      >
        <a
            class="menu-link"
            :href="item.link"
            @mouseenter="ev => handleMouseEnter(ev, idx)"
            @mouseleave="ev => handleMouseLeave(ev, idx)"
        >
          {{ item.text }}
        </a>

        <div
            class="marquee-container"
            :ref="el => (marqueeRefs[idx] = el)"
        >
          <div class="marquee-inner" :ref="el => (marqueeInnerRefs[idx] = el)">
            <div class="marquee-content animate-marquee">
              <template v-for="i in 8" :key="`${idx}-${i}`">
                <span class="marquee-text">{{ item.text }}</span>
                <div
                    class="marquee-image"
                    :style="{ backgroundImage: `url(${item.image})` }"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { gsap } from 'gsap';

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface Props {
  items?: MenuItemProps[];
}

withDefaults(defineProps<Props>(), {
  items: () => []
});

const itemRefs = ref<(HTMLElement | null)[]>([]);
const marqueeRefs = ref<(HTMLElement | null)[]>([]);
const marqueeInnerRefs = ref<(HTMLElement | null)[]>([]);

const animationDefaults = { duration: 0.6, ease: 'expo' };

const setItemRef = (el: HTMLElement | null, idx: number) => {
  if (el) itemRefs.value[idx] = el;
};

const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
  const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
  const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
  return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
};

const handleMouseEnter = (ev: MouseEvent, idx: number) => {
  const itemRef = itemRefs.value[idx];
  const marqueeRef = marqueeRefs.value[idx];
  const marqueeInnerRef = marqueeInnerRefs.value[idx];

  if (!itemRef || !marqueeRef || !marqueeInnerRef) return;

  const rect = itemRef.getBoundingClientRect();
  const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

  const tl = gsap.timeline({ defaults: animationDefaults });
  tl.set(marqueeRef, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef, marqueeInnerRef], { y: '0%' });
};

const handleMouseLeave = (ev: MouseEvent, idx: number) => {
  const itemRef = itemRefs.value[idx];
  const marqueeRef = marqueeRefs.value[idx];
  const marqueeInnerRef = marqueeInnerRefs.value[idx];

  if (!itemRef || !marqueeRef || !marqueeInnerRef) return;

  const rect = itemRef.getBoundingClientRect();
  const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

  const tl = gsap.timeline({ defaults: animationDefaults });
  tl.to(marqueeRef, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef, { y: edge === 'top' ? '101%' : '-101%' });
};
</script>

<style scoped>
.menu-container {
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.menu-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
}

.menu-item {
  flex: 1;
  position: relative;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 -1px 0 0 #fff inset;
}

.menu-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  color: white;
  font-size: 4vh;
  transition: color 0.3s;
}

.menu-link:hover,
.menu-link:focus-visible {
  color: #0b0b0b;
}

.menu-link:focus {
  color: white;
}

.marquee-container {
  position: absolute;
  inset: 0 0 0 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  background: white;
  transform: translateY(101%);
}

.marquee-inner {
  height: 100%;
  width: 200%;
  display: flex;
}

.marquee-content {
  height: 100%;
  width: 200%;
  display: flex;
  align-items: center;
  position: relative;
  will-change: transform;
  font-family: Sans;
  font-weight: bold;
}

.marquee-text {
  color: #0b0b0b;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 4vh;
  line-height: 1.2;
  padding: 1vh 1vw 0;
  white-space: nowrap;
  font-family: Sans;
}

.marquee-image {
  width: 96px;
  height: 64px;
  margin: 2em 2vw;
  padding: 1em 0;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
}

/* --------------------------- */
/*        Анимация бегущей строки       */
/* --------------------------- */
@keyframes marquee {
  from {
    transform: translateX(20%);
  }
  to {
    transform: translateX(-20%);
  }
}

.animate-marquee {
  animation: marquee 15s linear infinite;
}
</style>