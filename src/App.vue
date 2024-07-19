<script setup lang="ts">
  import { Plus } from 'lucide-vue-next';
  import Card_Container from "./components/card-container.vue"
  import { ref } from 'vue';
  import Modal from "./components/modal.vue"

  const modal = ref<boolean>(false)
</script>

<template>
  <header class="flex justify-between items-end mb-5">
    <div>
      <h1 class="font-bold text-2xl">My Tasks</h1>
      <p class=" text-sm">Drag and Drop the tasks to update its status</p>
    </div>
    <button 
      class="flex gap-1 h-max py-2 px-3 bg-green-600/90 hover:bg-green-600 ease-linear duration-150 text-white rounded-md font-medium text-sm shadow-sm"
      @click="modal = !modal"
    >
      
      <Plus :size="20"/> Add Task
    </button>
  </header>

  <main class="flex gap-3">
      <Card_Container status="pending"/>
      <Card_Container status="progress"/>
      <Card_Container status="completed"/>
      <Card_Container status="cancelled"/>
  </main>

  <!-- <Modal v-if="modal"/> -->
  <Modal/>
</template>
