import axios from 'axios'

export function login(data: {email: string, password: string}): Promise<void> {
    return axios.post('/api/auth/login', data)
}

export async function register(data: {username: string, password: string, email: string}): Promise<void> {
    return axios.post('/api/auth/register', data)

}
