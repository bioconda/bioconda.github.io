:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anvilgcp'
.. highlight: bash

bioconductor-anvilgcp
=====================

.. conda:recipe:: bioconductor-anvilgcp
   :replaces_section_title:
   :noindex:

   The GCP R Client for the AnVIL

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AnVILGCP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-anvilgcp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilgcp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilgcp/meta.yaml>`_

   The package provides a set of functions to interact with the Google Cloud Platform \(GCP\) services on the AnVIL platform. The package is designed to work with the AnVIL package. User\-level interaction with this package should be minimal.


.. conda:package:: bioconductor-anvilgcp

   |downloads_bioconductor-anvilgcp| |docker_bioconductor-anvilgcp|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-anvilbase: ``>=1.0.0,<1.1.0``
   :depends bioconductor-biocbaseutils: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-anvilgcp

   and update with::

      mamba update bioconductor-anvilgcp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anvilgcp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anvilgcp:<tag>

   (see `bioconductor-anvilgcp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anvilgcp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anvilgcp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anvilgcp
   :alt:   (downloads)
.. |docker_bioconductor-anvilgcp| image:: https://quay.io/repository/biocontainers/bioconductor-anvilgcp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anvilgcp
.. _`bioconductor-anvilgcp/tags`: https://quay.io/repository/biocontainers/bioconductor-anvilgcp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anvilgcp";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anvilgcp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anvilgcp/README.html