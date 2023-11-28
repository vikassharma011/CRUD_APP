import react, { useState, useEffect } from 'react';
import axios from 'axios'
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
// import { getUsers, deleteUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8004/")
            .then((res) => res.json())
            .then((result) => {
                if (result) {
                    setUsers(result);
                } else {
                    console.log("Received undefined result from the API");
                }
            })
            .catch((err) => console.log(err));
    }, []);
    

    const deleteUserData = async (id) => {
        
        const configuration = {
            method : "delete",
            url: `http://localhost:8004/${id}`,
       
        };
        axios(configuration).then((result) => {console.log(result);
            window.confirm("user deleted")
        }
        
        )
        .catch((error) => {console.log(error)});
        
        navigate('/all');
    }

    // const getAllUsers = async () => {
    //     let response = await getUsers();
    //     setUsers(response.data);
    // }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}> Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;