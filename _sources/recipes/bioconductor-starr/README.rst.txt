:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-starr'
.. highlight: bash

bioconductor-starr
==================

.. conda:recipe:: bioconductor-starr
   :replaces_section_title:

   Starr facilitates the analysis of ChIP\-chip data\, in particular that of Affymetrix tiling arrays. The package provides functions for data import\, quality assessment\, data visualization and exploration. Furthermore\, it includes high\-level analysis features like association of ChIP signals with annotated features\, correlation analysis of ChIP signals and other genomic data \(e.g. gene expression\)\, peak\-finding with the CMARRT algorithm and comparative display of multiple clusters of ChIP\-profiles. It uses the basic Bioconductor classes ExpressionSet and probeAnno for maximum compatibility with other software on Bioconductor. All functions from Starr can be used to investigate preprocessed data from the Ringo package\, and vice versa. An important novel tool is the the automated generation of correct\, up\-to\-date microarray probe annotation \(bpmap\) files\, which relies on an efficient mapping of short sequences \(e.g. the probe sequences on a microarray\) to an arbitrary genome.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Starr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-starr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starr/meta.yaml>`_
   :links: biotools: :biotools:`starr`, doi: :doi:`10.1186/1471-2105-11-194`

   


.. conda:package:: bioconductor-starr

   |downloads_bioconductor-starr| |docker_bioconductor-starr|

   :versions: 1.38.0-0, 1.36.0-0, 1.34.0-0, 1.32.0-0
   
   :depends bioconductor-affxparser: >=1.54.0,<1.55.0
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends bioconductor-ringo: >=1.46.0,<1.47.0
   :depends bioconductor-zlibbioc: >=1.28.0,<1.29.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-mass: 
   :depends r-pspline: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-starr

   and update with::

      conda update bioconductor-starr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-starr:<tag>

   (see `bioconductor-starr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-starr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-starr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-starr
   :alt:   (downloads)
.. |docker_bioconductor-starr| image:: https://quay.io/repository/biocontainers/bioconductor-starr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-starr
.. _`bioconductor-starr/tags`: https://quay.io/repository/biocontainers/bioconductor-starr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-starr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-starr/README.html