import React from "react";
import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/esm/Visibility";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://th.bing.com/th/id/OIP.PziVpdEcFefEpY0N6I0WEwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Vansh Gadgule</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://th.bing.com/th/id/OIP.PziVpdEcFefEpY0N6I0WEwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mahesh Randive</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://th.bing.com/th/id/OIP.PziVpdEcFefEpY0N6I0WEwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Nilesh Randive</span>

            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://th.bing.com/th/id/OIP.PziVpdEcFefEpY0N6I0WEwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Umesh Randive</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://th.bing.com/th/id/OIP.PziVpdEcFefEpY0N6I0WEwHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Smita Randive</span>

            <span className="widgetSmUserTitle"> Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
