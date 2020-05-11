:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oscope'
.. highlight: bash

bioconductor-oscope
===================

.. conda:recipe:: bioconductor-oscope
   :replaces_section_title:

   Oscope \- A statistical pipeline for identifying oscillatory genes in unsynchronized single cell RNA\-seq

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/Oscope.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-oscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oscope/meta.yaml>`_
   :links: biotools: :biotools:`oscope`, doi: :doi:`10.1038/nmeth.3549`

   Oscope is a statistical pipeline developed to identifying and recovering the base cycle profiles of oscillating genes in an unsynchronized single cell RNA\-seq experiment. The Oscope pipeline includes three modules\: a sine model module to search for candidate oscillator pairs\; a K\-medoids clustering module to cluster candidate oscillators into groups\; and an extended nearest insertion module to recover the base cycle order for each oscillator group.


.. conda:package:: bioconductor-oscope

   |downloads_bioconductor-oscope| |docker_bioconductor-oscope|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-1, 1.14.0-0, 1.12.1-0, 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-ebseq: >=1.28.0,<1.29.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cluster: 
   :depends r-testthat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oscope

   and update with::

      conda update bioconductor-oscope

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oscope:<tag>

   (see `bioconductor-oscope/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oscope| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oscope.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oscope
   :alt:   (downloads)
.. |docker_bioconductor-oscope| image:: https://quay.io/repository/biocontainers/bioconductor-oscope/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oscope
.. _`bioconductor-oscope/tags`: https://quay.io/repository/biocontainers/bioconductor-oscope?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oscope/README.html