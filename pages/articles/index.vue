<script setup lang="ts">
import Button from "primevue/button";
import type { BlogPost, GetBlogPostsResponse } from "~/types/blogpost.type";

const posts = ref<BlogPost[]>([]);

const getBlogPosts = async () => {
  try {
    const { data } = await useFetch<GetBlogPostsResponse>(
      `https://www.googleapis.com/blogger/v3/blogs/${useCookie('blogId').value}/posts`,
      {
        headers: {
          Authorization: `Bearer ${useCookie("access_token").value}`,
        },
      }
    );

    posts.value = data.value?.items ?? [];
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

onMounted(getBlogPosts);

const editPost = (postId: string): void => {
  navigateTo(`/articles/update/${postId}`);
};
</script>

<template>
  <Button label="New Article" @click="navigateTo('/articles/write')" />
  <ul>
    <li v-for="post in posts" :key="post.id" @click="editPost(post.id)">
      {{ post.title }}
    </li>
  </ul>
</template>
