import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMail } from '../../redux/actions/mailActions';

class Mailing extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            message: '',
            isMessageSentSuccesfully: false,
            isMessageSentFailed: true,
        }
    }

    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitMessageForm = (event) => {
        event.preventDefault();

        const newMessage = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        this.props.sendMail(newMessage, this.toggleMessageSentSuccessfully, this.toggleMessageSentFailed)
    }

    changeIsMessageSentSuccessfully = () => {
        this.setState({ isMessageSentSuccesfully: !this.state.isMessageSentSuccesfully });
    }

    changeIsMessageSentFailed = () => {
        this.setState({ isMessageSentFailed: !this.state.isMessageSentFailed });
    }

    toggleMessageSentSuccessfully = () => {
        setTimeout(this.changeIsMessageSentSuccessfully);
        setTimeout(this.changeIsMessageSentSuccessfully, 12000);
    }

    toggleMessageSentFailed = () => {
        setTimeout(this.changeIsMessageSentFailed);
        setTimeout(this.changeIsMessageSentFailed, 12000);
    }

    render() {
        const showHideSuccessMessage = this.state.isMessageSentSuccesfully ? "alert alert-dismissible alert-success mt-4" : "alert alert-dismissible alert-success d-none"
        const showHideFailureMessage = this.state.isMessageSentFailed ? "alert alert-dismissible alert-danger d-none" : "alert alert-dismissible alert-danger mt-4"

        return (
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-auto">
                <div className="card card-body">
                    <form onSubmit={this.submitMessageForm}>
                        <h1 className="display-4">Stay in touch</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" onChange={this.onInputChange} value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" onChange={this.onInputChange} value={this.state.email} />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" className="form-control" onChange={this.onInputChange} value={this.state.message}></textarea>
                        </div>
                        <button className="btn btn-dark">Submit</button>
                    </form>
                    <div className={showHideSuccessMessage}>
                        <button type="button" className="close" data-dismiss="alert" onClick={this.changeIsMessageSentSuccessfully}>&times;</button>
                        Your message has been received. You will hear from me soon. Thank you.
                    </div>
                    <div className={showHideFailureMessage}>
                        <button type="button" className="close" data-dismiss="alert" onClick={this.changeIsMessageSentFailed}>&times;</button>
                        Your message was unable to send. Please check your network.
                    </div>
                </div>
            </div>
        );
    }
}
Mailing.propTypes = {
    sendMail: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    mail: state.mail.message
})

export default connect(mapStateToProps, { sendMail })(Mailing);
