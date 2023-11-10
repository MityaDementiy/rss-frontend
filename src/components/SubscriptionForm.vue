<script setup lang="ts">
enum InterfaceTexts {
  Placeholder = 'Enter RSS feed URL',
  AddButton = 'Add Feed',
}
</script>

<template>
  <form class="form">
    <input type='url' :placeholder='InterfaceTexts.Placeholder' />
    <button type='submit'>{{ InterfaceTexts.AddButton }}</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  gap: 1rem;

  margin-bottom: 1rem;
}

</style>
