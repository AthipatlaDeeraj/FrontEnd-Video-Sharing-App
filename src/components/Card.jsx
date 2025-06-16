import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Container=styled.div`
    width: ${(props)=>props.type!=="sm"&&"360px"};
    margin-bottom: ${(props)=>props.type==="sm"?"10px":"45px"};
    cursor: pointer;
    display: ${(props)=>props.type==="sm"&&"flex"};
    gap: 10px;
`
const Image=styled.img`
  width: 100%;
  height:${(props)=>props.type==="sm"?"120px":"202px"};
  background-color: #999;
  flex: 1;
`
const Details=styled.div`
  display: flex;
  margin-top: ${(props)=>props.type!=="sm"&&"16px"};
  gap: 12px;
  flex:1;
`
const ChannelImage=styled.img`
  width: 36px;
  height: 36px;
  border-radius:50%;
  background-color: #999;
  display:${(props)=>props.type==="sm"&&"none"};
`

const Texts=styled.div`
  margin-top:-8px;
`
const ChannelName=styled.h2`
  font-size:14px;
  margin: 9px 0px;
  color: ${({ theme }) => theme.textSoft};
`
const Title=styled.h1`
  font-size:16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`
const Info=styled.div`
  font-size:14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
`

const Card=({type})=>{
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
      <Container type={type}>
        <Image type={type} src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1'></Image>
        <Details>
          <ChannelImage type={type}  src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600'></ChannelImage>
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Deeraj Kumar</ChannelName>
            <Info>660,908 • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card;