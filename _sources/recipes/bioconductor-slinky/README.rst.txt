:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-slinky'
.. highlight: bash

bioconductor-slinky
===================

.. conda:recipe:: bioconductor-slinky
   :replaces_section_title:
   :noindex:

   Putting the fun in LINCS L1000 data analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/slinky.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-slinky <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slinky>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slinky/meta.yaml>`_

   Wrappers to query the L1000 metadata available via the clue.io REST API as well as helpers for dealing with LINCS gctx files\, extracting data sets of interest\, converting to SummarizedExperiment objects\, and some facilities for performing streamlined differential expression analysis of these data sets.


.. conda:package:: bioconductor-slinky

   |downloads_bioconductor-slinky| |docker_bioconductor-slinky|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-rhdf5: ``>=2.38.0,<2.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-curl: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-readr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-slinky

   and update with::

      conda update bioconductor-slinky

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-slinky:<tag>

   (see `bioconductor-slinky/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-slinky| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-slinky.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-slinky
   :alt:   (downloads)
.. |docker_bioconductor-slinky| image:: https://quay.io/repository/biocontainers/bioconductor-slinky/status
   :target: https://quay.io/repository/biocontainers/bioconductor-slinky
.. _`bioconductor-slinky/tags`: https://quay.io/repository/biocontainers/bioconductor-slinky?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-slinky";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-slinky/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-slinky/README.html