import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import "./Home.css"

function Home() {
    const [user, setUser] = useState("")
    return (
        <div className="home">
            <div className="form__container">
                <div className="header">
                    <p>Pre-Order Form</p>
                </div>
                <div className="home__form">
                    <div className="form__p">
                        <p>Name</p>
                    </div>
                    <div className="form__input">
                        <TextField id="outlined-basic" placeholder="Name" variant="outlined" className="inputBox"
                            value={user} onChange={(e) => setUser(e.target.value)} />
                    </div>
                </div>
                <div className="home__form">
                    <div className="form__p">
                        <p>Email</p>
                    </div>
                    <div className="form__input">
                        <TextField id="outlined-basic" placeholder=" Email Address" variant="outlined" className="inputBox" value={user} onChange={(e) => setUser(e.target.value)} />
                    </div>
                </div>
                <div className="home__form">
                    <div className="form__p">
                        <p>Phone</p>
                    </div>
                    <div className="form__input">
                        <TextField id="outlined-basic" placeholder="Phone Number" variant="outlined" className="inputBox" value={user} onChange={(e) => setUser(e.target.value)} />
                    </div>
                </div>
                <div className="home__form">
                    <div className="form__p">
                        <p>Product Details</p>
                    </div>
                    <div className="form__input">
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            variant="outlined"
                            placeholder="Share Your Experience With The Product..."
                            className="inputBox"
                            value={user} onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                </div>
                <div className="home__button">
                    <Button type="submit" variant="contained" color="primary">
                        SUBMIT
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
