import React from 'react';
import { Button, Table, Modal } from 'semantic-ui-react';
import ContactForm from './ContactForm';

const Contact = ({ id, firstName, phone, remove, edit }) => (
    <Table.Row id={id}>
        <Table.Cell>{firstName}</Table.Cell>
        <Table.Cell>{phone}</Table.Cell>
        <Table.Cell>
            <Modal trigger={
                <Button color="yellow">
                Edit
                </Button>
            }>
                <Modal.Header>Edit Form</Modal.Header>
                <ContactForm 
                    id={id}
                    firstName={firstName}
                    phone={phone}
                    edit={edit}
                />
            </Modal>
            <Button color="red" onClick={() => remove(id)}>
                Delete
            </Button>
        </Table.Cell>
    </Table.Row>
);

export default Contact;