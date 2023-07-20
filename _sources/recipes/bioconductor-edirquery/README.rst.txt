:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edirquery'
.. highlight: bash

bioconductor-edirquery
======================

.. conda:recipe:: bioconductor-edirquery
   :replaces_section_title:
   :noindex:

   Query the EDIR Database For Specific Gene

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/EDIRquery.html
   :license: GPL-3
   :recipe: /`bioconductor-edirquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edirquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edirquery/meta.yaml>`_

   EDIRquery provides a tool to search for genes of interest within the Exome Database of Interspersed Repeats \(EDIR\). A gene name is a required input\, and users can additionally specify repeat sequence lengths\, minimum and maximum distance between sequences\, and whether to allow a 1\-bp mismatch. Outputs include a summary of results by repeat length\, as well as a dataframe of query results. Example data provided includes a subset of the data for the gene GAA \(ENSG00000171298\). To query the full database requires providing a path to the downloaded database files as a parameter.


.. conda:package:: bioconductor-edirquery

   |downloads_bioconductor-edirquery| |docker_bioconductor-edirquery|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-interactionset: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-readr: ``>=2.1.2``
   :depends r-tibble: ``>=3.1.6``
   :depends r-tictoc: ``>=1.0.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-edirquery

   and update with::

      conda update bioconductor-edirquery

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-edirquery:<tag>

   (see `bioconductor-edirquery/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-edirquery| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edirquery.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-edirquery
   :alt:   (downloads)
.. |docker_bioconductor-edirquery| image:: https://quay.io/repository/biocontainers/bioconductor-edirquery/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edirquery
.. _`bioconductor-edirquery/tags`: https://quay.io/repository/biocontainers/bioconductor-edirquery?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-edirquery";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edirquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edirquery/README.html