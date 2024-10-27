import { Avatar, Container, Grid2, Skeleton, Stack, Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Skeleton",
    component: Skeleton,
    tags: ["autodocs"]
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Layout: Story = {
    render: () => (
        <Container>
            <Grid2 container spacing={2}>
                <Grid2 display="flex" justifyContent="center" alignItems="center" size={1}>
                    <Skeleton variant="circular">
                        <Avatar />
                    </Skeleton>
                </Grid2>
                <Grid2 size={7}>
                    <Typography variant="h3">
                        <Skeleton />
                    </Typography>
                </Grid2>
                <Grid2 size={4} />
                <Grid2 size={4}>
                    <Stack direction="column" spacing={1}>
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                    </Stack>
                </Grid2>
                <Grid2 size={4}>
                    <Stack direction="column" spacing={1}>
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                    </Stack>
                </Grid2>
                <Grid2 size={4}>
                    <Stack direction="column" spacing={1}>
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                        <Skeleton variant="rectangular" />
                    </Stack>
                </Grid2>
            </Grid2>
        </Container>
    )
};
