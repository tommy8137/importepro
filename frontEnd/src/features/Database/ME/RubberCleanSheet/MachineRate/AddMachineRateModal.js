import React, { Fragment, useState, useEffect } from 'react';
import Modal from '~~elements/Modal';
import Button from '~~elements/Button';
import Field from '~~elements/Field';


const INITIAL_FORMDATA = {
  machineRate: '',
  cost: '',
  l: '',
  w: '',
};
const RightAddModal = (props) => {
  const { isOpen, setIsOpen, onAdd } = props;
  const [formData, setFormData] = useState(INITIAL_FORMDATA);

  useEffect(() => {
    if (!isOpen) {
      setFormData(INITIAL_FORMDATA);
    }
  }, [isOpen]);

  const {
    machineRate,
    cost,
    l,
    w
  } = formData;


  function handleChange(key, val) {
    setFormData({ ...formData, [key]: val });
  }


  const isDisabled = Object.keys(formData).some(k => !formData?.[k]);
  return (
    <Modal.Modal isOpen={isOpen}>
      <Modal.ModalHeader>
        Add Machine Rate
      </Modal.ModalHeader>
      <Modal.ModalBody>
        <Field.Row>
          <Field.Field width="50%">
            <Field.Label title="Machine Rate" isRequired />
            <Field.ConvertInput
              onChange={val => handleChange('machineRate', val)}
              value={machineRate}
              dataType="string"
            />
          </Field.Field>
          <Field.Field width="50%">
            <Field.Label title="L" isRequired />
            <Field.ConvertInput
              value={l}
              onChange={val => handleChange('l', val)}
              dataType="float"
            />
          </Field.Field>
          <Field.Field width="50%">
            <Field.Label title="W" isRequired />
            <Field.ConvertInput
              value={w}
              onChange={val => handleChange('w', val)}
              dataType="float"
            />
          </Field.Field>
          <Field.Field width="50%">
            <Field.Label title="(USD$/Min)" isRequired />
            <Field.ConvertInput
              value={cost}
              onChange={val => handleChange('cost', val)}
              dataType="float"
            />
          </Field.Field>
        </Field.Row>
      </Modal.ModalBody>
      <Modal.ModalFooter>
        <Button color="white" onClick={() => setIsOpen(false)}>Cancel</Button>
        <Button
          color="black"
          onClick={() => onAdd(formData)}
          disabled={isDisabled}
        >
          Add
        </Button>
      </Modal.ModalFooter>
    </Modal.Modal>
  );
};

export default RightAddModal;
