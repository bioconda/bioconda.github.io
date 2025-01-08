:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ewcedata'
.. highlight: bash

bioconductor-ewcedata
=====================

.. conda:recipe:: bioconductor-ewcedata
   :replaces_section_title:
   :noindex:

   The ewceData package provides reference data required for ewce

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/ewceData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ewcedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ewcedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ewcedata/meta.yaml>`_

   This package provides reference data required for ewce. Expression Weighted Celltype Enrichment \(EWCE\) is used to determine which cell types are enriched within gene lists. The package provides tools for testing enrichments within simple gene lists \(such as human disease associated genes\) and those resulting from differential expression studies. The package does not depend upon any particular Single Cell Transcriptome dataset and user defined datasets can be loaded in and used in the analyses.


.. conda:package:: bioconductor-ewcedata

   |downloads_bioconductor-ewcedata| |docker_bioconductor-ewcedata|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-ewcedata

   and update with::

      mamba update bioconductor-ewcedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ewcedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ewcedata:<tag>

   (see `bioconductor-ewcedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ewcedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ewcedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ewcedata
   :alt:   (downloads)
.. |docker_bioconductor-ewcedata| image:: https://quay.io/repository/biocontainers/bioconductor-ewcedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ewcedata
.. _`bioconductor-ewcedata/tags`: https://quay.io/repository/biocontainers/bioconductor-ewcedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ewcedata";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ewcedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ewcedata/README.html