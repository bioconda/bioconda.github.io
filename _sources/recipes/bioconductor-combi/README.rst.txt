:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-combi'
.. highlight: bash

bioconductor-combi
==================

.. conda:recipe:: bioconductor-combi
   :replaces_section_title:
   :noindex:

   Compositional omics model based visual integration

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/combi.html
   :license: GPL-2
   :recipe: /`bioconductor-combi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-combi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-combi/meta.yaml>`_

   Combine quasi\-likelihood estimation\, compositional regression models and latent variable models for integrative visualization of several omics datasets. Both unconstrained and constrained integration is available\, the results are shown as interpretable multiplots.


.. conda:package:: bioconductor-combi

   |downloads_bioconductor-combi| |docker_bioconductor-combi|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-phyloseq: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-alabama: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bb: 
   :depends r-cobs: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-nleqslv: 
   :depends r-reshape2: 
   :depends r-tensor: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-combi

   and update with::

      conda update bioconductor-combi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-combi:<tag>

   (see `bioconductor-combi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-combi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-combi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-combi
   :alt:   (downloads)
.. |docker_bioconductor-combi| image:: https://quay.io/repository/biocontainers/bioconductor-combi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-combi
.. _`bioconductor-combi/tags`: https://quay.io/repository/biocontainers/bioconductor-combi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-combi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-combi/README.html