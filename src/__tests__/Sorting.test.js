import { screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sorting from "../Components/Sorting/Sorting";

test('select field is in document', ()=>{
    render(<Sorting/>);
    const selectElement = screen.getByTestId('sort-component');
    expect(selectElement).toBeTruthy();
})

test('should correctly set default option', ()=>{
    render(<Sorting/>);
    const selectOption =  screen.getByRole('option', {name:'--Select--'}).selected;
    expect(selectOption).toBe(true);
})

test('should display correct number of options',()=>{
    render(<Sorting/>);
    const optionsCount = screen.getAllByRole('option').length;
    expect(optionsCount).toBe(4);
})

