import {Component} from 'react'
import {
  MainContainer,
  Heading,
  SubContainer,
  ImageContainer,
  Text,
  FormContainer,
  InputContainer,
  Label,
  Input,
  FontSelection,
  FontOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    generateStatus: false,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    imageUrl1: '',
    topText1: '',
    bottomText1: '',
    fontSize1: '',
  }

  onSubmitForm = event => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    event.preventDefault()
    this.setState({
      generateStatus: true,
      imageUrl1: imageUrl,
      topText1: topText,
      bottomText1: bottomText,
      fontSize1: fontSize,
    })
  }

  onChangeImageUrl = event => this.setState({imageUrl: event.target.value})

  onChangeTopText = event => this.setState({topText: event.target.value})

  onChangeBottomText = event => this.setState({bottomText: event.target.value})

  onChangeFontSize = event => this.setState({fontSize: event.target.value})

  render() {
    const {
      generateStatus,
      imageUrl,
      topText,
      bottomText,
      fontSize,
      imageUrl1,
      topText1,
      bottomText1,
      fontSize1,
    } = this.state

    return (
      <MainContainer>
        <Heading>Meme Generator</Heading>
        <SubContainer>
          {generateStatus && (
            <ImageContainer img={imageUrl1} data-testid="meme">
              <Text ftSize={fontSize1}>{topText1}</Text>
              <Text ftSize={fontSize1}>{bottomText1}</Text>
            </ImageContainer>
          )}
          <FormContainer onSubmit={this.onSubmitForm}>
            <InputContainer>
              <Label htmlFor="imageId">Image Url</Label>
              <Input
                type="text"
                id="imageId"
                value={imageUrl}
                placeholder="Enter the Image URL"
                onChange={this.onChangeImageUrl}
              />
            </InputContainer>

            <InputContainer>
              <Label htmlFor="topId">Top Text</Label>
              <Input
                type="text"
                id="topId"
                value={topText}
                placeholder="Enter the Top Text"
                onChange={this.onChangeTopText}
              />
            </InputContainer>

            <InputContainer>
              <Label htmlFor="bottomId">Bottom Text</Label>
              <Input
                type="text"
                id="bottomId"
                value={bottomText}
                placeholder="Enter the Bottom Text"
                onChange={this.onChangeBottomText}
              />
            </InputContainer>

            <InputContainer>
              <Label htmlFor="selectId">Font Size</Label>
              <FontSelection
                id="selectId"
                value={fontSize}
                onChange={this.onChangeFontSize}
              >
                {fontSizesOptionsList.map(eachOption => (
                  <FontOption key={eachOption.optionId}>
                    {eachOption.displayText}
                  </FontOption>
                ))}
              </FontSelection>
            </InputContainer>

            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
