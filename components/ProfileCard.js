import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";

export function ProfileCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStruktur = () => {
    fetch("/api/struktur/all", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getStruktur();
  }, []);
  return (
    <div className="flex flex-col-reverse md:flex-row px-3 py-6 items-center justify-center">
      <Card className="w-96" >
        <div className="flex flex-col-reverse md:flex-row">
        {data.length > 0 ? (
      data.map((item, index) => (
        <div className="col" key={index}>
        <CardHeader floated={false} className="h-80">
          <img src={item.image} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {item.name}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-1 font-medium">
            {item.jabatan}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {item.periode}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
        </div>
      ))
      ) : (
        <div>Data Kosong</div>
      )}
        </div>
      </Card>
    </div>
  );
}
