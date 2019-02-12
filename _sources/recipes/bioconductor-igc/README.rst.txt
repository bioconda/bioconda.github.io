:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-igc'
.. highlight: bash

bioconductor-igc
================

.. conda:recipe:: bioconductor-igc
   :replaces_section_title:

   This package is intended to identify differentially expressed genes driven by Copy Number Alterations from samples with both gene expression and CNA data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iGC.html
   :license: GPL-2
   :recipe: /`bioconductor-igc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-igc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-igc/meta.yaml>`_

   


.. conda:package:: bioconductor-igc

   |downloads_bioconductor-igc| |docker_bioconductor-igc|

   :versions: 1.12.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-data.table: 
   
   :depends r-plyr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-igc

   and update with::

      conda update bioconductor-igc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-igc:<tag>

   (see `bioconductor-igc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-igc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-igc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-igc| image:: https://quay.io/repository/biocontainers/bioconductor-igc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-igc
.. _`bioconductor-igc/tags`: https://quay.io/repository/biocontainers/bioconductor-igc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-igc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-igc/README.html