:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aldex2'
.. highlight: bash

bioconductor-aldex2
===================

.. conda:recipe:: bioconductor-aldex2
   :replaces_section_title:

   A differential abundance analysis for the comparison of two or more conditions. Useful for analyzing data from standard RNA\-seq or meta\-RNA\-seq assays as well as selected and unselected values from in\-vitro sequence selections. Uses a Dirichlet\-multinomial model to infer abundance from counts\, optimized for three or more experimental replicates. The method infers biological and sampling variation to calculate the expected false discovery rate\, given the variation\, based on a Wilcox rank test or Welch t\-test \(via aldex.ttest\)\, or a glm and Kruskal\-Wallis test \(via aldex.glm\). Reports p\-values and Benjamini\-Hochberg corrected p\-values.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ALDEx2.html
   :license: file LICENSE
   :recipe: /`bioconductor-aldex2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aldex2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aldex2/meta.yaml>`_
   :links: biotools: :biotools:`aldex2`

   


.. conda:package:: bioconductor-aldex2

   |downloads_bioconductor-aldex2| |docker_bioconductor-aldex2|

   :versions: 1.14.1-0, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-multtest: >=2.38.0,<2.39.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aldex2

   and update with::

      conda update bioconductor-aldex2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aldex2:<tag>

   (see `bioconductor-aldex2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aldex2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aldex2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aldex2
   :alt:   (downloads)
.. |docker_bioconductor-aldex2| image:: https://quay.io/repository/biocontainers/bioconductor-aldex2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aldex2
.. _`bioconductor-aldex2/tags`: https://quay.io/repository/biocontainers/bioconductor-aldex2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aldex2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aldex2/README.html