import {
  Button,
  Group,
  Select,
  Text,
  Textarea,
  TextInput,
  Title,
  Paper,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useState } from "react";

export function ApplyForm() {
  const [statusMessage, setStatusMessage] = useState("");
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      topic: "", // can be 'artist', 'business', 'other'
      message: "",
    },
  });

  const handleFormSubmit = (event) => {
    if (!form.validate().hasErrors) {
      event.preventDefault();
      axios
        .post("/api/contact", { ...form.values })
        .then((response) => {
          setStatusMessage(response.data.message);
          form.reset();
        })
        .catch((error) => {
          setStatusMessage(error.response.data.message);
        });
    }
  };

  return (
    <Paper
      shadow="xl"
      radius={32}
      p="3.5rem"
      mt="md"
      style={{
        background: 'linear-gradient(135deg, #f4f8ff 0%, #e0e7ff 100%)',
        maxWidth: 900,
        width: '100%',
        margin: '0 auto',
        border: '2px solid #00008B',
        boxShadow: '0 8px 32px rgba(0,0,139,0.10)',
      }}
    >
      <Title mb="0.8rem" ta="center" order={2} fz="2.2rem" c="#00008B">
  Apply for NoteSounds
      </Title>
      <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">
  Interested in becoming an Artist with Notesounds? Send us a message below to our A&R.<br />
  Business partnerships or any legal matter: <span style={{ color: '#00008B', fontWeight: 600 }}>admin@notesounds.com</span>
      </Text>
      <Group wrap="wrap" grow mb="1.5rem">
        <TextInput
          label="Name"
          placeholder="Your name"
          size="lg"
          radius={16}
          styles={{
            input: {
              background: '#fff',
              borderColor: '#00008B',
              transition: 'border-color 0.2s',
            },
            inputFocused: {
              borderColor: '#00008B',
              boxShadow: '0 0 0 2px #00008B33',
            },
          }}
          {...form.getInputProps("name")}
          required
          mb="1.2rem"
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="Your email"
          size="lg"
          radius={16}
          styles={{
            input: {
              background: '#fff',
              borderColor: '#00008B',
              transition: 'border-color 0.2s',
            },
            inputFocused: {
              borderColor: '#00008B',
              boxShadow: '0 0 0 2px #00008B33',
            },
          }}
          {...form.getInputProps("email")}
          required
          mb="1.2rem"
        />
      </Group>
      <Select
        label="Topic"
        data={[
          { label: "Artist", value: "artist" },
          { label: "Business", value: "business" },
          { label: "Other", value: "other" },
        ]}
        placeholder="Select topic"
        size="lg"
        radius={16}
        styles={{
          input: {
            background: '#fff',
            borderColor: '#00008B',
            transition: 'border-color 0.2s',
          },
          inputFocused: {
            borderColor: '#00008B',
            boxShadow: '0 0 0 2px #00008B33',
          },
        }}
        {...form.getInputProps("topic")}
        required
        mb="1.2rem"
      />
      <Textarea
        label="Message"
        placeholder="Your message"
        size="lg"
        radius={16}
        minRows={4}
        styles={{
          input: {
            background: '#fff',
            borderColor: '#00008B',
            transition: 'border-color 0.2s',
          },
          inputFocused: {
            borderColor: '#00008B',
            boxShadow: '0 0 0 2px #00008B33',
          },
        }}
        {...form.getInputProps("message")}
        required
        mb="1.2rem"
      />
      <Text mt="1rem" ta="center" c={statusMessage ? 'green' : 'dimmed'}>
  {statusMessage}
      </Text>
      <Group justify="center" mt="xl">
        <Button
          onClick={handleFormSubmit}
          type="submit"
          size="xl"
          radius={16}
          color="indigo"
          style={{
            background: 'linear-gradient(90deg, #00008B 0%, #2A7FFE 100%)',
            color: '#fff',
            fontWeight: 700,
            letterSpacing: '0.03em',
            boxShadow: '0 4px 16px rgba(0,0,139,0.10)',
            border: 'none',
            padding: '0.8rem 2.5rem',
          }}
        >
          Send message
        </Button>
      </Group>
    </Paper>
  );
}
