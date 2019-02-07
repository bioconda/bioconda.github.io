.. title:: Package Recipe 'r-spocc'
.. highlight: bash


r-spocc
=======

.. conda:recipe:: r-spocc
   :replaces_section_title:

   A programmatic interface to many species occurrence data sources\, including Global Biodiversity Information Facility \(\'GBIF\'\)\, \'USGSs\' Biodiversity Information Serving Our Nation \(\'BISON\'\)\, \'iNaturalist\'\, Berkeley \'Ecoinformatics\' Engine\, \'eBird\'\, \'AntWeb\'\, Integrated Digitized \'Biocollections\' \(\'iDigBio\'\)\, \'VertNet\'\, Ocean \'Biogeographic\' Information System \(\'OBIS\'\)\, and Atlas of Living Australia \(\'ALA\'\). Includes functionality for retrieving species occurrence data\, and combining those data.

   :homepage: https://github.com/ropensci/spocc
   :license: MIT / MIT
   :recipe: /`r-spocc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spocc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spocc/meta.yaml>`_

   


.. conda:package:: r-spocc

   |downloads_r-spocc| |docker_r-spocc|

   :versions: 0.9.0, 0.8.0, 0.7.0

   :depends: :conda:package:`geos` >=3.6.2,<3.6.3.0a0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-crul` >=0.3.4 :conda:package:`r-data.table` >=1.9.6 :conda:package:`r-jsonlite` >=1.4 :conda:package:`r-lubridate` >=1.5.0 :conda:package:`r-rbison` >=0.6.0 :conda:package:`r-rebird` >=0.3.0 :conda:package:`r-rgbif` >=1.0.0 :conda:package:`r-ridigbio` >=0.3.5 :conda:package:`r-rvertnet` >=0.7.0 :conda:package:`r-tibble` >=1.2 :conda:package:`r-whisker` >=0.3_2 :conda:package:`r-wicket` >=0.3.0 

   :required~by: |required_by_r-spocc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-spocc

   and update with::

      conda update r-spocc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-spocc


.. |required_by_r-spocc| conda:required_by:: r-spocc
.. |downloads_r-spocc| image:: https://img.shields.io/conda/dn/bioconda/r-spocc.svg?style=flat
   :alt:   (downloads)
.. |docker_r-spocc| image:: https://quay.io/repository/biocontainers/r-spocc/status
   :target: https://quay.io/repository/biocontainers/r-spocc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-spocc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-spocc/README.html

