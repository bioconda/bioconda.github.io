:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterexperiment'
.. highlight: bash

bioconductor-clusterexperiment
==============================

.. conda:recipe:: bioconductor-clusterexperiment
   :replaces_section_title:

   Provides functionality for running and comparing many different clusterings of single\-cell sequencing data or other large mRNA Expression data sets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/clusterExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterexperiment/meta.yaml>`_

   


.. conda:package:: bioconductor-clusterexperiment

   |downloads_bioconductor-clusterexperiment| |docker_bioconductor-clusterexperiment|

   :versions: 2.2.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-delayedarray: >=0.8.0,<0.9.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-hdf5array: >=1.10.0,<1.11.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-singlecellexperiment: >=1.4.0,<1.5.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-zinbwave: >=1.4.0,<1.5.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-ape: >=5.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cluster: 
   :depends r-dendextend: 
   :depends r-howmany: 
   :depends r-kernlab: 
   :depends r-locfdr: 
   :depends r-matrixstats: 
   :depends r-nmf: 
   :depends r-phylobase: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rspectra: 
   :depends r-scales: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clusterexperiment

   and update with::

      conda update bioconductor-clusterexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clusterexperiment:<tag>

   (see `bioconductor-clusterexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterexperiment
   :alt:   (downloads)
.. |docker_bioconductor-clusterexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-clusterexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterexperiment
.. _`bioconductor-clusterexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterexperiment?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterexperiment/README.html