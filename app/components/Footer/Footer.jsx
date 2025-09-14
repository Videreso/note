import { ActionIcon, Container, Group, Image, rem, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandSpotify,
  IconBrandYoutube,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          <Link href="/">
            <Image
              className="logo"
              src="/logo.png"
              alt="Logo"
              w="42"
              h="auto"
            />
          </Link>
          <Text size="sm" c="dimmed">
            ©2024 NOTESOUNDS ALL RIGHTS RESERVED
          </Text>
        </Group>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            component={Link}
            href="https://www.instagram.com/notesoundscom/"
            target="_blank"
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          {/*// now for youtube, soundcloud, facebook and spotify*/}
          <ActionIcon
            component={Link}
            href="https://www.youtube.com/@note-sounds"
            target="_blank"
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            component={Link}
            href="https://www.facebook.com/profile.php?id=100089781420464"
            target="_blank"
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandFacebook
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
