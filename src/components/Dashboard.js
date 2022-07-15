import { NavLink } from "react-router-dom";

function Dashboard() {
  let sessions = [
    {
      id: 1,
      user: "Will",
      discipline: "Bouldering",
      title: "Day out with Donnie and Matt",
      location: "",
      note: "do better",
      startTime: new Date(),
      endTime: new Date(),
      climbs: [],
    },
    {
      id: 2,
      user: "Will",
      discipline: "Bouldering",
      title: "",
      location: "",
      note: "do better",
      startTime: new Date(),
      endTime: new Date(),
      climbs: [],
    },
    {
      id: 3,
      user: "Will",
      discipline: "Bouldering",
      title: "",
      location: "",
      note: "do better",
      startTime: new Date(),
      endTime: new Date(),
      climbs: [],
    },
    {
      id: 4,
      user: "Will",
      discipline: "Bouldering",
      title: "",
      location: "",
      note: "do better",
      startTime: new Date(),
      endTime: new Date(),
      climbs: [],
    },
    {
      id: 5,
      user: "Will",
      discipline: "Bouldering",
      title: "",
      location: "",
      note: "do better",
      startTime: new Date(),
      endTime: new Date(),
      climbs: [],
    },
    {
      id: 6,
      user: "Will",
      discipline: "Bouldering",
      title: "",
      location: "",
      note: "do better",
      startTime: new Date(),
      endTime: new Date(),
      climbs: [],
    },
    {
      id: 7,
      user: "Will",
      discipline: "Bouldering",
      title: "",
      location: "",
      note: "do better",
      startTime: new Date(),
      endTime: new Date(),
      climbs: [],
    },
    {
      id: 8,
      user: "Will",
      discipline: "Bouldering",
      title: "",
      location: "",
      note: "do better",
      startTime: new Date(),
      endTime: new Date(),
      climbs: [],
    },
  ];

  return (
    <div id="Dashboard">
      <div id="Activity" className="container mt-3">
        <h2>Activity</h2>
        {/* Chart Modifiers */}
        <div className="row gx-2 mb-3">
          <div className="col">
            <select
              className="dash-select form-select"
              id="time"
              defaultValue="all"
              aria-label="time range for chart"
            >
              <option value="day">Past Day</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
              <option value="all">All Time</option>
            </select>
          </div>
          <div className="col">
            <select
              className="dash-select form-select"
              id="style"
              defaultValue="bouldering"
              aria-label="style option for chart"
            >
              <option value="bouldering">Bouldering</option>
              <option value="lead">Sport Climbing</option>
              <option value="trad">Trad Climbing</option>
              <option value="toprope">Top Rope</option>
            </select>
          </div>
        </div>
        {/* Activity Chart */}
        <div id="Chart" className="container mb-3">
          <p>I am a beautiful chart</p>
        </div>
      </div>
      <div id="Sessions" className="container mb-3">
        <h2>Recent Sessions</h2>
        <ul id="Sessions-List" className="container">
          {sessions.map((s) => {
            return (
              <li key={s.id} className="session-item">
                <div className="">
                  <h3>{s.title === "" ? s.discipline : s.title}</h3>
                  <p>Time - Count - Density - Average</p>
                </div>
                <div className="">
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </li>
            );
          })}
          <li className="session-item">
            <p>View All</p>
          </li>
        </ul>
      </div>
      <div id="Start" className="fixed-bottom d-grid">
        <div className="collapse btn-group-vertical bg-light" id="sessionStyles">
          <NavLink
            to="/session/bouldering"
            className="btn btn-outline-secondary"
          >
            Bouldering
          </NavLink>
          <NavLink to="/session/sport" className="btn btn-outline-secondary">
            Sport Climbing
          </NavLink>
          <NavLink to="/session/trad" className="btn btn-outline-secondary">
            Trad Climbing
          </NavLink>
          <NavLink to="/session/toprope" className="btn btn-outline-secondary">
            Top Rope
          </NavLink>
        </div>
        <button
          className="btn btn-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sessionStyles"
          aria-expanded="false"
          aria-controls="sessionStyles"
        >
          Start session
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
