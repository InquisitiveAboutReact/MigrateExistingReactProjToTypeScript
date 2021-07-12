import React, {useState} from "react";
import ShowItem from "./ShowItem";

function Item() {
   const [currentItem, setCurrentItem] = useState("");
   const [currentItem1, setCurrentItem1] = useState("");
   const [updatedItem, setUpdatedItemList] = useState([]);

   const handleOnChange = (e) => {
    setCurrentItem(e.target.value);
   };
   const handleOnChange1 = (e) => {
    setCurrentItem1(e.target.value);
   };

   const handleAddItem = () => {
    setUpdatedItemList([...updatedItem, { item : [...currentItem,...currentItem1] }]) ; 
    setCurrentItem("");
    setCurrentItem1("");
   };

    return (
        <div style={{margin:'10px'}}>
        <h4>Please Enter Items</h4>
            <input type="text" value={currentItem} onChange={handleOnChange}/> <br />
            <input type="text" value={currentItem1} onChange={handleOnChange1}/> <br />
            <button onClick={handleAddItem}>Add Items</button>
        <ShowItem updatedItem={updatedItem} setUpdatedItemList={setUpdatedItemList}/>
        </div>
    )
}

export default Item;
