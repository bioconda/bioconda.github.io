.. title:: Package Recipe 'bioconductor-cummerbund'
.. highlight: bash


bioconductor-cummerbund
=======================

.. conda:recipe:: bioconductor-cummerbund
   :replaces_section_title:

   Allows for persistent storage\, access\, exploration\, and manipulation of Cufflinks high\-throughput sequencing data.  In addition\, provides numerous plotting functions for commonly used visualizations.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cummeRbund.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cummerbund <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cummerbund>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cummerbund/meta.yaml>`_
   :links: biotools: :biotools:`cummerbund`, doi: :doi:`10.1038/nprot.2012.016`

   


.. conda:package:: bioconductor-cummerbund

   |downloads_bioconductor-cummerbund| |docker_bioconductor-cummerbund|

   :versions: 2.24.0, 2.22.0, 2.20.0, 2.18.0, 2.16.0, 2.12.1, 2.8.2

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fastcluster`  :conda:package:`r-ggplot2`  :conda:package:`r-plyr`  :conda:package:`r-reshape2`  :conda:package:`r-rsqlite`  

   :required~by: |required_by_bioconductor-cummerbund|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cummerbund

   and update with::

      conda update bioconductor-cummerbund

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cummerbund


.. |required_by_bioconductor-cummerbund| conda:required_by:: bioconductor-cummerbund
.. |downloads_bioconductor-cummerbund| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cummerbund.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cummerbund| image:: https://quay.io/repository/biocontainers/bioconductor-cummerbund/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cummerbund







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cummerbund/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cummerbund/README.html

