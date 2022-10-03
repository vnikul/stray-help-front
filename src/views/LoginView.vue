<script lang="ts">
import { reactive } from "vue"
import type { NewUserRequest } from "@/services/requests"
import { useRouter } from "vue-router"
import { useUserStore } from "@/stores/userStore"

export default {
    setup() {
        const router = useRouter()

        const store = useUserStore()

        const form: NewUserRequest = reactive({
            email: "",
            phone: "",
            password: "",
        })

        async function onSubmit() {
            store.authorize(form)
            await router.push({ name: "home" })
            console.log("after push")
        }

        return { form, onSubmit, store }
    },
}
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
    <router-link to="/signin">Already have an account?</router-link>
</template>
