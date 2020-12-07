<template>
  <section class="grid grid-cols-1 about" v-editable="blok">
    <h1 class="font-bold text-4xl about__title">{{title}}</h1>
    <p class="about__text">{{content}}</p>
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'

export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/about', {
      version: 'draft'
    })
    .then(res => {
      // console.log(res.data.stories)
      return {
        blok: res.data.story.content,
        title: res.data.story.content.title,
        content: res.data.story.content.content
      }
    }).catch((err) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
}
</script>


<style lang="scss" scoped>
$about-top-margin: 140px;

.about {
  margin-top: $about-top-margin;

  &__text {
    white-space: pre-line;
  }
}
</style>
