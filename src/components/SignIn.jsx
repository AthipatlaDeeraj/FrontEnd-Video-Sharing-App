import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.textSoft};
    flex-direction: column;
`
const Wrapper=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border:1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`

const Title=styled.h1``
const SubTitle=styled.h2``
const Input=styled.input``
const Button=styled.button`
    cursor: pointer;
    
`
const More=styled.div` 
    display: flex;
    gap:20px;
    margin-top: 10px;
`
const Links=styled.div`
    display: flex;
    gap:20px;`
const Link=styled.span``
const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>Welcome to My Youtube</SubTitle>
            <Input placeholder='UserName'/>
            <Input type='password' placeholder='Password'/>
           <Button>Sign In</Button>
           <Title>Or</Title>
            <Input placeholder='UserName'/>
            <Input placeholder='email'/>
            <Input type='password' placeholder='Password'/>
           <Button>Sign Up</Button>
        </Wrapper>
        <More>
            Eng(USA)
            <Links>
                <Link>Helps</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default SignIn