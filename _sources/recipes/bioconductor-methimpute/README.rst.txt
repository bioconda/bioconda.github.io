.. title:: Package Recipe 'bioconductor-methimpute'
.. highlight: bash


bioconductor-methimpute
=======================

.. conda:recipe:: bioconductor-methimpute
   :replaces_section_title:

   This package implements functions for calling methylation for all cytosines in the genome.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/methimpute.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methimpute/meta.yaml>`_

   


.. conda:package:: bioconductor-methimpute

   |downloads_bioconductor-methimpute| |docker_bioconductor-methimpute|

   :versions: 1.4.1, 1.4.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-minpack.lm`  :conda:package:`r-rcpp` >=0.12.4.5 :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-methimpute|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methimpute

   and update with::

      conda update bioconductor-methimpute

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-methimpute


.. |required_by_bioconductor-methimpute| conda:required_by:: bioconductor-methimpute
.. |downloads_bioconductor-methimpute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methimpute.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methimpute| image:: https://quay.io/repository/biocontainers/bioconductor-methimpute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methimpute







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methimpute/README.html

