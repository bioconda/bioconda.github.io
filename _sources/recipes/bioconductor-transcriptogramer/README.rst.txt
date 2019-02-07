.. title:: Package Recipe 'bioconductor-transcriptogramer'
.. highlight: bash


bioconductor-transcriptogramer
==============================

.. conda:recipe:: bioconductor-transcriptogramer
   :replaces_section_title:

   R package for transcriptional analysis based on transcriptograms\, a method to analyze transcriptomes that projects expression values on a set of ordered proteins\, arranged such that the probability that gene products participate in the same metabolic pathway exponentially decreases with the increase of the distance between two proteins of the ordering. Transcriptograms are\, hence\, genome wide gene expression profiles that provide a global view for the cellular metabolism\, while indicating gene sets whose expression are altered.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/transcriptogramer.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-transcriptogramer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transcriptogramer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transcriptogramer/meta.yaml>`_

   


.. conda:package:: bioconductor-transcriptogramer

   |downloads_bioconductor-transcriptogramer| |docker_bioconductor-transcriptogramer|

   :versions: 1.4.1

   :depends: :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-reder` >=1.30.0,<1.31.0 :conda:package:`bioconductor-topgo` >=2.34.0,<2.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dosnow`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-igraph`  :conda:package:`r-progress`  :conda:package:`r-snow`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-transcriptogramer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-transcriptogramer

   and update with::

      conda update bioconductor-transcriptogramer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-transcriptogramer


.. |required_by_bioconductor-transcriptogramer| conda:required_by:: bioconductor-transcriptogramer
.. |downloads_bioconductor-transcriptogramer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transcriptogramer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-transcriptogramer| image:: https://quay.io/repository/biocontainers/bioconductor-transcriptogramer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transcriptogramer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transcriptogramer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transcriptogramer/README.html

