<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
//search start
const searchIcon = ref(null)
const focusSearch = () => {
  searchIcon.value.style.color = '#0284c7'
  searchBarHistory.value.style.display = 'block'
}
const blurSearch = () => {
  searchIcon.value.style.color = '#aaa'
  searchBarHistory.value.style.display = 'none'
}
const searchHistories = [
  { img: new URL('./assets/img/user.png', import.meta.url).href, title: 'Title1', content: 'Test1'},
  { img: new URL('./assets/img/user.png', import.meta.url).href, title: 'Title2', content: 'Test2'},
  { img: new URL('./assets/img/user.png', import.meta.url).href, title: 'Title3', content: 'Test3'},
  { img: new URL('./assets/img/user.png', import.meta.url).href, title: 'Title4', content: 'Test4'},
]
const searchBarHistory = ref(null)
const searchValue = ref('')
//search end
</script>

<template>
  <div class="container m-auto">
    <!--nav start-->
    <nav class="flex w-full pt-4 align-middle bg-white h-20">
      <div class="searchbar w-68 ml-10 mt-2">
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-sky-600 mt-1 text-5xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" ref="searchIcon" class="h-6 w-6 searchIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" @focus="focusSearch" @blur="blurSearch" v-model="searchValue" id="search" class="w-56 border ml-3 rounded-full outline-none pl-10 pr-6 mb-4 text-sm focus:border-sky-600" placeholder="search">
        </div>
        <div class="searchHistory w-56 -mt-5 ml-8 bg-white rounded-xl hidden" ref="searchBarHistory">
        <div class="flex mx-2 my-2" v-for="item in searchHistories">
          <img :src="item.img" alt="" srcset="" class="w-10 h-10 rounded-full mt-1 ml-2">
          <div class="flex flex-col w-52 ml-4">
            <span class="text-oneBlack">{{ item.title }}</span>
            <span class="text-oneGray">{{ item.content }}</span>
          </div>
        </div>
        <hr>
        <div class="flex mx-2 mt-4 mb-4">
          <span class="bg-blue-600 border w-12 h-10 mt-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 mt-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <span class="w-48 mt-3 text-sm ml-1 max-w-7xl">Search for <span class="font-bold min-w-min-1 max-w-7xl">{{ searchValue }}</span></span>
        </div>
        </div>
      </div>
      <ul class="flex gap-2 ml-4 mt-3 h-12 -mt-1 align-middle">
        <li class="flex align-middle h-10 rounded-full w-32 mt-2 hover:bg-hoverBg hover:text-sky-600 transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2 ml-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <a href="#0" class="ml-2 mt-2">Homepage</a>
        </li>
        <li class="flex align-middle h-10 rounded-full w-36 mt-2 hover:bg-hoverBg hover:text-sky-600 transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2 ml-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <a href="#0" class="ml-2 mt-2">Connections</a></li>
        <li class="flex align-middle h-10 rounded-full w-36 mt-2 hover:bg-hoverBg hover:text-sky-600 transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2 ml-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <a href="#0" class="ml-2 mt-2">Connections</a></li>
        <li class="flex align-middle h-10 rounded-full w-36 mt-2 hover:bg-hoverBg hover:text-sky-600 transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2 ml-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <a href="#0" class="ml-2 mt-2">Notifications</a></li>
          <p class="mt-4">|</p>
        <li class="flex align-middle h-10 rounded-full w-24 mt-2 hover:bg-hoverBg hover:text-sky-600 transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2 ml-2 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <a href="#0" class="ml-2 mt-2">Tools</a></li>
      </ul>
      <div class="user w-52 ml-8 flex justify-between h-12 bg-userbg rounded-full">
        <img src="./assets/img/user.png" alt="" class="w-10 h-10 rounded-full ml-4 mt-1">
        <span class="w-24 ml-4 mr-8  align-middle mt-3">Ersad Basbag</span>
      </div>
    </nav>
    <!--nav end-->
  </div>
</template>
<style>
body {
  background-color: #F8F8F8;
}
#search {
  padding-top: 6px;
  padding-bottom: 6px;
}
.searchIcon {
  position: absolute;
  color: #aaa;
  margin-left: 50px;
  margin-top: 6px;
}
</style>