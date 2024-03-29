<template>
  <div>
    <el-container class="body-height">
      <Menu></Menu>
      <el-container>
        <el-header class="g-header">
          <Header></Header>
        </el-header>
        <el-main class="g-main">
          <router-view @setPersonalMenu="setPersonalMenu"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Menu
  },
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
  },
  mounted() {
  },
}
</script>
<style lang="scss" scoped></style>
