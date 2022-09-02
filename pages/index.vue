<template>
  <div>
    <button @click="log">
      ok
    </button>
  </div>
</template>
<script setup>
  console.log(this.$http)
</script>
