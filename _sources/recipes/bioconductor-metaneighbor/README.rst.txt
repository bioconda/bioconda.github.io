:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaneighbor'
.. highlight: bash

bioconductor-metaneighbor
=========================

.. conda:recipe:: bioconductor-metaneighbor
   :replaces_section_title:

   MetaNeighbor allows users to quantify cell type replicability across datasets using neighbor voting.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MetaNeighbor.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-metaneighbor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaneighbor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaneighbor/meta.yaml>`_

   


.. conda:package:: bioconductor-metaneighbor

   |downloads_bioconductor-metaneighbor| |docker_bioconductor-metaneighbor|

   :versions: 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-beanplot: >=1.2
   :depends r-gplots: >=3.0.1
   :depends r-matrix: >=1.2
   :depends r-matrixstats: >=0.54
   :depends r-rcolorbrewer: >=1.1
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metaneighbor

   and update with::

      conda update bioconductor-metaneighbor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metaneighbor:<tag>

   (see `bioconductor-metaneighbor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaneighbor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaneighbor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metaneighbor
   :alt:   (downloads)
.. |docker_bioconductor-metaneighbor| image:: https://quay.io/repository/biocontainers/bioconductor-metaneighbor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaneighbor
.. _`bioconductor-metaneighbor/tags`: https://quay.io/repository/biocontainers/bioconductor-metaneighbor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaneighbor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaneighbor/README.html