:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gviz'
.. highlight: bash

bioconductor-gviz
=================

.. conda:recipe:: bioconductor-gviz
   :replaces_section_title:

   Genomic data analyses requires integrated visualization of known genomic information and new experimental data.  Gviz uses the biomaRt and the rtracklayer packages to perform live annotation queries to Ensembl and UCSC and translates this to e.g. gene\/transcript structures in viewports of the grid graphics package. This results in genomic information plotted together with your data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Gviz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gviz/meta.yaml>`_
   :links: biotools: :biotools:`gviz`

   


.. conda:package:: bioconductor-gviz

   |downloads_bioconductor-gviz| |docker_bioconductor-gviz|

   :versions: 1.30.0-0, 1.28.0-1, 1.26.4-0, 1.24.0-0, 1.22.3-0, 1.22.0-0, 1.20.0-0, 1.16.5-2, 1.14.2-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biomart: >=2.42.0,<2.43.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-biovizbase: >=1.34.0,<1.35.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-xvector: >=0.26.0,<0.27.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-digest: >=0.6.8
   :depends r-lattice: 
   :depends r-latticeextra: >=0.6-26
   :depends r-matrixstats: >=0.8.14
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gviz

   and update with::

      conda update bioconductor-gviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gviz:<tag>

   (see `bioconductor-gviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gviz
   :alt:   (downloads)
.. |docker_bioconductor-gviz| image:: https://quay.io/repository/biocontainers/bioconductor-gviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gviz
.. _`bioconductor-gviz/tags`: https://quay.io/repository/biocontainers/bioconductor-gviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gviz/README.html