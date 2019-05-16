:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggbase'
.. highlight: bash

bioconductor-ggbase
===================

.. conda:recipe:: bioconductor-ggbase
   :replaces_section_title:

   infrastructure

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GGBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggbase/meta.yaml>`_
   :links: biotools: :biotools:`ggbase`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-ggbase

   |downloads_bioconductor-ggbase| |docker_bioconductor-ggbase|

   :versions: 3.44.0-0, 3.42.0-0, 3.40.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-snpstats: >=1.32.0,<1.33.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
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