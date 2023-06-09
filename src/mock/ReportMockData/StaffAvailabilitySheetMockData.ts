// Interface
import { dailyAvaialabilityTableMockDataInterface, staffAvailabilitySheetMockDataInterface, weekAvailabilityTableMockDataInterface } from "../../types/ReportsInterface";

// Assets
import harryJoseph2Img from "../../assets/images/MockImages/harry-joseph-2.png";
import harryJosephImg from "../../assets/images/MockImages/harry-joseph.png";
import jittuJoseph2Img from "../../assets/images/MockImages/jittu-joseph-2.png";
import jittuJosephImg from "../../assets/images/MockImages/jittu-joseph.png";
import sallyBreayImg from "../../assets/images/MockImages/sally-breay.png";
import abidMustafaImg from "../../assets/images/MockImages/abid-mustafa.png";
import abidMustafa2Img from "../../assets/images/MockImages/abid-mustafa-2.png";

// Staff Availability Table Mock Data
export const StaffAvailabilitySheetMockData: staffAvailabilitySheetMockDataInterface[] = [
    {
        key: "01",
        displayImg: harryJoseph2Img,
        stafName: "Arsalan",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: "",
    },
    {
        key: "02",
        displayImg: harryJosephImg,
        stafName: "Ali Rehman",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: "",
    },
    {
        key: "03",
        displayImg: jittuJoseph2Img,
        stafName: "Usama",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: "",
    },
]

// Week Availability Table Mock Data
export const WeekAvailabilityTableMockData: weekAvailabilityTableMockDataInterface[] = [
    {
        key: "01",
        staffImg: harryJoseph2Img,
        staffName: "Arsalan",
        designation: "HCA",
        mobileNumber: "+447825585541",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: "",
    },
    {
        key: "02",
        staffImg: harryJosephImg,
        staffName: "Maaz",
        designation: "HCA",
        mobileNumber: "+447825585541",
        monday: "Night",
        tuesday: "Day",
        wednesday: "",
        thursday: "",
        friday: "Night",
        saturday: "Day",
        sunday: "Day",
    },
    {
        key: "03",
        staffImg: jittuJoseph2Img,
        staffName: "Kashif",
        designation: "HCA",
        mobileNumber: "+447825585541",
        monday: "Night",
        tuesday: "Day",
        wednesday: "Night",
        thursday: "Day",
        friday: "Night",
        saturday: "Day",
        sunday: "",
    },
    {
        key: "04",
        staffImg: jittuJosephImg,
        staffName: "Usama",
        designation: "HCA",
        mobileNumber: "+447825585541",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: "",
    },
    {
        key: "05",
        staffImg: sallyBreayImg,
        staffName: "Asad",
        designation: "HCA",
        mobileNumber: "+447825585541",
        monday: "Night",
        tuesday: "Day",
        wednesday: "Night",
        thursday: "Day",
        friday: "Night",
        saturday: "Day",
        sunday: "",
    },
    {
        key: "06",
        staffImg: abidMustafaImg,
        staffName: "Syed Nizam",
        designation: "HCA",
        mobileNumber: "+447825585541",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: "",
    },
    {
        key: "07",
        staffImg: abidMustafa2Img,
        staffName: "Aesa Khan",
        designation: "HCA",
        mobileNumber: "+447825585541",
        monday: "Night",
        tuesday: "Day",
        wednesday: "Night",
        thursday: "Day",
        friday: "Night",
        saturday: "Day",
        sunday: "Day",
    },
];

export const DailyAvaialabilityTableMockData: dailyAvaialabilityTableMockDataInterface[] = [
    {
        key: "01",
        staffImg: harryJoseph2Img,
        staffName: "Arsalan",
        designation: "HCA",
        mobileNumber: "+447825585541",
        todayDate: "",
    },
    {
        key: "02",
        staffImg: harryJosephImg,
        staffName: "Maaz",
        designation: "HCA",
        mobileNumber: "+447825585541",
        todayDate: "Night",
    },
    {
        key: "03",
        staffImg: jittuJoseph2Img,
        staffName: "Kashif",
        designation: "HCA",
        mobileNumber: "+447825585541",
        todayDate: "Night",
    },
    {
        key: "04",
        staffImg: jittuJosephImg,
        staffName: "Usama",
        designation: "HCA",
        mobileNumber: "+447825585541",
        todayDate: "",
    },
    {
        key: "05",
        staffImg: sallyBreayImg,
        staffName: "Asad",
        designation: "HCA",
        mobileNumber: "+447825585541",
        todayDate: "Night",
    },
]