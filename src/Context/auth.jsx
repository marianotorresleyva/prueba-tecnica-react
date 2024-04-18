import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const user = {
        id: 1,
        name: "John Doe",
        email: "john@mail.com",
        permissions: ["create", "update", "delete"],
        password: "123456"
    };

    const token = "123"

    const login = (email, password) => {
        if (email === user.email && password === user.password) {
            return token;
        }
        return null;
    }

    const logout = () => {
        return "Logged out";
    }

    const signUp = (name, email, password) => {
        return "User created";
    }

    const hasPermission = (permission) => {
        return user.permissions.includes(permission);
    }

    return (
        <AuthContext.Provider value={
            {
                user,
                login,
                logout,
                signUp,
                hasPermission
            }
        }>{children}</AuthContext.Provider>
    );
}

