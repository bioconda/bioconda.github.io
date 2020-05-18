:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moda'
.. highlight: bash

bioconductor-moda
=================

.. conda:recipe:: bioconductor-moda
   :replaces_section_title:

   MODA\: MOdule Differential Analysis for weighted gene co\-expression network

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MODA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-moda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moda/meta.yaml>`_

   MODA can be used to estimate and construct condition\-specific gene co\-expression networks\, and identify differentially expressed subnetworks as conserved or condition specific modules which are potentially associated with relevant biological processes.


.. conda:package:: bioconductor-moda

   |downloads_bioconductor-moda| |docker_bioconductor-moda|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-1, 1.8.0-0
   
   :depends bioconductor-amountain: >=1.14.0,<1.15.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cluster: 
   :depends r-dynamictreecut: 
   :depends r-igraph: 
   :depends r-rcolorbrewer: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-moda

   and update with::

      conda update bioconductor-moda

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moda:<tag>

   (see `bioconductor-moda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moda
   :alt:   (downloads)
.. |docker_bioconductor-moda| image:: https://quay.io/repository/biocontainers/bioconductor-moda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moda
.. _`bioconductor-moda/tags`: https://quay.io/repository/biocontainers/bioconductor-moda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moda/README.html