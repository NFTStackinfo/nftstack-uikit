import * as React from 'react';
import {Icon} from './icon';
import {iconList} from "icomoon-react";

const iconSet = require("./selection.json");

export const BasicIcon = () => (
    <>
        {
            iconList(iconSet).map((icon, index) => {
                return (
                    <div key={index} style={{display: 'inline-block', padding: '10px', margin: '5px', backgroundColor: '#eee', textAlign: 'center'}}>
                        <Icon
                            className='icon'
                            size={24}
                            icon={icon}/>
                        <p style={{paddingTop: '8px'}}><strong>{icon}</strong></p>
                    </div>
                )
            })

        }
    </>
)
