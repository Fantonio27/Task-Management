<script setup lang="ts">
    import {Pen, Trash2} from "lucide-vue-next"
</script>

<template>
    <div class="relative bg-white/80 p-5 rounded-lg shadow-sm">
        <div class="flex gap-1 absolute right-0 -top-4">
            <div class="bg-yellow-600 rounded-full p-2 w-max">
                <Pen :size="20" color="white"/>
            </div>
            <div class="bg-red-500 rounded-full p-2 w-max">
                <Trash2 :size="20" color="white"/>
            </div>
 
        </div>
        <h1 class="text-lg font-bold">Prepare presentation slides</h1>
        <p class="text-sm leading-5">Create slides for the project presentation. include key points and visuals</p>
        <p class="text-right">Due Date: <b>31/05/2024</b></p>
    </div>
</template>