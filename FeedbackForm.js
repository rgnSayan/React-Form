import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import "./FeedbackForm.css"

function FeedbackForm() {
    const [user, setUser] = useState("")
    const [value, setValue] = useState(0);

    return (
        <div className="feedbackForm">
            <div className="feedbackForm__container">
                <div className="header">
                    <p>Feedback Form</p>
                </div>
                <div className="feedbackForm__form">
                    <div className="feedbackForm__p">
                        <p>Name</p>
                    </div>
                    <div className="feedbackForm__input">
                        <TextField id="outlined-basic" placeholder="Name" variant="outlined" className="inputBox"
                            value={user} onChange={(e) => setUser(e.target.value)} />
                    </div>
                </div>
                <div className="feedbackForm__form">
                    <div className="feedbackForm__p">
                        <p>Email</p>
                    </div>
                    <div className="feedbackForm__input">
                        <TextField id="outlined-basic" placeholder=" Email Address" variant="outlined" className="inputBox" value={user} onChange={(e) => setUser(e.target.value)} />
                    </div>
                </div>

                <div className="feedbackForm__form">
                    <div className="feedbackForm__p">
                        <p>Rating</p>
                    </div>
                    <div className="feedbackForm__star">
                        <Box component="fieldset" borderColor="transparent">
                            <Typography component="legend"></Typography>
                            <Rating
                                name="size-large"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                size="large"
                            />
                        </Box>
                    </div>
                </div>

                <div className="feedbackForm__form">
                    <div className="feedbackForm__p">
                        <p>Tell Me About <br /> Our Website</p>
                    </div>
                    <div className="feedbackForm__input">
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
                <div className="feedbackForm__button">
                    <Button type="submit" variant="contained" color="primary">
                        SUBMIT
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FeedbackForm
