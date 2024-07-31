// // just 
// const sum = (x:number, y:number) => {
//     return x+y
// }

// describe('App Componet', () => {
//     it('should sum correctly', () =>{
//         expect(sum(4,4 )).toBe(8) // expectativa esperada
//     })
// });
// export default {}; 
import {render, screen, fireEvent} from '@testing-library/react'
import App from './App';

const sum = (x:number, y:number) => {
    return x+y
}

describe('App Componet', () => {
    it("should sum correctly", () =>{
        expect(sum(4,4 )).toBeGreaterThan(7) // expectativa esperada
    });
    it('shold render App with hello message', () => {
        render (<App/>) 

        screen.getByText('Hello world!'); 
    });
    it('should change message on botton click', () => {
        render (<App/>);

        screen.getByText("Let's learn more about testing in React");

        const button = screen.getByText(/Change message/i);

        fireEvent.click(button)

        screen.getByText(/New message!/i)

    });
});

export default {}; 