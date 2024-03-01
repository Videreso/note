'use client'

import {
    ActionIcon,
    Box,
    Burger,
    Container,
    Drawer,
    Group,
    Image,
    Paper,
    SimpleGrid,
    Stack, Stepper,
    Text,
    Title
} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import Link from "next/link";
import classes from './styles/Header.module.css';
import {PiClockBold, PiMusicNotesFill, PiTimerLight, PiUserCircleBold} from "react-icons/pi";
import {ArtistCard} from "./components/ArtistCard/ArtistCard";
import {useState} from "react";
import {ReleasesCard} from "./components/ReleasesCard/ReleasesCard";
import {ApplyForm} from "./components/Form/ApplyForm";

export default function Page() {
    const [opened, {toggle}] = useDisclosure(false);
    const [active, setActive] = useState(1);

    return <>
        <Box pt="1rem" className={classes.header}>
            <Container size={1200} className={classes.inner}>
                <Image className="logo" src="/logo.png" alt="Logo" w="52" h="auto"/>
                <Group gap="2rem" visibleFrom="sm">
                    <Text fw={700} size="1.1rem" component={Link} href="/#about">About us</Text>
                    <Text fw={700} size="1.1rem" component={Link} href="/#aritsts">Artists</Text>
                    <Text fw={700} size="1.1rem" component={Link} href="/#label">Label</Text>
                    <Text fw={700} size="1.1rem" component={Link} href="/#release">Releases</Text>
                    <Text fw={700} size="1.1rem" component={Link} href="/#apply">Apply</Text>
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
                        <Text fw={700} size="1.1rem" component={Link} href="/#about">About us</Text>
                        <Text fw={700} size="1.1rem" component={Link} href="/#aritsts">Artists</Text>
                        <Text fw={700} size="1.1rem" component={Link} href="/#label">Label</Text>
                        <Text fw={700} size="1.1rem" component={Link} href="/#release">Releases</Text>
                        <Text fw={700} size="1.1rem" component={Link} href="/#apply">Apply</Text>
                    </Stack>
                </Drawer>
            </Container>
        </Box>
        <Stack align="center" gap="0.2rem" my="10rem">
            <Image className="logo" src="/logo.png" alt="Logo" w="72" h="auto"/>
            <Title mb="1rem" lh={1} fw={700} mx="auto" ta="center" size="4rem" maw="40rem">Elegent sounds, the best
                artists</Title>
            <Text ta="center" c="dimmed" maw="40rem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                consectetur illum ipsam nobis possimus ratione sapiente! Cupiditate in perspiciatis quis saepe sunt!
                Amet blanditiis culpa nam quasi quo repellendus vero.</Text>
        </Stack>

        <Container size={1200} mb="8rem">
            <Title mb="0.8rem" ta="center" order={2} fz="3rem">Supporting artists for over 5 years</Title>
            <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusantium adipisci delectus distinctio earum expedita maxime necessitatibus officia
                rerum tempore voluptatibus.</Text>
            <SimpleGrid
                cols={{base: 1, sm: 2, lg: 4}}
                spacing={{base: 10, sm: 'xl'}}
                verticalSpacing={{base: 'md', sm: 'xl'}}
            >
                <Paper shadow="lg" p="3rem" style={{borderTop: "20px solid #2A7FFE"}}>
                    <ActionIcon mb="1rem" size="xl" bg="rgb(35,139,230, 0.5)">
                        <PiUserCircleBold size="1.8rem"/>
                    </ActionIcon>
                    <Text mb="1rem" c="dimmed">Total artists</Text>
                    <Text fw={700} size="2rem">4</Text>
                </Paper>
                <Paper shadow="lg" p="3rem" style={{borderTop: "20px solid #2A7FFE"}}>
                    <ActionIcon mb="1rem" size="xl" bg="rgb(35,139,230, 0.5)">
                        <PiClockBold size="1.8rem"/>
                    </ActionIcon>
                    <Text mb="1rem" c="dimmed">Total minutes listened</Text>
                    <Text fw={700} size="2rem">5,313,439</Text>
                </Paper>
                <Paper shadow="lg" p="3rem" style={{borderTop: "20px solid #2A7FFE"}}>
                    <ActionIcon mb="1rem" size="xl" bg="rgb(35,139,230, 0.5)">
                        <PiMusicNotesFill size="1.8rem"/>
                    </ActionIcon>
                    <Text mb="1rem" c="dimmed">Total songs</Text>
                    <Text fw={700} size="2rem">93</Text>
                </Paper>
                <Paper shadow="lg" p="3rem" style={{borderTop: "20px solid #2A7FFE"}}>
                    <ActionIcon mb="1rem" size="xl" bg="rgb(35,139,230, 0.5)">
                        <PiTimerLight size="1.8rem"/>
                    </ActionIcon>
                    <Text mb="1rem" c="dimmed">Since</Text>
                    <Text fw={700} size="2rem">2019</Text>
                </Paper>
            </SimpleGrid>
        </Container>

        <Container size={1200} mb="8rem">
            <Title mb="0.8rem" ta="center" order={2} fz="3rem">Meet our talent</Title>
            <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusantium adipisci delectus distinctio earum expedita maxime necessitatibus officia
                rerum tempore voluptatibus.</Text>
            <SimpleGrid
                cols={{base: 1, sm: 2, lg: 3}}
                spacing={{base: 10, sm: 'xl'}}
                verticalSpacing={{base: 'md', sm: 'xl'}}
            >
                <ArtistCard/>
                <ArtistCard/>
                <ArtistCard/>
                <ArtistCard/>
                <ArtistCard/>
                <ArtistCard/>
            </SimpleGrid>
        </Container>

        <Container size={1200} mb="8rem">
            <Title mb="0.8rem" ta="center" order={2} fz="3rem">About us</Title>
            <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusantium adipisci delectus distinctio earum expedita maxime necessitatibus officia
                rerum tempore voluptatibus.</Text>
            <Stepper active={active} onStepClick={setActive} iconPosition="right">
                <Stepper.Step label="Step 1" description="Create an account">
                    <Text fw={700} my="1rem">Step 1</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dolor, eligendi enim est eveniet explicabo facilis harum id laboriosam molestiae nesciunt quam quibusdam quod rem repudiandae sed sint. Debitis et illum ipsam itaque laboriosam nemo officia perferendis quasi saepe?</Text>
                </Stepper.Step>
                <Stepper.Step label="Step 2" description="Create an account">
                    <Text fw={700} my="1rem">Step 2</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dolor, eligendi enim est eveniet explicabo facilis harum id laboriosam molestiae nesciunt quam quibusdam quod rem repudiandae sed sint. Debitis et illum ipsam itaque laboriosam nemo officia perferendis quasi saepe?</Text>
                </Stepper.Step>
                <Stepper.Step label="Step 3" description="Create an account">
                    <Text fw={700} my="1rem">Step 3</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dolor, eligendi enim est eveniet explicabo facilis harum id laboriosam molestiae nesciunt quam quibusdam quod rem repudiandae sed sint. Debitis et illum ipsam itaque laboriosam nemo officia perferendis quasi saepe?</Text>
                </Stepper.Step>
                <Stepper.Step label="Step 4" description="Create an account">
                    <Text fw={700} my="1rem">Step 4</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur dolor, eligendi enim est eveniet explicabo facilis harum id laboriosam molestiae nesciunt quam quibusdam quod rem repudiandae sed sint. Debitis et illum ipsam itaque laboriosam nemo officia perferendis quasi saepe?</Text>
                </Stepper.Step>
            </Stepper>
        </Container>

        <Container size={1800} mb="8rem">
            <Title mb="0.8rem" ta="center" order={2} fz="3rem">Our releases</Title>
            <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusantium adipisci delectus distinctio earum expedita maxime necessitatibus officia
                rerum tempore voluptatibus.</Text>
            <SimpleGrid
                cols={{base: 1, sm: 2, lg: 3}}
                spacing={{base: 10, sm: 'xl'}}
                verticalSpacing={{base: 'md', sm: 'xl'}}
            >
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>
                <ReleasesCard/>
            </SimpleGrid>
        </Container>

        <Container mb="10rem">
            <ApplyForm />
        </Container>
    </>
}
