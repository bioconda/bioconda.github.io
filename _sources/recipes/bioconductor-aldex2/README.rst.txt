:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aldex2'
.. highlight: bash

bioconductor-aldex2
===================

.. conda:recipe:: bioconductor-aldex2
   :replaces_section_title:
   :noindex:

   Analysis Of Differential Abundance Taking Sample Variation Into Account

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ALDEx2.html
   :license: file LICENSE
   :recipe: /`bioconductor-aldex2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aldex2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aldex2/meta.yaml>`_
   :links: biotools: :biotools:`aldex2`

   A differential abundance analysis for the comparison of two or more conditions. Useful for analyzing data from standard RNA\-seq or meta\-RNA\-seq assays as well as selected and unselected values from in\-vitro sequence selections. Uses a Dirichlet\-multinomial model to infer abundance from counts\, optimized for three or more experimental replicates. The method infers biological and sampling variation to calculate the expected false discovery rate\, given the variation\, based on a Wilcoxon Rank Sum test and Welch\'s t\-test \(via aldex.ttest\)\, a Kruskal\-Wallis test \(via aldex.kw\)\, a generalized linear model \(via aldex.glm\)\, or a correlation test \(via aldex.corr\). All tests report p\-values and Benjamini\-Hochberg corrected p\-values.


.. conda:package:: bioconductor-aldex2

   |downloads_bioconductor-aldex2| |docker_bioconductor-aldex2|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-multtest: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-zcompositions: 
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