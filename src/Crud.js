import React, {useState} from "react";

function Crud(){
    const list=[
        {
            id:1,
            name:"Biryani",
            price:159
        },
        {
            id:2,
            name:"Fried rice",
            price:120
        },
        {
            id:3,
            name:"Dosa",
            price:30
        }
    ]


const[lists,setList]=useState(list)
const[updateState,setUpdateState]=useState(-1)

return(
    <div className="App">
      <Addlist setList={setList} />
      <form onSubmit={handleUpdate}>
            <table>
                {
                    lists.map((e)=>(
                        updateState === e.id ? <Edit e={e} lists={lists} setList={setList}/>:
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.price}</td>

                            <td>
                                <button className="edit" onClick={()=>handleEdit(e.id)}>Edit</button>
                                <button className="delete" onClick={()=>handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
    </div>
)

function handleUpdate(a){
    a.preventDefault()
    setUpdateState(-1)
}

function handleEdit(id){
    setUpdateState(id)
}

function handleDelete(id){
    const newData=lists.filter((li)=>li.id != id)
    setList(newData)
    console.log(id);
}

}

function Edit({e,lists,setList}){
    function handleInput(a){
        const newList=lists.map(li=>(
            li.id === e.id ? {...li,[a.target.name]: a.target.value}:li
            
        ))
            setList(newList)
    }
    

    return(
        <tr>
            <td><input type="text" name="name" onChange={handleInput} value={e.id} /></td>
            <td><input type="text" name="name" onChange={handleInput} value={e.name} /></td>
            <td><input type="text" name="price" onChange={handleInput} value={e.price} /></td>
            <td><button className="update" type="submit">Update</button></td>
        </tr>
    )

    }
function Addlist({setList}){
    function handleSubmit(item){

        function random(){
            return(
                parseInt(Math.random()*100000)
            )
        }
        item.preventDefault();

        const name=item.target.elements.name.value;
        const price=item.target.elements.price.value;
        console.log(name,price);
        const newList={
            id:random(),
            name,
            price
        }
        setList((prevList)=>{

            return prevList.concat(newList)
        })

    }
    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name of the food"/>
            <input type="text" name="price" placeholder="Price of the food"/>
            <button type="submit" id="add">Add Item</button>
        </form>
    )

}
            
export default Crud;