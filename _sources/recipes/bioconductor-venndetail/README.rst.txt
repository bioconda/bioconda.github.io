:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-venndetail'
.. highlight: bash

bioconductor-venndetail
=======================

.. conda:recipe:: bioconductor-venndetail
   :replaces_section_title:

   A package for visualization and extract details

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/VennDetail.html
   :license: GPL-2
   :recipe: /`bioconductor-venndetail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-venndetail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-venndetail/meta.yaml>`_

   A set of functions to generate high\-resolution Venn\,Vennpie plot\,extract and combine details of these subsets with user datasets in data frame is available.


.. conda:package:: bioconductor-venndetail

   |downloads_bioconductor-venndetail| |docker_bioconductor-venndetail|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.1-0, 1.0.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dplyr: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-tibble: 
   :depends r-upsetr: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-venndetail

   and update with::

      conda update bioconductor-venndetail

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-venndetail:<tag>

   (see `bioconductor-venndetail/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-venndetail| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-venndetail.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-venndetail
   :alt:   (downloads)
.. |docker_bioconductor-venndetail| image:: https://quay.io/repository/biocontainers/bioconductor-venndetail/status
   :target: https://quay.io/repository/biocontainers/bioconductor-venndetail
.. _`bioconductor-venndetail/tags`: https://quay.io/repository/biocontainers/bioconductor-venndetail?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-venndetail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-venndetail/README.html