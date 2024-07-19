<script setup lang="ts">
</script>

<template>
    <form action="">
        <h1>Create Task</h1>
        <label for="id">Task ID</label>
        <input type="number" id="id">

        <label for="task_name">Task Name</label>
        <input type="text" id="task_name">

        <label for="description">Description</label>
        <input type="text" id="description">

        <label for="description">Status</label>
        <select>
            <option disabled value="">Please select one</option>
            <option>Pending</option>
            <option>Progress</option>
            <option>Completed</option>
            <option>Cancelled</option>   
        </select>

        <label for="date">Due Date</label>
        <input type="date" id="date">

        <button>Create Task</button>
    </form>
</template>