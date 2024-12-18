:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbchebi'
.. highlight: bash

bioconductor-biodbchebi
=======================

.. conda:recipe:: bioconductor-biodbchebi
   :replaces_section_title:
   :noindex:

   biodbChebi\, a library for connecting to the ChEBI Database

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/biodbChebi.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbchebi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbchebi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbchebi/meta.yaml>`_

   The biodbChebi library provides access to the ChEBI Database\, using biodb package framework. It allows to retrieve entries by their accession number. Web services can be accessed for searching the database by name\, mass or other fields.


.. conda:package:: bioconductor-biodbchebi

   |downloads_bioconductor-biodbchebi| |docker_bioconductor-biodbchebi|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biodb: ``>=1.14.0,<1.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-r6: 
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

      mamba install bioconductor-biodbchebi

   and update with::

      mamba update bioconductor-biodbchebi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biodbchebi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biodbchebi:<tag>

   (see `bioconductor-biodbchebi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biodbchebi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbchebi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbchebi
   :alt:   (downloads)
.. |docker_bioconductor-biodbchebi| image:: https://quay.io/repository/biocontainers/bioconductor-biodbchebi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbchebi
.. _`bioconductor-biodbchebi/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbchebi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbchebi";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbchebi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbchebi/README.html