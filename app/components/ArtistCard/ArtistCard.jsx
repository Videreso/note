import {Paper, Title} from '@mantine/core';
import classes from './ArtistCard.module.css';

export function ArtistCard({image, title}) {
    return (<Paper w="100%" h="100%" shadow="lg" p="xl" radius="md" className={classes.card} style={{backgroundImage: "url(" + image + ")"}}>
        <div>
            <Title order={3} className={classes.title}>
                {title}
            </Title>
        </div>
    </Paper>);
}