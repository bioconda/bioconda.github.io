.. title:: Package Recipe 'bioconductor-chromswitch'
.. highlight: bash


bioconductor-chromswitch
========================

.. conda:recipe:: bioconductor-chromswitch
   :replaces_section_title:

   Chromswitch implements a flexible method to detect chromatin state switches between samples in two biological conditions in a specific genomic region of interest given peaks or chromatin state calls from ChIP\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/chromswitch.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-chromswitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromswitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromswitch/meta.yaml>`_

   


.. conda:package:: bioconductor-chromswitch

   |downloads_bioconductor-chromswitch| |docker_bioconductor-chromswitch|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster` >=2.0.6 :conda:package:`r-dplyr` >=0.5.0 :conda:package:`r-gplots` >=3.0.1 :conda:package:`r-lazyeval` >=0.2.0 :conda:package:`r-magrittr` >=1.5 :conda:package:`r-matrixstats` >=0.52 :conda:package:`r-nmf` >=0.20.6 :conda:package:`r-tidyr` >=0.6.3 

   :required~by: |required_by_bioconductor-chromswitch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromswitch

   and update with::

      conda update bioconductor-chromswitch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chromswitch


.. |required_by_bioconductor-chromswitch| conda:required_by:: bioconductor-chromswitch
.. |downloads_bioconductor-chromswitch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromswitch.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chromswitch| image:: https://quay.io/repository/biocontainers/bioconductor-chromswitch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromswitch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromswitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromswitch/README.html

