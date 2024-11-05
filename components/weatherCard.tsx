import styled from "styled-components";
import {Weather} from  "@/app/interfaces/weather";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    margin: 1rem;
    padding: 1rem;
    width: 200px;
    border-radius: 10px;
`;

export default function WeatherCard(props: Weather) {
    return (
        <WeatherCardWrapper>
            <h2>{props.datetime}</h2>
            <p>{props.conditions}</p>
            <p>{props.description}</p>
            <p>{props.tempmin}º-{props.tempmax}º</p>
        </WeatherCardWrapper>
    )
}