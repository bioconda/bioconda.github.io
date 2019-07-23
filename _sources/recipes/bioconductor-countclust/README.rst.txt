:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-countclust'
.. highlight: bash

bioconductor-countclust
=======================

.. conda:recipe:: bioconductor-countclust
   :replaces_section_title:

   Fits grade of membership models \(GoM\, also known as admixture models\) to cluster RNA\-seq gene expression count data\, identifies characteristic genes driving cluster memberships\, and provides a visual summary of the cluster memberships.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CountClust.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-countclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-countclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-countclust/meta.yaml>`_

   


.. conda:package:: bioconductor-countclust

   |downloads_bioconductor-countclust| |docker_bioconductor-countclust|

   :versions: 1.12.0-1, 1.12.0-0, 1.10.1-0, 1.10.0-0
   
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cowplot: 
   :depends r-flexmix: 
   :depends r-ggplot2: >=2.1.0
   :depends r-gtools: 
   :depends r-maptpx: 
   :depends r-picante: 
   :depends r-plyr: >=1.7.1
   :depends r-reshape2: 
   :depends r-slam: 
   :depends r-squarem: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-countclust

   and update with::

      conda update bioconductor-countclust

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-countclust:<tag>

   (see `bioconductor-countclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-countclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-countclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-countclust
   :alt:   (downloads)
.. |docker_bioconductor-countclust| image:: https://quay.io/repository/biocontainers/bioconductor-countclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-countclust
.. _`bioconductor-countclust/tags`: https://quay.io/repository/biocontainers/bioconductor-countclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-countclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-countclust/README.html