:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prize'
.. highlight: bash

bioconductor-prize
==================

.. conda:recipe:: bioconductor-prize
   :replaces_section_title:

   Prize\: an R package for prioritization estimation based on analytic hierarchy process

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/Prize.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prize/meta.yaml>`_
   :links: biotools: :biotools:`prize`, doi: :doi:`10.1038/nmeth.3252`

   The high throughput studies often produce large amounts of numerous genes and proteins of interest. While it is difficult to study and validate all of them. Analytic Hierarchy Process \(AHP\) offers a novel approach to narrowing down long lists of candidates by prioritizing them based on how well they meet the research goal. AHP is a mathematical technique for organizing and analyzing complex decisions where multiple criteria are involved. The technique structures problems into a hierarchy of elements\, and helps to specify numerical weights representing the relative importance of each element. Numerical weight or priority derived from each element allows users to find alternatives that best suit their goal and their understanding of the problem.


.. conda:package:: bioconductor-prize

   |downloads_bioconductor-prize| |docker_bioconductor-prize|

   :versions: 1.16.0-0, 1.14.0-1, 1.14.0-0, 1.12.1-0, 1.10.0-0, 1.8.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-diagram: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-matrixcalc: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prize

   and update with::

      conda update bioconductor-prize

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prize:<tag>

   (see `bioconductor-prize/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prize
   :alt:   (downloads)
.. |docker_bioconductor-prize| image:: https://quay.io/repository/biocontainers/bioconductor-prize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prize
.. _`bioconductor-prize/tags`: https://quay.io/repository/biocontainers/bioconductor-prize?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prize/README.html