React
---------------------------------------------------------------------------------------------------

    Javascript based UX framework

    SPA-apps are built based on component arch.,

    Component
        is a basic unit of UI/UX app, a collection of components will make up
        the entire applications visibility and accessabiity.

    React supports three types of components
        (a) Class Component

            is any javascript class that inherits from React.Component

            class Dashboard extends React.Component {
                constructor(){
                    super();
                    this.state = {
                        title:"My Admin Dashboard",
                        today:new Date()
                    };
                }

                render(){
                    return (
                        <div>
                            <h1>{this.state.title}</h1>
                        </div>
                    );
                }
            }

            <Dashboard></Dashboard>

            From React.Component, our class component inherits
                (1) state
                (2) setState()
                (3) render()
                (4) componentDidMount()
                (5) componentDidUpdate()
                (6) and a few more life cycle methods..

            state 
                    is a variable that holds all the data related to a component, 
                    state is always monitored and when the state changes, the render() is invoked .
                    state is immutable. But it is replacable using setState() method

                    setState({title:"a new title"});
                
            render
                    is to return the DOM that shall be displayed for this component.
                    react supports JSX (JavaScript eXented Markup Language - JS-XML).
                    the render method is written in JSX.

                    .js
                        let userName = "Vamsy";
                        let pObj = document.createElement("p");
                        pObj.innerHTML = "Hello " + userName;

                    .jsx
                        let userName = "Vamsy";
                        let pObj = <p> Hello {userName} </p>

                    .js
                        let friends = ["Kiran","Murthy","Vamsy"];
                        let olObj = document.createElement("ol");

                        friends.forEach( fnm => {
                            let liObj = document.createElement("li");
                            liObj.innerHTML = fnm;
                            olObj.append(liObj);
                        });

                    .jsx
                        let friends = ["Kiran","Murthy","Vamsy"];
                        let olObj = (
                            <ol>
                                { friends.map( fnm => <li>{fnm}</li> ) }
                            </ol>
                        );
                    
        (b) Function Component

            is any function that returns DOM.

            const MessageBox = () => (
                <div>
                    <p>Here goes the message</p>
                    <button type="button">OK</button>
                </div>
            );

            <MessageBox></MessageBox>

        (c) High Order Component

            is a function that accepts a component and returns another component.

            const Authorize = inputComponent => {
                if(authorizationService.isLoggedIn()) {
                    return inputComponent;
                }else {
                    return loginComponent;
                }
            } 

    React Properties

        props is used to carry data from a parent component to a child component via
        attributes.

            const MessageBox = props => (
                <div>
                    <p>{props.msg}</p>
                    <button type="button">OK</button>
                </div>
            );

            class Dashboard extends React.Component {
                constructor(props){
                    super(props);
                    this.state = {
                        title:"My Admin Dashboard",
                        today:new Date(),
                        userName: props.userName
                    };
                }

                render(){
                    return (
                        <div>
                            <h1>{this.state.title}</h1>
                            <MessageBox msg="Hello World" />
                        </div>
                    );
                }
            }            

            <Dashboard userName="Vamsy" />

    JSX Rules

        (1) It is case sensitive.
        (2) all html inbuilt elements msut be in lower-case
        (3) all react component elements must be init-caps.
        (4) 'class' attribute in html is denied, use 'className' instead.
        (5) A variable can hold only one top-level element, and a function as well 
            can return only one top-level element
    

            let x = <p>Hello <span>World </span> </p>;
            let y = <p>Hello </p> <p>Hai</p>; //this is worng
            let z = <section> <p>Hello </p> <p>Hai</p> </section>; 

    Creating a react application

        npx create-react-app app-name
        (or)
        npm create vite

    Integrating Bootstrap

        npm i bootstrap

        node_modules/bootstrap/dist/css/bootstrap.min.css
        node_modules/bootstrap/dist/js/bootstrap.min.js
        
        import these two files into main.tsx.

    