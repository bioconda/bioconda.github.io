.. title:: Package Recipe 'r-rgbif'
.. highlight: bash


r-rgbif
=======

.. conda:recipe:: r-rgbif
   :replaces_section_title:

   A programmatic interface to the Web Service methods provided by the Global Biodiversity Information Facility \(\'GBIF\'\; \<https\:\/\/www.gbif.org\/developer\/summary\>\). \'GBIF\' is a database of species occurrence records from sources all over the globe. \'rgbif\' includes functions for searching for taxonomic names\, retrieving information on data providers\, getting species occurrence records\, getting counts of occurrence records\, and using the \'GBIF\'  tile map service to make \'rasters\' summarizing huge amounts of data.

   :homepage: https://github.com/ropensci/rgbif (devel) https://ropenscilabs.github.io/occurrence-manual/ (manual)
   :license: MIT / MIT
   :recipe: /`r-rgbif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rgbif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rgbif/meta.yaml>`_

   


.. conda:package:: r-rgbif

   |downloads_r-rgbif| |docker_r-rgbif|

   :versions: 1.1.0, 1.0.2, 0.9.9

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-crul` >=0.3.4 :conda:package:`r-data.table`  :conda:package:`r-geoaxe`  :conda:package:`r-ggplot2`  :conda:package:`r-jsonlite` >=0.9.16 :conda:package:`r-lazyeval`  :conda:package:`r-magrittr`  :conda:package:`r-oai` >=0.2.2 :conda:package:`r-tibble`  :conda:package:`r-whisker`  :conda:package:`r-wicket` >=0.2.0 :conda:package:`r-xml2`  

   :required~by: |required_by_r-rgbif|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rgbif

   and update with::

      conda update r-rgbif

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rgbif


.. |required_by_r-rgbif| conda:required_by:: r-rgbif
.. |downloads_r-rgbif| image:: https://img.shields.io/conda/dn/bioconda/r-rgbif.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rgbif| image:: https://quay.io/repository/biocontainers/r-rgbif/status
   :target: https://quay.io/repository/biocontainers/r-rgbif







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rgbif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rgbif/README.html

