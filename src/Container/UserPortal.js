import React, { Component } from 'react';
import { Link } from "react-router-dom";


class UserPortal extends Component {
    constructor(props){
        super(props);

        this.state={
            userId:this.props.match.params.userId,
        }
    }

    componentDidMount(){
        
    }
    render() {
        return (
            <>
              <div className="container">
                <Link to={`/add-member/${this.state.userId}`}>
                <button>Add Member</button>
                </Link>
              </div>  
            </>
        );
    }
}

export default UserPortal;