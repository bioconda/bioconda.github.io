:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-runibic'
.. highlight: bash

bioconductor-runibic
====================

.. conda:recipe:: bioconductor-runibic
   :replaces_section_title:

   This package implements UbiBic algorithm in R. This biclustering algorithm for analysis of gene expression data was introduced by Zhenjia Wang et al. in 2016. It is currently considered the most promising biclustering method for identification of meaningful structures in complex and noisy data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/runibic.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-runibic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-runibic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-runibic/meta.yaml>`_

   


.. conda:package:: bioconductor-runibic

   |downloads_bioconductor-runibic| |docker_bioconductor-runibic|

   :versions: 1.4.0-0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-biclust: 
   :depends r-rcpp: >=0.12.12
   :depends r-testthat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-runibic

   and update with::

      conda update bioconductor-runibic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-runibic:<tag>

   (see `bioconductor-runibic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-runibic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-runibic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-runibic
   :alt:   (downloads)
.. |docker_bioconductor-runibic| image:: https://quay.io/repository/biocontainers/bioconductor-runibic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-runibic
.. _`bioconductor-runibic/tags`: https://quay.io/repository/biocontainers/bioconductor-runibic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-runibic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-runibic/README.html