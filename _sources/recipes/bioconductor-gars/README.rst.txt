:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gars'
.. highlight: bash

bioconductor-gars
=================

.. conda:recipe:: bioconductor-gars
   :replaces_section_title:
   :noindex:

   GARS\: Genetic Algorithm for the identification of Robust Subsets of variables in high\-dimensional and challenging datasets

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GARS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gars/meta.yaml>`_

   Feature selection aims to identify and remove redundant\, irrelevant and noisy variables from high\-dimensional datasets. Selecting informative features affects the subsequent classification and regression analyses by improving their overall performances. Several methods have been proposed to perform feature selection\: most of them relies on univariate statistics\, correlation\, entropy measurements or the usage of backward\/forward regressions. Herein\, we propose an efficient\, robust and fast method that adopts stochastic optimization approaches for high\-dimensional. GARS is an innovative implementation of a genetic algorithm that selects robust features in high\-dimensional and challenging datasets.


.. conda:package:: bioconductor-gars

   |downloads_bioconductor-gars| |docker_bioconductor-gars|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-damirseq: ``>=2.4.0,<2.5.0``
   :depends bioconductor-mlseq: ``>=2.10.0,<2.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cluster: 
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gars

   and update with::

      conda update bioconductor-gars

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gars:<tag>

   (see `bioconductor-gars/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gars| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gars.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gars
   :alt:   (downloads)
.. |docker_bioconductor-gars| image:: https://quay.io/repository/biocontainers/bioconductor-gars/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gars
.. _`bioconductor-gars/tags`: https://quay.io/repository/biocontainers/bioconductor-gars?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gars";
        var versions = ["1.12.0","1.10.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gars/README.html