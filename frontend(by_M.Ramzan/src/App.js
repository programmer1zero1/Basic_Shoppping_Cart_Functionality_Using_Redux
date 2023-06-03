import React, { useEffect } from 'react';
import { INCREAMENT,DECREAMENT,EMPTY } from './redux/actions/Actions';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  let selector = useSelector(state=>state.red)
  let dispatch = useDispatch()


  let productsData=[
    {
    "postId": 1,
    "id": 1,
    "price":100,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
    "postId": 1,
    "id": 2,
    "price":200,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
    "postId": 1,
    "id": 3,
    "price":300,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
    "postId": 1,
    "id": 4,
    "price":400,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
    "postId": 1,
    "id": 5,
    "price":500,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
    ]


    console.log(productsData);
    // console.log("The Data in INCREAMENT State is",selector);
    // console.log("The Data in DECREAMENT State is",selector);
    // console.log("The Data in EMPTY State is",selector);


    const totalPrice = selector.reduce((total, item) => total + item.price, 0)


   return(
    <>

     <p align="center"><h1>{selector.length}</h1></p>
     <p align="center"><h1>{totalPrice}</h1></p>

     <br></br>
     <hr></hr>
     <br></br>

     {selector.map(val=>{
            return(
                <>
                <div className="col-lg-3">
                <div className="card p-3" style={{ width: '18rem' }}>
                    <img src={`http://localhost:8000/src/uploads/${val.imagePath}`} className="card-img-top" alt="Loading Error"/>
                    <div className="card-body">
                        <h5 className="card-title">{val.id}</h5>
                        <p className="card-text">{val.price}</p>
                        <p className="card-text">{val.email}</p>

                        <div>
                           <button className='bg-primary' onClick={()=>dispatch(INCREAMENT(val))} >Add</button>
                           <button className='bg-danger'  onClick={()=>dispatch(DECREAMENT(val.id))} >Remove</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
   )
}
        )}
        <button className='bg-danger'  onClick={()=>dispatch(EMPTY())} >empty</button>


     <br></br>
     <hr></hr>
     <br></br>


    <div className="container">
        <h1>All Product Info</h1>
        <div className="row">
        { productsData.map(val=>{
            return(
                <>
                <div className="col-lg-3">
                <div className="card p-3" style={{ width: '18rem' }}>
                    <img src={`http://localhost:8000/src/uploads/${val.imagePath}`} className="card-img-top" alt="Loading Error"/>
                    <div className="card-body">
                        <h5 className="card-title">{val.id}</h5>
                        <p className="card-text">{val.price}</p>
                        <p className="card-text">{val.email}</p>
                        <p className="card-text">{val.body}</p>

                        <div>
                           <button className='bg-primary' onClick={()=>dispatch(INCREAMENT(val))} >Add</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
   )
}
        )}
        </div>
        </div>
        </>
        )
}
    
export default App;

