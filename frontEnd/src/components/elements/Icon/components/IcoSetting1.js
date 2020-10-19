import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  .cls-1 {
    fill: #333;
    fill-rule: evenodd
  }
`;

export default class IcoSetting1 extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
      >
        <g id="ic_setting_1" transform="translate(-.002)">
          <g id="Group_5721" data-name="Group 5721" transform="translate(.003)">
            <path id="Path_1438" d="M22.931 10.224a.749.749 0 0 0-.739-.566 2.539 2.539 0 0 1-1.738-4.42.639.639 0 0 0 .07-.867A11.38 11.38 0 0 0 18.7 2.53a.64.64 0 0 0-.874.071 2.651 2.651 0 0 1-2.868.644 2.555 2.555 0 0 1-1.553-2.5.638.638 0 0 0-.564-.672A11.482 11.482 0 0 0 10.254.07a.64.64 0 0 0-.569.658A2.559 2.559 0 0 1 8.11 3.182a2.658 2.658 0 0 1-2.847-.648.641.641 0 0 0-.863-.074A11.423 11.423 0 0 0 2.535 4.3a.64.64 0 0 0 .069.874 2.548 2.548 0 0 1 .643 2.869A2.659 2.659 0 0 1 .744 9.6a.625.625 0 0 0-.664.565 11.52 11.52 0 0 0 0 2.615.761.761 0 0 0 .754.566A2.522 2.522 0 0 1 3.2 14.919a2.557 2.557 0 0 1-.643 2.844.639.639 0 0 0-.07.867A11.421 11.421 0 0 0 4.3 20.47a.64.64 0 0 0 .875-.069 2.647 2.647 0 0 1 2.867-.645 2.55 2.55 0 0 1 1.556 2.5.639.639 0 0 0 .564.672 11.446 11.446 0 0 0 2.587.007.64.64 0 0 0 .569-.659 2.556 2.556 0 0 1 1.573-2.452 2.654 2.654 0 0 1 2.848.648.643.643 0 0 0 .868.073 11.449 11.449 0 0 0 1.86-1.839.639.639 0 0 0-.069-.874 2.548 2.548 0 0 1-.644-2.869A2.575 2.575 0 0 1 22.11 13.4h.142a.64.64 0 0 0 .673-.564 11.511 11.511 0 0 0 .006-2.612zm-11.41 5.137a3.836 3.836 0 1 1 3.836-3.836 3.84 3.84 0 0 1-3.836 3.836z" className="cls-1" data-name="Path 1438" transform="translate(-.003)" />
          </g>
        </g>
      </Svg>
    );
  }
}