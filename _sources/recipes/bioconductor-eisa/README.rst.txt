:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eisa'
.. highlight: bash

bioconductor-eisa
=================

.. conda:recipe:: bioconductor-eisa
   :replaces_section_title:

   The Iterative Signature Algorithm \(ISA\) is a biclustering method\; it finds correlated blocks \(transcription modules\) in gene expression \(or other tabular\) data. The ISA is capable of finding overlapping modules and it is resilient to noise. This package provides a convenient interface to the ISA\, using standard BioConductor data structures\; and also contains various visualization tools that can be used with other biclustering algorithms.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/eisa.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-eisa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eisa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eisa/meta.yaml>`_

   


.. conda:package:: bioconductor-eisa

   |downloads_bioconductor-eisa| |docker_bioconductor-eisa|

   :versions: 1.36.0-1, 1.34.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-category: >=2.50.0,<2.51.0
   :depends bioconductor-genefilter: >=1.66.0,<1.67.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: 
   :depends r-isa2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eisa

   and update with::

      conda update bioconductor-eisa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eisa:<tag>

   (see `bioconductor-eisa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eisa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eisa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eisa
   :alt:   (downloads)
.. |docker_bioconductor-eisa| image:: https://quay.io/repository/biocontainers/bioconductor-eisa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eisa
.. _`bioconductor-eisa/tags`: https://quay.io/repository/biocontainers/bioconductor-eisa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eisa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eisa/README.html