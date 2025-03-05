import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, Heart } from 'lucide-react-native';

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Campaigns</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search campaigns"
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesScroll}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.categoryPill, styles.categoryPillActive]}>
            <Text style={[styles.categoryPillText, styles.categoryPillTextActive]}>All</Text>
          </TouchableOpacity>
          {['Education', 'Healthcare', 'Disaster Relief', 'Animal Welfare', 'Environment', 'Elderly Care'].map((category) => (
            <TouchableOpacity key={category} style={styles.categoryPill}>
              <Text style={styles.categoryPillText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.featuredContainer}>
          <Text style={styles.sectionTitle}>Featured Campaigns</Text>
          <TouchableOpacity style={styles.featuredCampaign}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoadIQoulPseqpGW0iqlKwbgA_otI43Ra2OpN0Zt7dnP5gtqFcbmxc9WSYL-9ImX72wg&usqp=CAU' }} 
              style={styles.featuredImage} 
            />
            <View style={styles.featuredOverlay}>
              <View style={styles.featuredContent}>
                <Text style={styles.featuredTitle}>COVID-19 Relief Fund</Text>
                <Text style={styles.featuredDescription}>Help provide medical supplies and support to those affected by COVID-19</Text>
                <View style={styles.progressContainer}>
                  <View style={[styles.progressBar, { width: '85%' }]} />
                </View>
                <View style={styles.campaignStats}>
                  <Text style={styles.campaignRaised}>₹8,50,000 raised</Text>
                  <Text style={styles.campaignGoal}>of ₹10,00,000</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.campaignsContainer}>
          <Text style={styles.sectionTitle}>All Campaigns</Text>
          
          {[1, 2, 3, 4, 5].map((item) => (
            <TouchableOpacity key={item} style={styles.campaignCard}>
              <Image 
                source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoadIQoulPseqpGW0iqlKwbgA_otI43Ra2OpN0Zt7dnP5gtqFcbmxc9WSYL-9ImX72wg&usqp=CAU` }} 
                style={styles.campaignImage} 
              />
              <View style={styles.campaignContent}>
                <View style={styles.campaignHeader}>
                  <Text style={styles.campaignCategory}>Education</Text>
                  <TouchableOpacity style={styles.favoriteButton}>
                    <Heart size={16} color="#164860" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.campaignTitle}>Support Rural Education</Text>
                <Text style={styles.campaignDescription} numberOfLines={2}>
                  Help provide quality education to children in rural areas of India.
                </Text>
                <View style={styles.progressContainer}>
                  <View style={[styles.progressBar, { width: '60%' }]} />
                </View>
                <View style={styles.campaignStats}>
                  <Text style={styles.campaignRaised}>₹60,000 raised</Text>
                  <Text style={styles.campaignGoal}>of ₹100,000</Text>
                </View>
                <View style={styles.campaignFooter}>
                  <Text style={styles.daysLeft}>30 days left</Text>
                  <TouchableOpacity style={styles.donateNowButton}>
                    <Text style={styles.donateNowText}>Donate</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesScroll: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  categoryPillActive: {
    backgroundColor: '#164860',
  },
  categoryPillText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#666',
  },
  categoryPillTextActive: {
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  featuredContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
    marginBottom: 12,
  },
  featuredCampaign: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(78, 87, 124, 0.6)',
    justifyContent: 'flex-end',
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 1,
  },
  featuredDescription: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    marginBottom: 8,
  },
  campaignsContainer: {
    padding: 16,
    paddingTop: 0,
  },
  campaignCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  campaignImage: {
    width: '100%',
    height: 150,
  },
  campaignContent: {
    padding: 12,
  },
  campaignHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  campaignCategory: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#164860',
  },
  favoriteButton: {
    padding: 4,
  },
  campaignTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
    marginBottom: 4,
  },
  campaignDescription: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginBottom: 8,
    lineHeight: 18,
  },
  progressContainer: {
    height: 6,
    backgroundColor: '#eee',
    borderRadius: 3,
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#164860',
    borderRadius: 3,
  },
  campaignStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  campaignRaised: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#164860',
  },
  campaignGoal: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
  campaignFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  daysLeft: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  donateNowButton: {
    backgroundColor: '#164860',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  donateNowText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
});