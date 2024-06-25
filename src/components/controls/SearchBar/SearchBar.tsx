import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

type SearchBarProps = {
    placeholder: string;
    searchLabel: string;
    onSearch: (searchValue: string) => void;
};

/**
 * An input group component used to provide a search bar for the user. The onSearch property
 * is an event handler that is called with the string search value when the Search button
 * is clicked.
 */
export default function SearchBar(props: SearchBarProps) {
    const { placeholder, searchLabel, onSearch } = props;

    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        onSearch(inputValue);
    };

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(inputValue);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="rk-search-bar mb-5">
            <InputGroup className="mb-3">
                <Form.Control placeholder={placeholder}
                              aria-label={searchLabel}
                              onChange={handleChange}
                              onKeyUp={handleKeyUp}
                              value={inputValue} />
                <Button variant="outline-primary" onClick={handleClick} disabled={!inputValue}>{searchLabel}</Button>
            </InputGroup>
        </div>
    );
};
