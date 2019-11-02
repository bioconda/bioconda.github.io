:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneplast'
.. highlight: bash

bioconductor-geneplast
======================

.. conda:recipe:: bioconductor-geneplast
   :replaces_section_title:

   Geneplast is designed for evolutionary and plasticity analysis based on orthologous groups distribution in a given species tree. It uses Shannon information theory and orthologs abundance to estimate the Evolutionary Plasticity Index. Additionally\, it implements the Bridge algorithm to determine the evolutionary root of a given gene based on its orthologs distribution.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/geneplast.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-geneplast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast/meta.yaml>`_
   :links: biotools: :biotools:`geneplast`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-geneplast

   |downloads_bioconductor-geneplast| |docker_bioconductor-geneplast|

   :versions: 1.12.0-0, 1.10.3-0, 1.10.0-0, 1.8.0-0, 1.6.2-0, 1.4.0-0
   
   :depends r-ape: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-igraph: 
   :depends r-snow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneplast

   and update with::

      conda update bioconductor-geneplast

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneplast:<tag>

   (see `bioconductor-geneplast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneplast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneplast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneplast
   :alt:   (downloads)
.. |docker_bioconductor-geneplast| image:: https://quay.io/repository/biocontainers/bioconductor-geneplast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneplast
.. _`bioconductor-geneplast/tags`: https://quay.io/repository/biocontainers/bioconductor-geneplast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneplast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneplast/README.html