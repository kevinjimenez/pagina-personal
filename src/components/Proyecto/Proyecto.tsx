import { CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export const Proyecto = ({
  nombre,
  descripcion,
  img,
  tipo,
  color,
  empresa,
}: any) => {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ padding: "10px 10px 10px 10px" }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: color }} aria-label="recipe">
                {empresa.substr(0, 1)}
              </Avatar>
            }
            title={nombre}
            subheader={tipo}
          />
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {descripcion}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
