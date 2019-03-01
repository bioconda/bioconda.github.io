:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-linc'
.. highlight: bash

bioconductor-linc
=================

.. conda:recipe:: bioconductor-linc
   :replaces_section_title:

   This package provides methods to compute co\-expression networks of lincRNAs and protein\-coding genes. Biological terms associated with the sets of protein\-coding genes predict the biological contexts of lincRNAs according to the \'Guilty by Association\' approach.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/LINC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-linc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linc/meta.yaml>`_
   :links: biotools: :biotools:`linc`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-linc

   |downloads_bioconductor-linc| |docker_bioconductor-linc|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-clusterprofiler: >=3.10.0,<3.11.0
   
   :depends bioconductor-dose: >=3.8.0,<3.9.0
   
   :depends bioconductor-ggtree: >=1.14.0,<1.15.0
   
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   
   :depends bioconductor-reactomepa: >=1.26.0,<1.27.0
   
   :depends bioconductor-sva: >=3.30.0,<3.31.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-ape: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
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