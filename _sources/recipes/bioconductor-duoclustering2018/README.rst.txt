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

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-ggthemes`  :conda:package:`r-magrittr`  :conda:package:`r-mclust`  :conda:package:`r-purrr`  :conda:package:`r-reshape2`  :conda:package:`r-tidyr`  :conda:package:`r-viridis`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-duoclustering2018|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-duoclustering2018

   and update with::

      conda update bioconductor-duoclustering2018

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-duoclustering2018


.. |required_by_bioconductor-duoclustering2018| conda:required_by:: bioconductor-duoclustering2018
.. |downloads_bioconductor-duoclustering2018| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-duoclustering2018.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-duoclustering2018| image:: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018/status
   :target: https://quay.io/repository/biocontainers/bioconductor-duoclustering2018







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-duoclustering2018/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-duoclustering2018/README.html

