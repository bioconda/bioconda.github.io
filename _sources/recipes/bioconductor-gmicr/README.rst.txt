:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gmicr'
.. highlight: bash

bioconductor-gmicr
==================

.. conda:recipe:: bioconductor-gmicr
   :replaces_section_title:
   :noindex:

   Combines WGCNA and xCell readouts with bayesian network learrning to generate a Gene\-Module Immune\-Cell network \(GMIC\)

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GmicR.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-gmicr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmicr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gmicr/meta.yaml>`_

   This package uses bayesian network learning to detect relationships between Gene Modules detected by WGCNA and immune cell signatures defined by xCell. It is a hypothesis generating tool.


.. conda:package:: bioconductor-gmicr

   |downloads_bioconductor-gmicr| |docker_bioconductor-gmicr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-category: ``>=2.56.0,<2.57.0``
   :depends bioconductor-gostats: ``>=2.56.0,<2.57.0``
   :depends bioconductor-gseabase: ``>=1.52.0,<1.53.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.12.0,<3.13.0``
   :depends r-ape: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bnlearn: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dt: 
   :depends r-foreach: 
   :depends r-grain: 
   :depends r-grbase: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gmicr

   and update with::

      conda update bioconductor-gmicr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gmicr:<tag>

   (see `bioconductor-gmicr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gmicr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gmicr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gmicr
   :alt:   (downloads)
.. |docker_bioconductor-gmicr| image:: https://quay.io/repository/biocontainers/bioconductor-gmicr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gmicr
.. _`bioconductor-gmicr/tags`: https://quay.io/repository/biocontainers/bioconductor-gmicr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gmicr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gmicr/README.html