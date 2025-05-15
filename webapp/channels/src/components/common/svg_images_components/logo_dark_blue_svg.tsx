// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

// Import your daakia logo
import daakiaLogo from '../../../../src/images/custom/daakiaLogo.svg';

type Props = {
    className?: string;
    width?: number;
    height?: number;
}

const StyledImg = styled.img`
    height: ${(props) => props.height || 30}px;
    width: auto;
`;

export default (props: Props) => (
    <StyledImg
        className={props.className}
        src={daakiaLogo}
        height={props.height}
        alt="daakia Logo"
    />
);
