import axios from "axios";
import { Skill } from "../types/Skill";

export class API {
  /**
   * スキル取得
   */
  public async getSkillList(): Promise<Array<Skill>> {
    return await this.invokeGet();
  }

  /**
   * Rest APIのGETを呼出します。
   * @return {Promise<any>} レスポンス
   */
  private async invokeGet(): Promise<any> {
    const { data } = await axios.get("http://localhost:5000/skills");
    return data;
  }
}
