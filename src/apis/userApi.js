import api from "../utils/api";

export const loginWithEmail = async (email, password) => {
    const response = await api.post("/user/login", {
        email,
        password
    });

    if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        api.defaults.headers["authorization"] = `Bearer ${response.data.token}`;
    }

    return {
        status: response.status,
        data: response.data
    };
}

export const createUser = async (name, email, password) => {
    const response = await api.post("/user", {
        name,
        email,
        password
    });
    return response;
}