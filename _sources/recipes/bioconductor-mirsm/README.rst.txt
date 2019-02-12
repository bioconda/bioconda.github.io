:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirsm'
.. highlight: bash

bioconductor-mirsm
==================

.. conda:recipe:: bioconductor-mirsm
   :replaces_section_title:

   The package aims to identify miRNA sponge modules by integrating expression data and miRNA\-target binding information. It provides several functions to study miRNA sponge modules\, including popular methods for inferring gene modules \(candidate miRNA sponge modules\)\, and a function to identify miRNA sponge modules\, as well as a function to conduct functional analysis of miRNA sponge modules.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/miRSM.html
   :license: GPL-3
   :recipe: /`bioconductor-mirsm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsm/meta.yaml>`_

   


.. conda:package:: bioconductor-mirsm

   |downloads_bioconductor-mirsm| |docker_bioconductor-mirsm|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirsm

   and update with::

      conda update bioconductor-mirsm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mirsm:<tag>

   (see `bioconductor-mirsm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirsm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mirsm| image:: https://quay.io/repository/biocontainers/bioconductor-mirsm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsm
.. _`bioconductor-mirsm/tags`: https://quay.io/repository/biocontainers/bioconductor-mirsm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsm/README.html