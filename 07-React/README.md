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

    React Class Component Life Cycle
    
        constructor()                           is used to initialize the state
            ↓
            render()                            generates the dom
                ↓
                componentDidMount()             is used to execute any task after the first rendering...!
                    ↓
                ---→ /* the component will be idle until 'setState' is called */
                |    /* when for any reason 'setState' is called */
                |                               ↓
                |                               render()                            re-generates the dom
                |                                   ↓
                |                                   componentDidUpdate()            is used handle side-effects
                |                                       ↓
                -----------------------------------------               

    React Hooks

        A hook is a reactjs function that is used to provide additional features to a function component.
        A hook can be used only inside a function component.
        A hook shall be called before executing (invoking or calling) any other task/function.

    React Life Cycle Hooks

        useState            this hook allows a function component to maintain state.
                            useState accepts the initial value of the state-attribute
                            and returns an array containing a reader/getter and a writer/setter.

                            let [x,setX] = useSTate<number>(0);

        useEffect           this hook allows a function component to define componentDidMount and componentDidUpdate.

                            useEffect(callBack);

                                the 'callBack' is executed after each and every rendering...!

                            useEffect(callBack,[]);

                                the 'callBack' is executed only once after the first rendering...!

                            useEffect(callBack,[dependencyVariables1,dependencyVAriables2,....]);

                                the 'callBack' is executed after each rendering only if the value of any one of the
                                dependencyVariables change.

    State Management At Application Level using - Redux

        Redux is simple application level state management tool.

        installation

            npm i @reduxjs/toolkit react-redux

        terms

            store       a store is a central object that holds all the data related to our app.
                        typically, one application will have only one store.

                        const store = configureStore(reducer : {}, middleware: callBack);

            reducer     is a pure javascript function
                        this function is to accept the existing state and an action
                        it returns the modified store according to the action.

                        const reducer = (state,action) => {
                            
                            //state is modified according to the incoming action.

                            returns modifiedAction;
                        }

            action      is an object that represents a task to be performed by a reducer.

                        type property of the action object representing the task

                        payload property of the action that carries the data needed to execute the task

                        eg: addContactAction = { type:"ADD_CONTACT" ,payload:contactObject }
                        eg: delContactAction = { type:"DEL_CONTACT" ,payload:contactId }

            middleware  is a layer of operations to be executed before an action is passed to 
                        a reducer.
            
            dispatch    is a built-in function of reduxf, that carries an action to the reducer.

        react-redux hooks

            useDispatch     is a hook that returns 'dispatch' function associated with the current store.

            useSelector     is a hook that is used extract required parts of the state.    

        redux provider from react-redux

            Provider        is a component that links the store with the 'App' component.

        redux archetecture

            store -OnChangeOfData---------------------------
            ↑                      |                       |
            |                      | useSelector           | useSelector
            |                      |                       |
            |                      ↓                       |
            |                   Component1                 ↓
            |                      |                    Component2
            |modifiedState         | useDispatch           | useDispatch
            |                      | dispatch(action)      | dispatch(action)
            reducer ←---(action)---|                       |
                    ←---(action)---------------------------|

    Integrating with rest-api using middleware 'thunk'

        'thunk' means a function returning another function.

        redux-thunk is a middle ware that executes action as a function.

        redux thunk archetecture

            store -OnChangeOfData---------------------------
            ↑                      |                       |
            |                      | useSelector           | useSelector
            |                      |                       |
            |                      ↓                       |
            |                   Component1                 ↓
            |                      |                    Component2
            |modifiedState         | useDispatch           | useDispatch
            |                      | dispatch(actionObj)   | dispatch(actionAsAFun)
            reducer |←-(actionObj)-|                       |
                    |                               |-----(thunk will execute actionAsAFun)-----------|
                    |                               |                                                 | 
                    |←--(waitAction)--------------- |   dispatch(watiActionObj);                      |  
                    |                               |   axiosCall                                     |  
                    |←--(succAction)--------------- |       |-success <- dispatch(successActionObj);  |  
                    |←--(errAction)---------------- |       |-error <- dispatch(errActionObj);        |
                                                    |-------------------------------------------------|
