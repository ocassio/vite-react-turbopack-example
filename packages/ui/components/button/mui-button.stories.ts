import { Button } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: "button",
        variant: "contained",
        children: "Click Me!"
    }
};
