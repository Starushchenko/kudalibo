<template>
  <div class="loading-card">
    <div class="loading-card__loader">
      <svg viewBox="0 0 80 80">
        <rect x="8" y="8" width="64" height="64"></rect>
      </svg>
    </div>
    <span class="loading-card__text">{{ ltext }}</span>
  </div>
</template>


<script>
  export default {
    props: ['ltext'],
  }
</script>

<style lang="scss">
  @import '~assets/scss/variables';
  
  .loading-card {
    padding: 25px 35px;
    justify-content: center;
    background: $gray-6;
    color: $text-gray-color;
    border: 1px solid $gray-4;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 150px;
  }
  
  .loading-card__loader {
    --duration: 3s;
    width: 44px;
    height: 44px;
    position: relative;
    display: inline-block;
    margin: 0 16px 20px;
    transform: scale(1.2);
    
    &:before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      display: block;
      background: $accent-color;
      top: 37px;
      left: 19px;
      transform: translate(-18px, -18px);
      animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
    }
    
    svg {
      display: block;
      width: 100%;
      height: 100%;
      
      rect,
      polygon,
      circle {
        fill: none;
        stroke: $main-text-color;
        stroke-width: 10px;
        stroke-linejoin: round;
        stroke-linecap: round;
      }
      
      polygon {
        stroke-dasharray: 145 (221 - 145) 145 (221 - 145);
        stroke-dashoffset: 0;
        animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }
      
      rect {
        stroke-dasharray: (256 / 4 * 3) (256 / 4) (256 / 4 * 3) (256 / 4);
        stroke-dashoffset: 0;
        animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }
      
      circle {
        stroke-dasharray: (200 / 4 * 3) (200 / 4) (200 / 4 * 3) (200 / 4);
        stroke-dashoffset: 75;
        animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }
    }
    
    &.triangle {
      width: 48px;
      
      &:before {
        left: 21px;
        transform: translate(-10px, -18px);
        animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
      }
    }
  }
  
  .loading-card__text {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
  
  @keyframes pathTriangle {
    33% {
      stroke-dashoffset: 74;
    }
    66% {
      stroke-dashoffset: 147;
    }
    100% {
      stroke-dashoffset: 221;
    }
  }
  
  @keyframes dotTriangle {
    33% {
      transform: translate(0, 0);
    }
    66% {
      transform: translate(10px, -18px);
    }
    100% {
      transform: translate(-10px, -18px);
    }
  }
  
  @keyframes pathRect {
    25% {
      stroke-dashoffset: 64;
    }
    50% {
      stroke-dashoffset: 128;
    }
    75% {
      stroke-dashoffset: 192;
    }
    100% {
      stroke-dashoffset: 256;
    }
  }
  
  @keyframes dotRect {
    25% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(18px, -18px);
    }
    75% {
      transform: translate(0, -36px);
    }
    100% {
      transform: translate(-18px, -18px);
    }
  }
  
  @keyframes pathCircle {
    25% {
      stroke-dashoffset: 125;
    }
    50% {
      stroke-dashoffset: 175;
    }
    75% {
      stroke-dashoffset: 225;
    }
    100% {
      stroke-dashoffset: 275;
    }
  }
</style>
