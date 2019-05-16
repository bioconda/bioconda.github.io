:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-screcover'
.. highlight: bash

bioconductor-screcover
======================

.. conda:recipe:: bioconductor-screcover
   :replaces_section_title:

   scRecover is an R package for imputation of single\-cell RNA\-seq \(scRNA\-seq\) data. It will detect and impute dropout values in a scRNA\-seq raw read counts matrix while keeping the real zeros unchanged\, since there are both dropout zeros and real zeros in scRNA\-seq data. By combination with scImpute\, SAVER and MAGIC\, scRecover not only detects dropout and real zeros at higher accuracy\, but also improve the downstream clustering and visualization results.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/scRecover.html
   :license: GPL
   :recipe: /`bioconductor-screcover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screcover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screcover/meta.yaml>`_

   


.. conda:package:: bioconductor-screcover

   |downloads_bioconductor-screcover| |docker_bioconductor-screcover|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-screcover

   and update with::

      conda update bioconductor-screcover

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-screcover:<tag>

   (see `bioconductor-screcover/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-screcover| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-screcover.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-screcover
   :alt:   (downloads)
.. |docker_bioconductor-screcover| image:: https://quay.io/repository/biocontainers/bioconductor-screcover/status
   :target: https://quay.io/repository/biocontainers/bioconductor-screcover
.. _`bioconductor-screcover/tags`: https://quay.io/repository/biocontainers/bioconductor-screcover?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-screcover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-screcover/README.html