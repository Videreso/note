import {Paper, Text, Title} from '@mantine/core';
import classes from './ArtistCard.module.css';

export function ArtistCard() {
    return (<Paper shadow="lg" p="xl" radius="md" className={classes.card}>
            <div>
                <Text className={classes.category} size="xs">
                    30+ releases
                </Text>
                <Title order={3} className={classes.title}>
                    Reasonin
                </Title>
            </div>
        </Paper>);
}