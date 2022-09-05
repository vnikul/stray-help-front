export interface PetListResponse {
    items: PetResponse[]
}

export interface PetResponse {
    id: string
    name: string
    species: string
    user: UserResponse | null
    links: string[]
}

export interface UserResponse {
    id: string
    email: string
    accountID: string
    phone: string
}

export interface NewUserResponse {
    token: string
    refresh_token: string
}
