<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <div id="logoContainer"><img src="/logo-horizontal-yellow.png" /></div>
    </template>
  </Layout>
</template>

<style>
#logoContainer {
    width:100%;
    height:100%;
    padding:10px 0;
}
.title {
    flex-wrap:wrap;
}

.VPNavBarTitle {
    border-bottom:none !important;
}
</style>