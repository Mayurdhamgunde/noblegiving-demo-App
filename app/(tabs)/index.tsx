import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Bell } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1589965716319-4a041b58fa8a?q=80&w=100&auto=format&fit=crop' }} 
            style={styles.logo} 
          />
          <Text style={styles.logoText}>Noble Giving</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Search size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000&auto=format&fit=crop' }} 
            style={styles.heroImage} 
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Make a Difference Today</Text>
            <Text style={styles.heroSubtitle}>Your small contribution can change lives</Text>
            <TouchableOpacity style={styles.donateButton}>
              <Text style={styles.donateButtonText}>Donate Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Featured Campaigns</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.campaignsScroll}>
            {[1, 2, 3].map((item) => (
              <TouchableOpacity key={item} style={styles.campaignCard}>
                <Image 
                  source={{ uri: `https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=500&auto=format&fit=crop` }} 
                  style={styles.campaignImage} 
                />
                <View style={styles.campaignContent}>
                  <Text style={styles.campaignTitle}>Help Children Education</Text>
                  <View style={styles.progressContainer}>
                    <View style={[styles.progressBar, { width: '70%' }]} />
                  </View>
                  <View style={styles.campaignStats}>
                    <Text style={styles.campaignRaised}>₹70,000 raised</Text>
                    <Text style={styles.campaignGoal}>of ₹100,000</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesContainer}>
            {['Education', 'Healthcare', 'Disaster Relief', 'Animal Welfare'].map((category) => (
              <TouchableOpacity key={category} style={styles.categoryButton}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recent Donations</Text>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.donationItem}>
              <Image 
                source={{ uri: `https://media.licdn.com/dms/image/v2/D4D03AQFySbKUMCXP_A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705393267085?e=2147483647&v=beta&t=1Qxt_ZwHlyFd1qgJM6SpuHPG8h_Mi-VnvtpwJblJ6nY` }} 
                style={styles.donorImage} 
              />
              <View style={styles.donationInfo}>
                <Text style={styles.donorName}>Mayur Dhamgunde</Text>
                <Text style={styles.donationAmount}>Donated ₹5,000</Text>
                <Text style={styles.donationTime}>2 hours ago</Text>
              </View>
            </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  logoText: {
    marginLeft: 8,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    position: 'relative',
    height: 220,
    marginBottom: 20,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 16,
  },
  heroTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  heroSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    marginBottom: 12,
  },
  donateButton: {
    backgroundColor: '#164860',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  donateButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  sectionContainer: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
    marginBottom: 12,
  },
  campaignsScroll: {
    marginLeft: -16,
    paddingLeft: 16,
  },
  campaignCard: {
    width: width * 0.7,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  campaignImage: {
    width: '100%',
    height: 120,
  },
  campaignContent: {
    padding: 12,
  },
  campaignTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    marginBottom: 8,
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
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryButton: {
    width: '48%',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    textAlign: 'center',
  },
  donationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  donorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  donationInfo: {
    marginLeft: 12,
  },
  donorName: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  donationAmount: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#164860',
  },
  donationTime: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#999',
  },
});