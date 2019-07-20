:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmat'
.. highlight: bash

bioconductor-rmat
=================

.. conda:recipe:: bioconductor-rmat
   :replaces_section_title:

   This package is an R version of the package MAT and contains functions to parse and merge Affymetrix BPMAP and CEL tiling array files \(using C\+\+ based Fusion SDK and Bioconductor package affxparser\)\, normalize tiling arrays using sequence specific models\, detect enriched regions from ChIP\-chip experiments. Note\: users should have GSL and GenomeGraphs installed. Windows users\: \'consult the README file available in the inst directory of the source distribution for necessary configuration instructions\'. Snow Leopard users can take advantage of increase speed with Grand Central Dispatch\!

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/rMAT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rmat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmat/meta.yaml>`_
   :links: biotools: :biotools:`rmat`, doi: :doi:`10.1093/bioinformatics/btq023`

   


.. conda:package:: bioconductor-rmat

   |downloads_bioconductor-rmat| |docker_bioconductor-rmat|

   :versions: 3.33.0-1, 3.32.0-0, 3.30.0-0, 3.28.0-0, 3.26.0-0
   
   :depends bioconductor-affxparser: >=1.56.0,<1.57.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmat

   and update with::

      conda update bioconductor-rmat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmat:<tag>

   (see `bioconductor-rmat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmat
   :alt:   (downloads)
.. |docker_bioconductor-rmat| image:: https://quay.io/repository/biocontainers/bioconductor-rmat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmat
.. _`bioconductor-rmat/tags`: https://quay.io/repository/biocontainers/bioconductor-rmat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmat/README.html