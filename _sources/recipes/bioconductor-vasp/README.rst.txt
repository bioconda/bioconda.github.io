:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vasp'
.. highlight: bash

bioconductor-vasp
=================

.. conda:recipe:: bioconductor-vasp
   :replaces_section_title:
   :noindex:

   Quantification and Visulization of Variations of Splicing in Population

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/vasp.html
   :license: GPL (>= 2.0)
   :recipe: /`bioconductor-vasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vasp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vasp/meta.yaml>`_

   Discovery of genome\-wide variable alternative splicing events from short\-read RNA\-seq data and visualizations of gene splicing information for publication\-quality multi\-panel figures.


.. conda:package:: bioconductor-vasp

   |downloads_bioconductor-vasp| |docker_bioconductor-vasp|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-ballgown: ``>=2.20.0,<2.21.0``
   :depends bioconductor-genomeinfodb: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicalignments: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.4.0,<2.5.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-sushi: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vasp

   and update with::

      conda update bioconductor-vasp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vasp:<tag>

   (see `bioconductor-vasp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vasp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vasp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vasp
   :alt:   (downloads)
.. |docker_bioconductor-vasp| image:: https://quay.io/repository/biocontainers/bioconductor-vasp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vasp
.. _`bioconductor-vasp/tags`: https://quay.io/repository/biocontainers/bioconductor-vasp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vasp/README.html