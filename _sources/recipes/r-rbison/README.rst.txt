.. title:: Package Recipe 'r-rbison'
.. highlight: bash


r-rbison
========

.. conda:recipe:: r-rbison
   :replaces_section_title:

   Interface to the \'USGS\' \'BISON\' \(\<https\:\/\/bison.usgs.gov\/\>\) \'API\'\, a \'database\' for species occurrence data. Data comes from species in the United States from participating data providers. You can get data via \'taxonomic\' and location based queries. A simple function is provided to help visualize data.

   :homepage: https://github.com/ropensci/rbison
   :license: MIT / MIT
   :recipe: /`r-rbison <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rbison>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rbison/meta.yaml>`_

   


.. conda:package:: r-rbison

   |downloads_r-rbison| |docker_r-rbison|

   :versions: 0.6.0

   :depends: :conda:package:`r-base` 3.4.1* :conda:package:`r-crul` >=0.3.4 :conda:package:`r-dplyr` >=0.5.0 :conda:package:`r-ggplot2`  :conda:package:`r-jsonlite` >=1.1 :conda:package:`r-mapproj`  :conda:package:`r-plyr`  :conda:package:`r-sp`  

   :required~by: |required_by_r-rbison|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rbison

   and update with::

      conda update r-rbison

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rbison


.. |required_by_r-rbison| conda:required_by:: r-rbison
.. |downloads_r-rbison| image:: https://img.shields.io/conda/dn/bioconda/r-rbison.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rbison| image:: https://quay.io/repository/biocontainers/r-rbison/status
   :target: https://quay.io/repository/biocontainers/r-rbison







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rbison/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rbison/README.html

