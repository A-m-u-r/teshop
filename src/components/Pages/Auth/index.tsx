"use client"
import React, {useEffect, useState} from 'react';
import useStore from "@/store";
import styles from './style.module.css'
import LoginForm from "@/components/UI/LoginForm";
import {IUser} from "@/models/IUser";
import UserService from "@/services/UserServices";
import {getPosts} from "@/api/requests";
const Auth: React.FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const {user, isAuth, isLoading, logout, checkAuth} = useStore();

   useEffect(() => {
        if (localStorage.getItem("token")) {
           checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    if (!isAuth) {
        return (
            <div>
                <LoginForm/>
                <button onClick={getUsers}>Получить пользователей</button>
                <button onClick={getPosts}>Получить</button>
            </div>
        );
    }

    return (
        <div>
            <h1>{isAuth ? `Пользователь авторизован ${user.email}` : 'Авторизуйтесь'}</h1>
            <h1>{user.isActivated ? 'Аккаунт подтвержден по почте' : 'Подтвердите аккаунт!'}</h1>
            <button onClick={() => logout()}>Выйти</button>
            <div>
                <button onClick={getUsers}>Получить пользователей</button>
            </div>
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
        </div>
    );
};

export default Auth;