.. title:: Package Recipe 'bioconductor-sconify'
.. highlight: bash


bioconductor-sconify
====================

.. conda:recipe:: bioconductor-sconify
   :replaces_section_title:

   This package does k\-nearest neighbor based statistics and visualizations with flow and mass cytometery data. This gives tSNE maps\"fold change\" functionality and provides a data quality metric by assessing manifold overlap between fcs files expected to be the same. Other applications using this package include imputation\, marker redundancy\, and testing the relative information loss of lower dimension embeddings compared to the original manifold.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Sconify.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sconify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sconify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sconify/meta.yaml>`_

   


.. conda:package:: bioconductor-sconify

   |downloads_bioconductor-sconify| |docker_bioconductor-sconify|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-fnn`  :conda:package:`r-ggplot2`  :conda:package:`r-magrittr`  :conda:package:`r-readr`  :conda:package:`r-rtsne`  :conda:package:`r-tibble`  

   :required~by: |required_by_bioconductor-sconify|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sconify

   and update with::

      conda update bioconductor-sconify

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sconify


.. |required_by_bioconductor-sconify| conda:required_by:: bioconductor-sconify
.. |downloads_bioconductor-sconify| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sconify.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sconify| image:: https://quay.io/repository/biocontainers/bioconductor-sconify/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sconify







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sconify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sconify/README.html

