import {model, Schema} from 'mongoose';
import {PasskeyUserPost} from '../../types/PasskeyTypes';

const PasskeyUserSchema = new Schema<PasskeyUserPost>({
  // TODO: add userId (Number, required, unique)
  userId: {
    type: Number,
    required: true,
    unique: true
  },
  // TODO: add email (String, required, unique)
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // TODO: add devices (Array of ObjectIds, required, ref: 'AuthenticatorDevice')
  devices: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'AuthenticatorDevice'
  }
});

export default model<PasskeyUserPost>('PasskeyUser', PasskeyUserSchema);
