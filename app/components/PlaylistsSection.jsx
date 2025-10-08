import { Container, Title, Text, SimpleGrid, Paper, Group, ActionIcon } from "@mantine/core";
import { IconBrandSpotify } from "@tabler/icons-react";

const playlists = [
  {
    title: "🎵NIGHTCORE👾EDM🔋",
    url: "https://open.spotify.com/playlist/1ZiM2G8AK8VSWB3bClNWDk",
    description: "The best of Nightcore tracks curated for you."
  },
  {
    title: "LATEST NIGHTCORE 24/7 🔥",
    url: "https://open.spotify.com/playlist/2YvP1BU5vt401QhAEFewEF",
    description: "High energy EDM playlist for your party moments."
  },
  {
    title: "MOTIVATION|RAGE|FOCUS",
    url: "https://open.spotify.com/playlist/06YAmXkG2aKCZfO3gQcBWn",
    description: "Handpicked tracks by the Notesounds team."
  }
];

export function PlaylistsSection() {
  return (
    <Container id="playlists" size={1200} mb="8rem">
      <Title c="bright" mb="0.8rem" ta="center" order={2} fz="3rem">
        Playlists
      </Title>
      <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">
        Discover and follow our curated Spotify playlists for the best Nightcore and EDM experience.
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 10, sm: "xl" }} verticalSpacing={{ base: "md", sm: "xl" }}>
        {playlists.map((playlist) => {
          let cardStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          };
          if (playlist.title === "🎵NIGHTCORE👾EDM🔋") {
            cardStyle = {
              ...cardStyle,
              backgroundImage: 'url(/Nightcore1.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              minHeight: '320px',
              color: '#fff',
            };
          } else if (playlist.title === "LATEST NIGHTCORE 24/7 🔥") {
            cardStyle = {
              ...cardStyle,
              backgroundImage: 'url(/Nightcore2.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              minHeight: '320px',
              color: '#fff',
            };
          } else if (playlist.title === "MOTIVATION|RAGE|FOCUS") {
            cardStyle = {
              ...cardStyle,
              backgroundImage: 'url(/Nightcore.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              minHeight: '320px',
              color: '#fff',
            };
          }
          return (
            <a
              key={playlist.title}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Paper
                shadow="md"
                radius="md"
                p="xl"
                style={{
                  ...cardStyle,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,139,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <Group style={playlist.title === "🎵NIGHTCORE👾EDM🔋" ? { position: 'relative', zIndex: 1 } : {}}>
                  <ActionIcon component="a" href={playlist.url} target="_blank" size="xl" color="green" variant="filled">
                    <IconBrandSpotify size={32} />
                  </ActionIcon>
                  <Title order={4} c="bright">{playlist.title}</Title>
                </Group>
                <Text ta="center" style={{ color: '#fff' }}>{playlist.description}</Text>
              </Paper>
            </a>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
// Removed duplicate rendering code
