/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import { ToolbarButton } from 'app/components';
import useI18NPrefix from 'app/hooks/useI18NPrefix';
export const ToTopBtn = (props: { fn: () => void }) => {
  const t = useI18NPrefix(`viz.board.action`);
  return (
    <Tooltip title={t('toTop')}>
      <ToolbarButton onClick={props.fn} icon={<VerticalAlignTopOutlined />} />
    </Tooltip>
  );
};
export const ToBottomBtn = (props: { fn: () => void }) => {
  const t = useI18NPrefix(`viz.board.action`);

  return (
    <Tooltip title={t('toBottom')}>
      <ToolbarButton
        onClick={props.fn}
        icon={<VerticalAlignBottomOutlined />}
      />
    </Tooltip>
  );
};
