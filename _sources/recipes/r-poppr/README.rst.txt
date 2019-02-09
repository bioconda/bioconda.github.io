.. title:: Package Recipe 'r-poppr'
.. highlight: bash


r-poppr
=======

.. conda:recipe:: r-poppr
   :replaces_section_title:

   An R package for genetic analysis of populations with mixed \(clonal\/sexual\) reproduction

   :homepage: https://github.com/grunwaldlab/poppr
   :license: GPL (>= 2)
   :recipe: /`r-poppr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-poppr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-poppr/meta.yaml>`_

   


.. conda:package:: r-poppr

   |downloads_r-poppr| |docker_r-poppr|

   :versions: 2.8.1

   :depends: :conda:package:`r-ade4`  :conda:package:`r-adegenet`  :conda:package:`r-ape`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-boot`  :conda:package:`r-cowplot`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-igraph`  :conda:package:`r-knitr`  :conda:package:`r-magrittr`  :conda:package:`r-pegas`  :conda:package:`r-phangorn`  :conda:package:`r-polysat`  :conda:package:`r-rlang`  :conda:package:`r-rmarkdown`  :conda:package:`r-shiny`  :conda:package:`r-testthat`  :conda:package:`r-vegan`  

   :required~by: |required_by_r-poppr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-poppr

   and update with::

      conda update r-poppr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-poppr


.. |required_by_r-poppr| conda:required_by:: r-poppr
.. |downloads_r-poppr| image:: https://img.shields.io/conda/dn/bioconda/r-poppr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-poppr| image:: https://quay.io/repository/biocontainers/r-poppr/status
   :target: https://quay.io/repository/biocontainers/r-poppr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-poppr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-poppr/README.html

