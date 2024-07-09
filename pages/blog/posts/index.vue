<script setup lang="ts">
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
  navigateTo(`/posts/edit/${postId}`);
};
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id" @click="editPost(post.id)">
      {{ post.title }}
    </li>
  </ul>
</template>
