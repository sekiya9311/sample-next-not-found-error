'use client';

export default function Error({error}:{error:Error}) {
    return <div>{error.name}</div>;
}
