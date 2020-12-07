<template>
  <header class="main-header">
    <nav class="main-header__nav">
      <ul class="main-header__links">
        <NuxtLink
          to="/"
          class="main-header__link"
          tag="li"
        >All Posts</NuxtLink>
        <NuxtLink
          to="/about"
          class="main-header__link"
          tag="li"
        >About</NuxtLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$main-header-bg-color: rgb(0, 75, 65);
$main-header-links-height: 100px;
$main-header-link-color: #fff;
$main-header-link-padding: 2.5rem 0;
$main-header-link-after-right-padding: .5rem;

.main-header {
  background-color: $main-header-bg-color;
  position: fixed;
  top: 0;
  width: 100%;

  &__nav {
  }

  &__links {
    align-items: center;
    display: flex;
    height: $main-header_links-height;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__link {
    color: $main-header-link-color;
    cursor: pointer;

    &:not(:last-child):after  {
      content: "|";
      padding: $main-header-link-after-right-padding;
    }
  }

  .nuxt-link-exact-active {
    text-decoration: underline;
  }
}
</style>
