:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dgeclustering'
.. highlight: bash

r-dgeclustering
===============

.. conda:recipe:: r-DGEclustering
   :replaces_section_title:

   DGEclustering is an R package for multidimensional clustering of differential gene expression datasets\, and it integrates GO annotations to improve the clustering result.

   :homepage: https://github.com/reneechou123/DGEclustering
   :license: MIT
   :recipe: /`r-DGEclustering <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-DGEclustering>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-DGEclustering/meta.yaml>`_

   


.. conda:package:: r-dgeclustering

   |downloads_r-dgeclustering| |docker_r-dgeclustering|

   :versions: 0.1.0-0
   
   :depends bioconductor-annotationdbi: 
   :depends bioconductor-clusterprofiler: 
   :depends bioconductor-genomicfeatures: 
   :depends bioconductor-gosemsim: 
   :depends r-base: >=3.4.1,<3.4.2.0a0
   :depends r-cluster: 
   :depends r-factominer: 
   :depends r-ggplot2: 
   :depends r-intego: 
   :depends r-reshape2: 
   :depends r-rlist: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-dgeclustering

   and update with::

      conda update r-dgeclustering

   or use the docker container::

      docker pull quay.io/biocontainers/r-dgeclustering:<tag>

   (see `r-dgeclustering/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dgeclustering| image:: https://img.shields.io/conda/dn/bioconda/r-dgeclustering.svg?style=flat
   :alt:   (downloads)
.. |docker_r-dgeclustering| image:: https://quay.io/repository/biocontainers/r-dgeclustering/status
   :target: https://quay.io/repository/biocontainers/r-dgeclustering
.. _`r-dgeclustering/tags`: https://quay.io/repository/biocontainers/r-dgeclustering?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dgeclustering/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dgeclustering/README.html