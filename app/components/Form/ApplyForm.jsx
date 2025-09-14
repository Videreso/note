import {
  Button,
  Group,
  Select,
  Text,
  Textarea,
  TextInput,
  Title,
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
    <div>
      <Title mb="0.8rem" ta="center" order={2} fz="3rem" c="white">
        Apply for NoteSounds
      </Title>
      <Text mb="2rem" mx="auto" ta="center" c="dimmed" maw="40rem">
        Interested in becoming an Artist with Notesounds? Send us a message
        below to our A&R. Business partnerships or any legal matter below as
        well admin@notesounds.com.
      </Text>

      <Group wrap="nowrap" grow>
        <TextInput
          mb="1rem"
          label="Name"
          placeholder="Your name"
          {...form.getInputProps("name")}
          required
        />
        <TextInput
          mb="1rem"
          label="Email"
          type="email"
          placeholder="Your email"
          {...form.getInputProps("email")}
          required
        />
      </Group>
      <Select
        mb="1rem"
        label="Topic"
        data={[
          { label: "Artist", value: "artist" },
          { label: "Business", value: "business" },
          {
            label: "Other",
            value: "other",
          },
        ]}
        placeholder="Select topic"
        {...form.getInputProps("topic")}
        required
      />

      <Textarea
        label="Message"
        placeholder="Your message"
        {...form.getInputProps("message")}
        required
      />

      <Text mt="1rem" ta="center">
        {statusMessage}
      </Text>
      <Group justify="center" mt="xl">
        <Button onClick={handleFormSubmit} type="submit" size="md">
          Send message
        </Button>
      </Group>
    </div>
  );
}
