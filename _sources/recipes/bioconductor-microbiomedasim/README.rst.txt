:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomedasim'
.. highlight: bash

bioconductor-microbiomedasim
============================

.. conda:recipe:: bioconductor-microbiomedasim
   :replaces_section_title:
   :noindex:

   Microbiome Differential Abundance Simulation

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/microbiomeDASim.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-microbiomedasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedasim/meta.yaml>`_

   A toolkit for simulating differential microbiome data designed for longitudinal analyses. Several functional forms may be specified for the mean trend. Observations are drawn from a multivariate normal model. The objective of this package is to be able to simulate data in order to accurately compare different longitudinal methods for differential abundance.


.. conda:package:: bioconductor-microbiomedasim

   |downloads_bioconductor-microbiomedasim| |docker_bioconductor-microbiomedasim|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-metagenomeseq: ``>=1.34.0,<1.35.0``
   :depends bioconductor-phyloseq: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-mvtnorm: 
   :depends r-pbapply: 
   :depends r-tmvtnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microbiomedasim

   and update with::

      conda update bioconductor-microbiomedasim

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiomedasim:<tag>

   (see `bioconductor-microbiomedasim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiomedasim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomedasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomedasim
   :alt:   (downloads)
.. |docker_bioconductor-microbiomedasim| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomedasim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomedasim
.. _`bioconductor-microbiomedasim/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomedasim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomedasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomedasim/README.html