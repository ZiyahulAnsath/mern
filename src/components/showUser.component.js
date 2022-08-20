import React from "react";
import axios from "axios";



export default class ShowUser extends React.Component{

    constructor(props){
        super(props);

        // this.deleteUser = this.deleteUser.bind(this);

       

        this.state = {
            user :[],
            setData:[]

        };

    }

    componentDidMount(){
        this.getAll();
    }


    getAll(){
        axios.get("http://localhost:5500/users")
        .then(res =>{
            this.setState({user:res.data})
            // console.log(res.data);
        })
        .catch(err =>{ console.log(err);
        })
    }

    deleteUser = data =>{
        console.log(data);
        let option = window.confirm(`Are you sure want to delete the data...! ${data.Name}`)
        if(option){
            axios.delete(`http://localhost:5500/users/delete/${data._id}`)
            .then(res =>{
                console.log(res);
                this.getAll();
                
            })
        }
    }
   
    userSetData = data  =>{
        console.log(data);
        this.setState({
            setData:data
        })
    }
   
    // componentWillReceiveProps(props){
    //     console.log(props);
    // }

    render(){
        return(
            <div>
             <h4> Show User data</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.user.length > 0?
                        (
                            this.state.user.map(value => 
                                <tr key={value._id}>
                                    <td>{value.Name}</td>
                                    <td>{value.City}</td>
                                    <td>{value.Age}</td>
                                    <td><button className="btn btn-primary"
                                    onClick={() =>{
                                        // this.setData(value)
                                        this.userSetData(value)
                                    }}>
                                        Edit</button></td>
                                    <td><button className="btn btn-primary"
                                    onClick={() =>{
                                        this.deleteUser(value)
                                    }}>
                                            Delete</button></td>
                                </tr>
                            )
                        )
                        :
                        (
                            <tr>
                                <td>No Data..!</td>
                            </tr>
                        )
                    }
                </tbody>


            </table>
        </div>
        )
    }
}