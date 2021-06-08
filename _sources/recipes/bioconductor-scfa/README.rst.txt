:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scfa'
.. highlight: bash

bioconductor-scfa
=================

.. conda:recipe:: bioconductor-scfa
   :replaces_section_title:
   :noindex:

   SCFA\: Subtyping via Consensus Factor Analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SCFA.html
   :license: LGPL
   :recipe: /`bioconductor-scfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfa/meta.yaml>`_

   Subtyping via Consensus Factor Analysis \(SCFA\) can efficiently remove noisy signals from consistent molecular patterns in multi\-omics data. SCFA first uses an autoencoder to select only important features and then repeatedly performs factor analysis to represent the data with different numbers of factors. Using these representations\, it can reliably identify cancer subtypes and accurately predict risk scores of patients.


.. conda:package:: bioconductor-scfa

   |downloads_bioconductor-scfa| |docker_bioconductor-scfa|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cluster: 
   :depends r-clustercrit: 
   :depends r-glmnet: 
   :depends r-igraph: 
   :depends r-keras: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-psych: 
   :depends r-rhpcblasctl: 
   :depends r-survival: 
   :depends r-tensorflow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scfa

   and update with::

      conda update bioconductor-scfa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scfa:<tag>

   (see `bioconductor-scfa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scfa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scfa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scfa
   :alt:   (downloads)
.. |docker_bioconductor-scfa| image:: https://quay.io/repository/biocontainers/bioconductor-scfa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scfa
.. _`bioconductor-scfa/tags`: https://quay.io/repository/biocontainers/bioconductor-scfa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scfa/README.html