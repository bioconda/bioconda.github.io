:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edge'
.. highlight: bash

bioconductor-edge
=================

.. conda:recipe:: bioconductor-edge
   :replaces_section_title:

   The edge package implements methods for carrying out differential expression analyses of genome\-wide gene expression studies. Significance testing using the optimal discovery procedure and generalized likelihood ratio tests \(equivalent to F\-tests and t\-tests\) are implemented for general study designs. Special functions are available to facilitate the analysis of common study designs\, including time course experiments. Other packages such as snm\, sva\, and qvalue are integrated in edge to provide a wide range of tools for gene expression analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/edge.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-edge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edge/meta.yaml>`_

   


.. conda:package:: bioconductor-edge

   |downloads_bioconductor-edge| |docker_bioconductor-edge|

   :versions: 2.14.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-qvalue: >=2.14.0,<2.15.0
   
   :depends bioconductor-snm: >=1.30.0,<1.31.0
   
   :depends bioconductor-sva: >=3.30.0,<3.31.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-jackstraw: 
   
   :depends r-mass: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-edge

   and update with::

      conda update bioconductor-edge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-edge:<tag>

   (see `bioconductor-edge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-edge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edge.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-edge| image:: https://quay.io/repository/biocontainers/bioconductor-edge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edge
.. _`bioconductor-edge/tags`: https://quay.io/repository/biocontainers/bioconductor-edge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edge/README.html