import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import axios from 'axios'
//import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = (e) => {
        e.preventDefault();
        const configuration = {
            method : "post",
            url: "http://localhost:8004/add",
            data: JSON.stringify({
                name:user.name,
                username:user.username,
                email:user.email,
                phone:user.phone,
            }), headers: {
                'Access-Control-Allow-Origin': '*', // or specify the allowed origins
                'Content-Type': 'application/json', // Set the content type appropriately
             
              },
        };
        axios(configuration).then((result) => {console.log(result);
            window.confirm("user create! now click already have an account")
        }
        
        )
        .catch((error) => {console.log(error)});
        
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={(e) => addUserDetails(e)}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;