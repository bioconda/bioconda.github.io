:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetscoredata'
.. highlight: bash

bioconductor-targetscoredata
============================

.. conda:recipe:: bioconductor-targetscoredata
   :replaces_section_title:
   :noindex:

   TargetScoreData

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/TargetScoreData.html
   :license: GPL-2
   :recipe: /`bioconductor-targetscoredata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscoredata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscoredata/meta.yaml>`_

   Precompiled and processed miRNA\-overexpression fold\-changes from 84 Gene Expression Omnibus \(GEO\) series corresponding to 6 platforms\, 77 human cells or tissues\, and 113 distinct miRNAs. Accompanied with the data\, we also included in this package the sequence feature scores from TargetScanHuman 6.1 including the context\+ score and the probabilities of conserved targeting for each miRNA\-mRNA interaction. Thus\, the user can use these static sequence\-based scores together with user\-supplied tissue\/cell\-specific fold\-change due to miRNA overexpression to predict miRNA targets using the package TargetScore \(download separately\)


.. conda:package:: bioconductor-targetscoredata

   |downloads_bioconductor-targetscoredata| |docker_bioconductor-targetscoredata|

   :versions:
      
      

      ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-targetscoredata

   and update with::

      conda update bioconductor-targetscoredata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-targetscoredata:<tag>

   (see `bioconductor-targetscoredata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-targetscoredata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetscoredata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetscoredata
   :alt:   (downloads)
.. |docker_bioconductor-targetscoredata| image:: https://quay.io/repository/biocontainers/bioconductor-targetscoredata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetscoredata
.. _`bioconductor-targetscoredata/tags`: https://quay.io/repository/biocontainers/bioconductor-targetscoredata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetscoredata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetscoredata/README.html