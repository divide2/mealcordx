<template>
  <div>
    <p class="card">
      {{position}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['position']
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
