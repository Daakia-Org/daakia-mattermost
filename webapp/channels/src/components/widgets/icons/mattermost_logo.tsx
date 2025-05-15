// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import type {CSSProperties} from 'react';
import {useIntl} from 'react-intl';
import daakiaLogo from '../../../../src/images/custom/daakiasmallLogo.svg';

export default function MattermostLogo(props: React.HTMLAttributes<HTMLSpanElement>) {
    const {formatMessage} = useIntl();
    return (
        <span {...props}>
            <img 
                src={daakiaLogo}
                alt={formatMessage({id: 'generic_icons.mattermost', defaultMessage: 'daakia Logo'})}
                style={{height: '28px', width: 'auto'}}
            />
        </span>
    );
}
