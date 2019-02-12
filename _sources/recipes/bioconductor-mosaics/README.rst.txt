.. title:: Package Recipe 'bioconductor-mosaics'
.. highlight: bash


bioconductor-mosaics
====================

.. conda:recipe:: bioconductor-mosaics
   :replaces_section_title:

   This package provides functions for fitting MOSAiCS and MOSAiCS\-HMM\, a statistical framework to analyze one\-sample or two\-sample ChIP\-seq data of transcription factor binding and histone modification.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mosaics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mosaics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosaics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosaics/meta.yaml>`_
   :links: biotools: :biotools:`mosaics`, doi: :doi:`10.1198/jasa.2011.ap09706`

   


.. conda:package:: bioconductor-mosaics

   |downloads_bioconductor-mosaics| |docker_bioconductor-mosaics|

   :versions: 2.20.0, 2.18.0, 2.16.0, 2.14.0, 2.10.0, 2.4.1

   :depends: :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`r-mass`  :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-mosaics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mosaics

   and update with::

      conda update bioconductor-mosaics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mosaics


.. |required_by_bioconductor-mosaics| conda:required_by:: bioconductor-mosaics
.. |downloads_bioconductor-mosaics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mosaics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mosaics| image:: https://quay.io/repository/biocontainers/bioconductor-mosaics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mosaics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mosaics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mosaics/README.html

