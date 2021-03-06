import React from 'react';
import _get from 'lodash/get';
import { comma } from '~~utils/Math';
import NumberInput from '~~features/Database/components/NumberInput';

const getColumns = props => {
  const { isEditMode, date, handleOnEditItem, idColumn, } = props;
  return [
    idColumn,
    {
      dataIndex: 'thickness',
      title: '厚度',
      width: '20%',
      defaultSortOrder: 'ascend',
      sorter: !isEditMode,
    },
    {
      title: _get(date, 'last', '－'),
      dataIndex: 'last',
      width: '20%',
      sorter: !isEditMode && _get(date, 'lastId', false),
      render: val => comma(val, 8, '－'),
    },
    {
      title: _get(date, 'current', '－'),
      dataIndex: 'current',
      width: '20%',
      sorter: !isEditMode && _get(date, 'currentId', false),
      render: val => comma(val, 8, '－'),
    },
    {
      title: _get(date, 'next', '－'),
      dataIndex: 'next',
      width: '20%',
      sorter: !isEditMode && _get(date, 'nextId', false),
      render: (val, record) =>
        (isEditMode ? (
          <NumberInput
            value={val}
            onChange={value => handleOnEditItem(value, record.id, 'next')}
          />
        ) : (
          comma(val, 8, '－')
        )),
    },
  ];
};

export default getColumns;
