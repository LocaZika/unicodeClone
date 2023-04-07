import './members.scss';
import { useDispatch, useSelector } from "react-redux";
import { memberSelector } from "../../redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { getMembers } from "../../redux/memberSlice";


export default function Members() {
  const { members, status } = useSelector(memberSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMembers());
  }, []);
  return (
    <ul className="members">
      {
        status === 'pending' ? (
          <div>Page is loading</div>
        ) : (
          members.map(member => (
            <li key={member.index}>
              <div className="member-img">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="member-name">{member.name}</div>
            </li>
          ))
        )
      }
    </ul>
  )
}
