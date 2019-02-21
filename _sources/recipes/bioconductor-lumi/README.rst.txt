:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumi'
.. highlight: bash

bioconductor-lumi
=================

.. conda:recipe:: bioconductor-lumi
   :replaces_section_title:

   The lumi package provides an integrated solution for the Illumina microarray data analysis. It includes functions of Illumina BeadStudio \(GenomeStudio\) data input\, quality control\, BeadArray\-specific variance stabilization\, normalization and gene annotation at the probe level. It also includes the functions of processing Illumina methylation microarrays\, especially Illumina Infinium methylation microarrays.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/lumi.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-lumi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumi/meta.yaml>`_
   :links: biotools: :biotools:`lumi`

   


.. conda:package:: bioconductor-lumi

   |downloads_bioconductor-lumi| |docker_bioconductor-lumi|

   :versions: 2.34.0-0, 2.32.0-0, 2.30.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends bioconductor-annotate: >=1.60.0,<1.61.0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-methylumi: >=2.28.0,<2.29.0
   
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dbi: 
   
   :depends r-kernsmooth: 
   
   :depends r-lattice: 
   
   :depends r-mass: 
   
   :depends r-mgcv: >=1.4-0
   
   :depends r-nleqslv: 
   
   :depends r-rsqlite: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumi

   and update with::

      conda update bioconductor-lumi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumi:<tag>

   (see `bioconductor-lumi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lumi| image:: https://quay.io/repository/biocontainers/bioconductor-lumi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumi
.. _`bioconductor-lumi/tags`: https://quay.io/repository/biocontainers/bioconductor-lumi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumi/README.html