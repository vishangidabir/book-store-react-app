import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import BookServices from '../../components/Service/BookService'
import CartServices from '../Service/CartService'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import bookicon from './assests/bookicon.png'
import carticon from './assests/carticon.png'
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './Home.css'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            selectBoxValue: "none",
        };
    }

    componentDidMount() {
        this.fetchData();
        console.log(this.props)
    }

    fetchData() {
        BookServices.getAllBooks().then((response) => {
            this.setState({ books: response.data.data })
            console.log(response);
        })
    }

    addToCart(bookId) {
        const id = localStorage.getItem('Authorization')
        const userId = JSON.parse(id);
        console.log("UserId", userId)
        console.log(bookId);
        let object = {
            bookId: bookId,
            quantity: 1,
        }
        console.log("BookId", bookId)
        console.log(object);
        CartServices.addBookToCart(object).then((response) => {
            console.log(response);
            console.log(response.data.data.cartId)
            window.location.reload();
        })
    }

    bookCount = () => {
        BookServices.getCount().then((response) => {
            this.setState({ books: response.data.data })
            console.log(response);
        })
    }

    sortByLower = () => {
        console.log("Sort to low")
        BookServices.sortByLower().then((response) => {
            this.setState({ books: response.data.data })
        }).catch((err) => {
            console.log(err);
        })
    }

    sortByHigher = () => {
        console.log("High to low")
        BookServices.sortByHigher().then((response) => {
            this.setState({ books: response.data.data })
        }).catch((err) => {
            console.log(err);
        })
    }

    onSelect = (event) => {
        console.log("Hello")
        if (event.target.value === "low_to_high") {
            console.log("High")

            this.sortByLower()
        }
        else {
            this.sortByHigher()
        }
    }

    menuId = () => {
        'primary-search-account-menu';
        const renderMenu = (
            <Menu
                //   anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                //   id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            //   open={isMenuOpen}
            //   onClose={handleMenuClose}
            >
                <MenuItem >{localStorage.getItem('Name')}</MenuItem>
                {/* <Link to="/myorders"><h5><CardGiftcardIcon size="small" />My Orders</h5></Link> */}
                <Link to="/wishlist"><h5>My WishList</h5></Link>
                <Link to="/login">
                    {/* <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem> */}
                </Link>
            </Menu>
        );
    }

    // handleMenuClose = () => {
    //     setAnchorEl(null);
    //     handleMobileMenuClose();
    // };

    // handleMobileMenuClose = () => {
    //     setMobileMoreAnchorEl(null);
    // };

    render = () => {
        return (<>
            <div className="Appclass">
                <div className='logoandtitle'><img src={bookicon} />
                    <div className='bookstoreheading'>BookStore</div></div>
                <div className='searchbar'><input className='ip' type='search' /></div>
                <div className='logoandtitle'>
                    <div className='cartlogo'>
                        <div className='cartname'>Cart</div>
                        <Link to='/cart'>
                            <div><img src={carticon} /></div>
                        </Link>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={this.state.books.menuId}
                            aria-haspopup="true"
                            //   onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='mainbody'>
                <div className='headings' ><div className='bookheading'>Books
                    <div className='booksbody'></div>
                </div>
                    <div className='count'>{this.state.books.length}</div>
                    <FormControl sx={{ marginTop: "0rem", marginLeft: "60rem", marginbottom: "3rem" }}>
                        <InputLabel htmlFor="grouped-native-select">Sort by</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select" label="Grouping" onChange={this.onSelect}>
                            <option aria-label="None">None</option>
                            <option value="low_to_high" id="low_to_high" onClick={this.sortByLower}>Low to high</option>
                            <option value="high_to_low" id="high_to_low" onClick={this.sortByHigher}>high to low</option>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='booksbody'>
                {this.state.books && this.state.books.map((book, index) => (
                    <div className='books'>
                        <div className='bookimg'>
                            <img height="150" padding="1rem" width="50" src={book.bookImg} className='img' />
                            
                        </div>
                        <div className='base'>
                            <div className='title'>
                                <h3>{book.bookName}</h3>
                                <h5>{book.authorName}</h5>
                                <h4>Rs.{book.price}</h4>
                            </div>
                            <div >
                                <button type='submit' className='btn' onClick={() => this.addToCart(book.bookID)}>Add to cart</button>&nbsp;&nbsp;
                                <button className='wishlistbtn'>Wishlist</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
        );
    }
}
export default withRouter(Home);