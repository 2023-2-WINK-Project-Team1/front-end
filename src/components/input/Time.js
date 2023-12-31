import React, { useState } from 'react';
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 300px; /* 필요에 따라 조절 */
  margin-bottom: 40px;
`;

const StyledDatePicker = styled(DatePicker)`
  border: none;
  border-bottom: 1px solid #E6E6E6;  
  outline: none;
  font-size: 16px;
  height: 20px;
  width: 295px;
`;




function Time() {
    //대여시간
    const [startTime, setStartTime] = useState(null);
    const onSelect = (time) => {
        setStartTime(time);
    };

    return (
        <InputContainer className="App">

            <InputWrapper>
                <StyledDatePicker
                    selected={startTime}
                    onChange={(time) => onSelect(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="대여시간"
                    dateFormat=" aa h:mm"
                    placeholderText="대여시간"
                />
            </InputWrapper>

        </InputContainer>
    );
}

export default Time;





