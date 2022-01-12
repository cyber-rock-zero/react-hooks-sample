import * as React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Link } from "@mui/material";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Title from "./Title";
import { API } from "../services/api";
import { Skill } from "../types/Skill";

export default function Skills() {
  const [keyword, setKeyword] = React.useState<string>();
  const [skills, setSkills] = React.useState<Array<Skill>>([]);

  /**
   * キーワード変更
   */
  const onChangeKeyword = async (event: any) => {
    setKeyword(event.target.value);
  };

  /**
   * スキルの取得
   */
  const getSkill = async (): Promise<Array<Skill>> => {
    try {
      const api = new API();
      const list = await api.getSkillList();
      if (keyword != undefined && keyword != "") {
        return list.filter((x) => x.name.indexOf(keyword) != -1);
      }
      return list;
    } catch (e) {
      throw e;
    }
  };

  React.useEffect(() => {
    const initialGet = async () => {
      console.log("getSkill");
      setSkills(await getSkill());
    };
    initialGet();
  }, [keyword]);

  /**
   * レンダリングします。
   */
  return (
    <React.Fragment>
      <Title>Skills</Title>
      <TextField
        id="input-keyword"
        label="Keyword"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
        size="small"
        value={keyword}
        onChange={onChangeKeyword}
      />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>スキル</TableCell>
            <TableCell>タイプ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {skills.map((skill) => (
            <TableRow key={skill.id}>
              <TableCell>{skill.id}</TableCell>
              <TableCell>{skill.name}</TableCell>
              <TableCell>{skill.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
