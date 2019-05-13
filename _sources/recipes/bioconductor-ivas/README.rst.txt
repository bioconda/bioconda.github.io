:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ivas'
.. highlight: bash

bioconductor-ivas
=================

.. conda:recipe:: bioconductor-ivas
   :replaces_section_title:

   Identification of genetic variants affecting alternative splicing.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IVAS.html
   :license: GPL-2
   :recipe: /`bioconductor-ivas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ivas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ivas/meta.yaml>`_
   :links: biotools: :biotools:`ivas`, doi: :doi:`10.1007/s13258-016-0466-7`

   


.. conda:package:: bioconductor-ivas

   |downloads_bioconductor-ivas| |docker_bioconductor-ivas|

   :versions: 2.2.0-0, 2.0.0-0, 1.98.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggfortify: 
   :depends r-ggplot2: 
   :depends r-lme4: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ivas

   and update with::

      conda update bioconductor-ivas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ivas:<tag>

   (see `bioconductor-ivas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ivas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ivas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ivas
   :alt:   (downloads)
.. |docker_bioconductor-ivas| image:: https://quay.io/repository/biocontainers/bioconductor-ivas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ivas
.. _`bioconductor-ivas/tags`: https://quay.io/repository/biocontainers/bioconductor-ivas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ivas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ivas/README.html