import React from 'react';
import mongodb from "./image/mongodb.webp";
import mysql from "./image/mysql.webp";
import sql_server from "./image/sql-server.webp";
import postgresql from "./image/postgresql.webp";
import mariadb from "./image/mariadb.webp";
import dynamodb from "./image/dynamodb.webp";
import "../Technology_partner/logo.css";

const Logo6 = () => {
  return (

    <div className='head_div'>
        <div className='head_inner'>
            <div ><img src={ mongodb } alt="logo" className='image_opti' width={80} />
            <p>mongoDB</p></div>
            <div><img src={ mysql } alt="logo" className='image_opti' width={80} />
            <p>mySQL</p></div>
            <div><img src={ sql_server } alt="logo" className='image_opti' width={80} />
            <p>sql-Server</p></div>
            <div><img src={ postgresql } alt="logo" className='image_opti' width={80} />
            <p>postgresql</p></div>
            <div><img src={ mariadb } alt="logo" className='image_opti' width={80} />
            <p>mariadb</p></div>
            <div><img src={ dynamodb } alt="logo" className='image_opti' width={80} />
            <p>dynamodb</p></div>
        </div>
    </div>
    
    
    
    
    
    
  )
}

export default Logo6;
