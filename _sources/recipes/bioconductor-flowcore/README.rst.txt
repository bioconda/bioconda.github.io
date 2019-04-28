:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcore'
.. highlight: bash

bioconductor-flowcore
=====================

.. conda:recipe:: bioconductor-flowcore
   :replaces_section_title:

   Provides S4 data structures and basic functions to deal with flow cytometry data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowCore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcore/meta.yaml>`_
   :links: biotools: :biotools:`flowcore`, doi: :doi:`10.1186/1471-2105-10-106`

   


.. conda:package:: bioconductor-flowcore

   |downloads_bioconductor-flowcore| |docker_bioconductor-flowcore|

   :versions: 1.48.1-0, 1.48.0-0, 1.46.2-0, 1.44.0-0, 1.42.3-0, 1.42.0-0, 1.38.2-1, 1.38.2-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bh: >=1.65.0.1
   :depends r-corpcor: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rrcov: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowcore

   and update with::

      conda update bioconductor-flowcore

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowcore:<tag>

   (see `bioconductor-flowcore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcore.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowcore| image:: https://quay.io/repository/biocontainers/bioconductor-flowcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcore
.. _`bioconductor-flowcore/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcore/README.html