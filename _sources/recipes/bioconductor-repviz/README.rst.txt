:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-repviz'
.. highlight: bash

bioconductor-repviz
===================

.. conda:recipe:: bioconductor-repviz
   :replaces_section_title:

   Replicate oriented Visualization of a genomic region

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/RepViz.html
   :license: GPL-3
   :recipe: /`bioconductor-repviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repviz/meta.yaml>`_

   RepViz enables the view of a genomic region in a simple and efficient way. RepViz allows simultaneous viewing of both intra\- and intergroup variation in sequencing counts of the studied conditions\, as well as their comparison to the output features \(e.g. identified peaks\) from user selected data analysis methods.The RepViz tool is primarily designed for chromatin data such as ChIP\-seq and ATAC\-seq\, but can also be used with other sequencing data such as RNA\-seq\, or combinations of different types of genomic data.


.. conda:package:: bioconductor-repviz

   |downloads_bioconductor-repviz| |docker_bioconductor-repviz|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rsamtools: >=2.4.0,<2.5.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-repviz

   and update with::

      conda update bioconductor-repviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-repviz:<tag>

   (see `bioconductor-repviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-repviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-repviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-repviz
   :alt:   (downloads)
.. |docker_bioconductor-repviz| image:: https://quay.io/repository/biocontainers/bioconductor-repviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-repviz
.. _`bioconductor-repviz/tags`: https://quay.io/repository/biocontainers/bioconductor-repviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-repviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-repviz/README.html