import styled from "styled-components";


export const List = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
list-style: none;

`;

export const Item = styled.li`
flex-basis: calc((100% - 30px) / 3)
/* padding: 10px; */
/* border-radius: 4px; */
`;
