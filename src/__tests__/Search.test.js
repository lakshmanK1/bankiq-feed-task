import { screen, render } from "@testing-library/react";
import Search from "../Components/Search/Search";
import userEvent from "@testing-library/user-event";

test('Input element is in document', ()=>{
    render(<Search/>);
    const inputElement = screen.getByTestId('input-field');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
})

test('Placeholder text for search field', ()=>{
    render(<Search/>);
    const placeholder = screen.getByPlaceholderText('search here..');
    expect(placeholder).toBeTruthy();
})

test('initial text value should be empty', ()=>{
    render(<Search/>);
    const validTextInput = screen.getByTestId('input-field');
    expect(validTextInput.value).toBe('');
})