<template>

  <div
      class="tag-suggestions animate__animated animate__fadeIn  "
      v-if="showSuggestions && suggestions?.length > 0"
  >
    <div :class="[ 'tag-suggestions-item',{ 'tag-suggestions__focus': activeIndex == index }]"
        v-for="(tag, index) in suggestions"
        @click="tags.handleItemClick(tag)"
        :key="tag.id"
    >
      {{ tag.label }}
    </div>
  </div>


  <div
      class="tag-suggestions animate__animated animate__fadeIn"
      v-if="showSuggestions && hintSuggestion "
  >
    <div class="tag-suggestions-item">
      press <b>enter</b> or <b>,</b>  to add tag
    </div>
  </div>



 </template>

<script>
import {useControlTags} from "../../../stores/tags";
import {storeToRefs} from "pinia/dist/pinia";

export default {
  name: "Suggestion",
  setup() {
    let tags=useControlTags();
    let {
      showSuggestions ,
      suggestions,
      activeIndex ,
      hintSuggestion

    }=storeToRefs(tags)

    return{
       showSuggestions ,
      suggestions,
      activeIndex ,
      hintSuggestion,
      tags,

    }
  },
}
</script>

<style scoped>

</style>