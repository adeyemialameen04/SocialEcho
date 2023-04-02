import React, { useEffect } from "react";
import Leftbar from "../components/home/LeftBar";
import Rightbar from "../components/home/RightBar";
import CommunityCard from "../components/community/CommunityCard";
import { getNotJoinedCommunitiesAction } from "../redux/actions/communityActions";
import { useDispatch, useSelector } from "react-redux";

const AllCommunities = () => {
  const dispatch = useDispatch();

  const notJoinedCommunities = useSelector(
    (state) => state.community?.notJoinedCommunities
  );

  useEffect(() => {
    dispatch(getNotJoinedCommunitiesAction());
  }, [dispatch]);

  if (!notJoinedCommunities) {
    return null;
    // later add a loading spinner
  }
  return (
    <div className="flex mx-6">
      <Leftbar />
      <div className="grid grid-cols-2 gap-4">
        {notJoinedCommunities?.map((community) => (
          <CommunityCard key={community._id} community={community} />
        ))}
      </div>

      <Rightbar />
    </div>
  );
};

export default AllCommunities;