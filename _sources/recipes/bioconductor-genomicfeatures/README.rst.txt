:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicfeatures'
.. highlight: bash

bioconductor-genomicfeatures
============================

.. conda:recipe:: bioconductor-genomicfeatures
   :replaces_section_title:

   A set of tools and methods for making and manipulating transcript centric annotations.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GenomicFeatures.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicfeatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicfeatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicfeatures/meta.yaml>`_
   :links: biotools: :biotools:`genomicfeatures`

   


.. conda:package:: bioconductor-genomicfeatures

   |downloads_bioconductor-genomicfeatures| |docker_bioconductor-genomicfeatures|

   :versions: 1.36.0-0, 1.34.1-0, 1.32.3-0, 1.30.3-0, 1.30.0-0, 1.28.5-0, 1.26.4-0, 1.26.0-2, 1.24.5-2, 1.24.5-1, 1.24.5-0, 1.22.13-0, 1.22.6-0, 1.22.4-0, 1.22.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biomart: >=2.40.0,<2.41.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-xvector: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: 
   :depends r-rcurl: 
   :depends r-rsqlite: >=2.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicfeatures

   and update with::

      conda update bioconductor-genomicfeatures

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicfeatures:<tag>

   (see `bioconductor-genomicfeatures/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicfeatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicfeatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicfeatures
   :alt:   (downloads)
.. |docker_bioconductor-genomicfeatures| image:: https://quay.io/repository/biocontainers/bioconductor-genomicfeatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicfeatures
.. _`bioconductor-genomicfeatures/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicfeatures?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicfeatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicfeatures/README.html