<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, useTemplateRef, watch, nextTick, type CSSProperties } from 'vue';

type ElectricBorderProps = {
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: CSSProperties;
};

const props = withDefaults(defineProps<ElectricBorderProps>(), {
  color: '#28FF85',
  speed: 1,
  chaos: 1,
  thickness: 2
});

// Используем стандартный хук для генерации безопасных ID в Nuxt/Vue3
const componentId = useId();
const filterId = `turbulent-displace-${componentId.replace(/[:]/g, '')}`;

function hexToRgba(hex: string, alpha = 1): string {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const int = parseInt(h, 16);
  return `rgba(${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}, ${alpha})`;
}

const svgRef = useTemplateRef('svgRef');
const rootRef = useTemplateRef('rootRef');
const strokeRef = useTemplateRef('strokeRef');

const updateAnim = () => {
  const svg = svgRef.value;
  const host = rootRef.value;
  if (!svg || !host) return;

  // Применяем фильтр к обводке
  if (strokeRef.value) {
    strokeRef.value.style.filter = `url(#${filterId})`;
  }

  const width = Math.round(host.clientWidth || host.getBoundingClientRect().width || 0);
  const height = Math.round(host.clientHeight || host.getBoundingClientRect().height || 0);

  // Настройка оффсетов
  const dyAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dy"]')) as SVGAnimateElement[];
  if (dyAnims.length >= 2) {
    dyAnims[0].setAttribute('values', `${height}; 0`);
    dyAnims[1].setAttribute('values', `0; -${height}`);
  }

  const dxAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dx"]')) as SVGAnimateElement[];
  if (dxAnims.length >= 2) {
    dxAnims[0].setAttribute('values', `${width}; 0`);
    dxAnims[1].setAttribute('values', `0; -${width}`);
  }

  const baseDur = 6;
  const dur = Math.max(0.001, baseDur / (props.speed || 1));

  const allAnims = svg.querySelectorAll('animate');
  allAnims.forEach(a => {
    a.setAttribute('dur', `${dur}s`);
    // Ключевой момент для Firefox: принудительный перезапуск
    try {
      (a as any).beginElement();
    } catch (e) {}
  });

  const disp = svg.querySelector('feDisplacementMap');
  if (disp) disp.setAttribute('scale', String(30 * (props.chaos || 1)));
};

watch(() => [props.speed, props.chaos], () => updateAnim(), { deep: true });

let ro: ResizeObserver | null = null;

onMounted(async () => {
  // Ждем гидратации
  await nextTick();

  if (rootRef.value) {
    ro = new ResizeObserver(() => updateAnim());
    ro.observe(rootRef.value);
  }

  // Небольшая задержка специально для Firefox
  setTimeout(() => {
    updateAnim();
  }, 50);
});

onBeforeUnmount(() => {
  if (ro) ro.disconnect();
});

// Стили те же самые
const inheritRadius = computed<CSSProperties>(() => {
  const radius = props.style?.borderRadius;
  if (radius === undefined) return { borderRadius: 'inherit' };
  return { borderRadius: typeof radius === 'number' ? `${radius}px` : radius };
});

const strokeStyle = computed<CSSProperties>(() => ({
  ...inheritRadius.value,
  borderWidth: `${props.thickness}px`,
  borderStyle: 'solid',
  borderColor: props.color
}));

const glow1Style = computed<CSSProperties>(() => ({
  ...inheritRadius.value,
  borderWidth: `${props.thickness}px`,
  borderStyle: 'solid',
  borderColor: hexToRgba(props.color, 0.6),
  filter: `blur(${0.5 + props.thickness * 0.25}px)`,
  opacity: 0.5
}));

const glow2Style = computed<CSSProperties>(() => ({
  ...inheritRadius.value,
  borderWidth: `${props.thickness}px`,
  borderStyle: 'solid',
  borderColor: props.color,
  filter: `blur(${2 + props.thickness * 0.5}px)`,
  opacity: 0.5
}));

const bgGlowStyle = computed<CSSProperties>(() => ({
  ...inheritRadius.value,
  transform: 'scale(1.08)',
  filter: 'blur(32px)',
  opacity: 0.3,
  zIndex: -1,
  background: `linear-gradient(-30deg, ${hexToRgba(props.color, 0.8)}, transparent, ${props.color})`
}));
</script>

<template>
  <div ref="rootRef" :class="['electric-border-container', className]" :style="style">
    <!-- SVG остается скрытым, но важен корректный ID -->
    <svg
        ref="svgRef"
        class="electric-border-svg"
        aria-hidden="true"
    >
      <defs>
        <filter :id="filterId" color-interpolation-filters="sRGB" x="-100%" y="-100%" width="300%" height="300%">
          <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="8" result="noise1" seed="1" />
          <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
            <animate attributeName="dy" values="500; 0" dur="6s" repeatCount="indefinite" />
          </feOffset>

          <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="8" result="noise2" seed="3" />
          <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
            <animate attributeName="dy" values="0; -500" dur="6s" repeatCount="indefinite" />
          </feOffset>

          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="6" result="noise3" seed="5" />
          <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
            <animate attributeName="dx" values="500; 0" dur="6s" repeatCount="indefinite" />
          </feOffset>

          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="6" result="noise4" seed="7" />
          <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
            <animate attributeName="dx" values="0; -500" dur="6s" repeatCount="indefinite" />
          </feOffset>

          <feComposite in="offsetNoise1" in2="offsetNoise2" operator="add" result="verticalNoise" />
          <feComposite in="offsetNoise3" in2="offsetNoise4" operator="add" result="horizontalNoise" />
          <feBlend in="verticalNoise" in2="horizontalNoise" mode="screen" result="combinedNoise" />

          <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>

    <div class="electric-border-effects" :style="inheritRadius">
      <div ref="strokeRef" class="electric-border-layer" :style="strokeStyle" />
      <div class="electric-border-layer" :style="glow1Style" />
      <div class="electric-border-layer" :style="glow2Style" />
      <div class="electric-border-bg-glow" :style="bgGlowStyle" />
    </div>

    <div class="electric-border-content" :style="inheritRadius">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.electric-border-container {
  position: relative;
  isolation: isolate;
}

.electric-border-svg {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  visibility: hidden;
}

.electric-border-effects {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.electric-border-layer {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  will-change: filter; /* Подсказка браузеру для оптимизации */
}

.electric-border-bg-glow {
  position: absolute;
  inset: 0;
}

.electric-border-content {
  position: relative;
}
</style>