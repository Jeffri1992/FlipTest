import _ from "lodash";
import moment from "moment";
import { faker } from "@faker-js/faker/locale/id_ID";

// this is helper for applications
export const applicationHelper = {
  orderId: null,

  // for application scoring purpose
  objectScoringResultId: null,
  scoringPhase: null,
  incomePriority: null,
  modelName: null,
  scoringModelId: null,
  applicationScoreId: null,
  applicationScore: null,
  metadata: null,
  applicantLastEducationLevelList: [],
  applicantResidenceOwnershipStatusList: [],
  referenceRelationshipList: [],
  typeOfJobsList: [],
  currentBusinessTypeList: [],
  currentCompanyIndustryList: [],
  loanPurposeList: [],

  // for application condition form
  applicationWorkForm: [
    'Pegawai BUMN',
    'Pegawai Swasta',
    'Pegawai Negeri',
    'Pegawai Diplomatik',
    'Dewan Legislatif/Yudikatif',
    'Driver Online',
    'Freelance',
    'Lembaga Swadaya Masyarakat & Yayasan Nirlaba',
    'Pejabat Pemerintahan/Lembaga Negara',
    'Politikus',
    'Profesional',
    'TNI/Polisi',
    'Lainnya'
  ],
  applicationBusinessForm: ['Wiraswasta'],
  applicationNoForm: [
    'Tidak Bekerja',
    'Pensiunan',
    'Ibu Rumah Tangga'
  ],

  // for disbursement
  approveLimit: 3000000,
  approveTenure: 3,
  disburseExpiredDate: null,

  // for increase limit
  vendorList: [{ name: null }],

  loanRates: [{
    minLoanAmount: null,
    maxLoanAmount: null,
    provisionType: null,
    provisionValue: null,
    minTenure: null,
    maxTenure: null,
    rate: null,
    rateKey: null
  }],

  companyLoan: {
    companyId: null,
    companyName: null,
    rateKey: null,
    employeeLoanAmount: 5000000,
    employeeTenure: 6,
    salaryAdvanceLoanAmount: 400000,
    salaryAdvanceTenure: 1,
    employeeLoanDetail: null,
    salaryAdvanceDetail: null,
    applicantName: null,
    email: null,
    identityNumber: null
  }

};

export const generateRandomNik = () => {
  const gender = _.sample([
    'Pria',
    'Wanita'
  ]);
  const minDate = moment().subtract(18, 'years');
  const maxDate = moment().subtract(65, 'years');
  const dob = faker.date.between({
    from: maxDate.toDate(),
    to: minDate.toDate()
  });
  const dobMoment = moment(dob);

  // if gender is wanita, increase 40 days for date
  if (gender === 'Wanita') {
    dobMoment.add(40, 'days');
  }
  const changeFormatDob = dobMoment.locale('id').format('DDMMYY');

  return `317106${changeFormatDob}${faker.string.numeric(4)}`; // 317106 is harcoded because we use 1 subdistrict code
};
