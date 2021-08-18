import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import * as Network from "expo-network";

import getLearningTestsData from "../api/testApi";
import ChildListItem from "../components/ChildListItem";
import ParentListItem from "../components/ParentListItem";
import Screen from "../components/Screen";
import routes from "../constants/routes";
import setLearningTestsData, {
  getBooksGroups,
  learningDbReady,
} from "../database/testsDb";
import { getUser } from "../cache/user";

function LearningScreen({ navigation }) {
  const [dbReady, setDbReady] = useState(false);
  const [dbLoading, setDbLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [groups, setGroups] = useState([]);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    learningDbReady().then((res) => {
      setDbReady(res);
    });
    setNetworkState();
  }, []);

  const loadDb = async () => {
    testsData = await getLearningTestsData(getUser().Major);
    await setLearningTestsData(testsData);
  };

  const downloadDb = () => {
    setDbLoading(true);

    loadDb()
      .then(() => {
        setDbReady(true);
        setHasError(false);
      })
      .catch(() => {
        setDbReady(false);
        setHasError(true);
      })
      .finally(() => {
        setDbLoading(false);
      });
  };

  const setNetworkState = () => {
    Network.getNetworkStateAsync().then((state) => {
      setOnline(state.isInternetReachable);
    });
  };

  if (!dbReady) {
    return (
      <Screen>
        <Text>دیتابیس وجود ندارد</Text>
        {online ? (
          <Text onPress={downloadDb}>دانلود</Text>
        ) : (
          <Text onPress={setNetworkState}>تلاش مجدد</Text>
        )}
        {dbLoading && <Text>در حال بارگیری</Text>}
        {hasError && <Text>دانلود با خطا مواجه شد. مجددا بارگیری کنید</Text>}
      </Screen>
    );
  }

  getBooksGroups(getUser().Major).then((groups) => {
    setGroups(groups);
  });

  return (
    <Screen>
      {groups.map((group) => (
        <ParentListItem
          key={group.GroupID}
          text={group.Name}
          percent={group.Status}
        >
          {group.Books.map((book) => (
            <ChildListItem
              key={book.BookID}
              text={book.Name}
              percent={book.Status}
              onPress={() =>
                navigation.navigate(routes.course, {
                  BookID: book.BookID,
                })
              }
            />
          ))}
        </ParentListItem>
      ))}
    </Screen>
  );
}

export default LearningScreen;
