import '../index.css';
import {Link} from "@mui/material";

export default function Banner() {
    return (
        <Link href="/" component="button" color="inherit" variant="h5" underline="none" sx={{
            fontWeight: 'bold',
            color: 'white',
        }}>
            UUID Gen
        </Link>
    );
}
