import { defineStore } from 'pinia'
import {arrowDown, arrowUp, enter, esc, tags} from "../assets/const";
import { RemoveSpace} from "../utility";

export const useControlTags = defineStore('tags',   {
    state:()=>({
        tagsList: [],
        inputValue: "",
        showSuggestions: false,
        suggestions:[],
        initialTags:[],
        activeIndex: 0,
        hintSuggestion:false
    }),

    actions: {

        changValue(event) {
            // show Suggestions and closed hint if in last stage was opened
            this.hintSuggestion=false
            this.showSuggestions = true;
            const {value} = event.target;

            // filter suggestion by input text and previous tags
            let notSelectTags=  this.initialTags.filter(eachTag => !this.tagsList.includes(eachTag));
            this.suggestions = notSelectTags.filter((tag) => {
                return tag.label.toLowerCase().includes(value.toLowerCase());
            });

            // check if suggestion length was zero then open hint

            if (this.suggestions.length==0){
                this.hintSuggestion=true
            }


            // check if text value from input include "," then  must add new tags
            if (value.includes(",")) {
                const separate = value.split(",");
                this.addNewTag(separate[0]);
            }
        },


        addNewTag(value) {

            // check value from input or directly from dropdown

            if (typeof value == "object") {
                this.tagsList.push(value);
            } else {
                // value is not object and should id should generate from value
                const newTag = {
                    id: RemoveSpace(value) ,
                    label:value ,
                };
                this.tagsList.push(newTag);
            }

            // closed suggestion list and set default input value and update suggestion list after add new tag
            this.suggestions = this.suggestions.filter(item=>item!==value)
            this.showSuggestions = false;
            this.inputValue = "";

        },


        // if clicked on build tage must be removed also suggestion list must close
        removeTag(value){
            this.showSuggestions= false
            this.suggestions = [ ...this.suggestions,value]
            this.tagsList= this.tagsList.filter(item=>item!==value)
        },

        KeyDownInput(event) {


            //   key down up
              if (event.keyCode == arrowUp && this.activeIndex > 0) {
                this.activeIndex--;
            }   // key down down
            else if (event.keyCode == arrowDown && this.activeIndex + 1 < this.suggestions.length) {
                this.activeIndex++;
            }
            //   key down enter with dropdown and simple
            else if (event.keyCode == enter  ) {
                if (this.suggestions[this.activeIndex])
                    this.addNewTag(this.suggestions[this.activeIndex]);
                else {
                    this.addNewTag(this.inputValue);
                }
            }
            // On input escape will close suggestions
            else if (event.keyCode == esc) {
                this.showSuggestions = false;
            }
        },
        clickInput() {
            this.showSuggestions = !this.showSuggestions;
        },

        closeSuggestion() {
            this.showSuggestions=false
        },

        handleItemClick(tag) {
            this.showSuggestions = false;
            this.addNewTag(tag);
        },


        // get request default and company Name

        async getRequest(){
            try{
                await fetch("/tags")
                    .then((response) => response.json())
                    .then((data) => {this.suggestions=data;this.initialTags=data});


            }catch (error){

            }
        },
        async getDefaultRequest(){
            try{
                await fetch("/default-tags")
                    .then((response) => response.json())
                    .then((data) => this.tagsList=data);


            }catch (error){

            }
        }
    }

})
