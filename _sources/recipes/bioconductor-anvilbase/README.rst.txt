:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anvilbase'
.. highlight: bash

bioconductor-anvilbase
======================

.. conda:recipe:: bioconductor-anvilbase
   :replaces_section_title:
   :noindex:

   Generic functions for interacting with the AnVIL ecosystem

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AnVILBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-anvilbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilbase/meta.yaml>`_

   Provides generic functions for interacting with the AnVIL ecosystem. Packages that use either GCP or Azure in AnVIL are built on top of AnVILBase. Extension packages will provide methods for interacting with other cloud providers.


.. conda:package:: bioconductor-anvilbase

   |downloads_bioconductor-anvilbase| |docker_bioconductor-anvilbase|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-httr2: 
   :depends r-jsonlite: 
   :depends r-tibble: 
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

      mamba install bioconductor-anvilbase

   and update with::

      mamba update bioconductor-anvilbase

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anvilbase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anvilbase:<tag>

   (see `bioconductor-anvilbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anvilbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anvilbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anvilbase
   :alt:   (downloads)
.. |docker_bioconductor-anvilbase| image:: https://quay.io/repository/biocontainers/bioconductor-anvilbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anvilbase
.. _`bioconductor-anvilbase/tags`: https://quay.io/repository/biocontainers/bioconductor-anvilbase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anvilbase";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anvilbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anvilbase/README.html