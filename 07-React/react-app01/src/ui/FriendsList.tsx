import React from "react";

interface FriendsListState {
    friends:string[];
}

interface FriendsListProps {
    
}

export default class FriendsList extends React.Component<FriendsListProps,FriendsListState> {
    constructor(props:FriendsListProps){
        super(props);
        this.state={
            friends:["Vamsy","Murty","Kiran","Ramesh","Suresh"]
        };
    }

    render(){
        return (
            <section className="container">
                <h3>Friends List</h3>
                <ol>
                    {
                        this.state.friends.map( fnm => (
                            <li> {fnm} </li>
                        ) )
                    }
                </ol>
            </section>
        );
    }
}