// Interfaces
import { adminReportsDataInterface } from "../../types/ReportsInterface";

// Assets
import staffImg from "../../assets/icons/Report/white-staff-work.png";
import { ROLES } from "../../constants/Roles";
const userData: any = localStorage.getItem("careUserData")
const {role}: any = JSON.parse(userData);
console.log(role)
export const adminReportsMockData: adminReportsDataInterface[] = [

  {
    id: "01",
    icon: staffImg,
    title: "Extra Hours Report",
    desc: "Signature & Time Stamp",
    allowdedRoles: [
      ROLES.admin,
      ROLES.superAdmin,
      ROLES.coordinator,
      ROLES.client,
    ],
    navigateTo: "/reports/extra-hours-report",
  },
  {
    id: "02",
    icon: staffImg,
    title: "Staff Report",
    desc: "Get Staff Full Report",
    allowdedRoles: [ROLES.admin, ROLES.superAdmin, ROLES.coordinator],
    navigateTo: "/reports/advance-staff-search",
  },
  {
    id: "03",
    icon: staffImg,
    title: "Staff Attendance",
    desc: "Checkin Checkout",
    allowdedRoles: [
      ROLES.admin,
      ROLES.superAdmin,
      ROLES.carer,
      ROLES.coordinator,
      ROLES.client,
    ],
    navigateTo: "/reports/attendance-report",
  },
  {
    id: "04",
    icon: staffImg,
    title: "Client Work",
    desc: "Full Historical Report",
    allowdedRoles: [ROLES.admin, ROLES.superAdmin, ROLES.coordinator],
    navigateTo: "/reports/client-work-history",
  },
  {
    id: "05",
    icon: staffImg,
    title: "Staff Work",
    desc: "Staff Work",
    allowdedRoles: [
      ROLES.admin,
      ROLES.carer,
      ROLES.superAdmin,
      ROLES.coordinator,
      ROLES.client,
    ],
    navigateTo: "/reports/staff-work-history",
  },
  {
    id: "06",
    icon: staffImg,
    title: "Gross Profit & Loss",
    desc: "Agency’s P&L Report",
    allowdedRoles: [ROLES.admin, ROLES.superAdmin, ROLES.coordinator],
    navigateTo: "/reports/gross-profit&loss",
  },
  {
    id: "07",
    icon: staffImg,
    title: "Activity Report",
    desc: "Detailed Activity Log",
    allowdedRoles: [
      ROLES.admin,
      ROLES.superAdmin,
      ROLES.coordinator,
      ROLES.client,
      ROLES.instructor,
    ],
    navigateTo: "/reports/activity-report",
  },
  {
    id: "08",
    icon: staffImg,
    title: "Staff Availability",
    desc: "Staff Calendar View",
    allowdedRoles: [ROLES.admin, ROLES.superAdmin, ROLES.coordinator],
    navigateTo: "/reports/staff-availability-sheet",
  },
  {
    id: "09",
    icon: staffImg,
    title: "Shift Rate Settings",
    desc: "Clientwise Rate & Rules",
    allowdedRoles: [
      ROLES.admin,
      ROLES.superAdmin,
      ROLES.coordinator,
      ROLES.client,
    ],
    navigateTo: "/reports/client-shift-details",
  },
  {
    id: "10",
    icon: staffImg,
    title: "Shift Booking",
    desc: "Shift Booking Report",
    allowdedRoles: [
      ROLES.admin,
      ROLES.superAdmin,
      ROLES.carer,
      ROLES.coordinator,
      ROLES.client,
    ],
    navigateTo: "/reports/shift-booking-report",
  },
  {
    id: "11",
    icon: staffImg,
    title: "Terminated Staff",
    desc: "List To Reactivate",
    allowdedRoles: [ROLES.admin, ROLES.superAdmin],
    navigateTo: "/reports/terminated-staff-list",
  },
  {
    id: "12",
    icon: staffImg,
    title: "Staff Shift Hrs",
    desc: "Staff Shift Hr. Report",
    allowdedRoles: [
      ROLES.admin,
      ROLES.superAdmin,
      ROLES.coordinator,
      ROLES.client,
    ],
    navigateTo: "/reports/staff-report",
  },
  {
    id: "13",
    icon: staffImg,
    title: "Staff Compliance",
    desc: "Staff Compliance Report",
    allowdedRoles: [ROLES.admin, ROLES.superAdmin, ROLES.coordinator],
    navigateTo: "/reports/compliance-report",
  },
  {
    id: "14",
    icon: staffImg,
    title: role=="client"?"Financial Report":"Payment Data",
    desc:  role=="client"?"Financial Report":"Staff Pay Data Download",
    allowdedRoles: [
      ROLES.admin,
      ROLES.superAdmin,
      ROLES.carer,
      ROLES.coordinator,
      ROLES.client,
    ],
    navigateTo: "/reports/payment-data",
  },
  {
    id: "15",
    icon: staffImg,
    title: "Vaccination",
    desc: "Vaccination Staff Report",
    allowdedRoles: [
      ROLES.admin,
      ROLES.superAdmin,
      ROLES.carer,
      ROLES.coordinator,
      ROLES.client,
    ],
    navigateTo: "/reports/vaccination-report",
  },
  {
    id: "16",
    icon: staffImg,
    title: "Carer Request",
    desc: "Carer Request Report",
    allowdedRoles: [
      ROLES.admin,
            ROLES.coordinator,
      ROLES.client,
      ROLES.carer,
     
    ],
    navigateTo: "/reports/carer-request",
  },
  {
    id: "17",
    icon: staffImg,
    title: "Shift Cancelled",
    desc: "Shift Cancelled Report",
    allowdedRoles: [
      ROLES.admin,
      ROLES.superAdmin,
      ROLES.coordinator,
      ROLES.client,
    ],
    navigateTo: "/reports/shift-cancelled-report",
  },
  {
    id: "18",
    icon: staffImg,
    title: "Shift Booked",
    desc: "Shift Booked Report",
    allowdedRoles: [ROLES.admin, ROLES.superAdmin, ROLES.coordinator],
    navigateTo: "/reports/shift-booked-report",
  },
  {
    id: "19",
    icon: staffImg,
    title: "Staff Data",
    desc: "Staff Data Report",
    allowdedRoles: [ROLES.admin, ROLES.superAdmin, ROLES.coordinator],
    navigateTo: "/reports/staff-data-report",
  },
  {
    id: "20",
    icon: staffImg,
    title: "Daily Shift",
    desc: "Daily Shift Report",
    allowdedRoles: [
      ROLES.admin,
      ROLES.superAdmin,
      ROLES.coordinator,
      ROLES.client,
    ],
    navigateTo: "/reports/daily-shift-report",
  },
  {
    id: "21",
    icon: staffImg,
    title: "Trainee Info Report",
    desc: "Get Trainee Full Report",
    allowdedRoles: [ROLES.instructor],
    navigateTo: "/reports/trainees-info",
  },
  {
    id: "22",
    icon: staffImg,
    title: "Webinars Report",
    desc: "Get Webinars Full Report",
    allowdedRoles: [ROLES.instructor],
    navigateTo: "/reports/webinars-report",
  },
  {
    id: "23",
    icon: staffImg,
    title: "Certificate Report",
    desc: "Get certificate report",
    allowdedRoles: [ROLES.instructor],
    navigateTo: "/reports/certificate-report",
  },
  {
    id: "24",
    icon: staffImg,
    title: "Finance",
    desc: "Carer Finance report",
    allowdedRoles: [ROLES.carer],
    navigateTo: "/reports/finance-report",
  },
  {
    id: "25",
    icon: staffImg,
    title: "Incidents",
    desc: "Incidents Reports",
    allowdedRoles: [ROLES.coordinator, ROLES.carer],
    navigateTo: "/reports/incidents-report",
  },
  {
    id: "26",
    icon: staffImg,
    title: "Ratings",
    desc: "Client & Carer Rating Report",
    allowdedRoles: [ROLES.coordinator],
    navigateTo: "/reports/ratings-report",
  },
  {
    id: "27",
    icon: staffImg,
    title: "Whistle Blowing",
    desc: "Whistle Blowing",
    allowdedRoles: [ROLES.carer, ROLES.coordinator],
    navigateTo: "/reports/whistle-blowing",
  },
];
