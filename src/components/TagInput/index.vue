<template>
  <div>
    <Header/>
    <div @click="handleContainerClick" class="tag-container">
          <div class="tag-main"  >
              <input
                  v-model="inputValue"
                  type="text"
                  class="tag-input"
                  placeholder="Add tags..."
                  id="input"
                  @input="tags.changValue"
                  @click="tags.clickInput"
                  @keydown="tags.KeyDownInput"
              />
<!--          suggestion list component-->
              <Suggestion/>
            <!--          tags list component-->
              <Tags/>

          </div>
    </div>
  </div>



</template>

<script>
import Header from './Header/index.vue'
import Tags from './Tags/Tags.vue'
import Suggestion from './Suggestion/Suggestion.vue'
  import {useControlTags} from "../../stores/tags";
import {storeToRefs} from "pinia";
 export default {
  components: {
    Header,
    Tags,Suggestion
  },


  mounted() {
    window.onclick = async () => {
       this.tags.closeSuggestion();}
    this.tags?.getRequest();
    this.tags?.getDefaultRequest();

  },

  methods: {
    handleContainerClick(e) {
      e.stopPropagation();
      this.tags.closeSuggestion();
    },


  },
  setup() {



    let tags=useControlTags();
    let {
      inputValue ,
      showSuggestions ,
      suggestions,
      activeItem ,

    }=storeToRefs(tags)


    return{

      inputValue ,
      showSuggestions ,
      suggestions,
      activeItem ,
      tags,

    }
  },
};
</script>

<style src="./style.scss" lang="scss" />
