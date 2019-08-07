:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transcriptogramer'
.. highlight: bash

bioconductor-transcriptogramer
==============================

.. conda:recipe:: bioconductor-transcriptogramer
   :replaces_section_title:

   R package for transcriptional analysis based on transcriptograms\, a method to analyze transcriptomes that projects expression values on a set of ordered proteins\, arranged such that the probability that gene products participate in the same metabolic pathway exponentially decreases with the increase of the distance between two proteins of the ordering. Transcriptograms are\, hence\, genome wide gene expression profiles that provide a global view for the cellular metabolism\, while indicating gene sets whose expression are altered.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/transcriptogramer.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-transcriptogramer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transcriptogramer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transcriptogramer/meta.yaml>`_

   


.. conda:package:: bioconductor-transcriptogramer

   |downloads_bioconductor-transcriptogramer| |docker_bioconductor-transcriptogramer|

   :versions: 1.6.0-1, 1.4.1-0
   
   :depends bioconductor-biomart: >=2.40.0,<2.41.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-reder: >=1.32.0,<1.33.0
   :depends bioconductor-topgo: >=2.36.0,<2.37.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-dosnow: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-progress: 
   :depends r-snow: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-transcriptogramer

   and update with::

      conda update bioconductor-transcriptogramer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-transcriptogramer:<tag>

   (see `bioconductor-transcriptogramer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-transcriptogramer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transcriptogramer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-transcriptogramer
   :alt:   (downloads)
.. |docker_bioconductor-transcriptogramer| image:: https://quay.io/repository/biocontainers/bioconductor-transcriptogramer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transcriptogramer
.. _`bioconductor-transcriptogramer/tags`: https://quay.io/repository/biocontainers/bioconductor-transcriptogramer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transcriptogramer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transcriptogramer/README.html