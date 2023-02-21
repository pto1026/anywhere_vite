import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import { Hero } from '../../../src/Components/Landing/Hero';
describe(`Hero tests`, () => {
    test(`Should render a heading`, () => {
        render(<Hero />)
        const header = screen.getByRole('heading', {
            name: /everything you need to work from anywhere./i
        })
        expect(header).toBeInTheDocument()
    })
    test(`Should render a subtitle paragraph`, () => {
        render(<Hero />)
        const subtitle = screen.getByText(/save on time and cost by trusting allwhere with procurement, logistics, and deployment./i)
        expect(subtitle).toBeInTheDocument();
    })
    test(`Should render a booking button`, () => {
        render(<Hero />)
        const button = screen.getByRole('button', {
            name: /book now/i
        })
        expect(button).toBeInTheDocument();
    })
    test(`Should render an image on the right`, () => {
        render(<Hero />)
        const image = screen.getByRole('img', {
            name: /a cartoony graphic that feels good/i
          })
          expect(image).toBeInTheDocument();
    })
})