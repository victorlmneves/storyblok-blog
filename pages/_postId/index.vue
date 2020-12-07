<template>
  <article class="post" v-editable="blok">
    <div
      :style="{ 'background-image': `url(${thumb})` }"
      class="post__img">
    </div>
    <h1 class="post__title">{{ title}} </h1>
    <p class="post__description">{{ content }}</p>
  </article>
</template>

<script>
export default {
  mounted () {
    console.log(this.$storybridge)
    this.$storybridge.on(['title', 'asset', 'image', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  },

  asyncData(context) {
    return context.app.$storyapi.get(`cdn/stories/blog/${context.params.postId}`, {
      version: 'draft',
    })
    .then(res => {
      return {
        blok: res.data.story.content,
        title: res.data.story.content.title,
        content: res.data.story.content.content,
        thumb: res.data.story.content.thumb.filename
      }
      // return {
      //   posts: res.data.stories.map(post => {
      //     return {
      //       id: post.slug,
      //       title: post.content.title,
      //       description: post.content.description,
      //       content: post.content.content,
      //       thumb: post.content.thumb.filename
      //     }
      //   })
      // }
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
$post-top-margin: 140px;

.post {
  margin-top: $post-top-margin;

  &__img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    overflow: hidden;
  }

  &__title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
    margin-top: 1.8rem;
  }

  &__description {
    white-space: pre-line;
  }
}
</style>
