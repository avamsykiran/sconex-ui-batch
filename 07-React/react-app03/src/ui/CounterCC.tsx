import React from "react";

interface CounterCCState {
    units: number,
    packets: number  //assuming 10 units make one packet
}

interface CounterCCProps {

}

export default class CounterCC extends React.Component<CounterCCProps, CounterCCState> {
    constructor(props: CounterCCProps) {
        super(props);
        this.state = {
            units: 0,
            packets: 0
        }
    }
    
    componentDidMount() {
        setTimeout(() => {this.setState({units:1}); },1000);
    }

    componentDidUpdate() {
        let { units, packets } = this.state;

        if(units<0 && packets===0){
            this.setState({units:0});
        } else if (units<0 && packets>0){
            this.setState({units:9,packets:packets-1});
        } else if (units===10){
            this.setState({units:0,packets:packets+1});
        } 
    }

    render() {
        let { units, packets } = this.state;
        return (
            <div className="card p-2">
                <div className="card-body">
                    <h3> {units} pieces and {packets} packs.</h3>
                </div>
                <div className="card-foot text-end">
                    <button className="btn btn-sm btn-primary me-1" onClick={_e => this.setState({ units: units + 1 })}> ++ ADD</button>
                    <button className="btn btn-sm btn-danger" onClick={_e => this.setState({ units: units - 1 })}> -- REMOVE</button>
                </div>
            </div>
        );
    }
}