import {Paper, Stack, Text, Title} from '@mantine/core';
import classes from './ReleasesCard.module.css';

export function ReleasesCard() {
    return (
        <Paper shadow="lg" p="xl" radius="md" className={classes.card}>
            <Stack h="100%" justify="space-between">
                <div>
                    <Title mb="0.4rem" order={3} className={classes.title}>
                        New Album
                    </Title>
                    <Text c="white" size="1.4rem">Drake</Text>
                </div>
                <div>
                    <Text c="white" mb="1rem" className={classes.category} size="xs">
                        300,000+ streams
                    </Text>
                    <Text c="white" mb="1rem" className={classes.category} size="xs">
                        13 songs
                    </Text>
                    <Text c="white" className={classes.category} size="xs">
                        Released 2 days ago
                    </Text>
                </div>
            </Stack>
        </Paper>
    );
}