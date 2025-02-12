import { Box, TextField } from "@mui/material";

export const CicloRegister = () => {
    return (
        <div>
           <Box component="form">Registrar Ciclo

            <TextField
                id="materia"
                name="materia"
                label="Matéria"
                placeholder="Insira a matéria"
                required
                />
           </Box>
        </div>
    );
};