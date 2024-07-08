<script setup lang="ts">
import type { AuthCodeFlowSuccessResponse } from "vue3-google-signin";

const access_token = useCookie("access_token");

const onSuccess = async (
  res: AuthCodeFlowSuccessResponse & { authuser?: string }
) => {
  access_token.value = res.access_token;
};

const { login } = useTokenClient({
  onSuccess,
  scope: [
    "https://www.googleapis.com/auth/blogger",
    "https://www.googleapis.com/auth/blogger.readonly",
    "https://www.googleapis.com/auth/userinfo.profile",
  ],
});
</script>

<template>
  <button @click="() => login()">Continue With Google</button>
</template>
