:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-linc'
.. highlight: bash

bioconductor-linc
=================

.. conda:recipe:: bioconductor-linc
   :replaces_section_title:

   co\-expression of lincRNAs and protein\-coding genes

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/LINC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-linc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linc/meta.yaml>`_
   :links: biotools: :biotools:`linc`, doi: :doi:`10.1038/nmeth.3252`

   This package provides methods to compute co\-expression networks of lincRNAs and protein\-coding genes. Biological terms associated with the sets of protein\-coding genes predict the biological contexts of lincRNAs according to the \'Guilty by Association\' approach.


.. conda:package:: bioconductor-linc

   |downloads_bioconductor-linc| |docker_bioconductor-linc|

   :versions: 1.15.0-0, 1.14.0-0, 1.12.0-1, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-clusterprofiler: >=3.16.0,<3.17.0
   :depends bioconductor-dose: >=3.14.0,<3.15.0
   :depends bioconductor-ggtree: >=2.2.0,<2.3.0
   :depends bioconductor-org.hs.eg.db: >=3.11.0,<3.12.0
   :depends bioconductor-reactomepa: >=1.32.0,<1.33.0
   :depends bioconductor-sva: >=3.36.0,<3.37.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.5.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.5.0
   :depends r-ape: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-png: 
   :depends r-rcpp: >=0.11.0
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-linc

   and update with::

      conda update bioconductor-linc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-linc:<tag>

   (see `bioconductor-linc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-linc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-linc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-linc
   :alt:   (downloads)
.. |docker_bioconductor-linc| image:: https://quay.io/repository/biocontainers/bioconductor-linc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-linc
.. _`bioconductor-linc/tags`: https://quay.io/repository/biocontainers/bioconductor-linc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-linc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-linc/README.html