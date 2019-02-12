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

   :versions: 2.2.2

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table` >=1.9.0 :conda:package:`r-dplyr` >=0.4.0 :conda:package:`r-ggplot2` >=1.0.0 :conda:package:`r-gridextra` >=0.9.0 :conda:package:`r-gtable` >=0.1.2 :conda:package:`r-igraph` >=0.7.1 :conda:package:`r-rcpp` >=0.11.1 :conda:package:`r-reshape2` >=1.2.0 :conda:package:`r-scales` >=0.3.0 :conda:package:`r-stringdist` >=0.7.3 

   :required~by: |required_by_r-tcr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-tcr

   and update with::

      conda update r-tcr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-tcr


.. |required_by_r-tcr| conda:required_by:: r-tcr
.. |downloads_r-tcr| image:: https://img.shields.io/conda/dn/bioconda/r-tcr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-tcr| image:: https://quay.io/repository/biocontainers/r-tcr/status
   :target: https://quay.io/repository/biocontainers/r-tcr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tcr/README.html

