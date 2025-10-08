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
                        <Text className={classes.text} size="1.4rem">{artist}</Text>
                </div>
                <div>
                    <Text className={`${classes.category} ${classes.text}`} mb="1rem" size="xs">
                        {streams}+ streams
                    </Text>
                        <Text className={`${classes.category} ${classes.text}`} size="xs">
                            Released {released}
                        </Text>
                </div>
            </Stack>
        </Paper>
    );
}