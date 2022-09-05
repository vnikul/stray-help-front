<script setup lang="ts">
import { reactive } from "vue"
import { ElInput } from "element-plus"
import { api } from "@/services/api"
import type { NewUserRequest } from "@/services/requests"

function onSubmit() {
    console.log("submitting")
    api.createUser(form)
}

const form: NewUserRequest = reactive({
    email: "",
    phone: "",
    password: "",
})
</script>

<template>
    <el-form v-model="form">
        <el-form-item label="email">
            <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="phone">
            <el-input v-model="form.phone" />
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>
