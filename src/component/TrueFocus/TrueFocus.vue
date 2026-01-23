<script setup lang="ts">
import { motion } from 'motion-v';
import { computed, nextTick, onMounted, onUnmounted, ref, watch, useTemplateRef } from 'vue';

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  textSize?: string;
}

const props = withDefaults(defineProps<TrueFocusProps>(), {
  sentence: 'True Focus',
  manualMode: false,
  blurAmount: 5,
  borderColor: 'green',
  glowColor: 'rgba(0, 255, 0, 0.6)',
  animationDuration: 0.5,
  pauseBetweenAnimations: 1,
  textSize: '4.5rem'
});

const words = computed(() => props.sentence.split(' '));
const currentIndex = ref(0);
const lastActiveIndex = ref<number | null>(null);
const containerRef = useTemplateRef<HTMLDivElement>('containerRef');
const wordRefs = ref<HTMLSpanElement[]>([]);
const focusRect = ref({ x: 0, y: 0, width: 0, height: 0 });

let interval: ReturnType<typeof setInterval> | null = null;

watch(
  [currentIndex, () => words.value.length],
  async () => {
    if (currentIndex.value === null || currentIndex.value === -1) return;
    if (!wordRefs.value[currentIndex.value] || !containerRef.value) return;

    await nextTick();

    const parentRect = containerRef.value.getBoundingClientRect();
    const activeRect = wordRefs.value[currentIndex.value].getBoundingClientRect();

    focusRect.value = {
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    };
  },
  { immediate: true }
);

const handleMouseEnter = (index: number) => {
  if (props.manualMode) {
    lastActiveIndex.value = index;
    currentIndex.value = index;
  }
};

const handleMouseLeave = () => {
  if (props.manualMode) {
    currentIndex.value = lastActiveIndex.value || 0;
  }
};

const setWordRef = (el: HTMLSpanElement | null, index: number) => {
  if (el) {
    wordRefs.value[index] = el;
  }
};

onMounted(async () => {
  await nextTick();

  if (wordRefs.value[0] && containerRef.value) {
    const parentRect = containerRef.value.getBoundingClientRect();
    const activeRect = wordRefs.value[0].getBoundingClientRect();

    focusRect.value = {
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    };
  }

  watch(
    [() => props.manualMode, () => props.animationDuration, () => props.pauseBetweenAnimations, () => words.value],
    () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }

      if (!props.manualMode) {
        interval = setInterval(
          () => {
            currentIndex.value = (currentIndex.value + 1) % words.value.length;
          },
          (props.animationDuration + props.pauseBetweenAnimations) * 1000
        );
      }
    },
    { immediate: true }
  );
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<template>
  <div class="true-focus-container" ref="containerRef">
    <span
        v-for="(word, index) in words"
        :key="index"
        :ref="el => setWordRef(el as HTMLSpanElement, index)"
        class="true-focus-word"
        :class="{ active: index === currentIndex }"
        :style="{
        filter: index === currentIndex ? 'blur(0px)' : `blur(${blurAmount}px)`,
        transition: `filter ${animationDuration}s ease`,
        '--text-size' : props.textSize
      }"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
    >
      {{ word }}
    </span>

    <motion.div
        class="focus-highlight"
        :animate="{ x: focusRect.x, y: focusRect.y, width: focusRect.width, height: focusRect.height }"
        :transition="{ duration: animationDuration }"
        :style="{ '--border-color': borderColor, '--glow-color': glowColor }"
    >
      <span class="focus-corner focus-corner-top-left"></span>
      <span class="focus-corner focus-corner-top-right"></span>
      <span class="focus-corner focus-corner-bottom-left"></span>
      <span class="focus-corner focus-corner-bottom-right"></span>
    </motion.div>
  </div>
</template>

<style>
.true-focus-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.true-focus-word {
  position: relative;
  font-weight: 900;
  font-size: var(--text-size, 4rem);
  transition: filter 0.3s ease, color 0.3s ease-in-out;
  cursor: pointer;
  font-family: Sans;
  color: white;
  white-space: pre-line;
}

.true-focus-word:not(.active) {
  filter: blur(5px);
}

.true-focus-word.active {
  filter: blur(0);
}

.focus-highlight {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: content-box;
  pointer-events: none;
  border: none;
}

.focus-corner {
  position: absolute;
  width: 1rem;
  height: 1rem;
  border: 3px solid var(--border-color, #fff);
  filter: drop-shadow(0 0 4px var(--border-color, #fff));
  transition: none;
}

.focus-corner-top-left {
  top: -10px;
  left: -10px;
  border-right: 0;
  border-bottom: 0;
  border-top-left-radius: 3px;
}

.focus-corner-top-right {
  top: -10px;
  right: -10px;
  border-bottom: 0;
  border-left: 0;
  border-top-right-radius: 3px;
}

.focus-corner-bottom-left {
  bottom: -10px;
  left: -10px;
  border-top: 0;
  border-right: 0;
  border-bottom-left-radius: 3px;
}

.focus-corner-bottom-right {
  bottom: -10px;
  right: -10px;
  border-top: 0;
  border-left: 0;
  border-bottom-right-radius: 3px;
}
</style>