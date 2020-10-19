import React, { Component } from "react";

import {
	Row,
	Col,
	Card,
	CardBody,
	Input,
	//    Fade,
	//   Alert,
	Label,
} from "reactstrap";

// Redux
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
// Loader
import Loader from "../components/Loader";

// actions
// import images
import logoSm from "../images/logo.png";

class Login extends Component {
	state = {
		fadeIn: true,
		visible: true,
		submit: false,
	};
	alertFadeIn = () => {
		this.props.clearErrors();
		this.setState({
			fadeIn: this.state.fadeIn,
		});
	};
	onOnceSubmit = (formValues) => {
		// this.props.login(formValues);
		// { <Loader /> }
		this.setState({
			submit: !this.state.submit,
		});
	};
	renderInput = ({ input, type, name, placeholder, id, label }) => {
		return (
			<div>
				<Label> {label} </Label>{" "}
				<Input
					id={id}
					name={name}
					placeholder={placeholder}
					type={type}
					{...input}
					autoComplete='off'
				/>
			</div>
		);
	};

	render() {
		return (
			<React.Fragment>
				<div className='account-pages my-5 pt-5'>
					<div className='container'>
						<Row className='justify-content-center'>
							<Col md={8} lg={6} xl={5}>
								<div className='position-relative'>
									{" "}
									{/* {this.state.submit ? <Loader /> : null}{" "} */}
									{/* {this.state.submit===true?this.setState({submit:false}):null} */}
									<Card className='overflow-hidden'>
										<div className='bg-primary'>
											<div className='text-primary text-center p-4'>
												<h5 className='text-white font-size-20'>
													Welcome Back!
												</h5>{" "}
												<p className='text-white-50'>
													Sign in to continue to
													KSP JobFinder.{" "}
												</p>
												<Link
													to='/home'
													className='logo logo-admin'>
													<img
														src={logoSm}
														height='60'
														alt='logo'
													/>
												</Link>{" "}
											</div>{" "}
										</div>
										<br/><br/>
										<CardBody className='p-4'>
											<div className='p-3'>
												<form>
													<div className='form-group'>
														<Field
															name='email'
															component={
																this.renderInput
															}
															label='Email-Id'
															type='email'
															id='exampleEmail'
															placeholder='something@idk.cool'
														/>
													</div>{" "}
													<div className='form-group'>
														<Field
															name='password'
															component={
																this.renderInput
															}
															label='Password'
															type='password'
															id='examplePassword'
															placeholder='Enter password'
														/>
													</div>
													<Row className='form-group'>
														<Col sm={6}>
															{" "}
															&nbsp;{" "}
														</Col>{" "}
														<Col
															sm={6}
															className='text-right'>
														{/* <a href="/page" style={{color:"white"}}> */}
															<button
																className='btn btn-primary w-md waves-effect waves-light'
																// type='submit'
																// onclick="location.href='/page'"
																// onclick={location.href='/page'}
																><a hef="/page1">LogIn</a>

															</button>{" "}
															{/* </a> */}
														</Col>{" "}
													</Row>{" "}
													<Row className='form-group mt-2 mb-0'>
														<div className='col-12 mt-4'>
															<Link to='#'>
																<i className='mdi mdi-lock'>
																	{" "}
																</i>{" "}
																Forgot your
																password ?
															</Link>{" "}
														</div>{" "}
													</Row>{" "}
												</form>{" "}
											</div>{" "}
										</CardBody>{" "}
									</Card>{" "}
								</div>{" "}
								<div className='mt-5 text-center'>
									<p>
										Don 't have an account ?{" "}
										<Link
											to='register'
											className='font-weight-medium text-primary'>
											{" "}
											Signup now{" "}
										</Link>{" "}
									</p>{" "}
									<p className='mb-0'>
										{" "}
										©{new Date().getFullYear()}
										&nbsp;KSP JobFinder{" "}
										<i className='mdi mdi-heart text-danger'>
											{" "}
										</i>{" "}
										{" "}
									</p>{" "}
								</div>{" "}
							</Col>{" "}
						</Row>{" "}
					</div>{" "}
				</div>{" "}
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		
	};
};
const wrapper = reduxForm({
	form: "login",
})(Login);

export default connect(mapStateToProps, {
	
})(wrapper);
