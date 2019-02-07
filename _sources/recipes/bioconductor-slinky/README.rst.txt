.. title:: Package Recipe 'bioconductor-slinky'
.. highlight: bash


bioconductor-slinky
===================

.. conda:recipe:: bioconductor-slinky
   :replaces_section_title:

   Wrappers to query the L1000 metadata available via the clue.io REST API as well as helpers for dealing with LINCS gctx files\, extracting data sets of interest\, converting to SummarizedExperiment objects\, and some facilities for performing streamlined differential expression analysis of these data sets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/slinky.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-slinky <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slinky>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slinky/meta.yaml>`_

   


.. conda:package:: bioconductor-slinky

   |downloads_bioconductor-slinky| |docker_bioconductor-slinky|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-curl`  :conda:package:`r-dplyr`  :conda:package:`r-foreach`  :conda:package:`r-httr`  :conda:package:`r-jsonlite`  :conda:package:`r-readr`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-slinky|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-slinky

   and update with::

      conda update bioconductor-slinky

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-slinky


.. |required_by_bioconductor-slinky| conda:required_by:: bioconductor-slinky
.. |downloads_bioconductor-slinky| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-slinky.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-slinky| image:: https://quay.io/repository/biocontainers/bioconductor-slinky/status
   :target: https://quay.io/repository/biocontainers/bioconductor-slinky







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-slinky/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-slinky/README.html

