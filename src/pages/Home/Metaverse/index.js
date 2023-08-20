import { CircularProgress, Grid, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { list } from "../../../apis/entities";
import ItemBox from "../../../components/ItemBox";

export default function Metaverse() {
  const [metaverse, setMetaverse] = useState(null);

  const fetchMetaverse = useCallback(async () => {
    const res = await list({ type: "metaverse", limit: 3 });

    setMetaverse(res?.data || []);
  }, []);

  useEffect(() => {
    fetchMetaverse();
  }, [fetchMetaverse]);

  return (
    <Grid
      container
      gap={"75px"}
      gridAutoColumns={"1fr 1fr 1fr"}
      sx={{
        md: {
          gridTemplateColumns: "1fr",
        },
      }}
      paddingLeft={"84px"}
      paddingRight={"84px"}
      pt={"10px"}
      mt={"53px"}
    >
      {!metaverse ? (
        <CircularProgress />
      ) : !metaverse?.length ? (
        <Typography>No metaverse found</Typography>
      ) : (
        <>
          <ItemBox
            title={metaverse[0]?.name}
            style={{ width: "400px", height: "400px" }}
            image={`${process.env.REACT_APP_S3}/images/${metaverse[0]?.thumbnail}`}
            description={metaverse[0]?.description}
            link={`/metaverse/${metaverse[0]?.id}`}
          />
          <ItemBox
            title={metaverse[1]?.name}
            style={{ width: "400px", height: "400px" }}
            image={`${process.env.REACT_APP_S3}/images/${metaverse[1]?.thumbnail}`}
            description={metaverse[1]?.description}
            link={`/metaverse/${metaverse[1]?.id}`}
          />
          <ItemBox
            title={metaverse[2]?.name}
            style={{ width: "400px", height: "400px" }}
            image={`${process.env.REACT_APP_S3}/images/${metaverse[2]?.thumbnail}`}
            description={metaverse[2]?.description}
            link={`/metaverse/${metaverse[2]?.id}`}
          />
        </>
      )}
    </Grid>
  );
}
