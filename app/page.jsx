"use client";

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
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import classes from "./styles/Header.module.css";
import { PiUserCircleBold } from "react-icons/pi";
import { ArtistCard } from "./components/ArtistCard/ArtistCard";
import { useState } from "react";
import { ReleasesCard } from "./components/ReleasesCard/ReleasesCard";
import { ApplyForm } from "./components/Form/ApplyForm";
import { Carousel } from "@mantine/carousel";
import { PlaylistsSection } from "./components/PlaylistsSection";

export default function Page() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(1);

  return (
    <>
      <Box bg="indigo.9" className={classes.header}>
        <Container py="0.8rem" size={1200} className={classes.inner}>
          <Link href="/">
            <Image
              className="logo"
              src="/logo.png"
              alt="Logo"
              w="42"
              h="auto"
            />
          </Link>
          <Group gap="2rem" visibleFrom="sm">
            <Group gap="1.2rem">
              <Link href="/#artists" className={classes.linkButton}>
                Artists
              </Link>
              <Link href="/#label" className={classes.linkButton}>
                Label
              </Link>
              <Link href="/#releases" className={classes.linkButton}>
                Releases
              </Link>
              <Link href="/#apply" className={classes.linkButton}>
                Apply
              </Link>
            </Group>
          </Group>
          <div />

          <Burger
            color="white"
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />

          <Drawer
            opened={opened}
            onClose={toggle}
            position="right"
            padding="xl"
            size="md"
            title="Menu"
          >
            <Stack>
              <Text fw={700} size="1.1rem" component={Link} href="/#artists">
                Artists
              </Text>
              <Text fw={700} size="1.1rem" component={Link} href="/#label">
                Label
              </Text>
              <Text fw={700} size="1.1rem" component={Link} href="/#releases">
                Releases
              </Text>
              <Text fw={700} size="1.1rem" component={Link} href="/#apply">
                Apply
              </Text>
            </Stack>
          </Drawer>
        </Container>
      </Box>
      <Container size={1400}>
        <Grid my="10%">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack py="2%" gap="0.2rem">
              <Title
                fs="italic"
                c="bright"
                mb="1rem"
                lh={1}
                fw={700}
                fz={{ base: "3rem", md: "5rem" }}
                maw="40rem"
              >
                Notesounds
              </Title>
              <Text c="dimmed" maw="40rem">
                We are an Indie Record Label primarily focused on Nightcore &
                EDM. Our large repertoire features a wide array of top and
                upcoming Nightcore artists available on Spotify to guarantee the
                satisfaction of all our listeners.
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col pos="relative" span={{ base: 12, md: 6 }}>
            <Paper
              right="5rem"
              top={0}
              pos="absolute"
              className="stat_box"
              radius="50px"
              bg="rgba(255, 255, 255, 0.5)"
              w="fit-content"
              shadow="lg"
              p="2rem"
            >
              <Group>
                <ActionIcon size="xl" bg="rgb(35,139,230, 0.5)">
                  <PiUserCircleBold size="1.8rem" />
                </ActionIcon>
                <Text c="black" fw={700} size="2rem">
                  30+
                </Text>
                <Text c="dark.5">Signed Artists</Text>
              </Group>
            </Paper>
            <Paper
              top="10rem"
              left="1rem"
              pos="absolute"
              className="stat_box"
              radius="50px"
              bg="rgba(255, 255, 255, 0.5)"
              w="fit-content"
              shadow="lg"
              p="2rem"
            >
              <Group>
                <ActionIcon size="xl" bg="rgb(35,139,230, 0.5)">
                  <PiUserCircleBold size="1.8rem" />
                </ActionIcon>
                <Text c="black" fw={700} size="2rem">
                  1,500,000+
                </Text>
                <Text c="dark.5">Streams</Text>
              </Group>
            </Paper>
            <Paper
              bottom="-2rem"
              right="2rem"
              pos="absolute"
              className="stat_box"
              radius="50px"
              bg="rgba(255, 255, 255, 0.5)"
              w="fit-content"
              shadow="lg"
              p="2rem"
            >
              <Group>
                <ActionIcon size="xl" bg="rgb(35,139,230, 0.5)">
                  <PiUserCircleBold size="1.8rem" />
                </ActionIcon>
                <Text c="black" fw={700} size="2rem">
                  200+
                </Text>
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

      <Divider my="2rem" color="blue" size="xl" />

      <Container id="artists" size={1200} mb="8rem">
        <Title c="bright" mb="0.8rem" ta="center" order={2} fz="3rem">
          Meet our talent
        </Title>
        <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">
          Artists available at Notesounds are recruited by our specialized A&R
          team who are always on the lookout for the hottest sounds in the
          Nightcore scene.
        </Text>
        <Container size="60rem">
          <Carousel
            slideSize="60rem"
            w="auto"
            withIndicators
            height={800}
            styles={{
              control: {
                color: '#00008B',
                borderColor: '#00008B',
                fontSize: '4rem',
                minWidth: '5rem',
                minHeight: '5rem',
              },
            }}
          >
            <Carousel.Slide>
              <ArtistCard image="/sDPvYvK.png" title="ROCK EMO NIGHTCORE" />
            </Carousel.Slide>
            <Carousel.Slide>
              <ArtistCard image="/sj1ezZX_d.webp" title="MEEX000" />
            </Carousel.Slide>
              <Carousel.Slide>
                <ArtistCard image="/R37rskF_d.webp" title="TOMA" />
              </Carousel.Slide>
            <Carousel.Slide>
              <ArtistCard image="/NrnDVK4_d.webp" title="NIGHTCORE ICHIBAN" />
            </Carousel.Slide>
          </Carousel>
        </Container>
      </Container>

      <Divider my="2rem" color="blue" size="xl" />

      <Container id="label" size={1200} mb="8rem">
        <Title c="bright" mb="0.8rem" ta="center" order={2} fz="3rem">
          Label
        </Title>
        <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">
          Notesounds differs from other Indie Music Labels thanks to our four
          exclusive programs we provide to those signed with us.
        </Text>
        <Stepper active={active} onStepClick={setActive} iconPosition="right">
          <Stepper.Step label="Distribution">
            <Text fw={700} my="1rem">
              Distribution
            </Text>
            <Text>
              Distributing your releases with Notesounds is simple and works
              around your schedule. Whether you want to release singles, or an
              album at whatever time or date we are ready. Thanks to our
              Distribution Partners we promise a seamless experience.
            </Text>
          </Stepper.Step>
          <Stepper.Step label="Support">
            <Text fw={700} my="1rem">
              Support
            </Text>
            <Text>
              Here at Notesounds our number one priority is to make sure you as
              an Artist hit the goals you made when you signed with us. No
              exceptions, that's why with our dedicated team we are available
              and ready 24/7.
            </Text>
          </Stepper.Step>
          <Stepper.Step label="Production">
            <Text fw={700} my="1rem">
              Production
            </Text>
            <Text>
              Notesounds maintains an active team of sound mixers, writers,
              mastering and more. The full backing of our production team is
              available to make sure your track sounds as perfect as possible.
            </Text>
          </Stepper.Step>
          <Stepper.Step label="Marketing">
            <Text fw={700} my="1rem">
              Marketing
            </Text>
            <Text>
              In this day and age, Marketing is the single most important thing
              for any aspiring musician. That's why at Notesounds its our single
              most developed Department. Ranging from Dedicated NS Playlists,
              Veteran Facebook AD Managers, Influencer Partnerships, and much
              more of top industry strategies.
            </Text>
          </Stepper.Step>
        </Stepper>
      </Container>

      <Divider my="2rem" color="blue" size="xl" />

      <Container id="releases" size={1800} mb="8rem">
        <Title c="bright" mb="0.8rem" ta="center" order={2} fz="3rem">
          Releases
        </Title>
        <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">
          Official releases distributed by Notesounds are here! Dive deep into
          the hottest tracks in Nightcore & EDM.
        </Text>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <ReleasesCard
            title="No Way Back"
            streams={37000}
            released="2025"
            artist="Meex000"
            image="/k7b8237_d.webp"
          />
          <ReleasesCard
            title="Zombie"
            streams={220000}
            released="2022"
            artist="Rock Emo Nightcore"
            image="/sDPvYvK.png"
          />
          <ReleasesCard
            title="Burn Me Clean [NEW]"
            streams={10000}
            released="March 3"
            artist="JAWABLIZ"
            image="/Aesk2Yo_d.webp"
          />
          <ReleasesCard
            title="RUSH"
            streams={40000}
            released="2024"
            artist="toma"
            image="/R37rskF_d.webp"
          />
          <ReleasesCard
            title="Maquillaje"
            streams={60000}
            released="2025"
            artist="cattpur"
            image="/NvDYJ2f_d.webp"
          />
          <ReleasesCard
            title="Pink Promiise [NEW]"
            streams={1000}
            released="2025"
            artist="PRETTY LITTLE BABY"
            image="/wMx77vf_d.webp"
          />
          <ReleasesCard
            title="Stop Time"
            streams={25000}
            released="2025"
            artist="Meex000"
            image="/LeCKziW_d.webp"
          />
          <ReleasesCard
            title="Drown"
            streams={110000}
            released="2024"
            artist="Nightcore Ichiban"
            image="/w64a7a2_d.webp"
          />
          <ReleasesCard
            title="MISS HIM [NEW]"
            streams={1000}
            released="2025"
            artist="k0smixx"
            image="/UwZiOcH_d.webp"
          />
        </SimpleGrid>
      </Container>

      <PlaylistsSection />

      <Divider my="2rem" color="blue" size="xl" />

      <Container id="apply" mb="10rem">
        <ApplyForm />
      </Container>
    </>
  );
}
