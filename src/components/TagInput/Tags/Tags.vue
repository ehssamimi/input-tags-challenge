<template>
  <div class="selected-tag" v-if="tags.tagsList?.length > 0">
      <span @click="tags.removeTag(tag)" class="selected-tag-item animate__animated animate__fadeIn" v-for="tag in tags.tagsList" :key="tag.id">
        {{ tag.label }}
      </span>
  </div>
</template>

<script>
import {useControlTags} from "../../../stores/tags";
export default {
  name: "Tags",
  setup() {
    let tags=useControlTags();
    return{tags}
  },
}
</script>

<style src="./style.scss" lang="scss" />
