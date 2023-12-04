<script setup>
  function init() {
    const center = [45.04344559937834, 41.96065721112236];
    const myMap = new ymaps.Map('map', {
      center: center,
      zoom: 18,
    });
    const placemark = new ymaps.Placemark(
      center,
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: '../src/assets/icons/logo-ymap.svg',
        iconImageSize: [55, 55],
        iconImageOffset: [-30, -46],
      },
    );
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('rulerControl');
    myMap.geoObjects.add(placemark);
  }
  ymaps.ready(init);
</script>
<template>
  <div :class="$style.map">
    <div :class="$style.item" id="map"></div>
  </div>
</template>

<style module lang="scss">
  @import '@/assets/scss/base/variables.scss';
  .map {
    width: 100%;
    height: 250px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow:
      0 2px 4px #64798a56,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a31;
    margin-bottom: 4rem;

    @media (min-width: $tablet-size-land) {
      height: 500px;
    }
  }
  .item {
    width: 100%;
    height: 100%;
  }

  [class*='copyrights-pane'] {
    opacity: 0.4;
  }

  [class*='ground-pane'] {
    filter: hue-rotate(10deg);
  }
</style>
