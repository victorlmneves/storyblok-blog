<template>
  <div class="grid grid-cols-3 gap-4 posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :description="post.description"
      :thumb="post.thumb"
    />
  </div>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'

export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'draft',
      starts_with: 'blog/'
    })
    .then(res => {
      // console.log(res.data.stories[0].content.thumb)
      return {
        posts: res.data.stories.map(post => {
          return {
            id: post.slug,
            title: post.content.title,
            description: post.content.description,
            content: post.content.content,
            thumb: post.content.thumb.filename
          }
        })
      }
    }).catch((err) => {
      console.warn(err)
    })
  }
  // data() {
  //   return {
  //     posts: [
  //       {
  //         id: "my-first-post",
  //         title: "My first Post",
  //         description: "Text description of my first post",
  //         thumb: "https://res.cloudinary.com/vitorneves/image/upload/v1604866915/victorneves-static-images/terra_pura_anuncio01.jpg",
  //       },
  //       {
  //         id: "my-second-post",
  //         title: "My second Post",
  //         description: "Text description of my second post",
  //         thumb: "https://res.cloudinary.com/vitorneves/image/upload/v1604866915/victorneves-static-images/ficaat_app.jpg",
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

$posts-top-margin: 140px;

.posts {
  margin-top: $posts-top-margin;
}
</style>
