import { constants } from "@common/constant";
import { Link } from "@components/link/Link";
import useRouter from '@hooks/useRouter';
import { useLocation } from 'react-router';


export const TextLink = ({ name, url, ...props }) => {
  const {location} = useRouter()
  const isActive = location === url;
  return (
    <Link
      to={url}
      fontWeight="500"
      textTransform="none"
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
      // fontWeight={isActive ? "bold" : "normal"}
      // color={isActive && colors.primary}
      {...props}
    >
      {name}
    </Link>
  );
};
