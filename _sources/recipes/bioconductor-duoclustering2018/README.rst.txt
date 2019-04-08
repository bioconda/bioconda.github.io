:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-duoclustering2018'
.. highlight: bash

bioconductor-duoclustering2018
==============================

.. conda:recipe:: bioconductor-duoclustering2018
   :replaces_section_title:

   Preprocessed experimental and simulated scRNA\-seq data sets used for evaluation of clustering methods for scRNA\-seq data in Duò et al \(2018\). Also contains results from applying several clustering methods to each of the data sets\, and functions for plotting method performance.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/DuoClustering2018.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-duoclustering2018 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-duoclustering2018>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-duoclustering2018/meta.yaml>`_

   


.. conda:package:: bioconductor-duoclustering2018

   |downloads_bioconductor-duoclustering2018| |docker_bioconductor-duoclustering2018|

   :versions: 1.0.0-0
   
   :depends bioconductor-experimenthub: >=1.8.0,<1.9.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-magrittr: 
   :depends r-mclust: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-tidyr: 
   :depends r-viridis: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-duoclustering2018

   and update with::

      conda update bioconductor-duoclustering2018

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-duoclustering2018:<tag>

   (see `bioconductor-duoclustering2018/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-duoclustering2018| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-duoclustering2018.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-duoclustering2018| image:: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018/status
   :target: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018
.. _`bioconductor-duoclustering2018/tags`: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-duoclustering2018/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-duoclustering2018/README.html