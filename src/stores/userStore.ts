import { defineStore } from "pinia"
import type { SignInRequest } from "@/services/requests"
import { api } from "@/services/api"

export const useUserStore = defineStore({
    id: "user",
    state: (): User => ({
        jwt: "",
        refresh: "",
        id: "",
        name: "",
    }),
    getters: {
        isAuthorized: (state) => state.jwt !== "" && state.refresh !== "",
    },
    actions: {
        setJwt(jwt: string) {
            this.jwt = jwt
        },
        setUser(user: User) {
            this.jwt = user.jwt || ""
            this.refresh = user.refresh || ""
            this.id = user.id || ""
            this.name = user.name || ""
        },
        async authorize(form: SignInRequest) {
            const response = await api.signIn(form)
            this.jwt = response.token
            this.refresh = response.refresh_token
        },
    },
})

export interface User {
    jwt: string
    refresh: string
    id: string
    name: string
}
