:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsreg'
.. highlight: bash

bioconductor-gsreg
==================

.. conda:recipe:: bioconductor-gsreg
   :replaces_section_title:
   :noindex:

   Gene Set Regulation \(GS\-Reg\)

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GSReg.html
   :license: GPL-2
   :recipe: /`bioconductor-gsreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsreg/meta.yaml>`_
   :links: biotools: :biotools:`gsreg`, doi: :doi:`10.4137/CIN.S14066`

   A package for gene set analysis based on the variability of expressions as well as a method to detect Alternative Splicing Events . It implements DIfferential RAnk Conservation \(DIRAC\) and gene set Expression Variation Analysis \(EVA\) methods. For detecting Differentially Spliced genes\, it provides an implementation of the Spliced\-EVA \(SEVA\).


.. conda:package:: bioconductor-gsreg

   |downloads_bioconductor-gsreg| |docker_bioconductor-gsreg|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicfeatures: ``>=1.40.0,<1.41.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.11.0,<3.12.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsreg

   and update with::

      conda update bioconductor-gsreg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsreg:<tag>

   (see `bioconductor-gsreg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsreg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsreg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsreg
   :alt:   (downloads)
.. |docker_bioconductor-gsreg| image:: https://quay.io/repository/biocontainers/bioconductor-gsreg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsreg
.. _`bioconductor-gsreg/tags`: https://quay.io/repository/biocontainers/bioconductor-gsreg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsreg/README.html