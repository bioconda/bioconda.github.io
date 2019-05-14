:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deltagseg'
.. highlight: bash

bioconductor-deltagseg
======================

.. conda:recipe:: bioconductor-deltagseg
   :replaces_section_title:

   Identifying distinct subpopulations through multiscale time series analysis

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/deltaGseg.html
   :license: GPL-2
   :recipe: /`bioconductor-deltagseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deltagseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deltagseg/meta.yaml>`_

   


.. conda:package:: bioconductor-deltagseg

   |downloads_bioconductor-deltagseg| |docker_bioconductor-deltagseg|

   :versions: 1.24.0-0, 1.22.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-changepoint: 
   :depends r-fbasics: 
   :depends r-ggplot2: 
   :depends r-pvclust: 
   :depends r-reshape: 
   :depends r-scales: 
   :depends r-tseries: 
   :depends r-wavethresh: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deltagseg

   and update with::

      conda update bioconductor-deltagseg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deltagseg:<tag>

   (see `bioconductor-deltagseg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deltagseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deltagseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deltagseg
   :alt:   (downloads)
.. |docker_bioconductor-deltagseg| image:: https://quay.io/repository/biocontainers/bioconductor-deltagseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deltagseg
.. _`bioconductor-deltagseg/tags`: https://quay.io/repository/biocontainers/bioconductor-deltagseg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deltagseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deltagseg/README.html