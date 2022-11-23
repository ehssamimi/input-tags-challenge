# input-tags-challenge
 
This template is a challenge to build tags using input
Technologies used in this exercise are [vue 3](https://vuejs.org/),[Mirage.JS](https://miragejs.com/) ,[Pinia](https://pinia.vuejs.org/),[Sass](https://sass-lang.com/),[vitest](https://vitest.dev/),..
 should help get you started developing with Vue 3 in Vite.

 
 ## Working Demo:
You can find out the working demo [here](https://input-tags-challenge.vercel.app/)

 i use to worked with sass and try to implement BEM cunstractor also this proaject developed in both dark and light mode :
 Light Mode:             
 
![tag-input-light](https://user-images.githubusercontent.com/47100310/203560797-23cf8305-e401-4a22-be53-645686a828c5.png)  

DarkMode

![dark mode](https://user-images.githubusercontent.com/47100310/203560744-491004dc-f22f-45fe-8533-5a88ae110f89.png)

 ## State manager:
 As viue suggestion this project  used to implement  [Pinia](https://pinia.vuejs.org/) for state managering and separate layer view and domain 

## Mock Server:
This project is used to  [Mirage.JS](https://miragejs.com/) to fetch first data 


## moreover
this project have littele moreover feature 
*add hint banner to press enter or , for add tag 
*removed tage after clicked on each tags  

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/);
this project used vitest to apply BDD test, used to  test store and relation between store and vue component , as check methodes add fire event and ...  

```sh
npm run test:unit
```
