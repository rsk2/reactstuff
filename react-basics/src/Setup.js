import {useEffect, useState} from 'react'

const link = "https://api.github.com/users"

const Setup = () => {
    const [users, setUsers]= useState([])

    const getUsers = async() => {
        const response = await fetch(link);
        const users = await response.json();
        setUsers(users);
        console.log(users)
    }

    useEffect( () => {
        getUsers();
    },[] );

    return(
        <>
        <h2>Github Users</h2>
        <ul> 
        {
            users.map((user) => {
                return(
                    <li>
                        <img src={user.avatar_url} alt={user.login}></img>
                        <div>
                            <h4>{user.login}</h4>
                            <a href={user.html_url}>Profile</a>
                        </div>
                    </li>   
                );
            })
        }
        </ul>
        </>
    )
}

export default Setup