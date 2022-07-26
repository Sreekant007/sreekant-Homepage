import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import Paragraph from "../component/paragraph";
import Section from "../component/section";
import Image from "next/image";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../component/bio";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoAndroid,
  IoLogoReact,
} from "react-icons/io5";
import { GridItem } from "../component/grid-item";
import thumbYouTube from "../public/images/links/youtube.png";
import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        color={useColorModeValue("#000000", "#ffffff")}
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello, I&apos;m an indie mobile app developer based in India!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Shrikant Govande
          </Heading>
          <p>Mobile App Developer( Researcher / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Shrikant.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I &apos;m Shrikant Govande, indie Mobile App Developer based in
          Gujarat,India with passion for building mobile application .I have
          manage to Develop,Code & Design mobile apps to help bussiness
          grow.I&apos;m also involed in plannig,and design application for
          scratch with excelent problem solving with code. I am also interested
          in research related work.I have completed research work on Blockchain
          Technology.Recently i have completed my master degree in Computer
          Science.
        </Paragraph>
        {/* <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box> */}
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Works On
        </Heading>

        <BioSection>
          <BioYear>Mobile -</BioYear>
          Android Native,React Native,Ionic Framwork
        </BioSection>
        <BioSection>
          <BioYear>Web -</BioYear>
          CodeIgnator,React Js,Angular,Next Js
        </BioSection>
        <BioSection>
          <BioYear>Backend -</BioYear>
          Node Js,PHP
        </BioSection>

        <BioSection>
          <BioYear>Other -</BioYear>
          MongoDb,Firebase,Hyperledger Fabric(Blockchain Framwork)
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Mumbai , India.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the Bechlore&apos;s Program in the S.P.B Patel Colledge of
          Engineering at Gujarat Technology University
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the Training Program in Android Application Development at
          Illucent Techno Lab
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked at Ikon It Hub
        </BioSection>
      </Section>
      {/* //       <Section delay={0.3}>
//         <Heading as="h3" variant="section-title">
//           I ♥
//         </Heading>
//         <Paragraph>
//           Art, Music,{" "}
//           <Link href="https://illust.odoruinu.net/" target="_blank">
//             Drawing
//           </Link>
//           , Playing Drums,{" "}
//           <Link href="https://500px.com/p/craftzdog" target="_blank">
//             Photography
//           </Link>
//           , Leica, Machine Learning
//         </Paragraph>
//       </Section> */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Sreekant007" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Sreekant007
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @govandeshrikant6 (English)
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem> */}
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  );
};

export default Page;
