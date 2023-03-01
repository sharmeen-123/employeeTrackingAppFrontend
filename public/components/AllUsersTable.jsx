import { useState, useEffect } from 'react';
import { createStyles, Table, Card, Avatar, Group, Text } from '@mantine/core';
import "./style.css"

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        width: "100%",
    },
    heading: {
        textAlign: "center",
    },

    header: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease',

        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
                }`,
        },
    },

}));


export function TableScrollArea({ data }) {
    const { classes, cx } = useStyles();
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(false)
    const [staticData, setStaticData] = useState(false)
    const [playersPerPage] = useState(3)
    let current = 1

    useEffect(() => {
        setStaticData(data);
        console.log(staticData, "data", data);
        setPage(data);
    }, [])

    const setPage = (data) => {
        //const current = currentPage
        if (nextPage) {
            // current = current + 1
        }
        const indexOfLastPage = current * playersPerPage;
        const indexOfFirstPage = indexOfLastPage - playersPerPage;
        let page = []
        page = data.slice(indexOfFirstPage, indexOfLastPage)
        setStaticData(page)
        setTotalPages(Math.ceil(data.length / playersPerPage))
        console.log("static data", staticData)
    }

    const nextPage = () => {
        if (currentPage < totalPages) {
            current = currentPage + 1
            setCurrentPage(prev => prev + 1)

            setPage(data);
        }

    }

    const backPage = () => {
        if (currentPage > 1) {
            current = currentPage - 1
            setCurrentPage(prev => prev - 1)
            setPage(data);
        }

    }

    const rows = data.map((row) => (
        <tr key={row.name}>
            <td>{row.id}</td>
            <td> <Group spacing="sm">
                <Avatar size={40} src={row.avatar} radius={40} />
                <Text size="sm" weight={500}>
                    {row.name}
                </Text>
            </Group></td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.dateJoined}</td>
            <td>{row.designation}</td>
            <td>
                <div className='buttons'>
                    <button className='update-Button'>
                        <div className='update-image'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8218 7.21891L13.175 6.86578L12.1156 5.80641L10.175 3.86578L9.11559 2.80641L8.76247 3.15953L8.05622 3.86578L1.83122 10.0908C1.50622 10.4158 1.26872 10.8189 1.13747 11.2595L0.0312183 15.022C-0.0469067 15.2845 0.0249683 15.5689 0.221843 15.7627C0.418718 15.9564 0.699968 16.0283 0.962468 15.9533L4.72184 14.847C5.16247 14.7158 5.56559 14.4783 5.89059 14.1533L12.1156 7.92828L12.8218 7.21891ZM4.99997 12.4814L4.71559 13.1908C4.59059 13.2877 4.44997 13.3595 4.29997 13.4064L1.85622 14.1252L2.57497 11.6845C2.61872 11.5314 2.69372 11.3908 2.79059 11.2689L3.49997 10.9845V11.9845C3.49997 12.2595 3.72497 12.4845 3.99997 12.4845H4.99997V12.4814ZM11.3343 0.584534L10.8843 1.03766L10.1781 1.74391L9.82184 2.09703L10.8812 3.15641L12.8218 5.09703L13.8812 6.15641L14.2343 5.80328L14.9406 5.09703L15.3937 4.64391C16.175 3.86266 16.175 2.59703 15.3937 1.81578L14.1656 0.584534C13.3843 -0.196716 12.1187 -0.196716 11.3375 0.584534H11.3343ZM9.85309 5.83453L5.35309 10.3345C5.15934 10.5283 4.84059 10.5283 4.64684 10.3345C4.45309 10.1408 4.45309 9.82203 4.64684 9.62828L9.14684 5.12828C9.3406 4.93453 9.65934 4.93453 9.85309 5.12828C10.0468 5.32203 10.0468 5.64078 9.85309 5.83453Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <p>
                                Update
                            </p>
                        </div>

                    </button>

                    <button className='delete-Button'>
                        <div className='delete-image'>
                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.52679 0.622266C4.70759 0.239063 5.07924 0 5.48438 0H9.51562C9.92076 0 10.2924 0.239063 10.4732 0.622266L10.7143 1.125H13.9286C14.5212 1.125 15 1.62773 15 2.25C15 2.87227 14.5212 3.375 13.9286 3.375H1.07143C0.478795 3.375 0 2.87227 0 2.25C0 1.62773 0.478795 1.125 1.07143 1.125H4.28571L4.52679 0.622266ZM1.07143 4.5H13.9286V15.75C13.9286 16.991 12.9676 18 11.7857 18H3.21429C2.03237 18 1.07143 16.991 1.07143 15.75V4.5ZM4.28571 6.75C3.99107 6.75 3.75 7.00313 3.75 7.3125V15.1875C3.75 15.4969 3.99107 15.75 4.28571 15.75C4.58036 15.75 4.82143 15.4969 4.82143 15.1875V7.3125C4.82143 7.00313 4.58036 6.75 4.28571 6.75ZM7.5 6.75C7.20536 6.75 6.96429 7.00313 6.96429 7.3125V15.1875C6.96429 15.4969 7.20536 15.75 7.5 15.75C7.79464 15.75 8.03571 15.4969 8.03571 15.1875V7.3125C8.03571 7.00313 7.79464 6.75 7.5 6.75ZM10.7143 6.75C10.4196 6.75 10.1786 7.00313 10.1786 7.3125V15.1875C10.1786 15.4969 10.4196 15.75 10.7143 15.75C11.0089 15.75 11.25 15.4969 11.25 15.1875V7.3125C11.25 7.00313 11.0089 6.75 10.7143 6.75Z" fill="white" />
                            </svg>

                        </div>
                        <div>
                            <p>
                                Delete
                            </p>
                        </div>

                    </button>
                </div>

            </td>
        </tr>
    ));

    return (
        <Card withBorder p="xl" radius="md" className={classes.card}>
            <Table sx={{ minWidth: 700 }}>
                <thead className={cx(classes.header)}>
                    <tr className={classes.heading}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date Joined</th>
                        <th>Designation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
            {/* pagination */}
            <div className="pagination">
                <h4 >
                    Page
                </h4>
                {currentPage === 1 ? (<>
                    <div
                        onClick={backPage}>
                        <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.11719 7.64245C0.628906 8.11678 0.628906 8.88709 1.11719 9.36142L8.61719 16.6471C9.10547 17.1215 9.89844 17.1215 10.3867 16.6471C10.875 16.1728 10.875 15.4025 10.3867 14.9282L3.76953 8.50004L10.3828 2.07191C10.8711 1.59758 10.8711 0.827271 10.3828 0.35294C9.89453 -0.12139 9.10156 -0.12139 8.61328 0.35294L1.11328 7.63865L1.11719 7.64245Z" fill="#5F5F5F" />
                        </svg>


                    </div>
                </>) : (<>
                    <div
                        onClick={backPage}>
                        <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.11719 7.64242C0.628906 8.11675 0.628906 8.88706 1.11719 9.36139L8.61719 16.6471C9.10547 17.1214 9.89844 17.1214 10.3867 16.6471C10.875 16.1728 10.875 15.4025 10.3867 14.9281L3.76953 8.50001L10.3828 2.07188C10.8711 1.59755 10.8711 0.82724 10.3828 0.35291C9.89453 -0.121421 9.10156 -0.121421 8.61328 0.35291L1.11328 7.63862L1.11719 7.64242Z" fill="#CACACA" />
                        </svg>

                    </div>
                </>)}

                <h4>
                    {currentPage}
                </h4>
                {currentPage === totalPages ? (<>
                    <div
                        onClick={nextPage}>
                        <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.88281 9.35758C10.3711 8.88325 10.3711 8.11294 9.88281 7.63861L2.38281 0.352892C1.89453 -0.121437 1.10156 -0.121437 0.613281 0.352892C0.125 0.827223 0.125 1.59754 0.613281 2.07187L7.23047 8.49999L0.617187 14.9281C0.128906 15.4024 0.128906 16.1728 0.617187 16.6471C1.10547 17.1214 1.89844 17.1214 2.38672 16.6471L9.88672 9.36138L9.88281 9.35758Z" fill="#5F5F5F" />
                        </svg>

                    </div>
                </>) : (<>
                    <div
                        onClick={nextPage}>
                        <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.88281 9.35755C10.3711 8.88322 10.3711 8.11291 9.88281 7.63858L2.38281 0.352861C1.89453 -0.121468 1.10156 -0.121468 0.613281 0.352861C0.125 0.827192 0.125 1.59751 0.613281 2.07184L7.23047 8.49996L0.617187 14.9281C0.128906 15.4024 0.128906 16.1727 0.617187 16.6471C1.10547 17.1214 1.89844 17.1214 2.38672 16.6471L9.88672 9.36135L9.88281 9.35755Z" fill="#CACACA" />
                        </svg>
                    </div></>)}

                <h4 >
                    out of {totalPages}
                </h4>
            </div>
        </Card>
    );
}