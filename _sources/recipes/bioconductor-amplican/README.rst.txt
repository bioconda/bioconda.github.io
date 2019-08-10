:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-amplican'
.. highlight: bash

bioconductor-amplican
=====================

.. conda:recipe:: bioconductor-amplican
   :replaces_section_title:

   \`amplican\` performs alignment of the amplicon reads\, normalizes gathered data\, calculates multiple statistics \(e.g. cut rates\, frameshifts\) and presents results in form of aggregated reports. Data and statistics can be broken down by experiments\, barcodes\, user defined groups\, guides and amplicons allowing for quick identification of potential problems.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/amplican.html
   :license: GPL-3
   :recipe: /`bioconductor-amplican <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amplican>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amplican/meta.yaml>`_

   


.. conda:package:: bioconductor-amplican

   |downloads_bioconductor-amplican| |docker_bioconductor-amplican|

   :versions: 1.6.2-0, 1.4.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-shortread: >=1.42.0,<1.43.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-clustercrit: >=1.2.7
   :depends r-data.table: >=1.10.4-3
   :depends r-dplyr: >=0.7.2
   :depends r-ggplot2: >=2.2.0
   :depends r-ggthemes: >=3.4.0
   :depends r-gridextra: >=2.2.1
   :depends r-gtable: >=0.2.0
   :depends r-knitr: >=1.16
   :depends r-matrix: >=1.2-10
   :depends r-matrixstats: >=0.52.2
   :depends r-rcpp: 
   :depends r-rmarkdown: >=1.6
   :depends r-stringr: >=1.2.0
   :depends r-waffle: >=0.7.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-amplican

   and update with::

      conda update bioconductor-amplican

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-amplican:<tag>

   (see `bioconductor-amplican/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-amplican| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-amplican.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-amplican
   :alt:   (downloads)
.. |docker_bioconductor-amplican| image:: https://quay.io/repository/biocontainers/bioconductor-amplican/status
   :target: https://quay.io/repository/biocontainers/bioconductor-amplican
.. _`bioconductor-amplican/tags`: https://quay.io/repository/biocontainers/bioconductor-amplican?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-amplican/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-amplican/README.html