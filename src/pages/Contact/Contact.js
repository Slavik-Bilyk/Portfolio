import React from 'react'
import { Background, Wrapper, Title, Div, Input, Form, Label } from './Contact.styled'

const Contact = () => {
  return (
    <Background>
      <Wrapper>
        <Title>Contact</Title>
        <Div>
            <Form>
                <Label htmlFor='name'> 
                First Name
                <Input id='name' name='name' type='text'/>
                </Label>
                

                <Label htmlFor='surname'>Last name
                <Input id='surname' name='surname' type='text'/>
                </Label>

                <Label htmlFor='email'>Email
                <Input id='email' name='email' type='email'/>
                </Label>
                

                <Label htmlFor='subject'>Subject
                <Input id='subject' name='subject' type='text'/>
                </Label>
                

                <Label htmlFor='message'>Message
                <Input id='message' name='message' type='text'/>
                </Label>
                

                <button type='submit'>SEND</button>

            </Form>
        </Div>
      </Wrapper>
    </Background>
  )
}

export default Contact
