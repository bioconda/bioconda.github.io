:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bbcanalyzer'
.. highlight: bash

bioconductor-bbcanalyzer
========================

.. conda:recipe:: bioconductor-bbcanalyzer
   :replaces_section_title:

   BBCAnalyzer is a package for visualizing the relative or absolute number of bases\, deletions and insertions at defined positions in sequence alignment data available as bam files in comparison to the reference bases. Markers for the relative base frequencies\, the mean quality of the detected bases\, known mutations or polymorphisms and variants called in the data may additionally be included in the plots.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BBCAnalyzer.html
   :license: LGPL-3
   :recipe: /`bioconductor-bbcanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bbcanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bbcanalyzer/meta.yaml>`_
   :links: biotools: :biotools:`bbcanalyzer`, doi: :doi:`10.1186/s12859-017-1549-4`

   


.. conda:package:: bioconductor-bbcanalyzer

   |downloads_bioconductor-bbcanalyzer| |docker_bioconductor-bbcanalyzer|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bbcanalyzer

   and update with::

      conda update bioconductor-bbcanalyzer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bbcanalyzer:<tag>

   (see `bioconductor-bbcanalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bbcanalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bbcanalyzer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bbcanalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-bbcanalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bbcanalyzer
.. _`bioconductor-bbcanalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-bbcanalyzer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bbcanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bbcanalyzer/README.html