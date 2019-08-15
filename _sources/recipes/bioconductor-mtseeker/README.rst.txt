:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mtseeker'
.. highlight: bash

bioconductor-mtseeker
=====================

.. conda:recipe:: bioconductor-mtseeker
   :replaces_section_title:

   Variant analysis tools for mitochondrial genetics.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MTseeker.html
   :license: GPL-3
   :recipe: /`bioconductor-mtseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mtseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mtseeker/meta.yaml>`_

   


.. conda:package:: bioconductor-mtseeker

   |downloads_bioconductor-mtseeker| |docker_bioconductor-mtseeker|

   :versions: 1.2.0-1, 1.0.6-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicalignments: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-gmapr: >=1.26.0,<1.27.0
   :depends bioconductor-homo.sapiens: >=1.3.0,<1.4.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-variantannotation: >=1.30.0,<1.31.0
   :depends bioconductor-varianttools: >=1.26.0,<1.27.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-circlize: 
   :depends r-jsonlite: 
   :depends r-viridis: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mtseeker

   and update with::

      conda update bioconductor-mtseeker

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mtseeker:<tag>

   (see `bioconductor-mtseeker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mtseeker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mtseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mtseeker
   :alt:   (downloads)
.. |docker_bioconductor-mtseeker| image:: https://quay.io/repository/biocontainers/bioconductor-mtseeker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mtseeker
.. _`bioconductor-mtseeker/tags`: https://quay.io/repository/biocontainers/bioconductor-mtseeker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mtseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mtseeker/README.html