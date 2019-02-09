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

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-dose` >=3.8.0,<3.9.0 :conda:package:`bioconductor-ggtree` >=1.14.0,<1.15.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-reactomepa` >=1.26.0,<1.27.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-ape`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-png`  :conda:package:`r-rcpp` >=0.11.0 :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-linc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-linc

   and update with::

      conda update bioconductor-linc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-linc


.. |required_by_bioconductor-linc| conda:required_by:: bioconductor-linc
.. |downloads_bioconductor-linc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-linc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-linc| image:: https://quay.io/repository/biocontainers/bioconductor-linc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-linc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-linc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-linc/README.html

