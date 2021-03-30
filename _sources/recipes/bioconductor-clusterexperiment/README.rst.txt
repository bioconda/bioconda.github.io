:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterexperiment'
.. highlight: bash

bioconductor-clusterexperiment
==============================

.. conda:recipe:: bioconductor-clusterexperiment
   :replaces_section_title:
   :noindex:

   Compare Clusterings for Single\-Cell Sequencing

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/clusterExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterexperiment/meta.yaml>`_

   Provides functionality for running and comparing many different clusterings of single\-cell sequencing data or other large mRNA Expression data sets.


.. conda:package:: bioconductor-clusterexperiment

   |downloads_bioconductor-clusterexperiment| |docker_bioconductor-clusterexperiment|

   :versions:
      
      

      ``2.10.1-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.4-0``,  ``2.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-delayedarray: ``>=0.16.0,<0.17.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-hdf5array: ``>=1.18.0,<1.19.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-mbkmeans: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-zinbwave: ``>=1.12.0,<1.13.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-ape: ``>=5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-howmany: 
   :depends r-kernlab: 
   :depends r-locfdr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-nmf: 
   :depends r-phylobase: 
   :depends r-pracma: 
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