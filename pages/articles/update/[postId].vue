<script setup lang="ts">
import type { BlogPost } from "~/types/blogpost.type";

const post = ref<BlogPost | null>();
const route = useRoute();

const getBlogPosts = async () => {
  try {
    const { data } = await useFetch<BlogPost>(
      `https://www.googleapis.com/blogger/v3/blogs/${useCookie('blogId').value}/posts/${route.params.postId}`,
      {
        headers: {
          Authorization: `Bearer ${useCookie("access_token").value}`,
        },
      }
    );

    post.value = data.value;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

onMounted(getBlogPosts);
</script>

<template>
  <h2>{{  post?.title }}</h2>
  <label>{{  post?.author }}</label>
  <span>{{  post?.published }}</span>
  <div v-html="post?.content" />
</template>
