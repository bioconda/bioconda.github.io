:orphan:  .. only available via index, not via toctree

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

   :versions: 0.9.0-1, 0.9.0-0, 0.8.0-3, 0.8.0-2, 0.7.0-0
   
   :depends geos: >=3.6.2,<3.6.3.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-crul: >=0.3.4
   :depends r-data.table: >=1.9.6
   :depends r-jsonlite: >=1.4
   :depends r-lubridate: >=1.5.0
   :depends r-rbison: >=0.6.0
   :depends r-rebird: >=0.3.0
   :depends r-rgbif: >=1.0.0
   :depends r-ridigbio: >=0.3.5
   :depends r-rvertnet: >=0.7.0
   :depends r-tibble: >=1.2
   :depends r-whisker: >=0.3_2
   :depends r-wicket: >=0.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-spocc

   and update with::

      conda update r-spocc

   or use the docker container::

      docker pull quay.io/biocontainers/r-spocc:<tag>

   (see `r-spocc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-spocc| image:: https://img.shields.io/conda/dn/bioconda/r-spocc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-spocc
   :alt:   (downloads)
.. |docker_r-spocc| image:: https://quay.io/repository/biocontainers/r-spocc/status
   :target: https://quay.io/repository/biocontainers/r-spocc
.. _`r-spocc/tags`: https://quay.io/repository/biocontainers/r-spocc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-spocc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-spocc/README.html