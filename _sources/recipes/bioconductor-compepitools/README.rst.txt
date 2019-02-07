.. title:: Package Recipe 'bioconductor-compepitools'
.. highlight: bash


bioconductor-compepitools
=========================

.. conda:recipe:: bioconductor-compepitools
   :replaces_section_title:

   Tools for computational epigenomics developed for the analysis\, integration and simultaneous visualization of various \(epi\)genomics data types across multiple genomic regions in multiple samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/compEpiTools.html
   :license: GPL
   :recipe: /`bioconductor-compepitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compepitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compepitools/meta.yaml>`_
   :links: biotools: :biotools:`compepitools`

   


.. conda:package:: bioconductor-compepitools

   |downloads_bioconductor-compepitools| |docker_bioconductor-compepitools|

   :versions: 1.16.0, 1.14.1, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-methylpipe` >=1.16.0,<1.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-topgo` >=2.34.0,<2.35.0 :conda:package:`bioconductor-xvector` >=0.22.0,<0.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  

   :required~by: |required_by_bioconductor-compepitools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-compepitools

   and update with::

      conda update bioconductor-compepitools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-compepitools


.. |required_by_bioconductor-compepitools| conda:required_by:: bioconductor-compepitools
.. |downloads_bioconductor-compepitools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compepitools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-compepitools| image:: https://quay.io/repository/biocontainers/bioconductor-compepitools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compepitools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compepitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compepitools/README.html

