:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-noiseq'
.. highlight: bash

bioconductor-noiseq
===================

.. conda:recipe:: bioconductor-noiseq
   :replaces_section_title:

   Exploratory analysis and differential expression for RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/NOISeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-noiseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-noiseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-noiseq/meta.yaml>`_
   :links: biotools: :biotools:`noiseq`

   Analysis of RNA\-seq expression data or other similar kind of data. Exploratory plots to evualuate saturation\, count distribution\, expression per chromosome\, type of detected features\, features length\, etc. Differential expression between two experimental conditions with no parametric assumptions.


.. conda:package:: bioconductor-noiseq

   |downloads_bioconductor-noiseq| |docker_bioconductor-noiseq|

   :versions: 2.30.0-0, 2.28.0-1, 2.26.1-0, 2.26.0-0, 2.24.0-0, 2.22.0-0, 2.20.0-0, 2.18.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-matrix: >=1.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-noiseq

   and update with::

      conda update bioconductor-noiseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-noiseq:<tag>

   (see `bioconductor-noiseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-noiseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-noiseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-noiseq
   :alt:   (downloads)
.. |docker_bioconductor-noiseq| image:: https://quay.io/repository/biocontainers/bioconductor-noiseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-noiseq
.. _`bioconductor-noiseq/tags`: https://quay.io/repository/biocontainers/bioconductor-noiseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-noiseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-noiseq/README.html