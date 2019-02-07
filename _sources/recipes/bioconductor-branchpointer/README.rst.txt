.. title:: Package Recipe 'bioconductor-branchpointer'
.. highlight: bash


bioconductor-branchpointer
==========================

.. conda:recipe:: bioconductor-branchpointer
   :replaces_section_title:

   Predicts branchpoint probability for sites in intronic branchpoint windows. Queries can be supplied as intronic regions\; or to evaluate the effects of mutations\, SNPs.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/branchpointer.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-branchpointer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-branchpointer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-branchpointer/meta.yaml>`_

   


.. conda:package:: bioconductor-branchpointer

   |downloads_bioconductor-branchpointer| |docker_bioconductor-branchpointer|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome.hsapiens.ucsc.hg38` >=1.4.0,<1.5.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-caret`  :conda:package:`r-cowplot`  :conda:package:`r-data.table`  :conda:package:`r-gbm`  :conda:package:`r-ggplot2`  :conda:package:`r-kernlab`  :conda:package:`r-plyr`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-branchpointer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-branchpointer

   and update with::

      conda update bioconductor-branchpointer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-branchpointer


.. |required_by_bioconductor-branchpointer| conda:required_by:: bioconductor-branchpointer
.. |downloads_bioconductor-branchpointer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-branchpointer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-branchpointer| image:: https://quay.io/repository/biocontainers/bioconductor-branchpointer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-branchpointer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-branchpointer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-branchpointer/README.html

