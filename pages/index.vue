<template>
  <div class="App">
    <AppHeader />

    <Description />

    <div class="container">
      <div class="users"><Users /></div>
      <div class="todos"><Todos /></div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import data from '@/data'
import Todo from '@/models/Todo'
import AppHeader from '@/components/AppHeader'
import Description from '@/components/Description'
import Users from '@/components/Users'
import Todos from '@/components/Todos'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppHeader,
    Description,
    Users,
    Todos,
    AppFooter
  },

  async fetch ({ store }) {
    // Here we are stubbing the initial data. In the real world, this
    // should be the response from the API Backend.
    const initialData = await data()

    Todo.create({ data: initialData })
  }
}
</script>

<style scoped>
.App {
  padding: 96px 48px 128px;
}

.container {
  display: flex;
  margin: 0 auto;
  width: 960px;
}

.users {
  padding-right: 48px;
  width: calc(100% / 3);
}

.todos {
  width: calc((100% / 3) * 2);
}
</style>
