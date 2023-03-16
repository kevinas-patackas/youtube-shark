import SurfingIcon from "@mui/icons-material/Surfing";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Resolver, useForm } from "react-hook-form";

interface FormValues {
  videoIds: string;
}

const resolver: Resolver<FormValues> = async (values) => {
  if (!values.videoIds) {
    return {
      values,
      errors: {
        videoIds: {
          type: "required",
          message: "This is required",
        },
      },
    };
  }

  if (!values.videoIds.replaceAll(",", "").trim()) {
    return {
      values,
      errors: {
        videoIds: {
          type: "required",
          message: "Empty spaces will not work ;)",
        },
      },
    };
  }

  return {
    values,
    errors: {},
  };
};

export default function SearchForm({
  onSearch,
  loading,
}: {
  onSearch: (values: string[]) => void;
  loading: boolean;
}) {
  const theme = useTheme();
  const smallAndUp = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    const result = data.videoIds
      .split(/ |,/)
      .map((i) => i.trim())
      .filter(Boolean);
    onSearch(result);
  });

  return (
    <form onSubmit={onSubmit} noValidate autoComplete="off">
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "end" }}>
        <TextField
          fullWidth
          sx={{ flexGrow: 1 }}
          id="outlined-basic"
          label="Youtube Video IDs"
          variant="outlined"
          inputProps={register("videoIds")}
          error={Boolean(errors.videoIds)}
          margin="dense"
          helperText={
            errors.videoIds?.message ?? "All ids separated by space or comma"
          }
        />
        <Button
          fullWidth={smallAndUp}
          sx={{ fontWeight: theme.typography.fontWeightBold, mt: 1 }}
          disableElevation
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<SurfingIcon />}
          disabled={loading}
          type="submit"
        >
          Surf Comments!
        </Button>
      </Box>
    </form>
  );
}
