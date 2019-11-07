:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pulsedsilac'
.. highlight: bash

bioconductor-pulsedsilac
========================

.. conda:recipe:: bioconductor-pulsedsilac
   :replaces_section_title:

   Analysis of pulsed\-SILAC quantitative proteomics data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/pulsedSilac.html
   :license: GPL-3
   :recipe: /`bioconductor-pulsedsilac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pulsedsilac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pulsedsilac/meta.yaml>`_

   This package provides several tools for pulsed\-SILAC data analysis. Functions are provided to organize the data\, calculate isotope ratios\, isotope fractions\, model protein turnover\, compare turnover models\, estimate cell growth and estimate isotope recycling. Several visualization tools are also included to do basic data exploration\, quality control\, condition comparison\, individual model inspection and model comparison.


.. conda:package:: bioconductor-pulsedsilac

   |downloads_bioconductor-pulsedsilac| |docker_bioconductor-pulsedsilac|

   :versions: 1.0.0-0
   
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-r.utils: 
   :depends r-robustbase: 
   :depends r-sme: 
   :depends r-tarifx: 
   :depends r-upsetr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pulsedsilac

   and update with::

      conda update bioconductor-pulsedsilac

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pulsedsilac:<tag>

   (see `bioconductor-pulsedsilac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pulsedsilac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pulsedsilac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pulsedsilac
   :alt:   (downloads)
.. |docker_bioconductor-pulsedsilac| image:: https://quay.io/repository/biocontainers/bioconductor-pulsedsilac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pulsedsilac
.. _`bioconductor-pulsedsilac/tags`: https://quay.io/repository/biocontainers/bioconductor-pulsedsilac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pulsedsilac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pulsedsilac/README.html