import React from "react";
import {ArrowBackIcon, CheckCircleIcon, StarIcon} from "@chakra-ui/icons";
import {useSelector} from "react-redux";
// import "./index.css";
import EditProfile from "./EditProfile";
import {Link} from "react-router-dom";
import {
    Container,
    Box,
    Grid,
    GridItem,
    HStack,
    Text,
    IconButton,
    Image,
    Flex,
    Button,
    VStack,
    Tabs, TabList, Tab, TabPanels, TabPanel
} from "@chakra-ui/react";
import AvatarImg from "../assets/avartar.jpeg"


const Profile = () => {
    const profile = useSelector((state) => state.profile);
    return(
        <Container maxW='container.md' my={10}>
            {/* <Box bg='tomato' w='100%' p={4} color='white'>
                <h1>This is the Box</h1>
            </Box> */}
            <HStack spacing='24px' m={2}>
                <IconButton size='lg' colorScheme='teal' aria-label='back' icon={<ArrowBackIcon/>}/>
                <Text fontSize='5xl'>{profile.firstName} {profile.lastName}</Text>
            </HStack>
            <Box w='100%' p={0} mx={0} mt={5}>
                <Image src={profile.bannerPicture} objectFit='cover' alt='banner'/>
            </Box>
            <HStack spacing="480px" mt={1}>
                <Box mb={2}>
                    <Image borderRadius='full' boxSize='100px' src={AvatarImg} alt="avatar"/>
                </Box>
                <Link to="/edit-profile">
                    <Button colorScheme='teal' size='lg'>
                        Edit Profile
                    </Button>
                </Link>
            </HStack>
            <VStack mt={2} align='stretch'>
                <Text fontSize='4xl' mb={0}>{profile.firstName} {profile.lastName}</Text>
                <Text fontSize='2xl' mt={0}>@{profile.handle}</Text>
                <Text fontSize='xl' mt={0}>{profile.bio}</Text>
                <HStack spacing='12px'>
                    <StarIcon/>
                    <Text fontSize='lg'>{profile.location}</Text>
                </HStack>
                <HStack spacing='12px'>
                    <CheckCircleIcon size='2xl'/>
                    <Text fontSize='2xl'>Points Earned: {profile.points}</Text>
                </HStack>
            </VStack>
            <Tabs colorScheme="teal" isFitted mt={3}>
                <TabList>
                    <Tab fontSize='2xl'>Posts</Tab>
                    <Tab fontSize='2xl'>Replies</Tab>
                    <Tab fontSize='2xl'>Groups</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>To be combined with posting page</p>
                    </TabPanel>
                    <TabPanel>
                        <p>To be combined with posting page</p>
                    </TabPanel>
                    <TabPanel>
                        <p>To be combined with group page</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}
export default Profile;