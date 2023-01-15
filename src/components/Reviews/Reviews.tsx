import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}
const Reviews = (props: Props) => {
    const arrReviews = [
        {
            name: 'Alex Denham',
            text: 'I previously had an iPad Air 2 and used an Adonit pixel since the air is not compatible with the Apple Pencil. It didn’t work that well but it did what I needed with some bugs and jitters.',
        },
        {
            name: 'Michael',
            text: 'I got my Apple Pencil 2nd Generation while on sale! Awesome deal! It made my iPad Pro12.9 inch come alive. Pairing was simple, just a matter of it magnetically attaching to the side of my iPad. It also charges fast while attached.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <Typography variant="h4" sx={{ margin: '50px 0' }}>
                Reviews
            </Typography>
            <div>
                {reviews.map(({ name, text }: Review, i) => (
                    <Card
                        variant="outlined"
                        key={i}
                        sx={{
                            margin: '20px 0',
                        }}
                    >
                        <CardContent>
                            <div>Name: {name}</div>
                            <div>{text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Please lieave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <div
                    style={{
                        margin: '20px 0',
                    }}
                >
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button type="submit" variant="outlined">
                    Send
                </Button>
            </form>
        </>
    )
}
export default Reviews
