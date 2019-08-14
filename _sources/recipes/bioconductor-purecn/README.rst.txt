:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-purecn'
.. highlight: bash

bioconductor-purecn
===================

.. conda:recipe:: bioconductor-purecn
   :replaces_section_title:

   Copy number calling and SNV classification using targeted short read sequencing

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/PureCN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-purecn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-purecn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-purecn/meta.yaml>`_
   :links: biotools: :biotools:`purecn`

   


.. conda:package:: bioconductor-purecn

   |downloads_bioconductor-purecn| |docker_bioconductor-purecn|

   :versions: 1.14.2-0, 1.14.0-0, 1.13.1-2, 1.12.1-0, 1.11.20-2, 1.11.20-1, 1.11.13-1, 1.11.13-0, 1.8.0-0, 1.6.3-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-dnacopy: >=1.58.0,<1.59.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rhdf5: >=2.28.0,<2.29.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-variantannotation: >=1.30.0,<1.31.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-purecn

   and update with::

      conda update bioconductor-purecn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-purecn:<tag>

   (see `bioconductor-purecn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-purecn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-purecn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-purecn
   :alt:   (downloads)
.. |docker_bioconductor-purecn| image:: https://quay.io/repository/biocontainers/bioconductor-purecn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-purecn
.. _`bioconductor-purecn/tags`: https://quay.io/repository/biocontainers/bioconductor-purecn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-purecn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-purecn/README.html