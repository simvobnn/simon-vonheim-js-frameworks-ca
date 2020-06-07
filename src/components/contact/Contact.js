import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("First name is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	text: yup
		.required()
});

function Contact() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.log("data", data);
	}

	return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" placeholder="Enter given name" ref={register} />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
            </Form.Group>
			<Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" placeholder="Enter surname" ref={register} />
                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter your email" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control type="textarea" name="text" defaultValue="10" placeholder="Enter your message" ref={register} />
                {errors.text && <ErrorMessage>{errors.text.message}</ErrorMessage>}
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
	);
}

export default Contact;