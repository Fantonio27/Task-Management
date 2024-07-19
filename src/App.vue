<script setup lang="ts">
  import { Plus } from 'lucide-vue-next';
  import { ref, Teleport, onMounted} from 'vue';
  import { type Dataform } from './types/variables';
  import CardContainer from "./components/card-container.vue"
  import Modal from "./components/modal.vue"
  import { FetchData, SearchData} from './services/api';
  
  const modal = ref<boolean>(false)
  const tasks = ref<Dataform[] | []>([])

  const params = new URLSearchParams(window.location.search).get('id');

  onMounted(async() => {
    tasks.value = await FetchData();

    if(params){
      try{
          await SearchData(params);
          modal.value = true;
      }catch(e){
          modal.value = false;
      }
    }
  })

  function filterTask (status: string) {
    return tasks.value?.filter((task)=> task.status == status)
  }
</script>

<template>
  <header class="flex justify-between items-end mb-5">
    <div>
      <h1 class="font-bold text-2xl">My Tasks</h1>
      <p class=" text-sm">Drag and Drop the tasks to update its status</p>
    </div>
    <button 
      class="flex gap-1 h-max py-2 px-3 bg-green-600/90 hover:bg-green-600 ease-linear duration-150 text-white rounded-md font-medium text-sm shadow-sm"
      @click="modal = !modal">
      <Plus :size="20"/> Add Task
    </button>
  </header>

  <main class="flex gap-3">
      <CardContainer status="pending" :tasks='filterTask("pending")'/>
      <CardContainer status="progress" :tasks='filterTask("progress")'/>
      <CardContainer status="completed" :tasks='filterTask("completed")'/>
      <CardContainer status="cancelled" :tasks='filterTask("cancelled")'/>
  </main>

  <!-- Modal  -->
  <Teleport to="body">
    <div class="absolute top-0 bg-black/30 w-full h-screen flex items-center justify-center" v-if="modal">
      <Modal :id="params"/>
    </div>
  </Teleport>
</template>
