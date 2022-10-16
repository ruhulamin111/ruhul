import SchoolIcon from '@mui/icons-material/School';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ComputerIcon from '@mui/icons-material/Computer';

const Data = [
    {
        id: 1,
        category: "education",
        icon: <SchoolIcon />,
        year: "2018- Present",
        title: "Bachelor of Science",
        desc: "Govt. Titumir College Affiliated with University of Dhaka at Dhaka, Bangladesh."
    },
    {
        id: 2,
        category: "education",
        icon: <VerifiedUserIcon />,
        year: "2016-2018",
        title: "Hgiher Secendary Certificate",
        desc: "Studied at Rajibpur Degree College, Dinajpur Board."
    },
    {
        id: 3,
        category: "education",
        icon: <AccountBalanceIcon />,
        year: "2016",
        title: "Secendary School Certificate",
        desc: "Studied at Kawniarchar M.L High School, Dhaka Board."
    },
    {
        id: 4,
        category: "experience",
        icon: <WebIcon />,
        year: "2021- Present",
        title: "Web Development",
        desc: "Learn Web Development at Programming Hero and Stack Learner. Also explored from Youtube video tutorials and other resources."
    },
    {
        id: 5,
        category: "experience",
        icon: <ComputerIcon />,
        year: "2019- 2020",
        title: "Graphic Design",
        desc: "Learn Graphic Design at Dimention IT and Software. Also learned Graphic Design Live Class and Youtube video tutorials and other resources. "
    },
    {
        id: 6,
        category: "experience",
        icon: <DesignServicesIcon />,
        year: "2016- Present",
        title: "Basic Computer",
        desc: "From 2016 and at present I have an huge passion about Computer learning. That's why I have been learned various skills."
    }
]

export default Data;