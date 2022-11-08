import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Button, CardActions, CardContent, CardMedia, Typography, } from "@mui/material";
import bookicon from '../../components/Home/assests/bookicon.png'
import carticon from '../../components/Home/assests/carticon.png'
import CartService from "../../components/Service/CartService";
import { Link } from 'react-router-dom';
import "./Carts.css";

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      selectBoxValue: "none",
    };
  }

  componentDidMount() {
    this.fetchData();
    console.log(this.props)
  }

  fetchData() {
    CartService.getCartDetails().then((response) => {
      this.setState({ carts: response.data })
      console.log(response.data);
    })
  }

  // fetchCartDetails() {
  //   CartService.getCartDetails()
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


  render = () => {
    return (<>
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
      <div className='cartsbody'>
        {this.state.carts && this.state.carts.map((cartItem, index) => (
          <div className='carts'>
            <div className='cartItemimg'>
              <img height="150" padding="1rem" width="50" src={cartItem.bookImg} className='img' />
            </div>
            <div className='base'>
              <div className='title'>
                <h3>{cartItem.bookName}</h3>
                <h5>{cartItem.authorName}</h5>
                <h5>Rs.{cartItem.price}</h5>
                <h5>Quantity</h5>
                <>
                  {/* <div class="wrapper">
                    <span class="minus" onClick={() => handleDecrement(cartItem.cartId, cartItem.quantity)}> - </span>
                    <span class="num" id="root" onChange={""}>{cartItem.quantity}</span>
                    <span class="plus" onClick={() => handleIncrement(cartItem.cartId, cartItem.quantity)}> + </span><br />
                  </div> */}
                </>
                <h5>Total Price<br />{cartItem.totalPrice}</h5>
              </div>
              <div >
              <Button  variant="outlined" color="secondary">Remove Item</Button>
              </div>
            </div>
          </div>
        ))}
        <Link to="/customer">
          <Button variant="contained" >Continue</Button>
        </Link>
      </div>

    </>
    );
  }
}
export default withRouter(Cart);