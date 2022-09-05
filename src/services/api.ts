import type { NewUserRequest } from "@/services/requests"
import type {
    NewUserResponse,
    PetListResponse,
    PetResponse,
} from "@/services/responses"

export const api = {
    createUser: async (form: NewUserRequest) => {
        console.log(form)
        const response = await makeRequest<NewUserResponse>(
            "POST",
            "http://localhost:8080/auth/signup",
            form
        )
        window.localStorage.setItem("jwt", response.token)
        window.localStorage.setItem("refresh", response.refresh_token)
        console.log(response)
        console.log({
            jwt: window.localStorage.getItem("jwt"),
            refresh: window.localStorage.getItem("refresh"),
        })
    },
    getAllPets: async () => {
        const response = await makeRequest<PetListResponse>(
            "GET",
            "http://localhost:8080/pets/all"
        )
        console.log(response)
    },
    getPetByID: async () => {
        console.log("getbyID")
        const response = await makeRequest<PetResponse>(
            "GET",
            "http://localhost:8080/pet/get/1ed06620-4cc0-6c62-a48e-df451d55d1c3",
            {},
            {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjA2MzEyMTQsImV4cCI6MTY2MDYzMzAxNCwicm9sZXMiOltdLCJ1c2VybmFtZSI6ImRhcm92QG1haWwuY29tIiwiaWQiOiIxZWNmYzU5NS1hMjg0LTY1YTgtYjdhYi04MTA3YzhiZGFlZmQiLCJlbWFpbCI6ImRhcm92QG1haWwuY29tIn0.wg0c0UbSntyA4EobgdocVO5P_oxjJoTt3cpovsfqKjBmxAdv4hXnWxmBMo300C3uCUKeKhlCrRZxgtt-LNmbQlI6xtxoPKx7U5GgwIv0-wyQJ8TZGUaMp8PQNfpOYAOKx-SS6CjuTFVBOMwdDsh4LkWcrhnSUdZMpliWPgrRU7m-hXxK8iRkft5qBUG2kIU6SZh92ATagKgyaV2dsHGZb5otKJhTZG9iYLaSPnsn2nSBHNoojk_nCgQ7WXwmRkSQPA9fkY1Z-ssrrK_HohHwRuRmKzWlaMX3n450MWu_uBYnliWDLmJ6bNW1Y4d9avhuHDrV4aFWB1ZNVxigK6EfaQ",
            }
        )
        console.log(response)
    },
}

async function makeRequest<T>(
    method: string,
    url: string,
    body: object = {},
    headers: object = {}
): Promise<T> {
    const request: RequestInit = {
        method: method,
        headers: { ...headers },
    }
    if (Object.keys(body).length !== 0) {
        request.body = JSON.stringify(body)
    }
    const response = await fetch(url, request)

    return await response.json()
}
