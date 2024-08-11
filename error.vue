<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404">404 - Страница не найдена</h1>
    <h1 v-else>Ошибка: {{ error.statusCode }}</h1>
    <p v-if="error.statusCode === 404">Извините, но страница, которую вы ищете, не существует.</p>
    <router-link to="/">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({ statusCode: 404 })
    }
  }
}
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 50px;
}
</style>
