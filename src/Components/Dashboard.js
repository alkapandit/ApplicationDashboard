import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";
import CampaignList from "./CampaignList";

function Dashboard() {
  const salesData = [
    {
      title: "Clothing & Shoes",
      category: "Men & Women",
      categoryImage: "download1.jpeg",
      changePercent: "27.8",
    },
    {
      title: "Jewelry items",
      category: "Women",
      categoryImage: "download2.jpeg",
      changePercent: "80.3",
    },
    {
      title: "Home & Living",
      category: "Men & Women",
      categoryImage: "download3.jpeg",
      changePercent: "21.1",
    },
    {
      title: "Electronic items",
      category: "Men & Women",
      categoryImage: "download4.jpeg",
      changePercent: "58.7",
    },
  ];

  const listingData = {
    activeListing: { total: 569, weekly: 25 },
    draftListing: { total: 357, weekly: 70 },
    expiredListing: { total: 258, weekly: 62 },
    inactiveListing: { total: 951, weekly: 34 },
    soldOutListing: { total: 3569, weekly: 200 },
  };

  const data = [
    {
      name: "Sun",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mon",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Tue",
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Wed",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Thu",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Fri",
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sat",
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="dashboard">
      <div className="header">
        <div className="search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search Dashboard" />
        </div>
        <div className="option-bar">
          <div>
            <i class="fa-regular fa-envelope"></i>
          </div>
          <div>
            <i class="fa-regular fa-bell"></i>
          </div>
          <div>
            <img src="/images/user1.png" alt="profile" />
          </div>
        </div>
      </div>
      <div className="listing">
        <div className="div1"> </div>
        <div className="div2 ">Listing overview</div>
        <div className="div3">
          <select>
            <option>Last 7 days</option>
            <option>Last 15 days</option>
            <option>Last 30 days</option>
            <option>Last 45 days</option>
          </select>
        </div>
      </div>
      <div className="row m-0 active-listing">
        <div className="col ps-0">
          <div className="card-wrapper">
            <div className="img-div">
              <img src="/images/download1.jpeg" alt="first-pic" />
              <h5>Active Listings</h5>
            </div>
            <p>{listingData?.activeListing?.total}</p>
            <span>{listingData?.activeListing?.weekly} this week</span>
          </div>
        </div>
        <div className="col">
          <div className="card-wrapper">
            <div className="img-div">
              <img src="/images/download2.jpeg" alt="first-pic" />
              <h5>Draft Listings</h5>
            </div>
            <p>{listingData?.draftListing?.total}</p>
            <span>{listingData?.draftListing?.weekly} this week</span>
          </div>
        </div>
        <div className="col">
          <div className="card-wrapper">
            <div className="img-div">
              <img src="/images/download3.jpeg" alt="first-pic" />
              <h5>Expired Listings</h5>
            </div>
            <p>{listingData?.expiredListing?.total}</p>
            <span>{listingData?.expiredListing?.weekly} this week</span>
          </div>
        </div>
        <div className="col">
          <div className="card-wrapper">
            <div className="img-div">
              <img src="/images/download4.jpeg" alt="first-pic" />
              <h5>Inactive Listings</h5>
            </div>
            <p>{listingData?.inactiveListing?.total}</p>
            <span>{listingData?.inactiveListing?.weekly} this week</span>
          </div>
        </div>
        <div className="col pe-0">
          <div className="card-wrapper">
            <div className="img-div">
              <img src="/images/download5.jpeg" alt="first-pic" />
              <h5>Sold Out</h5>
            </div>
            <p>{listingData?.soldOutListing?.total}</p>
            <span>{listingData?.soldOutListing?.weekly} this week</span>
          </div>
        </div>
      </div>
      <div className="row m-0 revenue mb-4">
        <div className="col-md-8 col1">
          <div className="revenue-stats">
            <div className="pole"></div>
            <div className="heading">Revenue stats</div>
          </div>
          <div className="total-revenue">
            <h2>
              $278864k total revenue <span>(This week)</span>
            </h2>
            <p>
              <span>
                <i class="fa-solid fa-arrow-up"></i>
                27.8%
              </span>
              vs.Previous week
            </p>
          </div>
          <div className="graph">
            <AreaChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#275BF8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#275BF8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#275BF8"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </div>
        </div>
        <div className="col-md-4 col2">
          <div className="sale">
            <div className="sale-progress mb-4">
              <div className="pole"></div>
              <div className="heading">Sale progress</div>
              <span className="d-flex align-items-center">View details</span>
            </div>
            {salesData?.length > 0 &&
              salesData?.map((d, i) => {
                return (
                  <div className="progress-wrapper row m-0">
                    <div className="img-div col-md-2 pe-0">
                      <img
                        src={"/images/" + d?.categoryImage}
                        alt="first-pic"
                      />
                    </div>
                    <div className="title col-md-7 ps-0">
                      <p>{d?.title}</p>
                      <span>{d?.category}</span>
                      <progress
                        id="file"
                        value={d?.changePercent}
                        max="100"
                      ></progress>
                    </div>
                    <div className="col-md-3 up-arrow ">
                      <span>
                        <i class="fa-solid fa-arrow-up"></i>
                        {d?.changePercent}%
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <CampaignList />
    </div>
  );
}

export default Dashboard;
