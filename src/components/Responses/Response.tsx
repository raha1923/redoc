import { observer } from 'mobx-react';
import * as React from 'react';

import { ResponseModel } from '../../services/models';
import { ResponseDetails } from './ResponseDetails';
import { ResponseDetailsWrap, StyledResponseTitle } from './styled.elements';

interface State {
  expanded: boolean;
}
@observer
export class ResponseView extends React.Component<{ response: ResponseModel }, State> {
  constructor(props: { response: ResponseModel }) {
    super(props);
    this.state = {
      expanded: !!this.props.response.headers.length,
    };
  }
  toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { headers, type, summary, description, code, content } = this.props.response;
    const { expanded } = this.state;
    const mimes =
      content === undefined ? [] : content.mediaTypes.filter(mime => mime.schema !== undefined);

    const empty = headers.length === 0 && mimes.length === 0 && !description;

    return (
      <div>
        <StyledResponseTitle
          onClick={this.toggle}
          type={type}
          empty={empty}
          title={summary || ''}
          code={code}
          opened={expanded}
        />
        {expanded && !empty && (
          <ResponseDetailsWrap>
            <ResponseDetails response={this.props.response} />
          </ResponseDetailsWrap>
        )}
      </div>
    );
  }
}
