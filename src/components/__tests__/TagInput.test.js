import { describe, it, expect ,beforeEach,test,vitest} from "vitest";
import {setActivePinia,createPinia} from 'pinia'
import {useControlTags} from "@/stores/tags";
 import TagInput from "../TagInput/index.vue";
 import {mount} from '@vue/test-utils'
import {createTestingPinia} from "@pinia/testing";


describe("tag,vue",()=>{
  let store = null
  let wrapper=null;
  beforeEach(()=>{

    wrapper=mount(TagInput,{
      global:{
        plugins:[createTestingPinia({
          createSpy:vitest.fn
        })]
      }
    })
  })
  test("html and store test  ",async ()=>{
    let input = wrapper.find("#input");
    store = useControlTags()

    await input.trigger('click');
    expect(store.clickInput).toHaveBeenCalled()

    await input.setValue('asa');
    expect(store.changValue).toHaveBeenCalled()

    await input.trigger('keydown', {
      key: 'enter'
    })
    expect(store.KeyDownInput).toHaveBeenCalled();

  })
})


describe("add inside value", () => {
  let store = null
  beforeEach(()=>{
    setActivePinia(createPinia());

    // create an instance of the data store
    // `useStore(pinia)`

    // create an instance of the data store
    store = useControlTags()

  })

  test('addTag',()=>{
    store.addNewTag( {
      id: "facebook",
      label: "Facebook",
    })
    expect(store.tagsList.length).toEqual(1)

  })

});



