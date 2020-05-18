:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trnascanimport'
.. highlight: bash

bioconductor-trnascanimport
===========================

.. conda:recipe:: bioconductor-trnascanimport
   :replaces_section_title:

   Importing a tRNAscan\-SE result file as GRanges object

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/tRNAscanImport.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-trnascanimport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trnascanimport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trnascanimport/meta.yaml>`_

   The package imports the result of tRNAscan\-SE as a GRanges object.


.. conda:package:: bioconductor-trnascanimport

   |downloads_bioconductor-trnascanimport| |docker_bioconductor-trnascanimport|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.2-0, 1.2.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-bsgenome: >=1.56.0,<1.57.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-structstrings: >=1.4.0,<1.5.0
   :depends bioconductor-trna: >=1.6.0,<1.7.0
   :depends bioconductor-xvector: >=0.28.0,<0.29.0
   :depends r-assertive: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trnascanimport

   and update with::

      conda update bioconductor-trnascanimport

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trnascanimport:<tag>

   (see `bioconductor-trnascanimport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trnascanimport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trnascanimport.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trnascanimport
   :alt:   (downloads)
.. |docker_bioconductor-trnascanimport| image:: https://quay.io/repository/biocontainers/bioconductor-trnascanimport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trnascanimport
.. _`bioconductor-trnascanimport/tags`: https://quay.io/repository/biocontainers/bioconductor-trnascanimport?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trnascanimport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trnascanimport/README.html