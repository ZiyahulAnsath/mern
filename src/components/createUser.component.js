import React from "react";
import axios from "axios";


// import ShowUser from "./showUser.component";



export default class CreateUser extends React.Component{
    constructor(props){
        super(props);

        // <ShowUser/>

        // this.userChange = this.userChange.bind(this); //this binding method is passing value in url

        // this.onChangeAge = this.onChangeAge.bind(this);     // this 3 binding method is connot passing the value in url  as a same time arrow function
        // this.onChangeCity = this.onChangeCity.bind(this);
        // this.onChangeName = this.onChangeName.bind(this);

        // this.userSubmit = this.userSubmit.bind(this);


        this.state = {
            _id:"",
            Name:"",
            Age:"",
            City:"",
            user:[],
            editData:[]
        }


    }

    userChange = (event) =>{
        const {name, value} = event.target;

        this.setState({
            [name] :value
        })
    }



    onChangeName =(e) =>
    {
        this.setState({
            Name:e.target.value
        });
    }

    onChangeCity = (e)  =>
    {
        this.setState({
            City:e.target.value
        });
    }

    onChangeAge = (e) =>
    {
        this.setState({
            Age:e.target.value
        });
    }


    userSubmit = () =>{
        // event.preventDefault();
        let data = {
            Name:this.state.Name,
            Age:this.state.Age,
            City:this.state.City
        }
        // console.log(data);
        axios.post("http://localhost:5500/users",data)
        .then(res => console.log(res));
    }

    // componentDidMount(){
    //     this.getAll();

    // }

    // getAll(){
    //     axios.get("http://localhost:5500/users")
    //     // .then(res =>  console.log(res.data));
    //     // .then(res =>{
    //     //     if(res.data.length > 0){
    //     //         this.setState({
    //     //             user:res.data.map(details => details.Name),
    //     //             Name:res.data[0].Name
    //     //         })
    //     //     }
    //     // })
        
    //     .then(res =>{
    //         this.setState({
    //             user:res.data
    //         })
    //     })
    // }

    // editData = data =>
    // {
       
    //     console.log(data);
    // }
   

    // componentWillReceiveProps(props){
    //         console.log(this.props.setData._id);
    //         if(props.setData._id != null)
    //         {
    //             this.setState({
    //                 _id:props.setData._id,
    //                 Name:props.setData.Name,
    //                 City:props.setData.City,
    //                 Age:props.setData.Age
    //             })
    //         }
    //     }
    

    render(){
        return(
            <div >
                <form className="mt-3" onSubmit={this.userSubmit} >
                    <div className="container-lg">
                        <div className="form-group">
                            <label >Name:</label>
                            <input type={"text"} placeholder="Enter the user name" className="form-control"
                            onChange={this.onChangeName}
                            // name ="Name"
                            value={this.state.Name}/>
                        </div>
                        <div className="form-group">
                            <label>City :</label>
                            <input type={"text"} className="form-control" placeholder="Enter the City"
                            onChange={this.onChangeCity}
                            // name ="City"
                            value={this.state.City}/>
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input type={"number"} className="form-control" placeholder="Enter the Age"
                            onChange={this.onChangeAge}
                            // name="Age"
                            value={this.state.Age}/>
                        </div>
                        <div className="mt-2">
                            <div className="row">
                                <div className="col-3 pr-1">
                                    <input type={"submit"} className="btn btn-primary" value={"Create User"} />
                                </div>
                                <div className="col px-4">
                                    <input type={"submit"} className="btn btn-danger" value={"Cnacel"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}