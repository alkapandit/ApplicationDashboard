import { useEffect, useState } from "react";

function CampaignList() {
  const [campaignData, setCampaignData] = useState([]);
  const [allCampaignData, setAllCampaignData] = useState([
    {
      company: "Slack Campaigns",
      start: "June 1, 2022",
      end: "June 20, 2022",
      engagement: 23,
      revenue: 256.33,
      status: 0,
    },
    {
      company: "Slack Campaigns",
      start: "June 1, 2022",
      end: "June 20, 2022",
      engagement: 23,
      revenue: 256.33,
      status: 0,
    },
    {
      company: "Main Campaigns",
      start: "June 1, 2022",
      end: "June 20, 2022",
      engagement: 23,
      revenue: 256.33,
      status: 0,
    },
    {
      company: "Microsoft Campaigns",
      start: "June 1, 2022",
      end: "June 20, 2022",
      engagement: 23,
      revenue: 256.33,
      status: 1,
    },
    {
      company: "Google Campaigns",
      start: "June 1, 2022",
      end: "June 20, 2022",
      engagement: 23,
      revenue: 256.33,
      status: 0,
    },
    {
      company: "Amazon Campaigns",
      start: "June 1, 2022",
      end: "June 20, 2022",
      engagement: 23,
      revenue: 256.33,
      status: 1,
    },
  ]);

  useEffect(() => {
    setCampaignData(allCampaignData);
  }, [allCampaignData]);

  function searchCampaign(e) {
    let filterText = e.currentTarget.value;
    if (filterText === "") {
      setCampaignData(allCampaignData);
    } else {
      let found = allCampaignData.filter((d) => {
        return d.company.toLowerCase().search(filterText.toLowerCase()) !== -1;
      });
      setCampaignData(found);
    }
  }

  function searchByStatus(e) {
    let filterText = e.currentTarget.value;
    if (filterText === "") {
      setCampaignData(allCampaignData);
    } else {
      let found = allCampaignData.filter((d) => {
        return d.status === Number(filterText);
      });
      setCampaignData(found);
    }
  }
  return (
    <div className="tbl-list">
      <div className="campaign-search mb-4">
        <div className="campaign-pole">
          <div className="pole"></div>
          <div className="heading">All campaigns</div>
        </div>

        <div className="d-flex align-items-center">
          <div className="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Find Campaign "
              onChange={searchCampaign}
            />
          </div>
          <div className="status-filter">
            <label>Status</label>
            <select onChange={searchByStatus}>
              <option value="">All</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <ul className="campaign-list">
        <li className="row campaign-heading mb-2 w-100">
          <div className="col-md-3">Company</div>
          <div className="col">Start</div>
          <div className="col">End</div>
          <div className="col">Engagement</div>
          <div className="col">Revanue</div>
          <div className="col">Status</div>
        </li>
        {campaignData?.length > 0 &&
          campaignData?.map((d, i) => {
            return (
              <li
                className="row campaign-item w-100"
                key={"campaign-list-item-" + i}
              >
                <div className="col-md-3">{d?.company}</div>
                <div className="col">{d?.start}</div>
                <div className="col">{d?.end}</div>
                <div className="col">{d?.engagement}%</div>
                <div className="col">${d?.revenue}</div>
                <div className="col">
                  {d?.status === 1 ? "Active" : "Inactive"}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CampaignList;
