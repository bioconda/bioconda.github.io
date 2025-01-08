:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edirquery'
.. highlight: bash

bioconductor-edirquery
======================

.. conda:recipe:: bioconductor-edirquery
   :replaces_section_title:
   :noindex:

   Query the EDIR Database For Specific Gene

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EDIRquery.html
   :license: GPL-3
   :recipe: /`bioconductor-edirquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edirquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edirquery/meta.yaml>`_

   EDIRquery provides a tool to search for genes of interest within the Exome Database of Interspersed Repeats \(EDIR\). A gene name is a required input\, and users can additionally specify repeat sequence lengths\, minimum and maximum distance between sequences\, and whether to allow a 1\-bp mismatch. Outputs include a summary of results by repeat length\, as well as a dataframe of query results. Example data provided includes a subset of the data for the gene GAA \(ENSG00000171298\). To query the full database requires providing a path to the downloaded database files as a parameter.


.. conda:package:: bioconductor-edirquery

   |downloads_bioconductor-edirquery| |docker_bioconductor-edirquery|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-readr: ``>=2.1.2``
   :depends r-tibble: ``>=3.1.6``
   :depends r-tictoc: ``>=1.0.1``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-edirquery

   and update with::

      mamba update bioconductor-edirquery

  To create a new environment, run::

      mamba create --name myenvname bioconductor-edirquery

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.6.0","1.2.0","1.0.0"];
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