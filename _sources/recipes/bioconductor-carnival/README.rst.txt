:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-carnival'
.. highlight: bash

bioconductor-carnival
=====================

.. conda:recipe:: bioconductor-carnival
   :replaces_section_title:
   :noindex:

   A CAusal Reasoning tool for Network Identification \(from gene expression data\) using Integer VALue programming

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/CARNIVAL.html
   :license: Apache License (== 3.0) | file LICENSE
   :recipe: /`bioconductor-carnival <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-carnival>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-carnival/meta.yaml>`_

   An upgraded causal reasoning tool from Melas et al in R with updated assignments of TFs\' weights from PROGENy scores. Optimization parameters can be freely adjusted and multiple solutions can be obtained and aggregated.


.. conda:package:: bioconductor-carnival

   |downloads_bioconductor-carnival| |docker_bioconductor-carnival|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-category: ``>=2.56.0,<2.57.0``
   :depends bioconductor-uniprot.ws: ``>=2.29.0,<2.30.0``
   :depends bioconductor-viper: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-doparallel: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-lpsolve: 
   :depends r-readr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-carnival

   and update with::

      conda update bioconductor-carnival

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-carnival:<tag>

   (see `bioconductor-carnival/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-carnival| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-carnival.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-carnival
   :alt:   (downloads)
.. |docker_bioconductor-carnival| image:: https://quay.io/repository/biocontainers/bioconductor-carnival/status
   :target: https://quay.io/repository/biocontainers/bioconductor-carnival
.. _`bioconductor-carnival/tags`: https://quay.io/repository/biocontainers/bioconductor-carnival?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-carnival/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-carnival/README.html