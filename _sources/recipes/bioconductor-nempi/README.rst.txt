:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nempi'
.. highlight: bash

bioconductor-nempi
==================

.. conda:recipe:: bioconductor-nempi
   :replaces_section_title:
   :noindex:

   Inferring unobserved perturbations from gene expression data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/nempi.html
   :license: GPL-3
   :recipe: /`bioconductor-nempi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nempi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nempi/meta.yaml>`_

   Takes as input an incomplete perturbation profile and differential gene expression in log odds and infers unobserved perturbations and augments observed ones. The inference is done by iteratively inferring a network from the perturbations and inferring perturbations from the network. The network inference is done by Nested Effects Models.


.. conda:package:: bioconductor-nempi

   |downloads_bioconductor-nempi| |docker_bioconductor-nempi|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-epinem: ``>=1.16.0,<1.17.0``
   :depends bioconductor-mnem: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-e1071: 
   :depends r-matrixstats: 
   :depends r-naturalsort: 
   :depends r-nnet: 
   :depends r-randomforest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nempi

   and update with::

      conda update bioconductor-nempi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nempi:<tag>

   (see `bioconductor-nempi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nempi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nempi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nempi
   :alt:   (downloads)
.. |docker_bioconductor-nempi| image:: https://quay.io/repository/biocontainers/bioconductor-nempi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nempi
.. _`bioconductor-nempi/tags`: https://quay.io/repository/biocontainers/bioconductor-nempi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nempi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nempi/README.html