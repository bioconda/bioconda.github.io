:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lfa'
.. highlight: bash

bioconductor-lfa
================

.. conda:recipe:: bioconductor-lfa
   :replaces_section_title:

   Logistic Factor Analysis for Categorical Data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/lfa.html
   :license: GPL-3
   :recipe: /`bioconductor-lfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lfa/meta.yaml>`_
   :links: biotools: :biotools:`lfa`, doi: :doi:`10.1093/bioinformatics/btv641`

   LFA is a method for a PCA analogue on Binomial data via estimation of latent structure in the natural parameter.


.. conda:package:: bioconductor-lfa

   |downloads_bioconductor-lfa| |docker_bioconductor-lfa|

   :versions: 1.16.0-0, 1.14.0-1, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-corpcor: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lfa

   and update with::

      conda update bioconductor-lfa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lfa:<tag>

   (see `bioconductor-lfa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lfa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lfa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lfa
   :alt:   (downloads)
.. |docker_bioconductor-lfa| image:: https://quay.io/repository/biocontainers/bioconductor-lfa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lfa
.. _`bioconductor-lfa/tags`: https://quay.io/repository/biocontainers/bioconductor-lfa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lfa/README.html