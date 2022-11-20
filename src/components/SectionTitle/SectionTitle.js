import PropTypes from 'prop-types';
import { Title } from './SectionTitle.styled';

export const SectionTitle = ({title, children}) => {
    return (
        <div>
            <Title>{title}</Title>
            {children}
        </div>
    )
}

SectionTitle.propType = {
    title: PropTypes.string.isRequired,
}