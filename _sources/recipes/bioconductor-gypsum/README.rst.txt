:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gypsum'
.. highlight: bash

bioconductor-gypsum
===================

.. conda:recipe:: bioconductor-gypsum
   :replaces_section_title:
   :noindex:

   Interface to the gypsum REST API

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gypsum.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gypsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gypsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gypsum/meta.yaml>`_

   Client for the gypsum REST API \(https\:\/\/gypsum.artifactdb.com\)\, a cloud\-based file store in the ArtifactDB ecosystem. This package provides functions for uploads\, downloads\, and various adminstrative and management tasks. Check out the documentation at https\:\/\/github.com\/ArtifactDB\/gypsum\-worker for more details.


.. conda:package:: bioconductor-gypsum

   |downloads_bioconductor-gypsum| |docker_bioconductor-gypsum|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-filelock: 
   :depends r-httr2: 
   :depends r-jsonlite: 
   :depends r-rappdirs: 
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

      mamba install bioconductor-gypsum

   and update with::

      mamba update bioconductor-gypsum

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gypsum

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gypsum:<tag>

   (see `bioconductor-gypsum/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gypsum| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gypsum.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gypsum
   :alt:   (downloads)
.. |docker_bioconductor-gypsum| image:: https://quay.io/repository/biocontainers/bioconductor-gypsum/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gypsum
.. _`bioconductor-gypsum/tags`: https://quay.io/repository/biocontainers/bioconductor-gypsum?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gypsum";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gypsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gypsum/README.html