:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mdgsa'
.. highlight: bash

bioconductor-mdgsa
==================

.. conda:recipe:: bioconductor-mdgsa
   :replaces_section_title:

   Multi Dimensional Gene Set Analysis.

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/mdgsa.html
   :license: GPL
   :recipe: /`bioconductor-mdgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdgsa/meta.yaml>`_
   :links: biotools: :biotools:`mdgsa`

   Functions to preform a Gene Set Analysis in several genomic dimensions. Including methods for miRNAs.


.. conda:package:: bioconductor-mdgsa

   |downloads_bioconductor-mdgsa| |docker_bioconductor-mdgsa|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-1, 1.14.0-0, 1.12.1-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-go.db: >=3.11.0,<3.12.0
   :depends bioconductor-kegg.db: >=3.2.0,<3.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cluster: 
   :depends r-dbi: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mdgsa

   and update with::

      conda update bioconductor-mdgsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mdgsa:<tag>

   (see `bioconductor-mdgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mdgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mdgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mdgsa
   :alt:   (downloads)
.. |docker_bioconductor-mdgsa| image:: https://quay.io/repository/biocontainers/bioconductor-mdgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mdgsa
.. _`bioconductor-mdgsa/tags`: https://quay.io/repository/biocontainers/bioconductor-mdgsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mdgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mdgsa/README.html