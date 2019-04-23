:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicer'
.. highlight: bash

bioconductor-splicer
====================

.. conda:recipe:: bioconductor-splicer
   :replaces_section_title:

   An R package for classification of alternative splicing and prediction of coding potential from RNA\-seq data.

   :homepage: http://bioconductor.org/packages/3.7/bioc/html/spliceR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-splicer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicer/meta.yaml>`_
   :links: biotools: :biotools:`splicer`, doi: :doi:`10.1186/1471-2105-15-81`

   


.. conda:package:: bioconductor-splicer

   |downloads_bioconductor-splicer| |docker_bioconductor-splicer|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-cummerbund: >=2.22.0,<2.24.0
   :depends bioconductor-genomicranges: >=1.32.7,<1.34.0
   :depends bioconductor-iranges: >=2.14.12,<2.16.0
   :depends bioconductor-rtracklayer: >=1.40.6,<1.42.0
   :depends r-base: >=3.4.1,<3.4.2.0a0
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splicer

   and update with::

      conda update bioconductor-splicer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splicer:<tag>

   (see `bioconductor-splicer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splicer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splicer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-splicer| image:: https://quay.io/repository/biocontainers/bioconductor-splicer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splicer
.. _`bioconductor-splicer/tags`: https://quay.io/repository/biocontainers/bioconductor-splicer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splicer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splicer/README.html