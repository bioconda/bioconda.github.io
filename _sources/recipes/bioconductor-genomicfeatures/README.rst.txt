:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicfeatures'
.. highlight: bash

bioconductor-genomicfeatures
============================

.. conda:recipe:: bioconductor-genomicfeatures
   :replaces_section_title:

   Conveniently import and query gene models

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/GenomicFeatures.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicfeatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicfeatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicfeatures/meta.yaml>`_
   :links: biotools: :biotools:`genomicfeatures`

   A set of tools and methods for making and manipulating transcript centric annotations. With these tools the user can easily download the genomic locations of the transcripts\, exons and cds of a given organism\, from either the UCSC Genome Browser or a BioMart database \(more sources will be supported in the future\). This information is then stored in a local database that keeps track of the relationship between transcripts\, exons\, cds and genes. Flexible methods are provided for extracting the desired features in a convenient format.


.. conda:package:: bioconductor-genomicfeatures

   |downloads_bioconductor-genomicfeatures| |docker_bioconductor-genomicfeatures|

   :versions: 1.40.0-0, 1.38.0-0, 1.36.4-0, 1.36.0-0, 1.34.1-0, 1.32.3-0, 1.30.3-0, 1.30.0-0, 1.28.5-0, 1.26.4-0, 1.26.0-2, 1.24.5-2, 1.24.5-1, 1.24.5-0, 1.22.13-0, 1.22.6-0, 1.22.4-0, 1.22.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-xvector: >=0.28.0,<0.29.0
   :depends r-base: >=4.0,<4.1.0a0
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