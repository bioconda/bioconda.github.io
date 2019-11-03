:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multiomicsviz'
.. highlight: bash

bioconductor-multiomicsviz
==========================

.. conda:recipe:: bioconductor-multiomicsviz
   :replaces_section_title:

   Calculate the spearman correlation between the source omics data and other target omics data\, identify the significant correlations and plot the significant correlations on the heat map in which the x\-axis and y\-axis are ordered by the chromosomal location.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/multiOmicsViz.html
   :license: LGPL
   :recipe: /`bioconductor-multiomicsviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiomicsviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiomicsviz/meta.yaml>`_

   


.. conda:package:: bioconductor-multiomicsviz

   |downloads_bioconductor-multiomicsviz| |docker_bioconductor-multiomicsviz|

   :versions: 1.10.0-0, 1.8.0-1, 1.6.0-0, 1.4.0-0, 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-doparallel: 
   :depends r-foreach: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multiomicsviz

   and update with::

      conda update bioconductor-multiomicsviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multiomicsviz:<tag>

   (see `bioconductor-multiomicsviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multiomicsviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multiomicsviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multiomicsviz
   :alt:   (downloads)
.. |docker_bioconductor-multiomicsviz| image:: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz
.. _`bioconductor-multiomicsviz/tags`: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multiomicsviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multiomicsviz/README.html