:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-contibait'
.. highlight: bash

bioconductor-contibait
======================

.. conda:recipe:: bioconductor-contibait
   :replaces_section_title:

   Using strand inheritance data from multiple single cells from the organism whose genome is to be assembled\, contiBAIT can cluster unbridged contigs together into putative chromosomes\, and order the contigs within those chromosomes.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/contiBAIT.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-contibait <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-contibait>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-contibait/meta.yaml>`_
   :links: biotools: :biotools:`contibait`, doi: :doi:`10.1093/bioinformatics/btx281`

   


.. conda:package:: bioconductor-contibait

   |downloads_bioconductor-contibait| |docker_bioconductor-contibait|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-dnacopy: >=1.56.0,<1.57.0
   :depends bioconductor-exomecopy: >=1.28.0,<1.29.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfiles: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bh: >=1.51.0-3
   :depends r-clue: 
   :depends r-cluster: 
   :depends r-colorspace: 
   :depends r-data.table: 
   :depends r-diagram: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-tsp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-contibait

   and update with::

      conda update bioconductor-contibait

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-contibait:<tag>

   (see `bioconductor-contibait/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-contibait| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-contibait.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-contibait
   :alt:   (downloads)
.. |docker_bioconductor-contibait| image:: https://quay.io/repository/biocontainers/bioconductor-contibait/status
   :target: https://quay.io/repository/biocontainers/bioconductor-contibait
.. _`bioconductor-contibait/tags`: https://quay.io/repository/biocontainers/bioconductor-contibait?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-contibait/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-contibait/README.html