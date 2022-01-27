import { css } from '@emotion/react';

import colors from '../../styles/colors';
import {p2r} from '../../styles/fonts';

const gradient = {
  background: 'transparent linear-gradient(16deg, #bb9b66 0, #c6aa71 48%, #e9d793 86%, #d9c184 100%) 0 0 no-repeat',
}

const styles = css`
  .template-container {
    position: relative;
  }

  .title-container {
    display: flex;
    flex-direction: row;
    margin-top: ${p2r(48)};
    margin-left: 340px;
  }

  .css-mnjqhk-styling {
    margin-right: 80px;
  }

  .Title {
    margin-top: ${p2r(4)};
    font-family: Lexia;
    font-size: ${p2r(42)};
    font-style: italic;
    line-height: ${p2r(56)};
    color: ${colors.paleGold};
    letter-spacing: normal;
  }

  .Download-btn {
    position: relative;
    top: ${p2r(40)};
    left: 432px;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: ${p2r(80)};
    margin-top: ${p2r(4)};
    font-family: Univers, sans-serif;
    font-size: ${p2r(18)};
    font-weight: normal;
    color: ${colors.grayBlack};
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    background: ${gradient.background};
    border-radius: 40px;
  }

  .Download-btn:hover {
    background: ${colors.white};
    border: 2px solid ${colors.grayGold};
  }

  .css-mnjqhk-styling a:hover {
    background: ${colors.grayGold};
  }
`;

export default styles;
