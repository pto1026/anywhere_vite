import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import { Navbar } from '../../../src/Components/Landing/Navbar';
describe(`Navbar tests`, () => {
    test(`Should render a logo`, () => {
        render(<Navbar />)
        const image = screen.getByRole('img', {
            name: /anywhere logo/i
        })
        expect(image).toBeInTheDocument()
    })
    test.each([
        'how it works',
        'use cases',
        'teams',
        'resources',
        'about'
    ])(`Should render a %s link`, (str) => {
        render(<Navbar />)
        const link = screen.getByRole('link', {
            name: str
        })
        expect(link).toBeInTheDocument();
    })
    test(`Should render a booking button`, () => {
        render(<Navbar />)
        const button = screen.getByRole('button', {
            name: /book now/i
        })
        expect(button).toBeInTheDocument();
    })
})