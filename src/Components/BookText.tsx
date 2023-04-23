import {FlatList, ListRenderItemInfo, StyleSheet} from "react-native";
import React from "react";
import useFetchList from "../Hooks/useFetchList";
import Separator from "./Separator";
import {FetchListCollection, IndexDataCollection, MainBookCategory,} from "../models";
import {INDEX_URL} from "../constants";
import SectionLengthRenderItem from "./SectionLengthRenderItem";

interface IProps {
    books: MainBookCategory[]
    renderItem: (bookData: ListRenderItemInfo<IndexDataCollection>) => JSX.Element
}

const BookText = ({books, renderItem}: IProps) => {
    const fetchCollList: FetchListCollection[] = books.map((id) => ({id, url: `${INDEX_URL}${id}`}))
    const {data, loading} = useFetchList(fetchCollList)

   return !loading ? (
         <FlatList
             ItemSeparatorComponent={Separator}
             style={styles.container}
             data={data}
             keyExtractor={({id}) => id}
             renderItem={renderItem}
         />
    ) : null
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default BookText
