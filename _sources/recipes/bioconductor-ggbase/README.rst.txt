:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggbase'
.. highlight: bash

bioconductor-ggbase
===================

.. conda:recipe:: bioconductor-ggbase
   :replaces_section_title:

   GGBase infrastructure for genetics of gene expression package GGtools

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/GGBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggbase/meta.yaml>`_
   :links: biotools: :biotools:`ggbase`, doi: :doi:`10.1038/nmeth.3252`

   infrastructure


.. conda:package:: bioconductor-ggbase

   |downloads_bioconductor-ggbase| |docker_bioconductor-ggbase|

   :versions: 3.48.0-0, 3.46.0-1, 3.44.0-0, 3.42.0-0, 3.40.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-genefilter: >=1.68.0,<1.69.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-snpstats: >=1.36.0,<1.37.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-digest: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggbase

   and update with::

      conda update bioconductor-ggbase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggbase:<tag>

   (see `bioconductor-ggbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggbase
   :alt:   (downloads)
.. |docker_bioconductor-ggbase| image:: https://quay.io/repository/biocontainers/bioconductor-ggbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggbase
.. _`bioconductor-ggbase/tags`: https://quay.io/repository/biocontainers/bioconductor-ggbase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggbase/README.html