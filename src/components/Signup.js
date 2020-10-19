import React, { Component } from "react";

import {
    Row,
    Col,
    Card,
    CardBody,
    Input,
    Fade,
    Alert,
    Label,
    Button
} from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
// Redux
import { connect } from "react-redux";
import { input, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

// Loader
// import Loader from "../../components/Loader";

// // actions
// import { register } from "../../redux/actions/authActions";
// import { clearErrors } from "../../redux/actions/errorActions";

// import images
import logoSm from "../images/logo.png";

class Signup extends Component {
    state = { fadeIn: true, visible: true, submit: false };

    alertFadeIn = () => {
        this.props.clearErrors();
        this.setState({ fadeIn: this.state.fadeIn });
    };
    onOnceSubmit = (formValues) => {
        // this.props.register(formValues);
        this.setState({ submit: !this.state.submit });
    };
    renderInput = ({ input, type, name, placeholder, id, label }) => {
        return (
            <div>
                <Label>{label}</Label>
                <Input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    {...input}
                    autoComplete="off"
                />
            </div>
        );
    };

    render() {
        return (
            <React.Fragment>
                <div>
                <Col xl="3" lg="4" sm="6" className="m-b-30">
                  
                  {this.state.img_header ? (
                    <SweetAlert
                      title="JobFinder"
                      custom
                      customIcon={logoSm}
                      onConfirm={() => this.setState({ img_header: false })}
                    >
                      Backend was not attached to the form
                      Click on the LOGIN button to get started
                    </SweetAlert>
                  ) : null}
                </Col>
                    {this.props.error ? (
                        <Fade in={this.state.fadeIn}>
                            <Alert onClick={this.alertFadeIn} color="danger">
                                <Row>
                                    <Col
                                        xs="12"
                                        style={{
                                            textAlign: "center",
                                        }}
                                    >
                                        {this.props.error}
                                    </Col>
                                </Row>
                            </Alert>
                        </Fade>
                    ) : (
                        ""
                    )}
                </div>
                <div className="account-pages my-5 pt-5">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <div className="position-relative">
                                    {/* {this.props.isLoading ? <Loader /> : null} */}
                                    {/* {this.state.submit ? <Loader/>: null} */}

                                    <Card className="overflow-hidden">
                                        <div className="bg-primary">
                                            <div className="text-primary text-center p-4">
                                                <h5 className="text-white font-size-20">
                                                    Welcome
                                                </h5>
                                                <p className="text-white-50">
                                                    Signup to get started with
                                                    KSP JobFinder.
                                                </p>

                                                <Link
                                                    to="/"
                                                    className="logo logo-admin"
                                                >
                                                    <img
                                                        src={logoSm}
                                                        height="60"
                                                        alt="logo"
                                                    />
                                                </Link>
                                            </div>
                                        </div>
<br/><br/>
                                        <CardBody className="p-4">
                                            <div className="p-3">
                                                <form
                                                    onSubmit={this.props.handleSubmit(
                                                        this.onOnceSubmit
                                                    )}
                                                >
                                                    <div className="form-group">
                                                    <label style={{marginRight:"3rem"}}>UserName</label>
                                                        <input
                                                            name="name"
                                                            component={
                                                                this.renderInput
                                                            }
                                                            label="Name"
                                                            type="text"
                                                            placeholder="Username here"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                    <label style={{marginRight:"3rem"}}>Email-Id</label>
                                                        <input
                                                            name="email"
                                                            component={
                                                                this.renderInput
                                                            }
                                                            label="Email-Id"
                                                            type="email"
                                                            id="exampleEmail"
                                                            placeholder="something@idk.cool"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                    <label style={{marginRight:"3rem"}}>Password</label>
                                                        <input
                                                            name="password"
                                                            component={
                                                                this.renderInput
                                                            }
                                                            label="Password"
                                                            type="password"
                                                            id="examplePassword"
                                                            placeholder="Enter password"
                                                        />
                                                    </div>

                                                    <Row className="form-group">
                                                        <Col sm={6}>&nbsp;</Col>
                                                        <Col
                                                            sm={6}
                                                            className="text-right"
                                                        >
                                                            <button
                                                                className="btn btn-primary w-md waves-effect waves-light"
                                                                // type="submit"
                                                                onClick={() => this.setState({ img_header: true })}
                                                            >
                                                                Register
                                                            </button>
                                                        </Col>
                                                    </Row>
                                                    <Row className="form-group mt-2 mb-0">
                                                        <div className="col-12 mt-4">
                                                            <p className="mb-0">
                                                                By registering
                                                                you agree to the
                                                                KSP JobFinder{" "}
                                                                <Link
                                                                    to="#"
                                                                    className="text-primary"
                                                                >
                                                                    Terms of Use
                                                                </Link>
                                                            </p>
                                                        </div>
                                                    </Row>
                                                </form>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="mt-5 text-center">
                                    <p>
                                        Already have an account ?{" "}
                                        <Link
                                            to="/"
                                            className="font-weight-medium text-primary"
                                        >
                                            {" "}
                                            Login now{" "}
                                        </Link>{" "}
                                    </p>
                                    <p className="mb-0">
                                        © {new Date().getFullYear()} AdMax
                                        &nbsp;KSP JobFinder{" "}
                                        <i className="mdi mdi-heart text-danger"></i>{" "}
                                        
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        // error: state.error.msg,
        // isLoading: state.auth.isLoading,
    };
};
const wrapper = reduxForm({
    form: "register",
})(Signup);

export default connect(mapStateToProps, {  })(wrapper);
