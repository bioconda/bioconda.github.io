.. title:: Package Recipe 'r-rsnps'
.. highlight: bash


r-rsnps
=======

.. conda:recipe:: r-rsnps
   :replaces_section_title:

   A programmatic interface to various \'SNP\' \'datasets\' on the web\: \'OpenSNP\' \(\<https\:\/\/opensnp.org\>\)\, and \'NBCIs\' \'dbSNP\' database \(\<https\:\/\/www.ncbi.nlm.nih.gov\/projects\/SNP\>\). Functions are included for searching for \'NCBI\'. For \'OpenSNP\'\, functions are included  for getting \'SNPs\'\, and data for \'genotypes\'\, \'phenotypes\'\, annotations\,  and bulk downloads of data by user.

   :homepage: https://github.com/ropensci/rsnps
   :license: MIT / MIT
   :recipe: /`r-rsnps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rsnps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rsnps/meta.yaml>`_

   


.. conda:package:: r-rsnps

   |downloads_r-rsnps| |docker_r-rsnps|

   :versions: 0.3.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-crul` >=0.5.2 :conda:package:`r-data.table`  :conda:package:`r-jsonlite`  :conda:package:`r-plyr`  :conda:package:`r-stringr`  :conda:package:`r-xml`  :conda:package:`r-xml2`  

   :required~by: |required_by_r-rsnps|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rsnps

   and update with::

      conda update r-rsnps

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rsnps


.. |required_by_r-rsnps| conda:required_by:: r-rsnps
.. |downloads_r-rsnps| image:: https://img.shields.io/conda/dn/bioconda/r-rsnps.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rsnps| image:: https://quay.io/repository/biocontainers/r-rsnps/status
   :target: https://quay.io/repository/biocontainers/r-rsnps







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rsnps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rsnps/README.html

