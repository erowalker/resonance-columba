import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

export default function MultipleSelect(props: any) {
  const { allOptions, selectedOptions, handleChange, label, name } = props;

  return (
    <FormControl className="max-[385px]:w-14 max-[450px]:w-20 max-[639px]:w-28 sm:w-52 md:w-70 lg:w-96 mr-1 sm:mr-4">
      <InputLabel
        id={"multiple-select-label-" + name}
        sx={{
          fontSize: "0.7rem",
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId={"multiple-select-label-" + name}
        id={"multiple-select-" + name}
        multiple
        value={selectedOptions}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        sx={{
          fontSize: "0.7rem",
          "& .MuiSelect-select": {
            padding: ".5rem",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              "& li": {
                fontSize: "0.7rem",
              },
            },
          },
        }}
      >
        {allOptions.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}