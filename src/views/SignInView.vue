<template>
    <el-form v-model="form">
        <el-form-item label="email">
            <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
    <router-link to="/login">Don't have an account?</router-link>
</template>

<script lang="ts">
import { useRouter } from "vue-router"
import type { SignInRequest } from "@/services/requests"
import { reactive } from "vue"
import { api } from "@/services/api"

export default {
    setup() {
        const router = useRouter()

        const form: SignInRequest = reactive({
            username: "",
            password: "",
        })
        async function onSubmit() {
            await api.signIn(form)
            console.log("before push")
            console.log(router)
            await router.push({ name: "home" })
            console.log("after push")
        }

        return { form, onSubmit }
    },
}
</script>

<style scoped>

</style>