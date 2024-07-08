<script setup lang="ts">
const user_token = useCookie("access_token");

onBeforeMount(() => {
  if (user_token) useRouter().push("/blogs");
});
</script>

<template>
  <GoogleOAuth />
</template>
