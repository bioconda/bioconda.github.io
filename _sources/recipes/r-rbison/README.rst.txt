:orphan:  .. only available via index, not via toctree

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

   :versions: 0.6.0-3, 0.6.0-2, 0.6.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-crul: >=0.3.4
   
   :depends r-dplyr: >=0.5.0
   
   :depends r-ggplot2: 
   
   :depends r-jsonlite: >=1.1
   
   :depends r-mapproj: 
   
   :depends r-plyr: 
   
   :depends r-sp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rbison

   and update with::

      conda update r-rbison

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rbison:<tag>

   (see `r-rbison/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rbison| image:: https://img.shields.io/conda/dn/bioconda/r-rbison.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rbison| image:: https://quay.io/repository/biocontainers/r-rbison/status
   :target: https://quay.io/repository/biocontainers/r-rbison
.. _`r-rbison/tags`: https://quay.io/repository/biocontainers/r-rbison?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rbison/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rbison/README.html