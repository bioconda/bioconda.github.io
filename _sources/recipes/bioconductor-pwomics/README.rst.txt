:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwomics'
.. highlight: bash

bioconductor-pwomics
====================

.. conda:recipe:: bioconductor-pwomics
   :replaces_section_title:
   :noindex:

   Pathway\-based data integration of omics data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/pwOmics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pwomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwomics/meta.yaml>`_
   :links: biotools: :biotools:`pwomics`, doi: :doi:`10.1093/bioinformatics/btv323`

   pwOmics performs pathway\-based level\-specific data comparison of matching omics data sets based on pre\-analysed user\-specified lists of differential genes\/transcripts and phosphoproteins. A separate downstream analysis of phosphoproteomic data including pathway identification\, transcription factor identification and target gene identification is opposed to the upstream analysis starting with gene or transcript information as basis for identification of upstream transcription factors and potential proteomic regulators. The cross\-platform comparative analysis allows for comprehensive analysis of single time point experiments and time\-series experiments by providing static and dynamic analysis tools for data integration. In addition\, it provides functions to identify individual signaling axes based on data integration.


.. conda:package:: bioconductor-pwomics

   |downloads_bioconductor-pwomics| |docker_bioconductor-pwomics|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-annotationhub: ``>=2.22.0,<2.23.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends bioconductor-rbiopaxparser: ``>=2.30.0,<2.31.0``
   :depends bioconductor-stringdb: ``>=2.1.0,<2.2.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-gplots: 
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pwomics

   and update with::

      conda update bioconductor-pwomics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwomics:<tag>

   (see `bioconductor-pwomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwomics
   :alt:   (downloads)
.. |docker_bioconductor-pwomics| image:: https://quay.io/repository/biocontainers/bioconductor-pwomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwomics
.. _`bioconductor-pwomics/tags`: https://quay.io/repository/biocontainers/bioconductor-pwomics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwomics/README.html