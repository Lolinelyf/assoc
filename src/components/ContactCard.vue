<script setup>
  const props = defineProps({
    id: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    phones: {
      type: Array,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
  });
  function alt(el) {
    return el.split('/').pop().split('.').shift();
  }
</script>

<template>
  <div :class="$style.card">
    <div :class="$style.header">
      <img :src="props.image" :alt="alt(props.image)" :class="$style.img" />
      <div :class="$style.info">
        <p :class="$style.name">{{ props.name }}</p>
        <p :class="$style.position">
          {{ props.position }}
        </p>
      </div>
    </div>
    <div :class="$style.text">
      <p>
        Телефон:
        <a
          :class="$style.phone"
          v-for="item in props.phones"
          :href="`tel:${item}`"
          >{{ item }}</a
        >
      </p>
      <p>{{ props.address }}</p>
      <p>
        Email:
        <a :href="`mailto:${props.mail}`">{{ props.mail }}</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" module>
  @import '@/assets/scss/base/variables.scss';
  .card {
    flex: 0 0 calc((100% - 2rem) / 2);
    display: flex;
    flex-flow: column wrap;
    padding: 1rem;
    border-radius: 6px;
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;
    margin-bottom: 2rem;
    background-color: #fff;
    @media (min-width: $tablet-size-port) {
      padding: 2rem;
    }

    @media (min-width: $tablet-size-port) {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
  .header {
    display: flex;
    flex-flow: row-reverse nowrap;
    margin-bottom: 1rem;

    @media (min-width: $tablet-size-port) {
      flex-flow: row nowrap;
      margin-bottom: 2rem;
    }
  }

  .img {
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 6px;
    overflow: hidden;
    object-fit: cover;
    margin-left: 1rem;
    box-shadow:
      0 2px 4px #64798a0a,
      0 4px 5px #64798a0a,
      0 1px 10px #64798a14;

    @media (min-width: $tablet-size-port) {
      flex: 0 0 140px;
      height: 140px;
      margin-bottom: 0;
      margin-right: 2rem;
      margin-left: 0;
    }
  }

  .info {
    flex: 0 0 calc(100% - 1rem - 100px);

    @media (min-width: $tablet-size-port) {
      flex: 0 0 calc(100% - 2rem - 140px);
    }
  }

  .name {
    color: $blue-color;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    @media (min-width: $tablet-size-port) {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }

  .position {
    color: #808185;
    font-size: 0.8rem;
    @media (min-width: $tablet-size-port) {
      font-size: 1rem;
    }
  }

  .text {
    width: 100%;
    color: #2e3036;
    font-size: 0.9rem;

    @media (min-width: $tablet-size-port) {
      font-size: 1rem;
    }

    & > p {
      display: flex;
      flex-wrap: wrap;
      &:not(:last-child) {
        margin-bottom: 0.5rem;
        @media (min-width: $tablet-size-port) {
          margin-bottom: 1rem;
        }
      }
      & > a {
        display: flex;
        padding-left: 0.5rem;
        @media (min-width: $tablet-size-port) {
          color: #669cff;
          transition: 0.15s;

          &:hover {
            transform: translateY(-2px);
          }
        }
      }
    }
  }
  .phone:not(:last-child)::after {
    content: ',';
    display: block;
    color: #2e3036;
  }
</style>
