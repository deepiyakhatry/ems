import React from 'react';
import './Employee.css';
import { Button, Container, Row, Col, Form, Table } from 'react-bootstrap';

const Employee = () => {
  return (
    <Container>
      <Form className='shadow-lg p-3 mt-4 rounded'>
        <Row>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Employee Number</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Application Date From</Form.Label>
              <Form.Control type='date' />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Application Date To</Form.Label>
              <Form.Control type='date' />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Form.Group className='mb-3'>
              <Form.Label>Approval Month From</Form.Label>
              <Form.Control type='date' />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Approval Month To</Form.Label>
              <Form.Control type='date' />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Form.Group className='mb-3'>
              <Form.Label>Payment Date From</Form.Label>
              <Form.Control type='date' />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group className='mb-3'>
              <Form.Label>Payment Date To</Form.Label>
              <Form.Control type='date' />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group className='mb-3'>
              <Form.Label>Approval Status</Form.Label>
              <Form.Select>
                <option>Select</option>
                <option>1</option>
                <option>2</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className='ms-auto'>
          <Col className='d-flex justify-content-end gap-2'>
            <Button variant='primary' type='submit'>
              Update
            </Button>
            <Button variant='success' type='submit'>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <Table striped hover className='mt-5 shadow-lg rounded'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Approval Month</th>
            <th>Approval Status</th>
            <th>Payment Date</th>
            <th>Payment Status</th>
            <th>Application Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
          </tr>

          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Employee;
