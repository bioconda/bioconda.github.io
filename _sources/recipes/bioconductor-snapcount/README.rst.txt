:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snapcount'
.. highlight: bash

bioconductor-snapcount
======================

.. conda:recipe:: bioconductor-snapcount
   :replaces_section_title:
   :noindex:

   R\/Bioconductor Package for interfacing with Snaptron for rapid querying of expression counts

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/snapcount.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-snapcount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snapcount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snapcount/meta.yaml>`_

   snapcount is a client interface to the Snaptron webservices which support querying by gene name or genomic region. Results include raw expression counts derived from alignment of RNA\-seq samples and\/or various summarized measures of expression across one or more regions\/genes per\-sample \(e.g. percent spliced in\).


.. conda:package:: bioconductor-snapcount

   |downloads_bioconductor-snapcount| |docker_bioconductor-snapcount|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-r6: 
   :depends r-rlang: 
   :depends r-stringr: 
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

      mamba install bioconductor-snapcount

   and update with::

      mamba update bioconductor-snapcount

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snapcount

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snapcount:<tag>

   (see `bioconductor-snapcount/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snapcount| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snapcount.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snapcount
   :alt:   (downloads)
.. |docker_bioconductor-snapcount| image:: https://quay.io/repository/biocontainers/bioconductor-snapcount/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snapcount
.. _`bioconductor-snapcount/tags`: https://quay.io/repository/biocontainers/bioconductor-snapcount?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snapcount";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snapcount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snapcount/README.html