import "./main.css"
import Event1 from "../../assets/Image/event-2022-1.jpg"
import Event2 from "../../assets/Image/event-2022-2.jpg"
import Event3 from "../../assets/Image/event-2022-3.jpg"

const Main = () => {
    return (
        <div>
            <div id="carousel-example" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example" data-slide-to="1"></li>
                    <li data-target="#carousel-example" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <a href="#"><img src={Event1} /></a>
                        <div className="carousel-caption">
                            <h3>The 18th CII - Exim Bank Conclave on India - Africa Growth Partnership
                                CREATING SHARED FUTURES</h3>
                            <p>14 - 16 June 2023 at Hotel Taj Palace, New Delhi,</p>
                        </div>
                    </div>
                    <div className="item">
                        <a href="#"><img src={Event2} /></a>
                        <div className="carousel-caption">
                            <h3>The 18th CII - Exim Bank Conclave on India - Africa Growth Partnership
                                CREATING SHARED FUTURES</h3>
                            <p>14 - 16 June 2023 at Hotel Taj Palace, New Delhi,</p>
                        </div>
                    </div>
                    <div className="item">
                        <a href="#"><img src={Event3} /></a>
                        <div className="carousel-caption">
                            <h3>The 18th CII - Exim Bank Conclave on India - Africa Growth Partnership
                                CREATING SHARED FUTURES</h3>
                            <p>14 - 16 June 2023 at Hotel Taj Palace, New Delhi,</p>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#carousel-example" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#carousel-example" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>
            <div className="main_text">
                <h3>
                    Accommodation
                </h3>
                <p>We have negotiated special discounted rates for accommodation at various categories of hotels, ranging from 5 star to 4 star hotels during the upcoming Africa Conclave 2019. Being the highly sold out dates, especially hotels near to the venue, may we advise you to book your accommodation at the earliest, as all the rooms are being sold on first come first serve basis. Accommodation can be booked at a hotel of your choice from below mentioned options. Kindly write to us as per details mentioned below for your queries.</p>

            </div>
            <div className="table">
                <div className="container table-responsive py-5">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-dark" style={{ backgroundColor: "#099be4", color: "white" }}>
                            <tr>
                                <th scope="col" >Hotel</th>
                                <th scope="col">Area</th>
                                <th scope="col">Category</th>
                                <th scope="col">Distance from Venue
                                    (Kms)</th>
                                <th scope="col"><th scope="col">Distance from Airport
                                    (Kms)</th></th>
                                <th scope="col">Single Occupancy (INR)</th>
                                <th scope="col">Single Occupancy (USD)</th>
                                <th scope="col">Double Occupancy</th>
                                <th scope="col">Double Occupancy (USD)</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Taj Palace</th>
                                <td>Central Delhi</td>
                                <td>5 Star</td>
                                <td>00</td>
                                <td>17</td>
                                <td>13500</td>
                                <td>163</td>
                                <td>1500</td>
                                <td>181</td>
                            </tr>
                            <tr>
                                <th scope="row">Le Méridien</th>
                                <td>Central Delhi</td>
                                <td>5 Star</td>
                                <td> 08</td>
                                <td>24</td>
                                <td>16600</td>
                                <td>200</td>
                                <td>1800</td>
                                <td>217</td>

                            </tr>
                            <tr>
                                <th scope="row">Andaz</th>
                                <td>Aerocity Delhi</td>
                                <td>5 Star</td>
                                <td>15</td>
                                <td>06</td>
                                <td>17430</td>
                                <td>210</td>
                                <td>19000</td>
                                <td>229</td>
                            </tr>
                            <tr>
                                <th scope="row">The Grand</th>
                                <td>South Delhi</td>
                                <td>5 Star</td>
                                <td>10</td>
                                <td>16</td>
                                <td>14525</td>
                                <td>175</td>
                                <td>16000</td>
                                <td>193</td>
                            </tr>

                            <tr>
                                <th scope="row">Royal Plaza</th>
                                <td>Central Delhi</td>
                                <td>4 Star</td>
                                <td>08</td>
                                <td>21</td>
                                <td>10375</td>
                                <td>125</td>
                                <td>11750</td>
                                <td>142</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="form main_text">
                <h3>
                    Most Prefferred Hotel For India - Africa Conclave 2022
                </h3>
                <div className="form_input">
                    <form name="contact" method="POST" data-netlify="true">
                        <h3>Room Reservation Request Form</h3>
                        <div className="main_form"> 
                        <label>Hotel Type:</label>
                        <br></br>
                        <select id="hotel" name="Hotel">
                            <option>--Select Hotel Type-- </option>
                            <option value="Taj Palace">Taj Palace</option>
                            <option value="Royal Plaza">Royal Plaza</option>
                            <option value="The Grand">The Grand</option>
                            <option value="Le Meridien">Le Meridien</option>
                            <option value="Andaz">Andaz</option>
                        </select>

                        <br></br>
                        <label>No Of Rooms: </label>
                        <br></br>
                        <select id="count_room" name="No_Of_Room">
                            <option>--No Of Rooms-- </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <br></br>
                        <label>Type of Rooms: </label>
                        <br></br>
                        <select id="type_of_room" name="Type_of_Room">
                            <option>--Type of Rooms-- </option>
                            <option value="Single">Single</option>
                            <option value="Double">Double</option>
                        </select>

                        <br></br>
                        <label>Guest per Room:
                        </label>
                        <br></br>
                        <select id="guest_per_room" name="Guest_per_Room">
                            <option>--No Of Guest per Room-- </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <br></br>
                        <label>CheckIn: <span className="required_field">*</span>
                        </label>
                        <br></br>

                        <input type="date" required id="birthday" name="CheckIn" />
                        <br></br>

                        <label>CheckOut:<span className="required_field">*</span>
                        </label>
                        <br></br>
                        <input type="date" required id="birthday" name="CheckOut" />
                        <br></br>
                        <label>Tranasportion Required: <span className="required_field">*</span>
                        </label>
                        <br></br>
                        <select id="guest_per_room" name="Guest_per_Room"  required>
                            <option>--Select Yes or NO-- </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                        <br></br>
                        <label>Guest Name: <span className="required_field">*</span></label>
                        <br></br>
                        <input type="text" required placeholder="Name" name="Name" />

                        <br></br>
                        <label>Company Name:</label>
                        <br></br>
                        <input type="text" placeholder="Company Name" name="Company Name" />
                        <br></br>
                        <label>Address:</label>
                        <br></br>
                        <input type="text" placeholder="Address" name="Address" />
                        <br></br>
                        <label>GST No:
                        </label>
                        <input type="text" placeholder="GST NO" name="Gst_no" />
                        <br></br>
                        <label>Flight Details:</label>
                        <input type="text" placeholder="Flight Details" name="Flight_details" />

                        <br></br>
                        <label>Destination:
                        </label>
                        <input type="text" placeholder="Destination" name="Destination" />
                        <br></br>
                        <label>Email: <span className="required_field">*</span></label>
                        <input type="email" required placeholder="Enter Your Email..." name="Email" />

                        <br></br>
                        <label>Phone: <span className="required_field">*</span></label>
                        <input type="tel" required placeholder="Phone..." name="Phone" />

                        <br></br>
                        <button type="submit" className="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Main;