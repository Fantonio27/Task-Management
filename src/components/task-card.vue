<script setup lang="ts">
    import {Pen, Trash2} from 'lucide-vue-next';
    import { type Dataform } from '../types/variables';
    import { DeleteData } from '../services/api';
    
    const props = defineProps<{color: string, task: Dataform}>()

    const {id, task_name, description, due_date} = props.task

    const date = due_date.split('-').reverse().join('/')

    function taskDelete () {
        let text = `Are you sure you want to delete this task?\nTask ID: ${id}\nTask Name: ${task_name}`;
        
        if(confirm(text) == true){
            try{
                DeleteData(id);
                location.reload()
            }catch(error){
                console.log(error)
            }
        } 
    }
</script>

<template>
    <div class="relative backdrop-blur-sm bg-white/80 p-5 rounded-xl shadow-sm text-violet-950/90 font-medium" draggable="true">
        <div class="flex gap-1 absolute right-0 -top-4">
            <a :href="`?id=${id}`">
                <div :class="`${color} opacity-80 hover:opacity-100 duration-150 rounded-full p-2 w-max cursor-pointer`">
                    <Pen :size="20" color="white"/>
                </div>
            </a>
            <div class="bg-red-500 hover:bg-red-600 duration-150 rounded-full p-2 w-max cursor-pointer">
                <Trash2 :size="20" color="white" @click="taskDelete()"/>
            </div>
 
        </div>
        <h1 class="font-bold">{{task_name}}</h1>
        <p class="my-3 text-xs leading-5">{{description}}</p>
        <p class="text-xs text-right">Due Date: <b>{{date}}</b></p>
    </div>
</template>