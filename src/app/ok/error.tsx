'use client';

import { isNotFoundError } from "next/dist/client/components/not-found";

export default function Error({error}:{error:Error}) {
    if (isNotFoundError(error)) {
        throw error;
    }
    return <div>{error.name}</div>;
}
