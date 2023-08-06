import {Container} from "@/components/Container";


const TagBar = () => {
    return <div>TagBar</div>
}

const ImageViewport = () => {
    return <div>Image Viewport</div>
}

export default function LibaryView() {
    return <Container>
        Library View
        <TagBar/>

        <ImageViewport/>

    </Container>
}