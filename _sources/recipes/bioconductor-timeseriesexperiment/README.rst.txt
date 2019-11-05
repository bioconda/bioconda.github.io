:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timeseriesexperiment'
.. highlight: bash

bioconductor-timeseriesexperiment
=================================

.. conda:recipe:: bioconductor-timeseriesexperiment
   :replaces_section_title:

   Visualization and analysis toolbox for short time course data which includes dimensionality reduction\, clustering\, two\-sample differential expression testing and gene ranking techniques. The package also provides methods for retrieving enriched pathways.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/TimeSeriesExperiment.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-timeseriesexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timeseriesexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timeseriesexperiment/meta.yaml>`_

   


.. conda:package:: bioconductor-timeseriesexperiment

   |downloads_bioconductor-timeseriesexperiment| |docker_bioconductor-timeseriesexperiment|

   :versions: 1.4.0-0, 1.2.0-1, 1.0.2-0
   
   :depends bioconductor-deseq2: >=1.26.0,<1.27.0
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dplyr: 
   :depends r-dynamictreecut: 
   :depends r-ggplot2: >=3.0.0
   :depends r-hmisc: 
   :depends r-magrittr: 
   :depends r-proxy: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vegan: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-timeseriesexperiment

   and update with::

      conda update bioconductor-timeseriesexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-timeseriesexperiment:<tag>

   (see `bioconductor-timeseriesexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-timeseriesexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timeseriesexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timeseriesexperiment
   :alt:   (downloads)
.. |docker_bioconductor-timeseriesexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-timeseriesexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timeseriesexperiment
.. _`bioconductor-timeseriesexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-timeseriesexperiment?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timeseriesexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timeseriesexperiment/README.html