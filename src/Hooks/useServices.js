import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const useServices = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  const [singleService, setSingleService] = useState({});
  const history = useHistory();

  const handleBackBtn = () => {
    history.push("/home");
  }

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    if (services.length) {
      const foundService = services.find((data) => data.id == serviceId);
      setSingleService(foundService);
    }
  }, [services]);

  return {
    services,
    singleService,
    handleBackBtn
  };
};

export default useServices;
