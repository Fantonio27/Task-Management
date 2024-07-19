<script setup lang="ts">
    import Task from "./task-card.vue";
    import { type Dataform } from "../types/variables";

    const props = defineProps<{status: string, tasks: Dataform[] | []}>();

    const colorSets = {
        pending: {
            bgColor: "bg-yellow-400/60",
            buttonColor: "bg-yellow-700"
        },
        progress: {
            bgColor: "bg-violet-400/60",
            buttonColor: "bg-violet-900"
        },
        completed: {
            bgColor: "bg-green-400/60",
            buttonColor: "bg-green-700"
        },
        cancelled: {
            bgColor: "bg-red-400/60",
            buttonColor: "bg-red-700"
        },
    }

    const {bgColor, buttonColor} = colorSets[props.status as keyof typeof colorSets];
   
</script>

<template>
    <div :class="`${bgColor} flex-1 rounded-xl p-4 shadow-sm min-h-[480px]`">
        <h1 class="font-bold text-lg mb-3">{{status == "progress" ? 'In' : ''}} 
        {{status[0].toUpperCase() + status.substring(1)}} Tasks
        </h1>
        <div class="space-y-5">
            <Task v-for="task in tasks" :task="task" :color="buttonColor"/>
        </div>
    </div>
</template>