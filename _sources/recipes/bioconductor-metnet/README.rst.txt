:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metnet'
.. highlight: bash

bioconductor-metnet
===================

.. conda:recipe:: bioconductor-metnet
   :replaces_section_title:

   Inferring metabolic networks from untargeted high\-resolution mass spectrometry data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MetNet.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-metnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metnet/meta.yaml>`_

   MetNet contains functionality to infer metabolic network topologies from quantitative data and high\-resolution mass\/charge information. Using statistical models \(including correlation\, mutual information\, regression and Bayes statistics\) and quantitative data \(intensity values of features\) adjacency matrices are inferred that can be combined to a consensus matrix. Mass differences calculated between mass\/charge values of features will be matched against a data frame of supplied mass\/charge differences referring to transformations of enzymatic activities. In a third step\, the two matrices are combined to form a adjacency matrix inferred from both quantitative and structure information.


.. conda:package:: bioconductor-metnet

   |downloads_bioconductor-metnet| |docker_bioconductor-metnet|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-genie3: >=1.10.0,<1.11.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-bnlearn: >=4.3
   :depends r-mpmi: >=0.42
   :depends r-parmigene: >=1.0.2
   :depends r-ppcor: >=1.1
   :depends r-sna: >=2.4
   :depends r-stabs: >=0.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metnet

   and update with::

      conda update bioconductor-metnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metnet:<tag>

   (see `bioconductor-metnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metnet
   :alt:   (downloads)
.. |docker_bioconductor-metnet| image:: https://quay.io/repository/biocontainers/bioconductor-metnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metnet
.. _`bioconductor-metnet/tags`: https://quay.io/repository/biocontainers/bioconductor-metnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metnet/README.html