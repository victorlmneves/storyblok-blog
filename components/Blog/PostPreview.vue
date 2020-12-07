<template>
  <div>
    <NuxtLink
      :to="id"
    >
      <article class="post">
        <div
          :style="{ 'background-image': `url(${thumb})` }"
          class="post__img">
        </div>
        <h1 class="post__title">{{ title}} </h1>
        <p class="post__description">{{ description }}</p>
      </article>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    thumb: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.post {

  &__img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 180px;
    overflow: hidden;
  }

  &__title {
    font-size: 1.4rem;
    font-weight: 700;
  }

  &__description {

  }
}
</style>
