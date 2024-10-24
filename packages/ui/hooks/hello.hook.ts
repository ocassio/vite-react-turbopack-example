import { useEffect } from "react";

export function useHello() {
    useEffect(() => {
        console.log('Hello world!');
    }, []);
} 