# Import/Export

Attributize automatically adds the the model's fields to the import and export columns by extending the controller's config.

## Importing

Importing data requires the use of the ImportsFieldValues trait on your [import model](https://docs.octobercms.com/3.x/extend/importexport/importexport-model.html)

``` php
class EntryImport extends \Backend\Models\ImportModel
{
    
    use \Sixgweb\Attributize\Traits\ImportsFieldValues;

    /**
     * @var array rules to be applied to the data.
     */
    public $rules = [];

    public function importData($results, $sessionKey = null)
    {
        foreach ($results as $row => $data) {

            //Use ImportsFieldValues to map data to field_values column
            $data = $this->processImportDataFieldValues($data);

            try {
                $entry = new Entry;
                $entry->fill($data);
                $entry->save();

                $this->logCreated();
            }
            catch (Exception $ex) {
                $this->logError($row, $ex->getMessage());
            }

        }
    }
}

```