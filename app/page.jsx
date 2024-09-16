'use client'

import {
    ActionIcon,
    Box,
    Burger,
    Container,
    Divider,
    Drawer,
    Grid,
    Group,
    Image,
    Paper,
    SimpleGrid,
    Stack,
    Stepper,
    Text,
    Title
} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import Link from "next/link";
import classes from './styles/Header.module.css';
import {PiUserCircleBold} from "react-icons/pi";
import {ArtistCard} from "./components/ArtistCard/ArtistCard";
import {useState} from "react";
import {ReleasesCard} from "./components/ReleasesCard/ReleasesCard";
import {ApplyForm} from "./components/Form/ApplyForm";
import {Carousel} from "@mantine/carousel";

export default function Page() {
    const [opened, {toggle}] = useDisclosure(false);
    const [active, setActive] = useState(1);

    return <>
        <Box bg="indigo.9" className={classes.header}>
            <Container py="0.8rem" size={1200} className={classes.inner}>
                <Link href="/">
                    <Image className="logo" src="/logo.png" alt="Logo" w="42" h="auto"/>
                </Link>
                <Group gap="2rem" visibleFrom="sm">
                    <Paper bg="indigo.3" p="0.5rem 1rem" radius="20px">
                        <Text c="bright" fw={700} component={Link} href="/#artists">Artists</Text>
                    </Paper>
                    <Paper bg="indigo.3" p="0.5rem 1rem" radius="20px">
                        <Text c="bright" fw={700} component={Link} href="/#label">Label</Text>
                    </Paper>
                    <Paper bg="indigo.3" p="0.5rem 1rem" radius="20px">
                        <Text c="bright" fw={700} component={Link} href="/#releases">Releases</Text>
                    </Paper>
                    <Paper bg="indigo.3" p="0.5rem 1rem" radius="20px">
                        <Text c="bright" fw={700} component={Link} href="/#apply">Apply</Text>
                    </Paper>
                </Group>
                <div/>

                <Burger color="white" opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>

                <Drawer
                    opened={opened}
                    onClose={toggle}
                    position="right"
                    padding="xl"
                    size="md"
                    title="Menu"
                >
                    <Stack>
                        <Text fw={700} size="1.1rem" component={Link} href="/#artists">Artists</Text>
                        <Text fw={700} size="1.1rem" component={Link} href="/#label">Label</Text>
                        <Text fw={700} size="1.1rem" component={Link} href="/#releases">Releases</Text>
                        <Text fw={700} size="1.1rem" component={Link} href="/#apply">Apply</Text>
                    </Stack>
                </Drawer>
            </Container>
        </Box>
        <Container size={1400}>
            <Grid my="10%">
                <Grid.Col span={{base: 12, md: 6}}>
                    <Stack py="2%" gap="0.2rem">
                        <Title fs="italic" c="bright" mb="1rem" lh={1} fw={700} fz={{base: "3rem", md: "5rem"}}
                               maw="40rem">Notesounds</Title>
                        <Text c="dimmed" maw="40rem">
                            We are an entertainment company with a wide array of the most fascinating artists on
                            Spotify.
                            Encompassing dozens of genres in order to guarantee satisfaction to all our fans around the
                            world.</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col pos="relative" span={{base: 12, md: 6}}>
                    <Paper right="5rem" top={0} pos="absolute" className="stat_box" radius="50px"
                           bg="rgba(255, 255, 255, 0.5)" w="fit-content" shadow="lg" p="2rem">
                        <Group>
                            <ActionIcon size="xl" bg="rgb(35,139,230, 0.5)">
                                <PiUserCircleBold size="1.8rem"/>
                            </ActionIcon>
                            <Text c="black" fw={700} size="2rem">30+</Text>
                            <Text c="dark.5">Signed Artists</Text>
                        </Group>
                    </Paper>
                    <Paper top="10rem" left="1rem" pos="absolute" className="stat_box" radius="50px"
                           bg="rgba(255, 255, 255, 0.5)" w="fit-content" shadow="lg" p="2rem">
                        <Group>
                            <ActionIcon size="xl" bg="rgb(35,139,230, 0.5)">
                                <PiUserCircleBold size="1.8rem"/>
                            </ActionIcon>
                            <Text c="black" fw={700} size="2rem">1,500,000+</Text>
                            <Text c="dark.5">Streams</Text>
                        </Group>
                    </Paper>
                    <Paper bottom="-2rem" right="2rem" pos="absolute" className="stat_box" radius="50px"
                           bg="rgba(255, 255, 255, 0.5)" w="fit-content" shadow="lg" p="2rem">
                        <Group>
                            <ActionIcon size="xl" bg="rgb(35,139,230, 0.5)">
                                <PiUserCircleBold size="1.8rem"/>
                            </ActionIcon>
                            <Text c="black" fw={700} size="2rem">200+</Text>
                            <Text c="dark.5">Total releases</Text>
                        </Group>
                    </Paper>
                </Grid.Col>
            </Grid>
        </Container>

        {/*<Container id="about" size={1200} mb="8rem">*/}
        {/*    <Title mb="0.8rem" ta="center" order={2} fz="3rem">Supporting artists for over 5 years</Title>*/}
        {/*    <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">Lorem ipsum dolor sit amet, consectetur*/}
        {/*        adipisicing elit. Accusantium adipisci delectus distinctio earum expedita maxime necessitatibus officia*/}
        {/*        rerum tempore voluptatibus.</Text>*/}
        {/*    <SimpleGrid*/}
        {/*        cols={{base: 1, sm: 2, lg: 4}}*/}
        {/*        spacing={{base: 10, sm: 'xl'}}*/}
        {/*        verticalSpacing={{base: 'md', sm: 'xl'}}*/}
        {/*    >*/}
        {/*        <Paper shadow="lg" p="3rem" style={{borderTop: "20px solid #2A7FFE"}}>*/}
        {/*            <ActionIcon mb="1rem" size="xl" bg="rgb(35,139,230, 0.5)">*/}
        {/*                <PiUserCircleBold size="1.8rem"/>*/}
        {/*            </ActionIcon>*/}
        {/*            <Text mb="1rem" c="dimmed">Total artists</Text>*/}
        {/*            <Text fw={700} size="2rem">4</Text>*/}
        {/*        </Paper>*/}
        {/*        <Paper shadow="lg" p="3rem" style={{borderTop: "20px solid #2A7FFE"}}>*/}
        {/*            <ActionIcon mb="1rem" size="xl" bg="rgb(35,139,230, 0.5)">*/}
        {/*                <PiClockBold size="1.8rem"/>*/}
        {/*            </ActionIcon>*/}
        {/*            <Text mb="1rem" c="dimmed">Total minutes listened</Text>*/}
        {/*            <Text fw={700} size="2rem">5,313,439</Text>*/}
        {/*        </Paper>*/}
        {/*        <Paper shadow="lg" p="3rem" style={{borderTop: "20px solid #2A7FFE"}}>*/}
        {/*            <ActionIcon mb="1rem" size="xl" bg="rgb(35,139,230, 0.5)">*/}
        {/*                <PiMusicNotesFill size="1.8rem"/>*/}
        {/*            </ActionIcon>*/}
        {/*            <Text mb="1rem" c="dimmed">Total songs</Text>*/}
        {/*            <Text fw={700} size="2rem">93</Text>*/}
        {/*        </Paper>*/}
        {/*    </SimpleGrid>*/}
        {/*</Container>*/}

        <Divider my="2rem" color="blue" size="xl"/>

        <Container id="artists" size={1200} mb="8rem">
            <Title c="bright" mb="0.8rem" ta="center" order={2} fz="3rem">Meet our talent</Title>
            <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">Artists available at Notesounds are recruited
                by our specialized A&R team who are always on the lookout for the hottest sounds in Lofi/Chill and
                more.</Text>
            <Container size="60rem">
                <Carousel slideSize="60rem" w="auto" withIndicators height={800}>
                    <Carousel.Slide><ArtistCard image="/alexander_gust.png" title="Alexander Gust"/></Carousel.Slide>
                    <Carousel.Slide><ArtistCard image="/joel_miller.png" title="Joel Miller"/></Carousel.Slide>
                    <Carousel.Slide><ArtistCard image="/osteryze.png" title="Osteryze"/></Carousel.Slide>
                    <Carousel.Slide><ArtistCard image="/w8bless.png" title="W8bless"/></Carousel.Slide>
                </Carousel>
            </Container>
        </Container>

        <Divider my="2rem" color="blue" size="xl"/>

        <Container id="label" size={1200} mb="8rem">
            <Title c="bright" mb="0.8rem" ta="center" order={2} fz="3rem">Label</Title>
            <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">Notesounds differs from other Indie Music
                Labels thanks to our four exclusive programs we provide to those signed with us.</Text>
            <Stepper active={active} onStepClick={setActive} iconPosition="right">
                <Stepper.Step label="Distribution">
                    <Text fw={700} my="1rem">Distribution</Text>
                    <Text>Distributing your releases with Notesounds is simple and works around your schedule. Whether
                        you want to release singles, or an album at whatever time or date we are ready. Thanks to our
                        Distribution Partners we promise a seamless experience.</Text>
                </Stepper.Step>
                <Stepper.Step label="Support">
                    <Text fw={700} my="1rem">Support</Text>
                    <Text>Here at Notesounds our number one priority is to make sure you as an Artist hit the goals you
                        made when you signed with us. No exceptions, that's why with our dedicated team we are available
                        and ready 24/7.</Text>
                </Stepper.Step>
                <Stepper.Step label="Production">
                    <Text fw={700} my="1rem">Production</Text>
                    <Text>Notesounds maintains an active team of sound mixers, writers, mastering and more. The full
                        backing of our production team is available to make sure your track sounds as perfect as
                        possible.</Text>
                </Stepper.Step>
                <Stepper.Step label="Marketing">
                    <Text fw={700} my="1rem">Marketing</Text>
                    <Text>In this day and age, Marketing is the single most important thing for any aspiring musician.
                        That's why at Notesounds its our single most developed Department. Ranging from Dedicated NS
                        Playlists, Veteran Facebook AD Managers, Influencer Partnerships, and much more of top industry
                        strategies.</Text>
                </Stepper.Step>
            </Stepper>
        </Container>

        <Divider my="2rem" color="blue" size="xl"/>

        <Container id="releases" size={1800} mb="8rem">
            <Title c="bright" mb="0.8rem" ta="center" order={2} fz="3rem">Our releases</Title>
            <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">The latest releases from Official Notesounds
                Artists are here! Listen to the hottest tracks on Lofi, Chill-Out, and EDM.</Text>
            <SimpleGrid
                cols={{base: 1, sm: 2, lg: 3}}
                spacing={{base: 10, sm: 'xl'}}
                verticalSpacing={{base: 'md', sm: 'xl'}}
            >
                <ReleasesCard title="Red Flash" streams={4000} released="March 15" artist="Alexander Gust"
                              image="/alexander_gust.png"/>
                <ReleasesCard title="open" streams={5000} released="March 8" artist="Osteryze"
                              image="/3.jpg"/>
                <ReleasesCard title="stuck in maybe" streams={10000} released="March 3" artist="w8bless"
                              image="/e.jpg"/>
                <ReleasesCard title="BELT" streams={2000} released="March 2" artist="Joel Miller May"
                              image="/belt.jpg"/>
                <ReleasesCard title="Red Curtain" streams={4000} released="February 25" artist="Osteryze"
                              image="/5.jpg"/>
                <ReleasesCard title="Protect" streams={7000} released="February 23" artist="Alexander Gust"
                              image="/protect.jpg"/>
                <ReleasesCard title="Memories" streams={8000} released="February 20" artist="w8bless"
                              image="/4.jpg"/>
                <ReleasesCard title="I see" streams={10000} released="February 17" artist="Alexander Gust"
                              image="/eye.jpg"/>
                <ReleasesCard title="One Life" streams={10000} released="February 15" artist="Joel Miller May"
                              image="/onelife.jpg"/>
            </SimpleGrid>
        </Container>

        <Divider my="2rem" color="blue" size="xl"/>

        <Container id="apply" mb="10rem">
            <ApplyForm/>
        </Container>
    </>
}
