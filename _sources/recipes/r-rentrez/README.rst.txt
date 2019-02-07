.. title:: Package Recipe 'r-rentrez'
.. highlight: bash


r-rentrez
=========

.. conda:recipe:: r-rentrez
   :replaces_section_title:

   Provides an R interface to the NCBI\'s \'EUtils\' API\,  allowing users to search databases like \'GenBank\'  \<https\:\/\/www.ncbi.nlm.nih.gov\/genbank\/\> and \'PubMed\'  \<https\:\/\/www.ncbi.nlm.nih.gov\/pubmed\/\>\, process the  results of those searches and pull data into their R sessions.

   :homepage: http://github.com/ropensci/rentrez
   :license: MIT / MIT
   :recipe: /`r-rentrez <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rentrez>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rentrez/meta.yaml>`_

   


.. conda:package:: r-rentrez

   |downloads_r-rentrez| |docker_r-rentrez|

   :versions: 1.1.0

   :depends: :conda:package:`r-base` 3.3.2* :conda:package:`r-httr` >=0.5 :conda:package:`r-jsonlite` >=0.9 :conda:package:`r-xml`  

   :required~by: |required_by_r-rentrez|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rentrez

   and update with::

      conda update r-rentrez

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rentrez


.. |required_by_r-rentrez| conda:required_by:: r-rentrez
.. |downloads_r-rentrez| image:: https://img.shields.io/conda/dn/bioconda/r-rentrez.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rentrez| image:: https://quay.io/repository/biocontainers/r-rentrez/status
   :target: https://quay.io/repository/biocontainers/r-rentrez







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rentrez/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rentrez/README.html

