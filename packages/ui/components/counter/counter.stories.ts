import { Meta, StoryObj } from "@storybook/react";
import Counter from "./counter";
import { fn } from "@storybook/test";

const meta = {
    title: "Components/Counter",
    component: Counter,
    tags: ["autodocs"],
    args: {
        onClick: fn()
    }
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 0
    }
};
