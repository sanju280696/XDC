import React, { Component } from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SET_CURRENT_ROUTE } from "../../../config/actionTypes";
import { Text } from "../../../components";
import LinearGradient from "react-native-linear-gradient";
import RF from "react-native-responsive-fontsize";
import sendUnMark from "./images/ic_send_unmark.png";
import sendMark from "./images/ic_send_mark.png";
import transactionsUnMark from "./images/ic_transactions_unmark.png";
import transactionsMark from "./images/ic_transactions_mark.png";
import receiveUnMark from "./images/ic_receive_unmark.png";
import receiveMark from "./images/ic_receive_mark.png";
import dashaboardUnMark from "./images/ic_dashboard_unmark.png";
import dashaboardMark from "./images/ic_dashboard_mark.png";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  gradientHeader: {
    width: "100%",
    position: "relative"
  },

  gradientHeaderShadow: {
    position: "absolute",
    width: "92%",
    marginLeft: "4%",
    top: -10,
    height: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  gradientHeaderShadowTwo: {
    position: "absolute",
    width: "86%",
    marginLeft: "7%",
    top: -20,
    height: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  buttonIcon: {
    height: 15,
    width: 15
  },

  buttonTextUnMark: {
    color: "#9D9D9D",
    paddingTop: 5,
    fontSize: RF(2),
    fontFamily: "Roboto"
  },

  buttonTextMark: {
    color: "#359cf8",
    paddingTop: 5,
    fontSize: RF(2),
    fontFamily: "Roboto"
  },

  button: {
    alignItems: "center",
    borderColor: "#3C3749",
    paddingVertical: 15,
    width: "25%"
  },

  sendButton: {
    // borderRightWidth: 1,
    borderBottomWidth: 2,
    borderColor: "#fff"
  },

  receiveButton: {
    // borderLeftWidth: 1,
  },

  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#000"
  }
});

class Footer extends Component {
  static propTypes = {
    onReceivePress: PropTypes.func.isRequired,
    onSendPress: PropTypes.func.isRequired,
    onHomePress: PropTypes.func.isRequired,
    onTransactionsPress: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired
  };

  onHomePress = () => {
    this.props.setRoute("WalletHome");
    this.props.onHomePress();
  };

  onSendPress = () => {
    this.props.setRoute("Send");
    this.props.onSendPress();
  };

  onReceivePress = () => {
    this.props.setRoute("Receive");
    this.props.onReceivePress();
  };

  onTransactionsPress = () => {
    this.props.setRoute("WalletTransactions");
    this.props.onTransactionsPress();
  };

  render() {
    const {
      onReceivePress,
      onSendPress,
      onHomePress,
      onTransactionsPress,
      activeTab
    } = this.props;

    let activeTabStyle = [styles.button, styles.activeTab];
    let normalTabStyle = [styles.button];

    return (
      <LinearGradient
        colors={["#ffffff", "#ffffff"]}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientHeader}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={this.onHomePress} style={normalTabStyle}>
            <Image
              style={styles.buttonIcon}
              source={
                activeTab === "WalletHome" ? dashaboardMark : dashaboardUnMark
              }
            />
            <Text
              style={
                activeTab === "WalletHome"
                  ? styles.buttonTextMark
                  : styles.buttonTextUnMark
              }
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onSendPress} style={normalTabStyle}>
            <Image
              style={styles.buttonIcon}
              source={activeTab === "Send" ? sendMark : sendUnMark}
            />
            <Text
              style={
                activeTab === "Send"
                  ? styles.buttonTextMark
                  : styles.buttonTextUnMark
              }
            >
              Send
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.onTransactionsPress}
            style={normalTabStyle}
          >
            <Image
              source={
                activeTab === "WalletTransactions"
                  ? transactionsMark
                  : transactionsUnMark
              }
              style={styles.buttonIcon}
            />
            <Text
              style={
                activeTab === "WalletTransactions"
                  ? styles.buttonTextMark
                  : styles.buttonTextUnMark
              }
            >
              Transactions
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.onReceivePress}
            style={normalTabStyle}
          >
            <Image
              style={styles.buttonIcon}
              source={activeTab === "Receive" ? receiveMark : receiveUnMark}
            />
            <Text
              style={
                activeTab === "Receive"
                  ? styles.buttonTextMark
                  : styles.buttonTextUnMark
              }
            >
              Receive
            </Text>
          </TouchableOpacity>
        </View>

        {/* <LinearGradient
            colors={['rgba(127,15,201,0.7)', 'rgba(77,0,255,0.7)']}
            locations={[0, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientHeaderShadow}
          ></LinearGradient>
          <LinearGradient
            colors={['rgba(127,15,201,0.5)', 'rgba(77,0,255,0.5)']}
            locations={[0, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientHeaderShadowTwo}
          ></LinearGradient> */}
      </LinearGradient>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setRoute: route => dispatch({ type: SET_CURRENT_ROUTE, route })
});

export default connect(
  null,
  mapDispatchToProps
)(Footer);
