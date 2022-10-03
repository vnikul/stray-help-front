import type { NewUserRequest, SignInRequest } from "@/services/requests"
import type {
    AuthResponse,
    PetListResponse,
    PetResponse,
} from "@/services/responses"

export const api = {
    createUser: async (form: NewUserRequest): Promise<AuthResponse> => {
        return await makeRequest<AuthResponse>(
            "POST",
            "http://localhost:8080/auth/signup",
            form
        )
    },
    getAllPets: async (): Promise<PetListResponse> => {
        return await makeRequest<PetListResponse>(
            "GET",
            "http://localhost:8080/pets/all"
        )
    },
    getPetByID: async (userID: string): Promise<PetResponse> => {
        return await makeRequest<PetResponse>(
            "GET",
            "http://localhost:8080/pet/get/1ed06620-4cc0-6c62-a48e-df451d55d1c3",
            {},
            {
                Authorization: "Bearer " + userID,
            }
        )
    },
    signIn: async (form: SignInRequest): Promise<AuthResponse> => {
        return await makeRequest<AuthResponse>(
            "POST",
            "http://localhost:8080/auth/login",
            form
        )
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
