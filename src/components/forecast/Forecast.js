import React from "react";
import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import "./Forecast.css"
export default function Forecast({ data }) {
    const weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const Day = new Date().getDay()
    const forecastDays = weeks.slice(Day, weeks.length).concat(weeks.slice(0, Day))
    console.log(forecastDays)
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.floor(item.main.temp_min)} °C / {Math.floor(item.main.temp_max)} °C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-grid">
                                <div className="grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} Pa</label>
                                </div>
                                <div className="grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className="grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                                <div className="grid-item">
                                    <label>Wind speed</label>
                                    <label>{item.wind.speed} M/S</label>
                                </div>
                                <div className="grid-item">
                                    <label>Sea level</label>
                                    <label>{item.main.sea_level} M</label>
                                </div>
                                <div className="grid-item">
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)} °C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}
                <AccordionItem></AccordionItem>
            </Accordion>
        </div>
    )
}