import {useState} from "react";
import data from "./data";

export default function Accordian(){
    const[selected,setSelected]=useState(null);
 
    function handleSingleSelection(currentID){
          setSelected(selected===currentID ? null : currentID);
    }
    return(
         <div className="wrapper">
            <div className="accordian"> 
              { data&& data.length>0 ?
                (data.map((dataItem) => (<div className="item">
                <div onClick = {() => handleSingleSelection(dataItem.id)} className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                    </div>
                    <div>
                        {
                            selected === dataItem.id ?
                            <div className="content">
                                {dataItem.answer}
                                </div>
                                :null
                        }
                        </div>
                    </div>))
                )
                    : (<div>No data found</div>)
            }
        </div>
    </div> 
    )
}