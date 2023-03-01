import { createStyles, Text, Card, RingProgress, Group } from '@mantine/core';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
import { click } from "@testing-library/user-event/dist/click";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
    ring: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-center',
        
        [theme.fn.smallerThan(350)]: {
          justifyContent: 'center',
        },
      },
  
  }));
  
 



export function EmployeeActivityGraph({current, completed}) {
  const { classes, theme } = useStyles();

  const staticdata = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
  ];

  const staticdata2 = [
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 7,
    },
    {
      id: 4,
    },
    {
      id: 2,
    },
    {
      id: 9,
    },
    {
      id: 1,
    },
  ];


const labels = [
    "50",
    "100",
    "150",
    "200",
    "250",
    "300",
    "350",
    
];

const options = {
responsive: true,
plugins: {
  legend: {
    position: "top",
  },
  title: {
    display: true,
    text: "Chart.js Line Chart",
  },
},
};
const data = {
labels,
datasets: [
  {
    label: "Number of active employess with hours worked",
    data: staticdata.map((val) => val.id),
    borderColor: "#DB00FF",
    backgroundColor: "#DB00FF",
  },

  {
    data: staticdata2.map((val) => val.id),
    borderColor: "#572DFF",
    backgroundColor: "#572DFF",
  },
],
};
 
  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
         <div className={classes.ring}>
          <Line options={options} data={data} class="font-lexend" />
          </div>
      
    </Card>
  );
}