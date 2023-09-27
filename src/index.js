import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  return (
    <div className="App">
      <h1>Tesla Top News</h1>
      <h3>giving you the most recent news about everything Tesla</h3>

      <Articles>
        <Story
          title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
          link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
          image="https://cleantechnica.com/files/2021/10/Tesla-China-Sales-e1642076454693.jpeg"
          author="Steve Hanley"
          published="2022-02-14 05:28:46"
          description="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
        />
        <Story
          title="Tesla recall for heater and defroster systems issued by Transport Canada"
          link="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
          image="https://www.teslarati.com/wp-content/uploads/2020/11/tesla-model-3-heat-pump-refresh.jpeg"
          author="Maria Merano"
          published="2022-02-14 05:03:33"
          description="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles.  Transport Canada reported that a little over 2,084 Tesla vehicles were affected by the recall."
        />
        <Story
          title="Tesla Model Y = Top Selling SUV in California in 2021"
          link="https://cleantechnica.com/2022/02/13/tesla-model-y-top-selling-suv-in-california-in-2021/"
          image="https://placehold.co/600x400?text=Project"
          author="Zachary Shahan"
          published="2022-02-14 03:24:29"
          description="It’s hard to believe, even as someone who has been placed firmly on the Tesla bull list for a decade, but the Tesla Model Y ended 2021 as the top selling SUV or truck in California! That is across all types of SUVs and trucks. The Model Y outsold the #2 Toyota RAV4."
        />
        <Story
          title="Tesla’s next facility in China may be located in Shenyang: local gov’t announcement"
          link="https://www.teslarati.com/tesla-gigafactory-shenyang/"
          image="https://www.teslarati.com/wp-content/uploads/2022/02/tesla-gigafactory-shenyang-.jpg"
          author="Maria Merano"
          published="02:51:31"
          description="On Friday, February 11, the Liaoning Province hinted that Tesla was searching for a second Gigafactory in China. One of the potential locations for Tesla’s next factory is the District of Shenyang.  Liaoning Province released an announcement on its official WeChat account"
        />
      </Articles>
    </div>
  );
}

function Articles(props) {
  return (
    <div>
      <h2>Recent News Stories</h2>
      <ul className="articles">
        {props.children}{" "}
        {/* { id: "1", profile: "John Doe", children: [Company, Company, Company]} */}
      </ul>
    </div>
  );
}

const handleDelete = (e) => {
  const target = e.target;
  if (target.tagName === "SPAN" && target.textContent === "x") {
    e.currentTarget.remove();
  }
};

function Story(props) {
  return (
    <div className="story" onClick={handleDelete}>
      <span className="delete">x</span>
      <div className="article-img"></div>
      <h2 className="article-title">
        <a href={props.link} className="story">
          {props.title}
        </a>
      </h2>
      <h4>
        <span className="author">{props.author}</span>
        <br />
        <span className="published">{props.published}</span>
      </h4>
      <img src={props.image} alt="" width="500" />
      <p>
        <span className="description">{props.description}</span>
      </p>
    </div>
  );
}


root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
