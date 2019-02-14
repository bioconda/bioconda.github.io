:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tcr'
.. highlight: bash

r-tcr
=====

.. conda:recipe:: r-tcr
   :replaces_section_title:

   Platform for the advanced analysis of T cell receptor and Immunoglobulin repertoires data and visualisation of the analysis results.

   :homepage: http://imminfo.github.io/tcr/
   :license: APACHE / Apache License 2.0
   :recipe: /`r-tcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tcr/meta.yaml>`_

   


.. conda:package:: r-tcr

   |downloads_r-tcr| |docker_r-tcr|

   :versions: 2.2.2-0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-data.table: >=1.9.0
   
   :depends r-dplyr: >=0.4.0
   
   :depends r-ggplot2: >=1.0.0
   
   :depends r-gridextra: >=0.9.0
   
   :depends r-gtable: >=0.1.2
   
   :depends r-igraph: >=0.7.1
   
   :depends r-rcpp: >=0.11.1
   
   :depends r-reshape2: >=1.2.0
   
   :depends r-scales: >=0.3.0
   
   :depends r-stringdist: >=0.7.3
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-tcr

   and update with::

      conda update r-tcr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-tcr:<tag>

   (see `r-tcr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tcr| image:: https://img.shields.io/conda/dn/bioconda/r-tcr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-tcr| image:: https://quay.io/repository/biocontainers/r-tcr/status
   :target: https://quay.io/repository/biocontainers/r-tcr
.. _`r-tcr/tags`: https://quay.io/repository/biocontainers/r-tcr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tcr/README.html