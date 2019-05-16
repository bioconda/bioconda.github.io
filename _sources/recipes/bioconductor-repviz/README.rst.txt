:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-repviz'
.. highlight: bash

bioconductor-repviz
===================

.. conda:recipe:: bioconductor-repviz
   :replaces_section_title:

   RepViz enables the view of a genomic region in a simple and efficient way. RepViz allows simultaneous viewing of both intra\- and intergroup variation in sequencing counts of the studied conditions\, as well as their comparison to the output features \(e.g. identified peaks\) from user selected data analysis methods.The RepViz tool is primarily designed for chromatin data such as ChIP\-seq and ATAC\-seq\, but can also be used with other sequencing data such as RNA\-seq\, or combinations of different types of genomic data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RepViz.html
   :license: GPL-3
   :recipe: /`bioconductor-repviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repviz/meta.yaml>`_

   


.. conda:package:: bioconductor-repviz

   |downloads_bioconductor-repviz| |docker_bioconductor-repviz|

   :versions: 
   
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