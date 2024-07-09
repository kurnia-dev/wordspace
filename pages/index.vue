<script setup lang="ts">
const user_token = useCookie("access_token");

onBeforeMount(() => {
  if (user_token.value) navigateTo("/spaces");
  else navigateTo('/auth')
});
</script>

<template></template>