import React from 'react';
import {Link} from 'react-router-dom'

const Tbody = ({list, title}) => {
    return (
        <tbody>
                { list.map(data=>(
                    <tr>
                        <td>{data.no}</td>
                        <td style={{ textAlign:'left'}}>
                            <Link to='/board/view' state={{ title:title, data:data }}>{data.subject}</Link>
                        </td>
                        <td>{data.userid}</td>
                        {title==='notice' && <td>{data.hit}</td>}
                        <td>{data.date}</td>
                    </tr>
                    ))
                }
        </tbody>
    );
};

export default Tbody;