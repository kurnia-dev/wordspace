<script setup lang="ts">
import type { Blog, GetUserBlogsResponse } from "~/types/blogger.type";

const blogList = ref<Blog[]>([]);
const blogId = useCookie('blogId');
const getUserBlogs = async () => {
  try {
    const { data } = await useFetch<GetUserBlogsResponse>(
      "https://www.googleapis.com/blogger/v3/users/self/blogs",
      {
        headers: {
          Authorization: `Bearer ${useCookie("access_token").value}`,
        },
      }
    );

    blogList.value = data.value?.items ?? [];
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

onMounted(getUserBlogs);

const selectBlog = (id: string): void => {
  blogId.value = id;
  navigateTo('/articles')
}
</script>

<template>
  <ul>
    <li v-for="blog in blogList" :key="blog.id" @click="selectBlog(blog.id)">{{ blog.name }}</li>
  </ul>
</template>
