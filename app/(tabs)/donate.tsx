import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Heart } from 'lucide-react-native';

export default function DonateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Make a Donation</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.campaignInfo}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=500&auto=format&fit=crop' }} 
            style={styles.campaignImage} 
          />
          <View style={styles.campaignDetails}>
            <Text style={styles.campaignTitle}>Help Children Education</Text>
            <Text style={styles.campaignDescription}>
              Your donation will help provide education to underprivileged children in rural areas of India.
            </Text>
            <View style={styles.progressContainer}>
              <View style={[styles.progressBar, { width: '70%' }]} />
            </View>
            <View style={styles.campaignStats}>
              <Text style={styles.campaignRaised}>₹70,000 raised</Text>
              <Text style={styles.campaignGoal}>of ₹100,000</Text>
            </View>
          </View>
        </View>

        <View style={styles.donationSection}>
          <Text style={styles.sectionTitle}>Select Amount</Text>
          <View style={styles.amountButtons}>
            {['₹100', '₹500', '₹1,000', '₹5,000'].map((amount) => (
              <TouchableOpacity key={amount} style={styles.amountButton}>
                <Text style={styles.amountButtonText}>{amount}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <Text style={styles.customAmountLabel}>Or enter custom amount</Text>
          <View style={styles.customAmountContainer}>
            <Text style={styles.currencySymbol}>₹</Text>
            <TextInput
              style={styles.customAmountInput}
              placeholder="Enter amount"
              keyboardType="number-pad"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.donorInfoSection}>
          <Text style={styles.sectionTitle}>Your Information</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your full name"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              keyboardType="email-address"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Message (Optional)</Text>
            <TextInput
              style={[styles.textInput, styles.messageInput]}
              placeholder="Add a message of support"
              multiline
              numberOfLines={4}
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentOptions}>
            {['UPI', 'Credit Card', 'Debit Card', 'Net Banking'].map((method) => (
              <TouchableOpacity key={method} style={styles.paymentOption}>
                <View style={styles.radioButton}>
                  <View style={method === 'UPI' ? styles.radioButtonSelected : null} />
                </View>
                <Text style={styles.paymentMethodText}>{method}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.donateButton}>
          <Heart size={20} color="#fff" />
          <Text style={styles.donateButtonText}>Donate Now</Text>
        </TouchableOpacity>

        <View style={styles.secureInfo}>
          <Text style={styles.secureText}>All payments are secure and encrypted</Text>
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
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  campaignInfo: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  campaignImage: {
    width: '100%',
    height: 180,
  },
  campaignDetails: {
    padding: 16,
  },
  campaignTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
    marginBottom: 8,
  },
  campaignDescription: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  progressContainer: {
    height: 6,
    backgroundColor: '#eee',
    borderRadius: 3,
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FF6D6A',
    borderRadius: 3,
  },
  campaignStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  campaignRaised: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#FF6D6A',
  },
  campaignGoal: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
  donationSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
    marginBottom: 16,
  },
  amountButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  amountButton: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  amountButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  customAmountLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    marginTop: 8,
    marginBottom: 12,
  },
  customAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  currencySymbol: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    marginRight: 8,
  },
  customAmountInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  donorInfoSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  paymentSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  paymentOptions: {
    marginBottom: 8,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF6D6A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6D6A',
  },
  paymentMethodText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  donateButton: {
    backgroundColor: '#FF6D6A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    margin: 16,
  },
  donateButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginLeft: 8,
  },
  secureInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  secureText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
});