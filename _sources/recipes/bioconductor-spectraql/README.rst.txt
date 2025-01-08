:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spectraql'
.. highlight: bash

bioconductor-spectraql
======================

.. conda:recipe:: bioconductor-spectraql
   :replaces_section_title:
   :noindex:

   MassQL support for Spectra

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpectraQL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spectraql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectraql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectraql/meta.yaml>`_

   The Mass Spec Query Language \(MassQL\) is a domain\-specific language enabling to express a query and retrieve mass spectrometry \(MS\) data in a more natural and understandable way for MS users. It is inspired by SQL and is by design programming language agnostic. The SpectraQL package adds support for the MassQL query language to R\, in particular to MS data represented by Spectra objects. Users can thus apply MassQL expressions to analyze and retrieve specific data from Spectra objects.


.. conda:package:: bioconductor-spectraql

   |downloads_bioconductor-spectraql| |docker_bioconductor-spectraql|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-mscoreutils: ``>=1.18.0,<1.19.0``
   :depends bioconductor-protgenerics: ``>=1.38.0,<1.39.0``
   :depends bioconductor-spectra: ``>=1.16.0,<1.17.0``
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

      mamba install bioconductor-spectraql

   and update with::

      mamba update bioconductor-spectraql

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spectraql

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spectraql:<tag>

   (see `bioconductor-spectraql/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spectraql| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spectraql.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spectraql
   :alt:   (downloads)
.. |docker_bioconductor-spectraql| image:: https://quay.io/repository/biocontainers/bioconductor-spectraql/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spectraql
.. _`bioconductor-spectraql/tags`: https://quay.io/repository/biocontainers/bioconductor-spectraql?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spectraql";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spectraql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spectraql/README.html