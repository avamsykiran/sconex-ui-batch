import { useEffect, useState } from "react";

const CounterFC = () => {
    let [units, setUnits] = useState<number>(0);
    let [packets, setPackets] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {setUnits(1); },1000);
    },[]);

    useEffect(() => {
        if(units<0 && packets===0){
            setUnits(0);
        } else if (units<0 && packets>0){
            setUnits(9);
            setPackets(packets-1);
        } else if (units===10){
            setUnits(0);
            setPackets(packets+1);
        } 
    },[units]);

    return (
        <div className="card p-2">
            <div className="card-body">
                <h3> {units} pieces and {packets} packs.</h3>
            </div>
            <div className="card-foot text-end">
                <button className="btn btn-sm btn-primary me-1" onClick={_e => setUnits(units+1)}> ++ ADD</button>
                <button className="btn btn-sm btn-danger" onClick={_e => setUnits(units-1)}> -- REMOVE</button>
            </div>
        </div>
    );
}

export default CounterFC;