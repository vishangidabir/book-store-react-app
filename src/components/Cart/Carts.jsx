import { Button, CardActions, CardContent, CardMedia, Typography, } from "@mui/material";
import React, { useEffect, useState } from 'react'
import bookicon from '../../components/Home/assests/bookicon.png'
import carticon from '../../components/Home/assests/carticon.png'
import deleteicon from "../Home/assests/delete.png"
import CartService from "../../components/Service/CartService";
import { Link } from 'react-router-dom';
import "./Carts.css";
import image from '../../assests/Half Girlfriend.jpeg';

function Carts(props) {
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    fetchCartDetails();
  }, []);

  const fetchCartDetails = () => {

    CartService.getCartDetails()
      .then((response) => {
        setCartDetails(response.data.data);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(cartDetails);


  // const orderFromCart = () => {
  //   alert("Order Successed");
  //   props.history.push({
  //     pathname: "/order",
  //   });
  // };

  // const deleteFromCart = (cartId) => {
  //   CartService.deleteCartItem(cartId).then((response) => {
  //     alert("deleted successfully");
  //   });
  // };

  // const updateQuantity = async (d, cartid) => {
  //   console.log(d)
  //   CartService.updateQuantity.then((response) => {
  //     alert("deleted successfully");
  //   })
  // }

  return (
    <>
      <div>
        <div className="Appclass">
          <Link to='/' ><div className='logoandtitle'><img src={bookicon} />
            <div className='bookstoreheading'>BookStore</div></div></Link>
          <div className='searchbar'><input className='ip' type='search' /></div>
          <div className='logoandtitle'>
            <div className='cartlogo'>
              <div className='cartname'>Cart</div>
              <div><img src={carticon} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className='heading'><strong>My Cart</strong>  </div>
          {cartDetails.map((cartItem) => {
            return (
              <>
                <div className='box'>
                  <div> <img src={image} />{cartItem.book.bookImg}</div>
                  <div className='innerbox'>
                    <div className='booktitle'>{cartItem.book.bookName}</div>
                    <div className='author'>{cartItem.book.authorName}</div>
                    <div className='price'>{cartItem.book.price}</div>
                    <div className='quantitychanger'>
                      {/* <div className='decbtn' onClick={() => updateQuantity(cartItem.book.quantity -= 1, cartItem.id)}><b>-</b></div> */}
                      <div className='quantity'>{cartItem.quantity}</div>
                      {/* <div className='incrementquantity' onClick={() => updateQuantity(cartItem.book.quantity += 1, cartItem.id)}>+</div> */}
                    </div>
                  </div>
                  {/* <div className='orderbtn'><button className='placeorderbtn' onClick={() => deleteFromCart(cartItem.id)} src={deleteicon}></button></div>
                <div className='orderbtn'><button className='placeorderbtn' onClick={() => orderFromCart(cartItem.cartId)} ></button></div> */}
                </div>
              </>
            )
          })}

        </div>
      </div>
    </>
  );
}

export default Carts;