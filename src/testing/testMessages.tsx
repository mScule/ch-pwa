import en from "../lang/en";
import Messages from "../types/Messages";

const testMessages: Record<string, string> = {};

for (const key of Object.keys(en)) {
  testMessages[key] = key;
}

export default testMessages as Messages;
