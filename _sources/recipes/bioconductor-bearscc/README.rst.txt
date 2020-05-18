:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bearscc'
.. highlight: bash

bioconductor-bearscc
====================

.. conda:recipe:: bioconductor-bearscc
   :replaces_section_title:

   BEARscc \(Bayesian ERCC Assesstment of Robustness of Single Cell Clusters\)

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BEARscc.html
   :license: GPL-3
   :recipe: /`bioconductor-bearscc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bearscc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bearscc/meta.yaml>`_

   BEARscc is a noise estimation and injection tool that is designed to assess putative single\-cell RNA\-seq clusters in the context of experimental noise estimated by ERCC spike\-in controls.


.. conda:package:: bioconductor-bearscc

   |downloads_bioconductor-bearscc| |docker_bioconductor-bearscc|

   :versions: 1.7.0-0, 1.6.0-0, 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-singlecellexperiment: >=1.10.0,<1.11.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: 
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bearscc

   and update with::

      conda update bioconductor-bearscc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bearscc:<tag>

   (see `bioconductor-bearscc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bearscc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bearscc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bearscc
   :alt:   (downloads)
.. |docker_bioconductor-bearscc| image:: https://quay.io/repository/biocontainers/bioconductor-bearscc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bearscc
.. _`bioconductor-bearscc/tags`: https://quay.io/repository/biocontainers/bioconductor-bearscc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bearscc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bearscc/README.html