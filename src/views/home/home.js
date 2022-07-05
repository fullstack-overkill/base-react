import { useEffect } from 'react';
import TheTemplate from "../../components/TheTemplate/TheTemplate";
import axiosHttpClient from '../../services/axios-http-client/axios-http-client';
import http from '../../services/http/httpClient'

const Home = () => {
  const HTTP = new http(axiosHttpClient);

  const getDataFromApi = async () =>{
    const responseFromApi = await HTTP.get('https://fakerestapi.azurewebsites.net/api/v1/Activities');
    console.log(responseFromApi);
  }


  useEffect(() => {
    /* 
     * Access the api when the page loads 
     * This code only runs once
     */
    getDataFromApi();
  },[]);

  
  return <TheTemplate>
    <div>a</div><div>a</div><div>a</div><div>a</div><div>a</div><div>a</div>
    <div>a</div><div>a</div><div>a</div><div>a</div><div>a</div><div>a</div>
    <div>a</div><div>a</div><div>a</div><div>a</div><div>a</div><div>a</div>
    <div>a</div><div>a</div><div>a</div><div>a</div><div>a</div><div>a</div>
    <div>a</div><div>a</div><div>a</div><div>a</div><div>a</div><div>a</div>
    <div>a</div><div>a</div><div>a</div><div>a</div><div>a</div><div>a</div>
    <div>a</div><div>a</div><div>a</div><div>a</div><div>a</div><div>a</div>
  </TheTemplate>;
};

export default Home;
