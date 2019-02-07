.. title:: Package Recipe 'bioconductor-hicbricks'
.. highlight: bash


bioconductor-hicbricks
======================

.. conda:recipe:: bioconductor-hicbricks
   :replaces_section_title:

   A flexible framework for storing and accessing high\-resolution Hi\-C data through HDF files. HiCBricks allows import of Hi\-C data through various formats such as the 2D matrix format or a generalized n\-column table formats. In terms of access\, HiCBricks offers functions to retrieve values from genomic loci separated by a certain distance\, or the ability to fetch matrix subsets using word alike terms. HiCBricks will at a later point offer the ability to fetch multiple matrix subsets using fewer calls. It offers the capacity to store GenomicRanges that may be associated to a particular Hi\-C experiment\, to do basic ranges overlap \(any\, within\) with the Hi\-C experiment associated Ranges object and also to store any metadata that users may think to be relevant for their Hi\-C experiment. Finally\, you can do TAD calls with LSD and create pretty heatmaps.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HiCBricks.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicbricks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicbricks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicbricks/meta.yaml>`_

   


.. conda:package:: bioconductor-hicbricks

   |downloads_bioconductor-hicbricks| |docker_bioconductor-hicbricks|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biocfilecache` >=1.6.0,<1.7.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-curl`  :conda:package:`r-data.table`  :conda:package:`r-digest`  :conda:package:`r-ggplot2`  :conda:package:`r-r6`  :conda:package:`r-rappdirs`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-scales`  :conda:package:`r-stringr`  :conda:package:`r-viridis`  

   :required~by: |required_by_bioconductor-hicbricks|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hicbricks

   and update with::

      conda update bioconductor-hicbricks

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hicbricks


.. |required_by_bioconductor-hicbricks| conda:required_by:: bioconductor-hicbricks
.. |downloads_bioconductor-hicbricks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicbricks.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hicbricks| image:: https://quay.io/repository/biocontainers/bioconductor-hicbricks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicbricks







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicbricks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicbricks/README.html

