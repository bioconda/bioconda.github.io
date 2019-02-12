:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imas'
.. highlight: bash

bioconductor-imas
=================

.. conda:recipe:: bioconductor-imas
   :replaces_section_title:

   Integrative analysis of Multi\-omics data for Alternative splicing.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IMAS.html
   :license: GPL-2
   :recipe: /`bioconductor-imas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imas/meta.yaml>`_

   


.. conda:package:: bioconductor-imas

   |downloads_bioconductor-imas| |docker_bioconductor-imas|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-ivas: >=2.2.0,<2.3.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-doparallel: 
   
   :depends r-foreach: 
   
   :depends r-ggfortify: 
   
   :depends r-ggplot2: 
   
   :depends r-gridextra: 
   
   :depends r-lattice: 
   
   :depends r-lme4: 
   
   :depends r-matrix: 
   
   :depends r-survival: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-imas

   and update with::

      conda update bioconductor-imas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-imas:<tag>

   (see `bioconductor-imas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-imas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imas.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-imas| image:: https://quay.io/repository/biocontainers/bioconductor-imas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imas
.. _`bioconductor-imas/tags`: https://quay.io/repository/biocontainers/bioconductor-imas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imas/README.html