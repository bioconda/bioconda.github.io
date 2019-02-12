.. title:: Package Recipe 'bioconductor-countclust'
.. highlight: bash


bioconductor-countclust
=======================

.. conda:recipe:: bioconductor-countclust
   :replaces_section_title:

   Fits grade of membership models \(GoM\, also known as admixture models\) to cluster RNA\-seq gene expression count data\, identifies characteristic genes driving cluster memberships\, and provides a visual summary of the cluster memberships.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CountClust.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-countclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-countclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-countclust/meta.yaml>`_

   


.. conda:package:: bioconductor-countclust

   |downloads_bioconductor-countclust| |docker_bioconductor-countclust|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libgfortran-ng` >=7,<8.0a0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cowplot`  :conda:package:`r-flexmix`  :conda:package:`r-ggplot2` >=2.1.0 :conda:package:`r-gtools`  :conda:package:`r-maptpx`  :conda:package:`r-picante`  :conda:package:`r-plyr` >=1.7.1 :conda:package:`r-reshape2`  :conda:package:`r-slam`  :conda:package:`r-squarem`  

   :required~by: |required_by_bioconductor-countclust|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-countclust

   and update with::

      conda update bioconductor-countclust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-countclust


.. |required_by_bioconductor-countclust| conda:required_by:: bioconductor-countclust
.. |downloads_bioconductor-countclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-countclust.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-countclust| image:: https://quay.io/repository/biocontainers/bioconductor-countclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-countclust







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-countclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-countclust/README.html

