.. title:: Package Recipe 'bioconductor-r3cpet'
.. highlight: bash


bioconductor-r3cpet
===================

.. conda:recipe:: bioconductor-r3cpet
   :replaces_section_title:

   The package provides a method to infer the set of proteins that are more probably to work together to maintain chormatin interaction given a ChIA\-PET experiment results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/R3CPET.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-r3cpet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cpet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cpet/meta.yaml>`_

   


.. conda:package:: bioconductor-r3cpet

   |downloads_bioconductor-r3cpet| |docker_bioconductor-r3cpet|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-clues`  :conda:package:`r-clvalid`  :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-hmisc`  :conda:package:`r-igraph`  :conda:package:`r-pheatmap`  :conda:package:`r-rcpp` >=0.10.4 :conda:package:`r-rcurl`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-r3cpet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-r3cpet

   and update with::

      conda update bioconductor-r3cpet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-r3cpet


.. |required_by_bioconductor-r3cpet| conda:required_by:: bioconductor-r3cpet
.. |downloads_bioconductor-r3cpet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-r3cpet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-r3cpet| image:: https://quay.io/repository/biocontainers/bioconductor-r3cpet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-r3cpet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-r3cpet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-r3cpet/README.html

