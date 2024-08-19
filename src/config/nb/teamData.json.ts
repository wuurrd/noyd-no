import { type teamMember } from "@config/types/configDataTypes";

import Virginia from "@images/ashton_blackwell.jpg";
import Darrow from "@images/nic_fassbender.jpg";

export const teamData: teamMember[] = [
  {
    image: Darrow,
    name: "Darrow Lykos",
    title: "Co-owner",
    bio: `I’m originally from Indiana. I was raised on a farm and became an Eagle Scout in 2008.
      I graduated from Purdue University in 2012 with a degree in Design, and I’ve been working in the
      paint industry ever since. 
      `,
  },
  {
    image: Virginia,
    name: "Virginia Augustus",
    title: "Co-owner",
    bio: `I grew up in the suburbs of Chicago. I was a competitive swimmer for 12 years and
      played water polo in college. I graduated from the University of Illinois in 2012.
    `,
  },
];

export default teamData;
