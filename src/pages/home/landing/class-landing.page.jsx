import React from "react";

// Stateful and Stateless 
// functional(Stateless) and Class based (Stateful)

// export const LandingPage = (props) => {
//     console.log(props)
//     // lading page design 
//     return (
//         <div>
//             <p>Your name is: {props.name}</p>
//             <hr></hr>
//             <h4>Your address is: {props.address} </h4>
//         </div>
//     )
// }

export class LandingPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            test: "Hello there!!",
            phone: 9876543210,
            userList: []
        }
    }

    componentDidMount =() => {
        // api call 
            // data 
            let userApiData = [
                {
                    id: 1, 
                    name: "User One",
                    address: "Kathmandu",
                    email: "userone@test.com",
                    phone: "123123131231"
                }
            ]
            this.setState({
                ...this.state,
                userList: userApiData
            })
    }

    componentDidUpdate = () => {
        // exectures
    }

    componentWillUnmount = () => {
        // resources cleanup 
    }

    render(){
        // state change ===> infinite load 
        // state change 
        return (
            <div>
                <p>Your Name is: {this.props.name}</p>
                <h4>Your Address is: {this.props.address}</h4>
                <p>{this.state.test}</p>
                <p>{this.state.phone}</p>
                <table>
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // userlist 
                            // loop 
                                // tr   td 1, name, 
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LandingPage;