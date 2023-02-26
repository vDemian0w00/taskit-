import { VariantType, useSnackbar } from "notistack";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import PaymentsIcon from "@mui/icons-material/Payments";

export function useNotify() {
  const { enqueueSnackbar } = useSnackbar();

  return useCallback(
    (variant: VariantType, message: string, signature?: string) => {
      enqueueSnackbar(
        <span>
          {message}
          {signature && (
            <Link
              to={`https://explorer.solana.com/tx/${signature}?cluster=devnet`}
              target="_blank"
            >
              Transaction
              {/* <StyledLaunchIcon /> */}
              <PaymentsIcon />
            </Link>
          )}
        </span>,
        { variant }
      );
    },
    [enqueueSnackbar]
  );
}
