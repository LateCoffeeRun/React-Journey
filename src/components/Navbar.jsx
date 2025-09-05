import {Breadcrumbs, Link} from "@mui/material";
import PhishingIcon from '@mui/icons-material/Phishing';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="Page navigation">
                <Link
                    underline="hover"
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="inherit"
                    href="/"
                >
                    <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                </Link>
                <Link
                    underline="hover"
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="inherit"
                    href={"/custom-hooks"}
                >
                    <PhishingIcon sx={{mr: 0.5}} fontSize="inherit"/>
                </Link>
            </Breadcrumbs>
        </div>
    )
}