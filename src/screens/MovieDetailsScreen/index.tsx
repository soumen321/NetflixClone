import {Text, View, Image, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';

import {Picker} from '@react-native-picker/picker';

import movie from '../../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MoviewDetailsScreen = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);

  const seasonNames = movie.seasons.items.map(season => season.name);

  return (
    <View>
      <Image source={{uri: firstEpisode.poster}} style={styles.image} />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({item}) => <EpisodeItem episode={item} />}
        style={{marginBottom: 230}}
        ListHeaderComponent={
          <View>
            <View style={{padding: 12}}>
              <Text style={styles.title}>{movie.title}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.match}>98% match</Text>
                <Text style={styles.year}>{movie.year}</Text>
                <View style={styles.ageContainer}>
                  <Text style={styles.age}>12+</Text>
                </View>
                <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                <MaterialIcons name="hd" size={24} color="white" />
              </View>
              {/*Play button*/}
              <Pressable onPress={() => {}} style={styles.playButton}>
                <Text style={styles.playButtonText}>
                  <Entypo name="controller-play" size={16} color="black" />
                  Play
                </Text>
              </Pressable>

              {/*Download button*/}
              <Pressable onPress={() => {}} style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>
                  <AntDesign name="download" size={16} color="white" /> Download
                </Text>
              </Pressable>

              <Text style={{color: 'white', marginVertical: 10}}>
                {movie.plot}
              </Text>
              <Text style={styles.year}>{movie.cast}</Text>
              <Text style={styles.year}>Creater : {movie.creator}</Text>
            </View>

            {/*Row with icon button*/}
            <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center', marginHorizontal: 20}}>
                <AntDesign name="plus" size={24} color="white" />
                <Text style={styles.year}>My List</Text>
              </View>
              <View style={{alignItems: 'center', marginHorizontal: 20}}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={styles.year}>Rate</Text>
              </View>
              <View style={{alignItems: 'center', marginHorizontal: 20}}>
                <AntDesign name="sharealt" size={24} color="white" />
                <Text style={styles.year}>Share</Text>
              </View>
            </View>

            {/*picker*/}

            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
              style={{color: 'white', width: 150}}
              dropdownIconColor={'white'}>
              {seasonNames.map(seasonName => (
                <Picker.Item
                  label={seasonName}
                  value={seasonName}
                  key={seasonName}
                />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MoviewDetailsScreen;
