:orphan:  .. only available via index, not via toctree

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

   :versions: 0.3.0-2, 0.3.0-1, 0.3.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-crul: >=0.5.2
   :depends r-data.table: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-stringr: 
   :depends r-xml: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rsnps

   and update with::

      conda update r-rsnps

   or use the docker container::

      docker pull quay.io/biocontainers/r-rsnps:<tag>

   (see `r-rsnps/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rsnps| image:: https://img.shields.io/conda/dn/bioconda/r-rsnps.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rsnps
   :alt:   (downloads)
.. |docker_r-rsnps| image:: https://quay.io/repository/biocontainers/r-rsnps/status
   :target: https://quay.io/repository/biocontainers/r-rsnps
.. _`r-rsnps/tags`: https://quay.io/repository/biocontainers/r-rsnps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rsnps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rsnps/README.html