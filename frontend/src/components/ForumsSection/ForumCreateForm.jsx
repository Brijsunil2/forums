import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useCreateForumMutation } from "../../slices/forumsApiSlice";
import * as formik from "formik";
import * as yup from "yup";

const ForumCreateForm = () => {
  const [validate, setValidate] = useState(true);

  const { Formik } = formik;

  const formSchema = yup.object().shape({
    title: yup.string().required(),
    desc: yup.string().required(),
  });

  const navagate = useNavigate();
  // const dispatch = useDispatch();

  // const [createForum, { isLoading }] = useCreateForumMutation();

  const submitHandler = async (values) => {
    console.log(values);
    setValidate(true);

    // try {
    //   const res = await createForum({...values,  })
    // }
  };

  return (
    <Formik
      validationSchema={formSchema}
      onSubmit={(values) => submitHandler(values)}
      initialValues={{
        title: "",
        desc: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Forum title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Forum title"
                name="title"
                value={values.title}
                onChange={handleChange}
                isInvalid={errors.title && touched.title}
              />
              <Form.Control.Feedback type="invalid">
                {validate ? "Please enter in a title" : ""}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Forum description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                placeholder="Forum description"
                name="desc"
                value={values.desc}
                onChange={handleChange}
                isInvalid={errors.desc && touched.desc}
              />
              <Form.Control.Feedback type="invalid">
                {validate ? "Please enter in a description" : ""}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Create</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ForumCreateForm;
