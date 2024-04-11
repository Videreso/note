import {Paper, Stack, Text, Title} from '@mantine/core';
import classes from './ReleasesCard.module.css';

export function ReleasesCard({image, title, artist, streams, released}) {
    return (
        <Paper style={{backgroundImage: "url(" + image + ")"}} shadow="lg" p="xl" radius="md" className={classes.card}>
            <Stack h="100%" justify="space-between">
                <div>
                    <Title mb="0.4rem" order={3} className={classes.title}>
                        {title}
                    </Title>
                    <Text c="white" size="1.4rem">{artist}</Text>
                </div>
                <div>
                    <Text c="white" mb="1rem" className={classes.category} size="xs">
                        {streams}+ streams
                    </Text>
                    <Text c="white" className={classes.category} size="xs">
                        Released {released}
                    </Text>
                </div>
            </Stack>
        </Paper>
    );
}