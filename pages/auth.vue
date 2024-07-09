<script setup lang="ts">
const user_token = useCookie("access_token");

onBeforeMount(() => {
  if (user_token.value) navigateTo("/spaces");
});
</script>

<template>
  <div class="login-app-wrapper w-screen h-screen bg-bice_blue-900/15">
    <div
      class="max-w-[95vw] w-[clamp(800px,5vw,1080px)] rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        class="bg-white text-neutral-900 rounded-xl shadow-[0_2px_30px_15px_#2553b91a] overflow-hidden px-4 py-3"
      >
        <div class="v-card__loader hidden">
          <div class="progress h-2 bg-gray-200 rounded">
            <div class="progress-bar bg-blue-700 w-0 animate-ping"></div>
          </div>
        </div>

        <a href="/" class="text-white w-max">
          <img
            src="../assets/images/logo.png"
            alt="home"
            class="w-10 h-10 aspect-square"
          />
        </a>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div class="hidden md:block">
            <img
              src="../assets/images/writing-ilustration.jpg"
              alt="login-background"
              class="w-full rounded"
            />
          </div>

          <div class="w-full p-6">
            <h2 class="text-2xl font-bold mb-2">Welcome to WordSpace!</h2>
            <p class="text-lg mb-6">Creative Space for Your Content</p>

            <div class="flex mb-3">
              <GoogleOAuth />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
