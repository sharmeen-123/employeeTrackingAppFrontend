import { createStyles, Text, Card, RingProgress, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  label: {
    fontFamily: `Microsoft YaHei UI, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1,
    fontSize:14,
    marginLeft: theme.spacing.md,
  },

  inner: {
    display: 'flex',
    // marginTop: theme.spacing.md,

    [theme.fn.smallerThan(350)]: {
      flexDirection: 'column',
    },
  },
  bubbble:{
    display: 'flex',
    marginTop: theme.spacing.sm,
    [theme.fn.smallerThan(350)]: {
      flexDirection: 'column',
    },
  },

  ring: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-center',
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
    
    [theme.fn.smallerThan(350)]: {
      justifyContent: 'center',
      marginTop: theme.spacing.md,
    },
  },
}));



export function StatsRingCard({current, completed}) {
  const { classes, theme } = useStyles();
 
  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>

        <div>
        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={9}
            size={150}
            sections={[{ value: (current.completed / (current.assigned+current.completed+current.unassigned) ) * 100,color: '#338B47' },
            { value: (current.assigned / (current.assigned+current.completed+current.unassigned) ) * 100,color: '#96CDA2' },
            { value: (current.unassigned / (current.assigned+current.completed+current.unassigned) ) * 100,color: '#E0FFE7' }]}
             label={
              <div>
                <Text align="center" size="lg" className={classes.label} sx={{ fontSize: 22 }}>
                  {((current.completed / (current.assigned+current.completed+current.unassigned)) * 100).toFixed(0)}%
                </Text>
              </div>

            }

            
          />
          
        </div>

        <div className={classes.ring}>
      <div>
      <div className={classes.bubbble}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#338B47"/>
      </svg>

          <Text size="xl" className={classes.label} >
            Completed
          </Text>
          </div>

          <div className={classes.bubbble} >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#96CDA2"/>
      </svg>

          <Text size="xl" className={classes.label}>
            Assigned tasks
          </Text>
          </div>

          <div className={classes.bubbble} >
      <svg width="24" height="24
      " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#E0FFE7"/>
      </svg>

          <Text size="xl" className={classes.label}>
            Unassigned
          </Text>
          </div>
         
        </div>
          
        </div>
        </div>
      
      

        <svg width="1" height="240" viewBox="0 0 1 340" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="2.18557e-08" x2="0.499985" y2="340" stroke="black" stroke-opacity="0.62"/>
    </svg>
    <div>
    <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={9}
            size={150}
            sections={[{ value: (completed.completed / (completed.assigned+completed.completed+completed.unassigned) ) * 100,color: '#7D20FF' },
            { value: (completed.assigned / (completed.assigned+completed.completed+completed.unassigned) ) * 100,color: '#CD7AFF' },
            { value: (completed.unassigned / (completed.assigned+completed.completed+completed.unassigned) ) * 100,color: '#D6D0FF' }]}
             label={
              <div>
                <Text align="center" size="lg" className={classes.label} sx={{ fontSize: 22 }}>
                  {((completed.completed / (completed.assigned+completed.completed+completed.unassigned)) * 100).toFixed(0)}%
                </Text>
              </div>
            }
          />
        </div>
        <div className={classes.ring}>
      <div>
      <div className={classes.bubbble}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#7D20FF"/>
      </svg>

          <Text size="xl" className={classes.label}>
            Completed
          </Text>
          </div>

          <div className={classes.bubbble}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#CD7AFF"/>
      </svg>

          <Text size="xl" className={classes.label}>
          Assigned tasks
          </Text>
          </div>

          <div className={classes.bubbble}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#D6D0FF"/>
      </svg>

          <Text size="xl" className={classes.label}>
            Unassigned
          </Text>
          </div>
         
        </div>
          
        </div>
    </div>


        

      </div>

    </Card>
  );
}