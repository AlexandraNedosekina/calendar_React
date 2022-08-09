import React from "react";
import styled from "styled-components";


const FlexWrapper = styled.div`
    display: flex;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(25, 1fr);
    // grid-gap: 1px;
    background-color: #e6e6e6;
`;

const RowInCell = styled.div`
    display: flex;
    justify-content: center;
`;

const CellWrapper = styled.div`
    min-width: 80px;
    min-height: 80px;
    background-color: #f6f6f6;
    color: #030303;
`;

const CalendarGrid = () => {
    const totalDays = 42;
    const daysArray = [...Array(7)];
    return(
        <FlexWrapper>
            {
                daysArray.map((_,i) => (
                    <CellWrapper>
                        <RowInCell>
                            {i}
                        </RowInCell>
                    </CellWrapper>
                ))
            }
        </FlexWrapper>
    );
};

export {CalendarGrid};