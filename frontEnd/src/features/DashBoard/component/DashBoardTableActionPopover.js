import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Icon from '~~elements/Icon';
import { EnhancePopover, PopoverBody } from '~~elements/Popover';
import CheckingRbac from '~~hoc/CheckingRbac';
import * as BomManagementActions from '~~features/BomManagement/BomManagementActions';

const ActionPopoverMenu = styled.div`
  .popover-option {
    cursor: pointer;
    margin: 0;
    transition: 0.3s ease all;
    padding: 0.125rem;
    &:hover {
      background-color: #e3e3e3;
    }
    &:last-child {
      margin-bottom: 0rem;
    }
  }
`;

@connect(
  state => ({}),
  {
    openEditEEBomModal: BomManagementActions.openEditEEBomModal,
  }
)


@CheckingRbac()
export default class MEBomTableActionPopover extends React.Component {
  constructor(props) {
    super(props);
    this.iconEl = React.createRef();
    this.state = {
      toggle: false,
    };
  }
  /**
   * toggle popover callback
   */
  handleOnTogglePopover = () => {
    const newToggle = !this.state.toggle;
    this.setState({ toggle: newToggle });
    // 關掉popover的時候，把dutaionMode關掉
  }
  /**
 * set popover isOpen
 */
  handleSetTogglePopover = (toggle) => {
    this.setState({ toggle });
  }

  handleClickAddNew(record) {
    this.setState({ toggle: false });
    this.props.handleClickAddNew(record);
  }
  /**
   * 當按下tooltip的close時
   */
  handleClosePopover = () => {
    this.setState({ toggle: false });
  }


  render() {
    const { toggle } = this.state;
    const { record, disabled } = this.props;
    return (
      disabled ?
        null :
        <React.Fragment>
          {/* Action icon 按鈕 */}
          <Icon
            onClick={e => {
              e.stopPropagation();
              this.handleSetTogglePopover(true);
            }}
            icon="IcoMore"
            innerRef={this.iconEl}
          />
          {/* Icon 的 popover */}
          <EnhancePopover
            placement="bottom-end"
            isOpen={toggle}
            onClickClose={this.handleClosePopover}
            toggle={this.handleOnTogglePopover}
            onClickOutside={() => this.handleSetTogglePopover(false)}
            target={this.iconEl}
          >

            <ActionPopoverMenu>
              <div
                className="popover-option"
                onKeyDown={() => { }}
                onClick={(e) => { e.stopPropagation(); this.handleClickAddNew(record); }}
              >
              Add New
              </div>
            </ActionPopoverMenu>
          </EnhancePopover>
        </React.Fragment>
    );
  }
}

