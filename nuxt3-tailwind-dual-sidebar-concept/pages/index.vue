<template>
  <div class="flex h-screen bg-gray-100">

    <!-- Thin Sidebar -->
    <aside class="bg-gray-900 text-white w-20 border-r border-gray-100 border-opacity-10 z-10">
      <!-- Sidebar content -->
      <div class="flex flex-col items-center justify-between h-screen py-4">
        <div class="flex flex-col">
          <button v-for="(item, index) in sidebarItems" :key="index" class="text-gray-400 hover:bg-gray-800 hover:text-white focus:text-white focus:outline-none rounded p-2 mb-2" @mouseenter="expandSidebarItem(index)">
            <div class="flex items-center">
              <!-- Dynamically reference icons from the 'icons' array -->
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path :d="item.icon"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </aside>


    <!-- Wide Sidebar -->
    <!-- <transition enter-active-class="transition-transform duration-300 ease-in-out" leave-active-class="transition-transform duration-300 ease-in-out">
        <aside v-if="expandSidebar !== -1" :class="{ 'w-60': expandSidebar !== -1, 'md:w-80': expandSidebar !== -1, 'translate-x-1 md:translate-x-0': true }" class="bg-gray-800 text-white" @mouseenter="expandSidebar = index" @mouseleave="collapseSidebar">
          <div class="flex flex-col items-start justify-start h-screen py-4 px-6">
            <button v-for="(item, index) in sidebarItems" :key="index" class="text-gray-400 hover:text-white focus:text-white focus:outline-none mb-6" @click="selectSidebarItem(item)">
              <div class="flex items-center">
                <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path :d="icons[index]"></path>
                </svg>
                <span class="ml-2">{{ item }}</span>
              </div>
            </button>
          </div>
        </aside>
      </transition> -->


    <!-- Wide Sidebar -->
    <!-- <aside :class="{'translate-x-0 ease-out duration-300': expandSidebar !== -1, '-translate-x-full ease-in duration-200': expandSidebar === -1 }" class="bg-gray-800 text-white w-60 md:w-80 transform translate-x-full transition-transform overflow-auto" @mouseenter="expandSidebar = index" @mouseleave="collapseSidebar">
        <! -- Sidebar content -- >
        <div class="flex flex-col items-start justify-start h-screen py-4 px-6">
          <button v-for="(item, index) in sidebarItems" :key="index" class="text-gray-400 hover:text-white focus:text-white focus:outline-none mb-6" >
            <div class="flex items-center">
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path :d="icons[index]"></path>
              </svg>
              <span class="ml-2">{{ item }}</span>
            </div>
          </button>
        </div>
      </aside> -->

    <!-- Wide Sidebar -->
    <aside :class="{ 'ml-0 ease-out duration-200': expandSidebar !== -1, '-ml-60 md:-ml-60 ease-in duration-200': expandSidebar === -1 }" class="bg-gray-800 text-white w-60 md:w-60 overflow-auto" 
      @mouseenter="expandSidebarItem(index)" @mouseleave="collapseSidebar">
      <!-- Sidebar content -->
      <!-- <div class="flex flex-col items-start justify-start h-screen py-4 px-4"> -->
        <transition 
          enter-active-class="transition-opacity duration-300"
          leave-active-class="transition-opacity duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0">
          <div class="flex flex-col items-start justify-start h-screen py-4 px-4">
            <div v-if="expandSidebar !== -1" class="text-white text-xl mb-2">{{ sidebarItems[expandSidebar].name }}</div>
            <div v-if="expandSidebar !== -1" v-for="(subItem, subIndex) in sidebarItems[expandSidebar].subItems" :key="subIndex" class="text-gray-300 hover:text-white px-2 text-xs">
              {{ subItem }}
            </div>
          </div>
        </transition>
      <!-- </div> -->
      <div class="hidden _flex flex-col items-start justify-start h-screen py-4 px-4">
        <button 
          v-for="(item, index) in sidebarItems" 
          :key="index" 
          class="text-gray-400 hover:text-white hover:bg-gray-700 focus:text-white focus:outline-none w-full rounded p-2 mb-2" 
          @mouseenter="expandSidebarItem(index)" 
          @click="selectSidebarItem(item.name)"
          >
          <div class="flex items-center">
            <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path :d="item.icon"></path>
            </svg>
            <span class="px-2 text-xs font-medium">{{ item.name }}</span>
          </div>

          <div v-if="expandSidebar === index">
            <div 
              v-for="(subItem, subIndex) in item.subItems" 
              :key="subIndex" 
              class="text-gray-300 hover:text-white px-2 text-xs">
                {{ subItem }}
            </div>
          </div>
        </button>
      </div>
    </aside>


    <!-- Main Content -->
    <div class="flex flex-col flex-1">
      <!-- Top Header -->
      <header class="bg-white shadow-md py-6 px-6">
        <!-- Header content goes here -->
        <div class="text-black font-extrabold">{{ pageTitle }}</div>
      </header>

      <!-- Page Content -->
      <main class="p-6">
        <!-- Page content goes here -->
        <h1>Welcome to the dashboard</h1>
        <p>This is a placeholder for the main content.</p>
      </main>
    </div>

    <!-- Right Sidebar -->
    <aside v-if="showRightSidebar" class="bg-white text-white w-20 border-l border-gray-100 border-opacity-10 shadow z-10">
      <!-- Sidebar content -->
      <div class="flex flex-col items-center justify-between h-screen py-4">
        <div class="flex flex-col">
          <!-- <div class="bg-white shadow-md py-6 px-6">
            X
          </div> -->
          <button v-for="(item, index) in sidebarItems" :key="index" class="text-gray-400 hover:text-white focus:text-white focus:outline-none mb-6" @mouseenter="expandRightSidebarItem(index)">
            <div class="flex items-center">
              <!-- Dynamically reference icons from the 'icons' array -->
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path :d="icons[index]"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </aside>


  </div>
</template>
      
<script setup>
import { ref } from 'vue';

const pageTitle = 'Dashboard: My Organisations'

const showRightSidebar = ref(false)
const expandSidebar = ref(-1);
// const icons = ['icon1.svg', 'icon2.svg', 'icon3.svg']; // Replace with your icon paths
// const icons = [
//   'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',  // Home
//   'M3 18v-2h18v2H3zm0-5v-2h18v2H3zm0-7h18v2H3z',  // Menu
//   'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 4h-4V7h4v4zm-6 10H7v-4h6v4zm2 0v-4h4v4h-4zm4-6h-4V7h4v4z' // Grid
// ];
// const sidebarItems = ['Dashboard', 'Analytics', 'Settings']; // Replace with your sidebar options


const sidebarItems = [
  {
    name: 'Dashboard',
    icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    subItems: ['Sub Item 1', 'Sub Item 2', 'Sub Item 3']
  },
  {
    name: 'Analytics',
    icon: 'M3 18v-2h18v2H3zm0-5v-2h18v2H3zm0-7h18v2H3z',
    subItems: ['Sub Item 4', 'Sub Item 5']
  },
  {
    name: 'Settings',
    icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 4h-4V7h4v4zm-6 10H7v-4h6v4zm2 0v-4h4v4h-4zm4-6h-4V7h4v4z',
    subItems: ['Sub Item 6', 'Sub Item 7', 'Sub Item 8', 'Sub Item 9']
  },
];


const selectSidebarItem = (item) => {
  // Handle the selection logic for sidebar items
  console.log('Selected item:', item);
};

const expandSidebarItem = (index) => {
  expandSidebar.value = index;
};

const collapseSidebar = () => {
  expandSidebar.value = -1;
};

const toggleRightSidebar = () => {
  showRightSidebar.value = !showRightSidebar.value;
};

</script>