import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

type SearchBarProps = {
    onSearch: (searchValue: string) => void;
};

/**
 * An input group component used to provide a search bar for the user. The onSearch property
 * is an event handler that is called with the string search value when the Search button
 * is clicked.
 */
export default function SearchBar(props: SearchBarProps) {
    const { onSearch } = props;

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
                <Form.Control placeholder={t('features.search.enter')}
                              aria-label={t('features.search.enter')}
                              onChange={handleChange}
                              onKeyUp={handleKeyUp}
                              value={inputValue} />
                <Button variant="outline-primary" onClick={handleClick} disabled={!inputValue}>
                    {t('common.search')}
                </Button>
            </InputGroup>
        </div>
    );
};
