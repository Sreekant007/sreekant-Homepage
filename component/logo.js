import Link from "next/link";
import Image from "next/image";
import { Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(-20deg);
  }
`;

const Logo = () => {
  const footPrintImg = `/coding${useColorModeValue("", "-dark")}.png`;

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue("#0a192f", "#64ffda")}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Shrikant Govande
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
