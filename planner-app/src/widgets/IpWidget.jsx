import React, { useEffect, useState } from 'react';
 const IPWidget = () => {
  const [ip, setIp] = useState('');
  const [country, setCountry] = useState('');
   useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIp(data.ip);
        fetchCountry(data.ip);
      } catch (error) {
        console.log(error);
      }
    };
     const fetchCountry = async (ip) => {
      try {
        const response = await fetch(`https://ipapi.co/${ip}/country_name/`);
        const data = await response.text();
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    };
     fetchIP();
  }, []);
   return (
    <div className=''>
      <p>Your IP is: {ip}</p>
      <p>Your Country is: {country}</p>
    </div>
  );
};
 export default IPWidget;