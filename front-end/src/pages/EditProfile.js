import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import "../profile/index.css"
import {useState} from "react";
import {updateProfile} from "../reducers/profile-reducer";
import {Box, Button, Container, Flex, HStack, IconButton, Image, Input, Text, VStack} from '@chakra-ui/react';
import {ArrowBackIcon, CloseIcon} from "@chakra-ui/icons";
import Profile from "./Profile";
import AvatarImg from "../assets/avartar.jpeg"

const EditProfile = () => {
    const profile = useSelector((state) => state.profile);

    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const dispatch = useDispatch();
    const saveEdit = () => {
        dispatch(updateProfile({...profile, firstName: firstName, lastName: lastName,
            bio: bio, location: location, }));
    }

    return(
        <Container maxW='container.md' my={10}>
            <HStack spacing='24px' m={2}>
                <Link to="/profile">
                    <IconButton size='lg'  aria-label='cancel' icon={<CloseIcon/>}
                                onClick={()=><Profile/>}/>
                </Link>
                <Text fontSize='5xl'>Edit Profile</Text>
            </HStack>
            <Box w='100%' p={0} mx={0} mt={5}>
                <Image src={profile.bannerPicture} objectFit='cover' alt='banner'/>
            </Box>
            <Box mb={2}>
                <Image borderRadius='full' boxSize='100px' src={AvatarImg} alt="avatar"/>
            </Box>
            <HStack spacing='50px' mt={10}>
                <VStack align='stretch'>
                    <Text fontSize='lg'>First Name</Text>
                    <Input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='first name'
                        size='lg'
                    />
                </VStack>
                <VStack align='stretch'>
                    <Text fontSize='lg'>Last Name</Text>
                    <Input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='last name'
                        size='lg'
                    />
                </VStack>
            </HStack>
            <VStack align='stretch' mt={5}>
                <Text fontSize='lg'>Bio</Text>
                <Input
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder='bio'
                    size='lg'
                />
            </VStack>
            <VStack align='stretch' mt={5}>
                <Text fontSize='lg'>Location</Text>
                <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='location'
                    size='lg'
                />
            </VStack>
            <Flex mt={10}>
                <Link to="/profile">
                    <Button onClick={saveEdit} colorScheme='teal' size='lg'>
                        Save
                    </Button>
                </Link>
            </Flex>
        </Container>
    )
}
export default EditProfile;