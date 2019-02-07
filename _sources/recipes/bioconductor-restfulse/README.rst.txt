.. title:: Package Recipe 'bioconductor-restfulse'
.. highlight: bash


bioconductor-restfulse
======================

.. conda:recipe:: bioconductor-restfulse
   :replaces_section_title:

   This package provides functions and classes to interface with remote data stores by operating on SummarizedExperiment\-like objects.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/restfulSE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-restfulse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-restfulse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-restfulse/meta.yaml>`_

   


.. conda:package:: bioconductor-restfulse

   |downloads_bioconductor-restfulse| |docker_bioconductor-restfulse|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-delayedarray` >=0.8.0,<0.9.0 :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-rhdf5client` >=1.4.0,<1.5.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bigrquery`  :conda:package:`r-dbi`  :conda:package:`r-dplyr` >=0.7.1 :conda:package:`r-magrittr`  :conda:package:`r-reshape2`  :conda:package:`r-rlang`  

   :required~by: |required_by_bioconductor-restfulse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-restfulse

   and update with::

      conda update bioconductor-restfulse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-restfulse


.. |required_by_bioconductor-restfulse| conda:required_by:: bioconductor-restfulse
.. |downloads_bioconductor-restfulse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-restfulse.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-restfulse| image:: https://quay.io/repository/biocontainers/bioconductor-restfulse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-restfulse







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-restfulse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-restfulse/README.html

