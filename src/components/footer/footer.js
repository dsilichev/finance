import { styled } from "styled-components";

const FooterContainer = ({className}) => {
  return (
    <div className={className}>Some Footer content</div>
  )
}

export const Footer = styled(FooterContainer)`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  outline: 1px solid black;
`
