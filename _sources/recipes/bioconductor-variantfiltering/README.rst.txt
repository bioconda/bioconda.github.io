:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-variantfiltering'
.. highlight: bash

bioconductor-variantfiltering
=============================

.. conda:recipe:: bioconductor-variantfiltering
   :replaces_section_title:

   Filter genetic variants using different criteria such as inheritance model\, amino acid change consequence\, minor allele frequencies across human populations\, splice site strength\, conservation\, etc.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/VariantFiltering.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-variantfiltering <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantfiltering>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantfiltering/meta.yaml>`_
   :links: biotools: :biotools:`variantfiltering`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-variantfiltering

   |downloads_bioconductor-variantfiltering| |docker_bioconductor-variantfiltering|

   :versions: 1.22.0-0, 1.20.0-1, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-genomicscores: >=1.10.0,<1.11.0
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-gviz: >=1.30.0,<1.31.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rbgl: >=1.62.0,<1.63.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends bioconductor-xvector: >=0.26.0,<0.27.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dt: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-shinytree: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-variantfiltering

   and update with::

      conda update bioconductor-variantfiltering

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-variantfiltering:<tag>

   (see `bioconductor-variantfiltering/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-variantfiltering| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variantfiltering.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-variantfiltering
   :alt:   (downloads)
.. |docker_bioconductor-variantfiltering| image:: https://quay.io/repository/biocontainers/bioconductor-variantfiltering/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variantfiltering
.. _`bioconductor-variantfiltering/tags`: https://quay.io/repository/biocontainers/bioconductor-variantfiltering?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variantfiltering/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variantfiltering/README.html