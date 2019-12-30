// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
  {
    checked: false,
    text: 'Is Traxxas Battery (NiMH or LiPIO) fully charged for ESC?'
  },
  {
    checked: false,
    text: "Is Energizer XP18000 Battery fully charged for Jetson TX2, sensors and USB hub?"
  },
  {
    checked: false,
    text:
      "Is the Jetson TX2 and LiDAR connected correctly to the Energizer XP18000 Battery?"
  },
  {
    checked: false,
    text:
      "Is the ESC connected correctly to the Traxxas Battery?"
  },
  {
    checked: false,
    text:
      "Is the 7 Port USB Hub connected to the Jetson TX2?"
  },
  {
    checked: false,
    text:
      "Is the Camera and IMU sensor connected to a port on the 7 Port USB Hub?"
  },
  {
    checked: false,
    text:
      "Is the LiDAR connected to the Jetson TX2?"
  }
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Name", "Details"];
const tbody = [
  {
    className: "table-success",
    data: ["Year", "2019"]
  },
  {
    className: "",
    data: ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"]
  },
  {
    className: "table-info",
    data: ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"]
  },
  {
    className: "",
    data: ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"]
  },
  {
    className: "table-danger",
    data: ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"]
  },
  { className: "", data: ["Mason Porter", "Chile", "Gloucester", "$78,615"] },
  {
    className: "table-warning",
    data: ["Jon Porter", "Portugal", "Gloucester", "$98,615"]
  }
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };
