import Image from "next/image";
import React from "react";
import {Container} from "@/components/Container";

type LibraryPreviewProps = {}

const LibraryPreview = ({}: LibraryPreviewProps) => {
    //probably a slideshow or carousel
    // maybe a group of tags that take you to the view
    return <div>LibraryPreview</div>
}
type CardProps = {
    name: string;
    description: string;
    icon: string;
    url: string;
}
const Card = ({name, description, icon, url}: CardProps) => {
    return <div>Card</div>
}
export default function Home() {
    return (
        <Container>
            <LibraryPreview/>

            <Card url="/view" name="Get Inspired" description="View your images to see" icon=""/>
            <Card url="/edit" name="Edit Library" description="Upload images to see" icon=""/>
            <Card url="/upload" name="Upload" description="Upload images to see" icon=""/>
            <Card url="/settings" name="Settings" description="Upload images to see" icon=""/>

        </Container>
    );
}
