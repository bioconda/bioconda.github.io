.. title:: Package Recipe 'bioconductor-contibait'
.. highlight: bash


bioconductor-contibait
======================

.. conda:recipe:: bioconductor-contibait
   :replaces_section_title:

   Using strand inheritance data from multiple single cells from the organism whose genome is to be assembled\, contiBAIT can cluster unbridged contigs together into putative chromosomes\, and order the contigs within those chromosomes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/contiBAIT.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-contibait <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-contibait>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-contibait/meta.yaml>`_
   :links: biotools: :biotools:`contibait`, doi: :doi:`10.1093/bioinformatics/btx281`

   


.. conda:package:: bioconductor-contibait

   |downloads_bioconductor-contibait| |docker_bioconductor-contibait|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-exomecopy` >=1.28.0,<1.29.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfiles` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bh` >=1.51.0-3 :conda:package:`r-clue`  :conda:package:`r-cluster`  :conda:package:`r-colorspace`  :conda:package:`r-data.table`  :conda:package:`r-diagram`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-gtools`  :conda:package:`r-rcpp`  :conda:package:`r-reshape2`  :conda:package:`r-tsp`  

   :required~by: |required_by_bioconductor-contibait|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-contibait

   and update with::

      conda update bioconductor-contibait

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-contibait


.. |required_by_bioconductor-contibait| conda:required_by:: bioconductor-contibait
.. |downloads_bioconductor-contibait| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-contibait.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-contibait| image:: https://quay.io/repository/biocontainers/bioconductor-contibait/status
   :target: https://quay.io/repository/biocontainers/bioconductor-contibait







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-contibait/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-contibait/README.html

