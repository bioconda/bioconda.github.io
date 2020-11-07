:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwena'
.. highlight: bash

bioconductor-gwena
==================

.. conda:recipe:: bioconductor-gwena
   :replaces_section_title:
   :noindex:

   Pipeline for augmented co\-expression analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GWENA.html
   :license: GPL-3
   :recipe: /`bioconductor-gwena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwena/meta.yaml>`_

   The development of high\-throughput sequencing led to increased use of co\-expression analysis to go beyong single feature \(i.e. gene\) focus. We propose GWENA \(Gene Whole co\-Expression Network Analysis\) \, a tool designed to perform gene co\-expression network analysis and explore the results in a single pipeline. It includes functional enrichment of modules of co\-expressed genes\, phenotypcal association\, topological analysis and comparison of networks configuration between conditions.


.. conda:package:: bioconductor-gwena

   |downloads_bioconductor-gwena| |docker_bioconductor-gwena|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gwena

   and update with::

      conda update bioconductor-gwena

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwena:<tag>

   (see `bioconductor-gwena/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwena| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwena.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gwena
   :alt:   (downloads)
.. |docker_bioconductor-gwena| image:: https://quay.io/repository/biocontainers/bioconductor-gwena/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwena
.. _`bioconductor-gwena/tags`: https://quay.io/repository/biocontainers/bioconductor-gwena?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwena/README.html