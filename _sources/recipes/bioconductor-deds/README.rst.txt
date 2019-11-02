:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deds'
.. highlight: bash

bioconductor-deds
=================

.. conda:recipe:: bioconductor-deds
   :replaces_section_title:

   This library contains functions that calculate various statistics of differential expression for microarray data\, including t statistics\, fold change\, F statistics\, SAM\, moderated t and F statistics and B statistics. It also implements a new methodology called DEDS \(Differential Expression via Distance Summary\)\, which selects differentially expressed genes by integrating and summarizing a set of statistics using a weighted distance approach.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DEDS.html
   :license: LGPL
   :recipe: /`bioconductor-deds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deds/meta.yaml>`_
   :links: biotools: :biotools:`deds`, doi: :doi:`10.1016/j.compbiomed.2013.12.002`

   


.. conda:package:: bioconductor-deds

   |downloads_bioconductor-deds| |docker_bioconductor-deds|

   :versions: 1.60.0-0, 1.58.0-1, 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.52.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deds

   and update with::

      conda update bioconductor-deds

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deds:<tag>

   (see `bioconductor-deds/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deds| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deds.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deds
   :alt:   (downloads)
.. |docker_bioconductor-deds| image:: https://quay.io/repository/biocontainers/bioconductor-deds/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deds
.. _`bioconductor-deds/tags`: https://quay.io/repository/biocontainers/bioconductor-deds?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deds/README.html