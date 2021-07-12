import React from "react";
import { v4 as uuidv4 } from 'uuid';
import userConsumerComp from "./userConsumerComp";

function ShowItem(props) {
    //const id = props.updatedItem.key;

    const handleDeleteItem = (key) => {
      const updatedList = props.updatedItem.filter((itemObj)=>{
            return itemObj.key !== key;
        });
     props.setUpdatedItemList(updatedList);
    }

    return (
        <div>
        <userConsumerComp />
            <h3>Item Lists :</h3>
            <section style={{backgroundColor:"grey", width:'10%', margin:'5px', borderRadius:'6px'}}>
                {
                    props.updatedItem.map((itemObj)=>{
                        return (
                            <div key={uuidv4}>
                            <li>{itemObj.item}
                            <button onClick={()=>handleDeleteItem(itemObj.key)}>x</button>
                            </li>
                            </div>
                        )
                    })
                }
            </section>
            
        </div>
    )
}

export default ShowItem
