import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer zcH_U7cis-8xruqNWzErP8L0D1o3wuRE-JhbCiIKrS9P8F-ATooiwK7125KnXWG7PtR08TCzgH2dtnK4QchsMvtO9UoaL6ltwyc4kzF_Ql9-99b4TCUL4EOS-2phYXYx"
    }
});