.. title:: Package Recipe 'r-structssi'
.. highlight: bash


r-structssi
===========

.. conda:recipe:: r-structssi
   :replaces_section_title:

   Performs multiple testing corrections that take specific structure of hypotheses into account.

   :homepage: https://CRAN.R-project.org/package=structSSI
   :license: GPL2 / GPL-2
   :recipe: /`r-structssi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-structssi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-structssi/meta.yaml>`_

   


.. conda:package:: r-structssi

   |downloads_r-structssi| |docker_r-structssi|

   :versions: 1.1.1

   :depends: :conda:package:`bioconductor-multtest`  :conda:package:`r-base` 3.4.1* :conda:package:`r-ggplot2`  :conda:package:`r-igraph`  :conda:package:`r-reshape2`  :conda:package:`r-rjson`  

   :required~by: |required_by_r-structssi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-structssi

   and update with::

      conda update r-structssi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-structssi


.. |required_by_r-structssi| conda:required_by:: r-structssi
.. |downloads_r-structssi| image:: https://img.shields.io/conda/dn/bioconda/r-structssi.svg?style=flat
   :alt:   (downloads)
.. |docker_r-structssi| image:: https://quay.io/repository/biocontainers/r-structssi/status
   :target: https://quay.io/repository/biocontainers/r-structssi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-structssi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-structssi/README.html

