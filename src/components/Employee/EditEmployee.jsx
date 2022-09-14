import React, { useState } from 'react';
import './Employee.css';
import { Button, Container, Row, Col, Form, Table } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const EditEmployee = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [employee, setEmployee] = useState({
    employee_no: '',
    full_name: '',
    application_date_from: '',
    application_date_to: '',
    approval_month_from: '',
    approval_month_to: '',
    payment_date_from: '',
    payment_date_to: '',
    approval_status: '',
  });

  const {
    employee_no,
    full_name,
    application_date_from,
    application_date_to,
    approval_month_from,
    approval_month_to,
    payment_date_from,
    payment_date_to,
    approval_status,
  } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/employee/${id}`, employee);
    navigate('/employee');
  };

  const loadEmployee = async () => {
    const employeeResult = await axios.get(
      `http://localhost:8080/employee/${id}`
    );
    setEmployee(employeeResult.data);
  };

  return (
    <Container>
      <Form
        className='shadow-lg p-3 mt-4 rounded'
        onSubmit={(e) => onSubmit(e)}
      >
        <Row>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Employee Number</Form.Label>
              <Form.Control
                required
                type='text'
                onChange={(e) => onInputChange(e)}
                value={employee_no}
                name='employee_no'
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type='text'
                onChange={(e) => onInputChange(e)}
                name='full_name'
                value={full_name}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Application Date From</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='application_date_from'
                value={application_date_from}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Application Date To</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='application_date_to'
                value={application_date_to}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Form.Group className='mb-3'>
              <Form.Label>Approval Month From</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='approval_month_from'
                value={approval_month_from}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Approval Month To</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='approval_month_to'
                value={approval_month_to}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Payment Date From</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='payment_date_from'
                value={payment_date_from}
              />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group className='mb-3'>
              <Form.Label>Payment Date To</Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => onInputChange(e)}
                name='payment_date_to'
                value={payment_date_to}
              />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group className='mb-3'>
              <Form.Label>Approval Status</Form.Label>
              <Form.Select
                required
                onChange={(e) => onInputChange(e)}
                name='approval_status'
                value={approval_status}
              >
                <option value='Approved'>Approved</option>
                <option value='Not Approved'>Not Approved</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className='ms-auto'>
          <Col className='d-flex justify-content-end gap-2'>
            <Button variant='success' type='submit'>
              Update
            </Button>
            <Link to='/employee-data' className='btn btn-danger'>
              Cancel
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default EditEmployee;
