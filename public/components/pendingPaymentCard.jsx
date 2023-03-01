import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    comment: {
        padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
    },
    name: {
        color: "#3D3D3D",
        fontFamily: "Microsoft YaHei UI",
        fontSize: 20,
        fontWeight: 700,
    },
    designation: {
        fontFamily: "Microsoft YaHei UI",
        fontSize: 14,
        fontWeight: 700,
        padding: "1.5%",

    },
    inner: {
        display: "flex",
        paddingLeft: "10%",
        width: "100%",
        justifyContent: "flexAround"
    },
    location: {
        color: "#3D3D3D",
        fontFamily: "Microsoft YaHei UI",
        fontSize: 20,
        fontWeight: 700,
    },
    heading: {
        color: "#2DA348",
        fontFamily: "Microsoft YaHei UI",
        fontSize: 14,
        fontWeight: 700,
    },
    data: {
        color: "#5F5F5F",
        fontFamily: "Microsoft YaHei UI",
        fontSize: 14,
        fontWeight: 700,
        marginLeft:"2vw",
    },
    button: {
        backgroundColor: "#2DA348",
        color: "#ffffff",
        fontFamily: "Microsoft YaHei UI",
        fontSize: 14,
        fontWeight: 700,
        marginTop: "5%",
        padding: "2%",
        width: "100%"
    },
    wage: {
        color: "#2DA348",
        fontFamily: "Microsoft YaHei UI",
        fontSize: 20,
        fontWeight: 700,
    },
    footer:{
        display:'flex',
        justifyContent:'center',
        marginTop: "5%",
    },
}));

export function PendingPaymentCard({ author, pending, TotalWage }) {
    const { classes } = useStyles();
    return (
        <Paper withBorder radius="md" className={classes.comment}>
            <Group>
                <Avatar src={author.image} alt={author.name} radius="xl" size={110} />
                <div>
                    <Text size="sm" className={classes.name}>{author.name}</Text>
                    <Text size="xs" color="dimmed" className={classes.designation}>
                        {author.designation}
                    </Text>
                </div>
            </Group>
            <Text className={classes.location}>
                {author.location}
            </Text>
            <div className={classes.inner}>
                <Text size="sm" className={classes.heading}>Starting time: </Text>
                <Text size="sm" className={classes.data}>{author.startingTime}</Text>
            </div>
            <div className={classes.inner}>
                <Text size="sm" className={classes.heading}>Ending time: </Text>
                <Text size="sm" className={classes.data}> {author.endingTime}</Text>
            </div>
            <div className={classes.inner}>
                <Text size="sm" className={classes.heading}>Active  time: </Text>
                <Text size="sm" className={classes.data}>{author.activeTime}</Text>
            </div>
            <div className={classes.inner}>
                <Text size="sm" className={classes.heading}>Hourly wage: </Text>
                <Text size="sm" className={classes.data}>{author.HourlyWage}</Text>
            </div>
            {pending === true ? (<>
                <div >
                    <button className={classes.button}>
                        Calculate Payment
                    </button>
                </div>
            </>) : (<>
                <div className={classes.footer}>
                    <Text size="sm" className={classes.name}>Total Wage: </Text>
                    <Text size="sm" className={classes.wage}>{TotalWage}</Text>
                </div>
            </>)}



        </Paper>
    );
}