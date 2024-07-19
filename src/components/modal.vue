<script setup lang="ts">
    import { ref } from 'vue';
    import { type Dataform } from '../types/variables';
    
    const dataform = ref<Dataform>({
        task_id: 0,
        task_name: "",
        description: "",
        status: "",
        due_date: "",
    })

    function submit(){
        console.log(dataform.value)
    }

    function DateToday () {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${year}-${month <= 9 ? "0"+ month : month}-${day}`
    }
</script>

<template>
    <div class="absolute bg-slate-200/80 backdrop-blur-sm p-10 rounded-xl shadow-md w-[400px]">
        <h1 class="font-bold uppercase text-2xl text-center">Create Task</h1>

        <form action="" class="grid text-sm text-slate-700" @submit.prevent="submit()">
            <label for="task_name" class="mt-3 mb-1">Task Name</label>
            <input type="text" id="task_name" class="rounded-md p-2" v-model="dataform.task_name">

            <label for="description" class="mt-3 mb-1">Description</label>
            <textarea type="text" id="description" class="rounded-md p-2" rows="4" v-model="dataform.description"></textarea>

            <label for="description" class="mt-3 mb-1">Status</label>
            <select class="rounded-md p-2"  v-model="dataform.status">
                    <option disabled value="">Please select one</option>
                    <option>Pending</option>
                    <option>Progress</option>
                    <option>Completed</option>
                    <option>Cancelled</option>   
            </select>

            <label for="date" class="mt-3 mb-1">Due Date</label>
            <input type="date" id="date" class="rounded-md p-2" :min="DateToday()" v-model="dataform.due_date">

            <button class="mt-5 bg-green-600/90 hover:bg-green-700 duration-150 text-white p-2 rounded-full" >Create Task</button>
        </form>
    </div>
</template>